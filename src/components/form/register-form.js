/* export function createRegisterForm() {
  return `
        <form class="form">
          <h2>Reset Password</h2>
          <p>Please enter your email to receive a link to create a new password via email</p>
          <input placeholder="email" />
          <input type="submit" />
        </form>
      `;


} */

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "Register";
  button.className = "btnfilled";
  function register() {
    alert("I don't know either!");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "I am confused";

  const text = document.createElement("p");
  text.innerText =
    "Please enter your email to receive a link to create a new password via email";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.placeholder = ("placeholder", "email");
  input.className = "inputmail";

  form.append(title, text, input, button);

  return form;
}
