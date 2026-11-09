import z from "zod";

export const userSchema = z.object({
    id: z.uuid(),
    name: z.string().min(3, { message: "O nome é obrigatório!" }),
    age: z.number().min(1, { message: "A idade é obrigatória!" }),
    email: z.email().min(1, { message: "O email é obrigatório!" })
})

export type UserSchema = z.infer<typeof userSchema>;