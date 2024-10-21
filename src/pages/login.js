import { useLocation, useNavigate } from "react-router-dom";
import React, {useState} from 'react';

export default function Login() {
    // set parameter for email for login
    const { state } = useLocation();
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        console.log("checking");
        console.log(state.email);
        event.preventDefault();

        //CHECK PASSWORD VALIDITY
        const emails = {
            "abhay@make-it-all.co.uk":"#Abhay123",
            "charlie@make-it-all.co.uk":"#Charlie123",
            "christo@make-it-all.co.uk":"#Christo123"
        };
        console.log(emails[state.email]);
        console.log(password);

        if (emails[state.email] === password) {
            // Correct password
            console.log("valid");

        } else {
            document.getElementById("error").innerHTML = "Wrong Password";
        }
    }

    return( 
    <div>
        <form onSubmit={handleSubmit}>
            Email: <input type="email" name="email" id="email" value={state.email} /><br />
            Password: <input type="password" name="password" id="password"
                onChange={(event)=> setPassword(event.target.value)}
            /><br />
            <input type="submit" value="Login" />
        </form>
        <div id="error"></div>
    </div>
    )
}