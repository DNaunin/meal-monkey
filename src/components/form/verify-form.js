import { createElement } from "../../utils/createElement";

function createInputElement() {
  return createElement("input", {
    className: "inputcode",
    placeholder: "*",
    type: "number",
    // maxLength; 1,
    min: 0,
    max: 9,
  });
}

export function createVerifyForm() {
  const inputElement1 = createInputElement();
  const inputElement2 = createInputElement();
  const inputElement3 = createInputElement();
  const inputElement4 = createInputElement();

  const messageElement = createElement("p", {
    className: "message",
  });

  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", { innerText: "We have sent an OTP to your Mobile" }),
      createElement("p", {
        innerText: "Please check your mobile number to reset your password",
      }),
      messageElement,
      createElement("div", {
        children: [inputElement1, inputElement2, inputElement3, inputElement4],
      }),
      createElement("input", {
        type: "submit",
        value: "Next",
        className: "btnfilled",
      }),
      createElement("p", {
        innerText: "Didnt Receive?",

        children: [
          createElement("a", {
            innerText: "Click here",
            className: "click",
            href: "#",
          }),
        ],
      }),
    ],

    onsubmit: function (event) {
      event.preventDefault();
      const password =
        inputElement1.value +
        inputElement2.value +
        inputElement3.value +
        inputElement4.value;

      if (password === "3217") {
        messageElement.innerText = "Correct Password";
      } else {
        messageElement.innerText = "Wrong Password!";
      }
    },
  });
}
