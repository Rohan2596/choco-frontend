import React, { Component } from "react";
import '../../src/style.css'
export class SignIn extends Component {
  render() {
    return (
      <>
        <div className="signIn_main">
          <span className="tag_line">
            THE EASIEST WAY TO ORDER FROM ARE ALL SUPPLIERS !
            </span>

          <div className="form_group" >
           
            <div className="input_div">
              <span className="label">Email Address *</span>
              <input placeholder="Email Address" className="input_field"/>

            </div>
            <div className="input_div">
              <span className="label">Password *</span>
              <input placeholder="Password" className="input_field" />

            </div>
           <span className="forgot_password">Forgot Password?</span>
           <div>
            <button className="signUP_button">Register</button>
            <button className="signUP_button">Login</button>
            
            </div>
          </div>
        </div>

      </>
    );
  }
}
