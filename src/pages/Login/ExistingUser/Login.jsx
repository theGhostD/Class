import React, { useState } from "react";
import "./login.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formReset = () => {
        setEmail("");
        setPassword("");
    };
    const formHandler = (e) => {
        e.preventDefault();
        console.log(email, password);
        formReset();
    };

    return (
        <div className="Form_container">
            <form onSubmit={formHandler}>
            <h2>Login to your  Account</h2>
                <input
                    type="email"
                    required
                    placeholder="email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Login In</button>
            </form>
        </div>
    );
};

export default Login;
