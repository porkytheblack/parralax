import { isEmpty, isNull } from 'lodash';
import { procedure } from "@router/index";
import { create_message_tMessage } from "@validators/message";
import { TRPCError } from '@trpc/server';
import { withAuth } from '@middleware/index';


export const createMessage = procedure.use(withAuth).input(create_message_tMessage).
mutation(async ({ctx: {channel_id, uid, prisma}, input})=>{
    if (isEmpty(uid) || isNull(uid) ) throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to create a message"
    })

    if (isEmpty(channel_id) || isNull(channel_id)) throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You must be in a channel to create a message"
    }) 

    return await prisma.message.create({
        data: {
            channel: {
                connect: {
                    id: channel_id
                },
            },
            content: input.content,
            user: {
                connect: {
                    uid
                }
            },
            
        }
    }).then((message)=>{
        return message
    }).catch((e)=>{
        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong",
            cause: e
        })
    })
})

export const getMessages = procedure.use(withAuth).query(async ( {ctx: { prisma, channel_id, uid }} )=>{
    /**
     * @description use channel_id to get messages from the channel
     */

    if (isEmpty(channel_id) || isNull(channel_id) ) throw new TRPCError({
        code: "BAD_REQUEST",    
        message: "You must be in a channel to get messages"
    })

    if (isEmpty(uid) || isNull(uid)) throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to get messages"
    })

    return await prisma.message.findMany({
        where: {
            channel: {
                id: channel_id,
                channel_member: {
                    some: {
                        user: {
                            uid: uid
                        }
                    }
                }
            },
        },
        include: {
            user: {
                select: {
                    handle: true,
                    id: true,
                    pic_url: true,

                }
            },
            channel: {
                select: {
                    name: true,
                    id: true,
                    bio: true,
                    pic_url: true,
                }
            }
        }
    }).then((messages)=>{
        return messages
    }).catch((e)=>{
        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong",
            cause: e
        })
    })

})


