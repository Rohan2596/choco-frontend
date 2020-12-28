import  React,{Component}  from "react";
import '../../src/style.css'
import side_banner from '../assets/side_banner_image.png'
export class SideBanner extends Component {
    render() {
      return (
        <>
        <div className="sideBanner">
        <img src={side_banner} alt="sideBanner_image" className="sidebanner-image" />
        </div>

        </>
      );
    }
  }