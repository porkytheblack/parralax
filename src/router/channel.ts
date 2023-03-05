import { createChannel, getChannel, updateChannel, inviteToChannel } from '@resolvers/channel';
import { app } from "@router/index";


const channelRouter = app.router({
    createChannel,
    getChannel,
    updateChannel,
    inviteToChannel
})

export default channelRouter;