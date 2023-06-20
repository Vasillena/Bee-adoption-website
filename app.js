import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";
import { getUserData } from "./src/data/util.js";
import { layoutTemplate } from "./src/views/layoutView/layout.js";
import { beesMatterPage } from "./src/views/beesMatterView/beesMatter.js";
import { homePage } from "./src/views/homeView/home.js";
import { ourHoneyPage } from "./src/views/ourHoneyView/ourHoney.js";
import { adoptBeehivePage } from "./src/views/adoptBeehiveView/adoptBeehive.js";
import { aboutUsPage } from "./src/views/aboutUsView/aboutUs.js";
import { contactPage } from "./src/views/contactView/contact.js";
import { loginRegisterPage } from "./src/views/loginView/login.js";
import { logout } from "./src/data/auth.js";
import { createPage } from "./src/views/adoptionFormView/adoptionForm.js";
import { myBeehivePage } from "./src/views/myBeehiveView/myBeehive.js";
import { manageBeehivePage } from "./src/views/manageBeehiveView/manageBeehive.js";
import { editPage } from "./src/views/editBeehiveView/editBeehive.js";

const root = document.getElementById("site");

page(decorateContext);
page("index.html", "/");
page("/", homePage);
page("/beesMatter", beesMatterPage);
page("/ourHoney", ourHoneyPage);
page("/adoptBeehive", adoptBeehivePage);
page("/aboutUs", aboutUsPage);
page("/contact", contactPage);
page("/login", loginRegisterPage);
page("/logout", logoutAction);
page("/create", createPage);
page("/myBeehive", myBeehivePage);
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
