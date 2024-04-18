import { html } from "../../../node_modules/lit-html/lit-html.js";
import { deleteBeehive, getAllBeehives, getById } from "../../data/beehives.js";
import { getUserData } from "../../data/util.js";

export const manageBeehiveTemplate = (beehive, onDelete) => html` <section
  class="my-beehive"
>
  <div class="my-beehive-section">
    <div class="my-beehive-title">
      <h1>Welcome to our Family</h1>
    </div>
    <div class="my-beehives-table">
      <div class="single-beehive">
        <div class="beehive-card">
          <img
            class="beehive"
            src="../../../src/styles/images/beehive.svg"
            alt="Beehive"
            width="600"
          />
          <h3>${beehive.username}'s Beehive</h3>
          <p>${beehive.address}</p>
          <p>Beehive name: ${beehive.beehiveName}</p>
          <p>Queen Bee name: ${beehive.queenName}</p>
          <p>Honey label:</p>
          <br />
          <img
            class="label"
            src="${beehive.honeyLabel}"
            alt="Honey Label"
            width="200"
          />
          <div class="action-buttons">
            <a href="/myBeehive/${beehive._id}/edit" class="action-link"
              >Edit</a
            >
            <br />
            <br />
            <a @click=${onDelete} href="javascript:void(0)" class="action-link"
              >Cancel Adoption</a
            >
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</section>`;

export async function manageBeehivePage(ctx) {
  const id = ctx.params.id;
  const beehive = await getById(id);
  const userData = getUserData();

  if (userData && userData._id == beehive._ownerId) {
    beehive.canEdit = true;
  }

  ctx.render(manageBeehiveTemplate(beehive, onDelete));
  async function onDelete() {
    const choice = confirm("This will cancel your adoption? Proceed?");

    if (choice) {
      await deleteBeehive(id);
      ctx.page.redirect("/myBeehive");
    }
  }
}
