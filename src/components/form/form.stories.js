import "./form.css";
import { createRegisterForm } from "./register-form";
import { createVerifyForm } from "./verify-form";
import { createVerifyForm2 } from "./verify-form2";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();
export const verify = () => createVerifyForm();
export const verify2 = () => createVerifyForm2();
