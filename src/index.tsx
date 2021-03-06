import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

import AppWrapper from "./AppWrapper";

const rootElement = document.getElementById("root");

render(<AppWrapper />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
