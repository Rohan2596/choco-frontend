import React, { Component } from "react";
import '../../src/style.css'
export class SignUp extends Component {
  render() {
    return (
      <>
        <div className="signIn_main">
          <span className="tag_line">
            THE EASIEST WAY TO ORDER FROM ARE ALL SUPPLIERS !
            </span>

          <div className="form_group" >
            <div className="input_div">
              <span className="label">FirstName *</span>
              <input placeholder="First Name"  className="input_field" />
            </div>
            <div className="input_div">
              <span className="label">LastName *</span>
              <input placeholder="Last Name"className="input_field" />

            </div>
            <div className="input_div">
              <span className="label">Email Address *</span>
              <input placeholder="Email Address" className="input_field"/>

            </div>
            <div className="input_div">
              <span className="label">Password *</span>
              <input placeholder="Password" className="input_field" />

            </div>
            <div className="input_div">
              <span className="label">Customer Type *</span>
              <input placeholder="Customer Type" className="input_field" />

            </div>
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
