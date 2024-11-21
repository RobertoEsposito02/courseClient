import {User} from "../lib/interfaces";
import {z} from "zod";

export class ValidationService {
    validateRegister(user : User) {
        const registerRequest = z.object({
            firstName: z.string().min(2).max(20),
            lastName: z.string().min(2).max(20),
            email: z.string().min(6).email(),
            password: z.string().min(12).max(18).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{12,18}$/)
        }).required();

        const validateRegister = registerRequest.safeParse(user);

        return validateRegister.success;

    }

    validateLogin(user : User) {
        const loginRequest = z.object({
            email: z.string().min(6).email(),
            password: z.string().min(12).max(18)
        }).required();

        const validateLogin = loginRequest.safeParse(user);

        return validateLogin.success;
    }
}

export const validationService = new ValidationService();