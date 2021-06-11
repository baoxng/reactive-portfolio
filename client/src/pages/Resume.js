import React, {Component} from "react";
import PDF from "../components/Image/BaoResume.pdf";

class Resume extends Component{
    render(){
        return(
            <div className="App">
                <h3><a href= {PDF} target= "_blank">Resume</a></h3>
            </div>
        )
    }
}

export default Resume;