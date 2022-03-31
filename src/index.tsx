import React from "react";
import ReactDOM from "react-dom";
import MonorepoApp from "@sep8/monorepo-app";

const HelloWorld = () => {
  return <MonorepoApp name="Mng" label="First NPM packag"></MonorepoApp>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
