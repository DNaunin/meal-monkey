import { createElement } from "../../utils/createElement";

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "verifyform";

  function createPWinputElement() {
    const input = createElement("input", {
      className: "inputcode",
      placeholder: "*",
      type: "password",
      maxLength: 1,
      children: [inputa, inputb, inputc, inputd],
    });

    return input;
  }

  const inputa = createPWinputElement();
  const inputb = createPWinputElement();
  const inputc = createPWinputElement();
  const inputd = createPWinputElement();

  const otpContainer = document.createElement("div");
  otpContainer.append(inputa, inputb, inputc, inputd);

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btnfilled";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const secretPassword = "1111";
    if (
      `${inputa.value}${inputb.value}${inputc.value}${inputd.value}` ===
      secretPassword
    ) {
      alert(
        `Your super secret password - ${inputa.value}${inputb.value}${inputc.value}${inputd.value}- is correct`
      );
    } else {
      alert(`Yout password is incorrect !`);
    }
  });

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const text = document.createElement("p");
  text.innerText =
    "Please check your mobile number 0171*****12 continue to reset your password";

  const subtext = document.createElement("p");
  subtext.innerText = "Didn't receive?";

  const clickhere = document.createElement("a");
  clickhere.innerText = "Click here";
  clickhere.className = "click";
  clickhere.href = "#";

  subtext.append(clickhere);

  form.append(title, text, otpContainer, button, subtext, clickhere);

  return form;
}
