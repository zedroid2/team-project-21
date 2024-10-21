import { useNavigate } from "react-router-dom";
import React, {useState} from 'react';

export default function Start() {
    const [email, setEmail] = useState('');

    //set navigation
    const navigate = useNavigate()

    // Prevent default submission of form
    function handleSubmit(event) {
        event.preventDefault();
        // CHECK EMAIL VALIDITY:
        const emails = {
            "abhay@make-it-all.co.uk":"#Abhay123",
            "charlie@make-it-all.co.uk":"#Charlie123",
            "christo@make-it-all.co.uk":"#Christo123"
        };
        if (email in emails) {
            navigate("/login", 
                {state: {
                    email
                }}
            );
        } else {
            console.log("suck my hairy bollocks");
        }
    }
    return (
        <div class="login" id="login">
            <h1>
                Log into your account
            </h1>
            <div class="login" id="login">
                <form onSubmit={handleSubmit}>
                Email: <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                <input type="submit" value="Continue" />
                </form>
            </div>
        </div>
    )
}