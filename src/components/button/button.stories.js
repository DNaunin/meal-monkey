import "./button.css";
import buttonFilled from "./button-filled.html";
import buttonBorder from "./button-bord.html";
import buttonFacebook from "./button-fb.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const withFilling = () => buttonFilled;
export const withBorder = () => buttonBorder;
export const withFBLogin = () => buttonFacebook;
