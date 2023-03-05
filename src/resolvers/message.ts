import { isEmpty, isNull } from 'lodash';
import { procedure } from "@router/index";
import { create_message_tMessage } from "@validators/message";
import { TRPCError } from '@trpc/server';


export const createMessage = procedure.input(create_message_tMessage).
mutation(({ctx: {channel_id, uid, prisma}, input})=>{
    if (isEmpty(uid) || isNull(uid) ) throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to create a message"
    })

    if (isEmpty(channel_id) || isNull(channel_id)) throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You must be in a channel to create a message"
    })

    return prisma.channelMember.findFirstOrThrow({
        where: {
            channel_id,
            user: {
                uid
            }
        }
    }).then((channelMember)=>{
        return prisma.message.create({
            data: {
                content: input.content,
                channel_id,
                created_by: channelMember.user_id,
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
    }).catch((e)=>{
        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong",
            cause: e
        })
    })
})