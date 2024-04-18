import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";
import { getUserData } from "./src/data/util.js";
import { layoutTemplate } from "./src/views/layoutView/layout.js";
import { homePage } from "./src/views/homeView/home.js";
import { loginRegisterPage } from "./src/views/loginView/login.js";
import { logout } from "./src/data/auth.js";
import { createPage } from "./src/views/adoptionFormView/adoptionForm.js";
import { manageBeehivePage } from "./src/views/manageBeehiveView/manageBeehive.js";
import { editPage } from "./src/views/editBeehiveView/editBeehive.js";

const root = document.getElementById("site");

page(decorateContext);
page("index.html", "/");
page("/", homePage);
page("/login", loginRegisterPage);
page("/logout", logoutAction);
page("/create", createPage);
page("/myBeehive/:id", manageBeehivePage);
page("/myBeehive/:id/edit", editPage);

page.start();

function decorateContext(ctx, next) {
  ctx.render = renderView;
  next();
}

function renderView(content) {
  const userData = getUserData();
  render(layoutTemplate(userData, content), root);
}

function logoutAction(ctx) {
  logout();
  ctx.page.redirect("/");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const navigationContainer = document.querySelector(".header");
  const navLinks = document.querySelectorAll(".navbar-link");

  menuButton.addEventListener("click", () => {
    if (navigationContainer.style.top === "-100vh") {
      navigationContainer.style.top = "2em";
    } else {
      navigationContainer.style.top = "-100vh";
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navigationContainer.style.top = "-100vh";
      });
    });
  });
});
