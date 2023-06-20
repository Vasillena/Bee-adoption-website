import { html } from "../../../node_modules/lit-html/lit-html.js";
import { getAllBeehives } from "../../data/beehives.js";

export const myBeehiveTemplate = (beehives) => html` <section
  class="my-beehive"
>
  <style>
    #site {
      background: url(../../../src/styles/images/my-beehive.png);
      background-size: 30% auto;
      background-position: left 15em;
      background-repeat: no-repeat;
    }
    @media (width <= 600px) {
      #site {
        background: url(../../../src/styles/images/my-beehive.png);
        background-size: 50% auto;
        background-position: left 15em;
        background-repeat: no-repeat;
      }
    }
  </style>
  <div class="my-beehive-section">
    <div class="my-beehive-title">
      <h1>WELCOME TO OUR FAMILY</h1>
    </div>
    <div class="my-beehives-table">
      <div class="single-beehive">
        ${beehives.length > 0
          ? beehives.map(myBeehiveCard)
          : html`<h2>No beehives yet.</h2>
              <br />
              <a href="/create" class="adopt-link">ADOPT NOW</a>`}
      </div>
    </div>
  </div>
</section>`;

const myBeehiveCard = (beehive) => html` <div class="beehive-card">
  <img
    class="beehive"
    src="../../../src/styles/images/beehive.png"
    alt="Beehive"
    width="680"
  />
  <h3>${beehive.beehiveName}</h3>
  <br />
  <a class="action-link" href="/myBeehive/${beehive._id}">Manage Beehive</a>
</div>`;

export async function myBeehivePage(ctx) {
  const beehives = await getAllBeehives();
  ctx.render(myBeehiveTemplate(beehives));
}
