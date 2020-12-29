import  React,{Component}  from "react";
import '../../src/style.css'
import { SideBanner } from "../components/sideBanner";
import { HeaderBar } from "../components/headerBar";
import { SignIn } from "../components/signIn";
import { SignUp } from "../components/signUp";
export class SignUpIn extends Component {
    render() {
      return (
        <>
        <div className="signUpIn_main">
        <HeaderBar  />

            <div className="header_form">
            <SideBanner/>
             {/* <SignUp/>   */}
             <SignIn/>
            </div>
        </div>

        </>
      );
    }
  }
