import { z } from "zod";


export const tMessage  = z.object({
    content: z.string().min(1, {
        message: "Message must be at least 1 character"
    }),
    created_by: z.string(),
    channel_id: z.string(),
    parent_thread_id: z.string(),
    status: z.enum(["ACTIVE", "INACTIVE"]),
}).partial()

export const  create_message_tMessage = tMessage.required({
    content: true,
    created_by: true,   
    channel_id: true,
})

export const  update_message_tMessage = tMessage.required({
    created_by: true,
    channel_id: true,
})