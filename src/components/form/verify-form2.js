export function createVerifyForm2() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btnfilled";
  function register() {
    alert("password resetted");
  }

  button.addEventListener("click", register);

  const input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.placeholder = ("placeholder", "*");
  input1.className = "inputcode";

  const input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.placeholder = ("placeholder", "*");
  input2.className = "inputcode";

  const input3 = document.createElement("input");
  input3.setAttribute("type", "text");
  input3.placeholder = ("placeholder", "*");
  input3.className = "inputcode";

  const input4 = document.createElement("input");
  input4.setAttribute("type", "text");
  input4.placeholder = ("placeholder", "*");
  input4.className = "inputcode";

  const inputContainer = document.createElement("div");
  inputContainer.append(input1, input2, input3, input4);

  form.append(inputContainer, button);

  return form;
}
