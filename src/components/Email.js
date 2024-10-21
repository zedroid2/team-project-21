import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div class="login" id="login">
            <h1>
                Log into your account
            </h1>
            <div class="login" id="login">
                <form action="login.php" method="GET">
                Email: <input type="email" name="email" id="email" />
                <input type="submit" value="Continue" />
                </form>
            </div>
        </div>
    )
}