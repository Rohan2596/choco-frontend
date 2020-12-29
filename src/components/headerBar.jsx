import  React,{Component}  from "react";
import '../../src/style.css'
import choco_logo from '../assets/choco-a.png'
export class HeaderBar extends Component {
    render() {
      return (
        <>
        <div className="headerBar">
        <img src={choco_logo} alt="header_logo" className="header-logo" />
        <button className="sign_button">Contact Us</button>
        </div>

        </>
      );
    }
  }