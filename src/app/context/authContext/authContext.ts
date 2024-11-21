import {createContext} from "react";
import {IAuthContext} from "../../../lib/interfaces";


export const AuthContext = createContext<IAuthContext | null>(null);