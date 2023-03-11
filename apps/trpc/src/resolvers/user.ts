import { TRPCError } from '@trpc/server';
import prismaClient from '@prismaclient/index';
import tUser, { create_user_tUser } from '@validators/user';
import { procedure } from '@router/index';
import { isEmpty, isNull } from 'lodash';
import { removeFields } from '@utils/index';
import { withAuth } from '@middleware/index';

export const createUser = procedure.input(
    create_user_tUser
).mutation((req)=>{
    const {email, handle, uid} = req.input
    const prisma = req.ctx.prisma
    prisma.user.create({
        data: {
           email,
           handle,
           uid
        }
    }).then((newUser)=>{
        return newUser 
    }).catch((e)=>{
        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong",
            cause: e
        })
    })
})

export const updateUser = procedure.use(withAuth).input(tUser).mutation((req)=>{
    const uid = req.ctx.uid
    const prisma = req.ctx.prisma
    if (isNull(uid) || isEmpty(uid)) return "You must be logged in to update your profile";
    prisma.user.findUnique({
        where: {
            uid
        }
    }).then((user)=>{
        if (isNull(user)) throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
            cause: "Uid not found in database"
        })
        prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                ...req.input
            }
        }).then(()=>{
            return "User updated successfully"
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


export const getUser = procedure.use(withAuth).query(({input, ctx})=>{
    const {uid} = ctx
    const prisma = ctx.prisma
    if (isNull(uid)) throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You must be logged in to view your profile",
        cause: "Uid not found in context"
    })

    prisma.user.findUnique({
        where: {
            uid
        }
    }).then((user)=>{
        return removeFields(user, ["id", "uid", "updatedAt"])
    }).catch((e)=>{
        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong",
            cause: e
        })
    })
})

