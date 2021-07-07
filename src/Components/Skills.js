import React from "react";

function Skills(props) {
    return (
      <div className="skills">
        <div className="container">
          <h5 className="title">{props.heading}</h5>
          <div className="bar">
            <p className="text">{props.Text}</p>
            <div className="progress">
                <div className="widthcontroller" style={{width:props.Text}}>
  
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
export default Skills;


