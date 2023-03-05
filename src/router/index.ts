import { TContext } from './../../index';
import { initTRPC } from '@trpc/server';
export const app = initTRPC.context<TContext>().create()
export const procedure = app.procedure;
export const middleware = app.middleware;
export type ProcedureType = typeof procedure;
export type QueryType = typeof procedure.query;
export type MutationType = typeof procedure.mutation;
export type SubscriptionType = typeof procedure.subscription;

import UserRouter from './user';
import channelRouter from './channel';

const appRouter = app.router({
    ping: procedure.query(()=>{
        return "pong"
    }),
    user: UserRouter,
    channel: channelRouter
})

export type AppRouter = typeof appRouter;
export default appRouter;


