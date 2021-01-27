import "./input.css";
import inputMail from "./input-email.html";
import inputPassword from "./input-pw.html";
import loginbtn from "./login.html";

export default {
  title: "Components/Input",
  parameters: { layout: "centered" },
};

export const inputEMail = () => inputMail;
export const inputYourPassword = () => inputPassword;
export const LoginButton = () => loginbtn;
