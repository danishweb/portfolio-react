import React from "react";

function ContactItems(props) {
  return (
    <div className="ContactItems">
      <div className="contact">
        <div className="icon">{props.icon}</div>
        <div className="right-items">
          <h6>{props.title}</h6>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactItems;
