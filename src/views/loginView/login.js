import { html } from "../../../node_modules/lit-html/lit-html.js";
import { login, register } from "../../data/auth.js";

const loginRegisterTemplate = (onSubmit) => html`
  <div class="forms">
    <input type="checkbox" id="chk" aria-hidden="true" />

    <div class="signup">
      <form id="signup" @submit=${onSubmit}>
        <input type="hidden" name="formType" value="register" />
        <label for="chk" aria-hidden="true">Register</label>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="repass" placeholder="Repeat Password" />
        <button class="button sign-up-button">Register</button>
      </form>
    </div>

    <div class="login">
      <form id="login" @submit=${onSubmit}>
        <input type="hidden" name="formType" value="login" />
        <label for="chk" aria-hidden="true">Login</label>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button class="button login-button">Login</button>
      </form>
    </div>
  </div>
`;

export function loginRegisterPage(ctx) {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formType = form.formType.value;

    if (formType === "login") {
      const email = form.email.value;
      const password = form.password.value;

      if (email === "" || password === "") {
        return alert("All fields are required");
      }

      try {
        await login(email, password);
        form.reset();
        ctx.page.redirect("/");
      } catch (error) {
        alert(error.message);
      }
    } else if (formType === "register") {
      const email = form.email.value;
      const password = form.password.value;
      const repass = form.repass.value;

      if (email === "" || password === "" || repass === "") {
        return alert("All fields are required");
      }
      if (password !== repass) {
        return alert("Passwords don't match");
      }

      try {
        await register(email, password);
        form.reset();
        ctx.page.redirect("/");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  ctx.render(loginRegisterTemplate(onSubmit));
}
