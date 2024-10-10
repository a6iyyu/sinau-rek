import { z } from "astro/zod";

export const Login = z.object({
	nisn: z.number().min(1, { message: "NISN pengguna tidak boleh kosong!" }).max(9, { message: "NISN tidak boleh lebih dari 9 karakter!" }),
	nip: z.number().min(1, { message: "NIP pengguna tidak boleh kosong!" }).max(18, { message: "NIP tidak boleh lebih dari 18 karakter!" }),
});