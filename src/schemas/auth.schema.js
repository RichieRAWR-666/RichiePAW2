import zod from 'zod';

const passwordSchema = z.string()
.trim()
.min(8,"password minimal 8 karakter")
.refine(
    (value) => Buffer.byteLength(value, 'utf-8') <= 72,
    {
        error : 'password maksimal 72 byte UTF-8'
    }
)

export const registerSchema = zod.object({
    name: z.strig().trim().min(3, 'minimal 3 karakter'),
    email: z.email(),
    password : z.string().trim().min(8,"password minimal 8 karakter")
})

export const loginSchema = zod.object({
    email: z.email(),
    password: z.string().trim().min(8, 'password minimal 8 karakter')
})
