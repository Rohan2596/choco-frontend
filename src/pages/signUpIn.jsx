import  React,{Component}  from "react";
import '../../src/style.css'
import { SignIn } from "../components/signIn";
export class SignUpIn extends Component {
    render() {
      return (
        <>
        <div className="signUpIn_main">
          <SignIn/>
        </div>

        </>
      );
    }
  }
