import {User} from "../lib/interfaces";
import {envDev} from "../envirment";

export class AuthService {

    async register(user : User) {
        await fetch(envDev + "register", {
          method: 'POST',
          body: JSON.stringify(user)
        }).then()
    }

    async login(user : User) {
        return await fetch(envDev + "login", {
            method: 'POST',
            body: JSON.stringify({email: user.email, password: user.password})
        })
    }
}

export const authService = new AuthService();