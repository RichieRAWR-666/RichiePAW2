import z from "zod"
export const storeProdiSchema = z.object({
    kode: z.string().trim().min(2, "kode Prodi minimal 2 karakter").max(10, "kode Prodi maksimal 10 karakter"),
    nama_prodi: z.string().trim().min(3, "nama Prodi minimal 3 karakter"),
    fakultas: z.string().trim().min(24, "fakultas ID minimal 24 karakter")
})

export const updateProdiSchema = z.object({
    kode: z.string().trim().min(2, "kode Prodi minimal 2 karakter").max(10, "kode Prodi maksimal 10 karakter"),
    nama_prodi: z.string().trim().min(3, "nama Prodi minimal 3 karakter"),
    fakultas: z.string().trim().min(24, "fakultas ID minimal 24 karakter")
})