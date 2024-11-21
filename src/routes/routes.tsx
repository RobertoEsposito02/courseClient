import {Layout} from "../app/component/layout/layout";
import {Register} from "../app/pages/register/register";
import {Home} from "../app/pages/home/home";
import {Login} from "../app/pages/login/login";
import {UserPage} from "@/app/pages/user/userPage";

export const routes= [
    {
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/users',
                children: [
                    {
                        path: '',
                        element: <UserPage></UserPage>
                    }
                ]
            }
        ]
    }
]