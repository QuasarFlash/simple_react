import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const unmountButton = document.getElementById("unmount");
function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById("root").firstChild);
  console.log(document.getElementById("root").firstChild);
  document.getElementById("unmountMessage").style.display = "block";
  // unmountButton.remove();
  unmountButton.textContent = "remount";
  unmountButton.addEventListener("click", remount);
}
function remount(){
  document.getElementById("unmountMessage").style.display = "none";
  unmountButton.textContent = "unmount";
  unmountButton.addEventListener("click", unmount);
}
unmountButton.addEventListener("click", unmount);
document.getElementById("unmountMessage").style.display = "none";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
