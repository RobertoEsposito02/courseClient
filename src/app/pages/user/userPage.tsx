import {User} from "@/lib/interfaces";
import {userService} from "@/service/userService";
import {useEffect, useState} from "react";
import {UserComponent} from "@/app/component/userComponent/userComponent";

export function UserPage(){

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        userService.getAll()
            .then(response => response.json() as User[])
            .then(response => setUsers(response));
    }, [])

    return (
        <>
            {users?.map(user => {
                return (
                    <>
                        <div key={user.id}>
                            <UserComponent id={user.id} firstName={user.firstName} lastName={user.lastName} email={user.email}/>
                        </div>
                    </>
                )
            })}
        </>
    )
}