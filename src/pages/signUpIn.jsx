import  React,{Component}  from "react";
import '../../src/style.css'
import { SideBanner } from "../components/sideBanner";
import { HeaderBar } from "../components/headerBar";
import { SignIn } from "../components/signIn";
export class SignUpIn extends Component {
    render() {
      return (
        <>
        <div className="signUpIn_main">
        <HeaderBar  />

            <div className="header_form">
            <SideBanner/>
             <SignIn/>  
            </div>
        </div>

        </>
      );
    }
  }
