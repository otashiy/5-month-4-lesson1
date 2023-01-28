import { useState } from "react";
import "./Login.css";

const Login = () => {

const [open, setOpen] = useState(false);

const [emailValue, setEmailValue] = useState("");

const [passwordValue, setPasswordValue] = useState("");


const emailChange = (evt) => {
    setEmailValue(evt.target.value);
};
const passwordChange = (evt) => {
    setPasswordValue(evt.target.value);
};

const [register, setRegister] = useState(false);

const handleBtnOpened = () => {
    setOpen(!open)
}

const handleBtnOpenedReg = () => {
    setRegister(!register)
};


    return (
        <div>
            <button className="btn" onClick={handleBtnOpened}>Login</button>
            <div className={open ? "login-wrapper login-wrapper-opened" : "login-wrapper"}>
                <h2>Login!</h2>
                <form className="login-form">
                    <label htmlFor="email"></label>
                    <input className="login-inp" value={emailValue} onChange={emailChange}  type="email" id="email" placeholder="Type your email..." />
                    <label htmlFor="password"></label>
                    <input className="login-inp" value={passwordValue} onChange={passwordChange} type="password" id="password" placeholder="Type your password..." />
                    <button  className="login-btn">Send</button>
                </form>
            </div>
            <button className="btn" onClick={handleBtnOpenedReg}>Register</button>
            <div className={register ? "register-wrapper register-wrapper--opened" : "register-wrapper"}>
                <h2>Register!</h2>
                <form className="register-form">
                    <label htmlFor="name"></label>
                    <input className="login-inp" type="text" id="name" placeholder="Type your name..." />
                    <label htmlFor="lastname"></label>
                    <input className="login-inp" type="text" id="lastname" placeholder="Type your lastname..." />
                    <label htmlFor="email"></label>
                    <input className="login-inp" type="email" id="email" placeholder="Type your email..." />
                    <label htmlFor="password"></label>
                    <input className="login-inp" type="password" id="password" placeholder="Type your password..." />
                    <button className="login-btn">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Login;