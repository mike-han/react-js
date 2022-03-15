import React from "react";
import ReactDOM from "react-dom";
import ReactEditor from "@mike-han/react-editor-test";

const HelloWorld = () => {
  return <ReactEditor name="First NPM package"></ReactEditor>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
