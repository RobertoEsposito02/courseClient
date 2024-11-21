import {validationService} from "../../../service/validationService";
import {useState} from "react";
import {User} from "../../../lib/interfaces";
import * as React from "react";
import {authService} from "../../../service/authService";

export function Register() {

    const [user, setUser] = useState<User>({id:null,firstName:'',lastName:'',email:'',password:'',role:''});

    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const validate = validationService.validateRegister(user);

        if(validate) {
            authService.register(user);
        }
    }

    function handleOnChange(e : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setUser({...user, [name] : value});
    }

    function handleClear() {
        const u : User = {id:null,firstName:'',lastName:'',email:'',password:'',role:''};
        setUser(u);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"firstName"}>First name</label>
                    <input type={"text"} name={"firstName"} id={"firstName"} value={user.firstName} onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor={"lastName"}>Last name</label>
                    <input type={"text"} name={"lastName"} id={"lastName"} value={user.lastName} onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor={"email"}>Email</label>
                    <input type={"text"} name={"email"} id={"email"} value={user.email} onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} name={"password"} id={"password"} value={user.password} onChange={handleOnChange}/>
                </div>
                <div>
                    <button>Confirm</button>
                    <button type={"button"} onClick={handleClear}>Clear</button>
                </div>
            </form>
        </>
    )
}