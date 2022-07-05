import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

export default function Authentication() {
    const [loggedIn, setLoggedIn] = useState(false);

    const content = loggedIn ? <Logout /> : <Login />;
    return (
        <div>

            {content}
        </div>
    )
}