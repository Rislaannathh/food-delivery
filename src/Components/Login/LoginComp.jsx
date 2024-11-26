import React, { useState } from 'react'
import './LoginComp.css'
import { MdClose } from "react-icons/md";

const LoginComp = ({setShowLogin}) => {

    const[currState,setCurrState] = useState("SignUp")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <MdClose className='icon' onClick={()=>setShowLogin(false)}/>                 
            </div>

            <div className="input-popup">
                {currState==="Login"?<></>: <input type="text" placeholder='Your name' required /> }
                <input type="email" placeholder='Your email'required />
                <input type="password" placeholder='Password' required />
            </div>

            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?
            <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}> Click here</span></p>
            :
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            
        </form>
    </div>
  )
}

export default LoginComp