import { useEffect, useState } from "react";
import Post from './Post';

export default function Register() {
    const [registeredUser, setRegisteredUser] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/register");
            const info = await response.json();
            setRegisteredUser(info);
            return <h1>Hello {registeredUser}</h1>
        })();
    }, registeredUser);

    return (
        <div>
            <form onSubmit={e => (e.preventDefault)} >
                User: <input name="name" onChange={e=>setRegisteredUser(e)} />
                <button >Log In</button>
            </form>

        </div>
    )
}