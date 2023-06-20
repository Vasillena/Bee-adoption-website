import { html } from "../../../node_modules/lit-html/lit-html.js";

export const homeTemplate = () => html` <section class="hero-section">
  <style>
    #site {
      background: url(../../../src/styles/images/hero-bee.jpg);
      background-size: 94% auto;
      background-position: center 2em;
      background-repeat: no-repeat;
    }

    @media (width <= 600px) {
      #site {
        background: url(../../../src/styles/images/hero-bee.jpg);
        background-size: 170% auto;
        background-position: center 5em;
        background-repeat: no-repeat;
      }
    }
  </style>
</section>`;

export async function homePage(ctx) {
  ctx.render(homeTemplate());
}
