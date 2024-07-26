import React, { useState } from 'react'
import './LoginSignUp.css'
function LoginSignUp() {
    const [action,setAction] = useState("Login");
    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                </div>
                <div className="inputs">
                    {action==="Login"?<div></div>: <div className="input">
                            <input type="text" placeholder='UserName'/>
                        </div>}
                    
                        <div className="input">
                            <input type="text" placeholder='Email'/>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Password'/>
                        </div>
                    </div>
                    {action==="Sign Up"?<div></div>: <div className="forgot-password">
                        <div className="password">
                            <p>Forgot Password <span>Click Here!</span></p>
                        </div>
                    </div>}
                   
                    <div className="button">
                        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                        <div className={action==="Sing Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                    </div>
            </div>
        </>
    )
}
export default LoginSignUp