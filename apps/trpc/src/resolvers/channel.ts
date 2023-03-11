import { isEmpty, isNull } from 'lodash';
import { create_channel_tChannel, invite_user_to_channel, update_channel_tChannel } from '@validators/channel';
import { procedure } from 'router';
import { TRPCError } from '@trpc/server';
import { withAuth } from '@middleware/index';


export const createChannel = procedure.use(withAuth).input(create_channel_tChannel)
.mutation(({ctx: {prisma, uid}, input})=>{
    if (isEmpty(uid) || isNull(uid))  throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'You must be logged in to create a channel'
    })
    return prisma.user.findUniqueOrThrow({
        where: {
            uid
        }
    }).then((user)=>{
        return prisma.channel.create({
            data: {
                name: input.name,
                created_by: user.id,
            }
        }).then((channel)=>{
            return prisma.channelMember.create({
                data: {
                    channel_id: channel.id,
                    user_id: user.id,
                    role: "OWNER"
                }
            }).then(()=>{
                return channel
            }).catch((e)=>{
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong',
                    cause: e
                })
            })
        }).catch((e)=>{
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Something went wrong',
                cause: e
            })
        })
    }).catch((e)=>{
        throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Something went wrong',
            cause: e
        })
    })
})


export const updateChannel = procedure.use(withAuth).input(update_channel_tChannel)
.mutation(({ctx: {prisma, channel_id, uid}, input})=>{
    if (isEmpty(uid) || isNull(uid)) throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to update a channel"
    })

    if (isEmpty(channel_id) || isNull(channel_id)) throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You must provide a channel id"
    })

    return prisma.channel.findFirstOrThrow({
        where: {
            id: channel_id,
            channel_member: {
                some: {
                    user: {
                        uid
                    },
                    OR: [
                        {
                            role: "OWNER"
                        },
                        {
                            role: "ADMIN"
                        }
                    ]
                }
            }
        }
    }).then((channel)=>{
        return prisma.channel.update({
            where: {
                id: channel.id
            },
            data: {
                name: input.name || channel.name,
                bio: input.bio || channel.bio,
                pic_url: input.pic_url || channel.pic_url,
                visibility: input.visibility || channel.visibility,
                status: input.status || channel.status
            }
        })
    }).catch((e)=>{
        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong",
            cause: e
        })
    })
})

export const getChannel = procedure.use(withAuth).query(({ctx: {prisma, channel_id, uid}})=>{
    if (isEmpty(uid) || isNull(uid)) throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to get a channel"
    })

    if (isEmpty(channel_id) || isNull(channel_id)) throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You must provide a channel id"
    })

    return prisma.channel.findFirstOrThrow({
        where: {
            id: channel_id,
            AND: [
                {
                    channel_member: {
                        some: {
                            user_id: uid,
                            OR: [
                                {
                                    role: "OWNER"
                                },
                                {
                                    role: "ADMIN"
                                }
                            ]
                        }
                    }
                }
            ]
        },
        include: {
            channel_member: {
                include: {
                    user: true
                }
            },
            message: true
        }
    }).then((channel)=>{
        return channel
    }).catch((e)=>{
        throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Something went wrong',
            cause: e
        })
    })
})

export const inviteToChannel = procedure.use(withAuth).input(invite_user_to_channel).mutation(({ctx: {prisma, uid}, input })=>{
    if (isEmpty(uid) || isNull(uid)) throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to invite a user to a channel"
    })
    return prisma.channelMember.findFirstOrThrow({
        where: {
            channel_id: input.channel_id,
            user: {
                uid
            },
            role: "OWNER"
        }
    }).then((channel_member)=>{
        return prisma.channelMember.create({
            data: {
                channel_id: input.channel_id,
                user_id: input.user_id,
                role: "MEMBER"
            }
        }).then((new_channel_member)=>{
            /**
             * @todo send notification to the user's email
             */
            return "invited to channel successfully"
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