import React from "react";

export default function Authentication() {
    return (
        <div>
            <form>
                <input name="username" />
                <input name="password" type="password" />
                <button>log in</button>
                <button>register</button>
            </form>
        </div>
    )
}