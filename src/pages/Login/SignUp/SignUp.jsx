import React, { useState } from 'react'

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formReset = () => {
        setEmail("");
        setPassword("");
        setPassword("")
        setConfirmPassword('')
    };
     
    const formState = (e)=>e.target.value
    
    const formHandler = (e) => {
        e.preventDefault();
        console.log(email, password);
        formReset();
    };
    return (
        <div className='Form_container'>
            
            <form onSubmit={formHandler}>
                <h2>create new Account</h2>
            <input
                    type="text"
                    placeholder="enter your name ..."
                    value={name}
                    onChange={(e) => setName(formState(e))}
                />
                <input
                    type="email"
                    required
                    placeholder="email..."
                    value={email}
                    onChange={(e) => setEmail(formState(e))}
                />
                <input
                    type="password"
                    placeholder="enter password..."
                    value={password}
                    onChange={(e) => setPassword(formState(e))}
                />
                
                <input
                    type="password"
                    placeholder="confirm  password..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(formState(e))}
                />
            

                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
