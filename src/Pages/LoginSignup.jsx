import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div class loginsignup>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Your email'/>
          <input type="password" placeholder='Create Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing I agree to accept the privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup