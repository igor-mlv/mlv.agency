import { z } from 'zod'

export const formSchema = z.object({
    fullName:
        z.string()
            .min(2, { message: 'Name must be at least 2 characters long' })
            .max(30, { message: 'Name must be at most 30 characters long' }),
    email:
        z.string()
            .email('Invalid email address'),
    phoneNumber:
        z.string()
            .min(10, { message: 'Phone number must be at least 10 numbers long' })
            .max(14, { message: 'Phone number must be at most 14 numbers long' })
            .regex(/^\+?\d+$/, { message: 'Phone number must contain only numbers' }),
    industry:
        z.string()
            .max(50, { message: 'Industry must be at most 50 characters long' }),
    description:
        z.string()
            .max(500, { message: 'Description must be at most 500 characters long' }),
})