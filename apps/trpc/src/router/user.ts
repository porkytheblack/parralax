import { createUser, updateUser, getUser } from '@resolvers/user';
import { app } from "@router/index";


const UserRouter = app.router({
    createUser,
    updateUser,
    getUser
})

export default UserRouter;