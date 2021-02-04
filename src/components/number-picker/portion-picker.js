import { createElement } from "../../utils/createElement";

export function createPortionPicker() {
  const portionSize = createElement("input", {
    className: "inputcode",
    value: "1",
    min: 0,
  });

  const btnMinus = createElement("button", {
    className: "btnfilled",
    innerText: "-",
    onclick: function () {
      if (portionSize.value >= 1) {
        portionSize.value = Number(portionSize.value) - 1;
      }
    },
  });

  const btnPlus = createElement("button", {
    className: "btnfilled",
    innerText: "+",
    onclick: function () {
      if (portionSize.value >= 1) {
        portionSize.value = Number(portionSize.value) + 1;
      }
    },
  });

  return createElement("div", {
    className: "portionPicker",
    children: [
      createElement("p", { innerText: "Number of Portions" }),

      btnMinus,
      portionSize,
      btnPlus,
    ],
  });
}
