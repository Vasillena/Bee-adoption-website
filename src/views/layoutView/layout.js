import { html } from "../../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html` <header>
    <div class="topbar">
      <button class="menu-button">
        <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
      </button>
      <a href="/" class="home-link">Happy Bees & Honey</a>
      ${userData
        ? html`<p class="hello-user">Hello ${userData.email}</p>
            <a href="/logout" class="login-logout-link">Logout</a>`
        : html`<a href="/login" class="login-logout-link">Login</a>`}
    </div>

    <div class="header">
      <ul class="navbar-list">
        <li class="navbar-item">
          <a href="/beesMatter" class="navbar-link">Bees matter</a>
        </li>
        <li class="navbar-item">
          <a href="/ourHoney" class="navbar-link">Our honey</a>
        </li>
        <li class="navbar-item">
          <a href="/adoptBeehive" class="navbar-link">Adopt a beehive</a>
        </li>
        <li class="navbar-item">
          <a href="/aboutUs" class="navbar-link">About us</a>
        </li>
        <li class="navbar-item">
          <a href="/contact" class="navbar-link">Contact</a>
        </li>
        ${userData
          ? html` <li class="navbar-item">
              <a href="/myBeehive" class="navbar-link">My beehive</a>
            </li>`
          : ""}
      </ul>
    </div>
  </header>
  <main class="main">${content}</main>
  <footer class="footer">
    <div class="footer-top">
      <ul class="footer-list">
        <li>
          <a href="#" class="footer-link">Facebook</a>
        </li>
        <li>
          <a href="#" class="footer-link">Instagram</a>
        </li>
        <li>
          <a href="#" class="footer-link">Youtube</a>
        </li>
        <li>
          <a href="#" class="footer-link">Google Map</a>
        </li>
      </ul>
    </div>

    <div class="footer-bottom">
      <p class="copyright">
        &copy; 2023 Happy Bees & Honey. All Rights Reserved | Crafted by
        <a
          href="https://github.com/Vasillena"
          target="_blank"
          class="github-link"
          >Vasillena</a
        >
      </p>
    </div>
  </footer>`;
