import React from "react";
import ReactDOM from "react-dom";
import MonorepoApp from "@sep9/app";

const HelloWorld = () => {
  return <MonorepoApp name="Mng" label="First NPM packag"></MonorepoApp>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
