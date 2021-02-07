import React from "react";
import "./MessageBox.css";

export default function MessageBox(props) {
  return (
    <div className={`msg alert-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
}
