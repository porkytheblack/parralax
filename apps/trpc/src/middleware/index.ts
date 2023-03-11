import { isEmpty } from 'lodash';
import { middleware } from "@router/index";
import { TRPCError } from '@trpc/server';


/**
 * @name withAuth - Middleware to check if user is authenticated
 * @param {middleware} next - Next middleware
 */

export const withAuth = middleware(async ({next, input, ctx })=>{


    if(isEmpty(ctx.uid)) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You must be logged in to perform this action"
        })
    }
    
    return next()
})