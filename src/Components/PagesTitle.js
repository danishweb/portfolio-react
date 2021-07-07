import React from "react";

function PagesTitle(props) {
  return (
    <div className="Title">
      <h1>
        {props.title}
        <span>{props.span}</span>
      </h1>
    </div>
  );
}

export default PagesTitle;
