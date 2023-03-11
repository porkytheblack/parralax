import { z } from "zod"

const tUser = z.object({
    email: z.string().email({
        message: "Invalid email"
    }),
    handle: z.string().min(3, {
        message: "Handle must be at least 3 characters"
    }),
    pic_url: z.string().url({
        message: "Invalid URL"
    }),
    bio: z.string().max(100, {
        message: "Bio must be less than 100 characters"
    }),
    uid: z.string()
})

tUser.partial()

export const create_user_tUser = tUser.required({
    email: true,
    handle: true,
    uid: true
})

export default tUser