import "./number-picker.css";
import { createPortionPicker } from "./portion-picker";

export default {
  title: "Components/Pickers",
  parameters: { layout: "centered" },
};

export const PortionPicker = () => createPortionPicker();
