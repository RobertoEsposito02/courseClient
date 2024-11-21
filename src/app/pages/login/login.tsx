import * as React from "react";
import {useState} from "react";
import {User} from "../../../lib/interfaces";
import {validationService} from "../../../service/validationService";
import {authService} from "../../../service/authService";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export function Login() {

    const [user, setUser] = useState<User>({id:null,firstName:'',lastName:'',email:'',password:'',role:''});
    const navigateTo = useNavigate();

    async function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const validate = validationService.validateLogin(user);

        if(validate) {
            const res = await authService.login(user);
            if (res.ok) {
                const json = await res.json() as {message : string, token : string};
                localStorage.setItem('token', json.token);
                navigateTo('/');
            }
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
           <div className={'shadow'} style={{width: '420px', height: '300px', padding: '25px', paddingTop: '10px', margin: 'auto', textAlign: 'center'}}>
               <h3 style={{fontSize: '40px', paddingBottom: '20px'}}>Login</h3>
               <div style={{width: '370px'}}>
                   <form onSubmit={handleSubmit}>
                       <div className="grid w-full max-w-sm items-center gap-1.5">
                           <Label htmlFor={"email"}>Email</Label>
                           <Input type={"text"} name={"email"} id={"email"} value={user.email} onChange={handleOnChange}/>
                       </div>
                       <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                           <Label htmlFor={"password"}>Password</Label>
                           <Input type={"password"} name={"password"} id={"password"} value={user.password} onChange={handleOnChange}/>
                       </div>
                       <div className={'mt-6 flex justify-between'}>
                           <Button variant="secondary">Confirm</Button>
                           <Button type={"button"} onClick={handleClear} variant="destructive">Clear</Button>
                       </div>
                   </form>
               </div>
           </div>
        </>
    )
}