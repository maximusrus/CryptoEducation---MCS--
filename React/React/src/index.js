import React from "react";
import {render} from "react-dom";
import clsx from "clsx";

const element = React.createElement("h1", {
  className: "zag"
}, "Yo!");
const root = document.querySelector("#root");

render(element, root);