import { initTRPC } from '@trpc/server';
export const app = initTRPC.create()
export const procedure = app.procedure;
export const middleware = app.middleware;
export type ProcedureType = typeof procedure;
export type QueryType = typeof procedure.query;
export type MutationType = typeof procedure.mutation;
export type SubscriptionType = typeof procedure.subscription;

import UserRouter from './user';

const appRouter = app.router({
    ping: procedure.query(()=>{
        return "pong"
    }),
    user: UserRouter,
})

export type AppRouter = typeof appRouter;
export default appRouter;


