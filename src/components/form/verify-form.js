export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "verifyform";

  function createPWinput() {
    const pwinput = document.createElement("input");
    pwinput.setAttribute("type", "text");
    pwinput.placeholder = ("placeholder", "*");
    pwinput.className = "inputcode";

    return pwinput;
  }

  const inputa = createPWinput();
  const inputb = createPWinput();
  const inputc = createPWinput();
  const inputd = createPWinput();

  const otpContainer = document.createElement("div");
  otpContainer.append(inputa, inputb, inputc, inputd);

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btnfilled";
  function register() {
    alert("password resetted");
  }

  button.addEventListener("click", register);

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
