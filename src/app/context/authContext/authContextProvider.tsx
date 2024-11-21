import * as React from "react";
import {useState} from "react";
import {User} from "../../../lib/interfaces";
import {AuthContext} from "./authContext";


export function AuthContextProvider({children} : {children : React.ReactNode}) {

    const [user, setUser] = useState<User>({id:null,firstName:'',lastName:'',email:'',password:'',role:''});

    function handleSetUser(data :User) {
        setUser(data)
    }

    return (
        <>
            <AuthContext.Provider value={{user, handleSetUser}}>
                <div>
                    {children}
                </div>
            </AuthContext.Provider>
        </>
    )

}