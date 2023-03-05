import { createUser } from '@resolvers/user';
import { app } from "@router/index";


const UserRouter = app.router({
    createUser
})

export default UserRouter;