import {envDev} from "@/envirment";

export class UserService{
    async getAll(){
        return await fetch(envDev + 'admin/users', {
            method: 'GET',
            headers: {
                'Authorization' : localStorage.getItem('token')
            }
        })
    }
}

export const userService = new UserService();