import { CreateExpressContextOptions } from './node_modules/@trpc/server/src/adapters/express';
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import audit from "express-requests-logger"
import * as trpcExpress from "@trpc/server/adapters/express"
import appRouter from "@router/index"
import prismaClient from '@prismaclient/index';

const createContext = async (opts: CreateExpressContextOptions) => {
    const uid = opts.req.headers.authorization
    return {
        uid: uid || null,
        prisma: prismaClient,
        channel_id: null || ""
    }
}

export type TContext = typeof createContext

dotenv.config()
const port = process.env.ENV === "production" ? 8080 : 3000

const app = express()
app.use(cors())
app.use(audit())

app.get("/", (_, res)=> {
    res.send("API is at /v1/")
})

app.get("v1/", trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
}))

app.listen(()=>{
    console.log("📒 Active on port :: "+ port)
})