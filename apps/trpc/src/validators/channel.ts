import { z } from "zod";


const tChannel = z.object({
    name: z.string().min(3, {
        message: "Channel name must be at least 3 characters"
    }),
    visibility: z.enum(["PUBLIC", "PRIVATE"]),
    type: z.enum(["DIRECT", "GROUP", "CHANNEL"]),
    created_by: z.string(),
    pic_url: z.string().url({
        message: "Invalid URL"
    }),
    bio: z.string().max(100, {
        message: "Bio must be less than 100 characters"
    }),
    status: z.enum(["ACTIVE", "INACTIVE"]),
})

export const create_channel_tChannel = tChannel.partial().required({
    name: true,
})

export const update_channel_tChannel = tChannel.partial()


export const invite_user_to_channel = z.object({
    channel_id: z.string(),
    user_id: z.string(),
    role: z.enum(["OWNER", "ADMIN", "MEMBER"])
}).partial().required({
    channel_id: true,
    user_id: true,
})

export default tChannel;