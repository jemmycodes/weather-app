import React, { Fragment } from "react";
import ReactDOM from "react-dom";

function Loading() {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="glass-section flex items-center justify-center fixed top-0 left-0 z-20 w-full min-h-screen">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
}

export default Loading;
