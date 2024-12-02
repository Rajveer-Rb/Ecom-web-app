import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="login">

        <h1>Sign Up</h1>
        <div className="inputs">
          <input type="text" placeholder='enter your name' />
          <input type="email" placeholder='enter your email' />
          <input type="password" placeholder='password' />
        </div>

        <button className='continue'>Continue</button>
        <p className='para'>Already have an account? <span>Login</span></p>
        <div className="confirmation">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I accept to agree on terms & conditions of use & privacy policy.</p>
        </div>
      </div>
    </div>

    // <form className='loginSignup'>

    //   <div className="inputs">

    //     <div data-mdb-input-init className="form-outline">
    //       <input type="email" id="form2Example1" className="form-control" placeholder='Email address' />
    //     </div>

    //     <div data-mdb-input-init className="form-outline mb-4">
    //       <input type="password" id="form2Example2" className="form-control" placeholder='Password' />
    //     </div>

    //   </div>

    //   <div className="forgotPassword">

    //       <div className="form-check">
    //         <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
    //         <label className="form-check-label" for="form2Example31"> Remember me </label>
    //       </div>
    //       <div className='forgot'>
    //         <a href="#!">Forgot password?</a>
    //       </div>
  
    //   </div>

    //   <button type="button" data-mdb-button-init data-mdb-ripple-init className="SignIn btn-primary btn-block">SIGN IN</button>

    //   <div className="text-center">
    //     <p>Not a member? <a href="#!">Register</a></p>
    //     <p>or sign up with:</p>

    //     <div className="media">

    //     <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
    //       <i className="fab fa-facebook-f"></i>
    //     </button>

    //     <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
    //       <i className="fab fa-google"></i>
    //     </button>

    //     <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
    //       <i className="fab fa-twitter"></i>
    //     </button>

    //     <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
    //       <i className="fab fa-github"></i>
    //     </button>
    //     </div>
        
    //   </div>
    // </form>
  )
}

export default LoginSignup
