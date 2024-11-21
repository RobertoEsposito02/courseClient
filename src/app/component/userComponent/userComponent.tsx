import {User} from "@/lib/interfaces";

export function UserComponent({id, firstName, lastName, email} : string) {
    return (
        <>
            <div>
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
                <h1>{email}</h1>
            </div>
        </>
    )
}