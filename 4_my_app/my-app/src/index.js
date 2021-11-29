import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*
https://www.youtube.com/watch?v=RGKi6LSPDLU
https://reactjs.org/docs/create-a-new-react-app.html
npx create-react-app my-app
npm start


*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
