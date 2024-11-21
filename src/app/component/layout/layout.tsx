import {useOutlet} from "react-router-dom";
import {Header} from "../header/header";

export function Layout() {
    const outlet = useOutlet();

    return (
        <>
            <Header></Header>
            <div>
                {outlet}
            </div>
        </>
    )
}