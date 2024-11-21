import {NavLink, useNavigate} from "react-router-dom";

export function Header() {

    const token : string = localStorage.getItem('token');
    const navigateTo = useNavigate();

    return (
        <>
            <div className={'items-center'} style={{
                backgroundColor: 'black',
                width: '100%',
                height: '80px',
                fontSize: '40px',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px'
            }}>
                <h1>Course Manager</h1>
                <ul style={{display: 'flex'}}>
                    <li style={{fontSize: '20px', paddingRight: '20px'}}><NavLink to={''}>Home</NavLink></li>
                    <li style={{fontSize: '20px', paddingRight: '20px'}}><NavLink to={'/users/'}>Users</NavLink></li>
                    {
                        !token ?
                            <li style={{fontSize: '20px', cursor: "pointer"}} onClick={() => navigateTo('/login')}>Login</li>
                            :
                            <li style={{fontSize: '20px', cursor: "pointer"}} >Logout</li>
                    }
                </ul>
            </div>
        </>
    )
}