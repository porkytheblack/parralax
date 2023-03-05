import prismaClient from '@prismaclient/index';
import tUser, { create_user_tUser } from '@validators/user';
import { procedure } from '@router/index';

export const createUser = procedure.input(
    create_user_tUser
).mutation((req)=>{
    const {email, handle, uid} = req.input
    prismaClient.user.create({
        data: {
           email,
           handle,
           uid
        }
    }).then((newUser)=>{
        return newUser 
    }).catch((e)=>{
        return e
    })
})



