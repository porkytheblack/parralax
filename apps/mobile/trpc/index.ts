import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "parralax-trpc/src/router/index";


export const trpc = createTRPCReact<AppRouter>()