import { html } from "../../../node_modules/lit-html/lit-html.js";
import { getById, updateBeehive } from "../../data/beehives.js";
import { createSubmitHandler } from "../../data/util.js";

const editTemplate = (beehive, onEdit) => html`
  <section class="adoption-edit">
    <div class="adoption-form-title">
      <h1>Edit your Beehive</h1>
    </div>
    <div class="adoption-form">
      <form id="adoption" @submit=${onEdit}>
        <div class="container">
          <div class="form-elements">
            <label for="name"></label>
            <input
              type="text"
              id="username"
              name="username"
              .value=${beehive.username}
              placeholder="Name"
            />
          </div>
          <div class="form-elements">
            <label for="address"></label>
            <input
              type="text"
              id="address"
              name="address"
              .value=${beehive.address}
              placeholder="Address"
            />
          </div>
          <div class="form-elements">
            <label for="beehiveName"></label>
            <input
              type="text"
              id="beehiveName"
              name="beehiveName"
              .value=${beehive.beehiveName}
              placeholder="Beehive name"
            />
          </div>
          <div class="form-elements">
            <label for="queenName"></label>
            <input
              type="text"
              id="queenName"
              name="queenName"
              .value=${beehive.queenName}
              placeholder="Queen Bee name"
            />
          </div>
          <div class="form-elements">
            <label for="honeyLabel"></label>
            <input
              type="text"
              id="honeyLabel"
              name="honeyLabel"
              .value=${beehive.honeyLabel}
              placeholder="Honey label URL"
            />
          </div>
          <div class="form-elements">
            <input type="submit" class="submit-button" value="SEND" />
          </div>
        </div>
      </form>
    </div>
  </section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const beehive = await getById(id);

  ctx.render(editTemplate(beehive, createSubmitHandler(onEdit)));

  async function onEdit({
    username,
    address,
    beehiveName,
    queenName,
    honeyLabel,
  }) {
    if (
      [username, address, beehiveName, queenName, honeyLabel].some(
        (f) => f == ""
      )
    ) {
      return alert("All fields are required!");
    }
    await updateBeehive(id, {
      username,
      address,
      beehiveName,
      queenName,
      honeyLabel,
    });
    ctx.page.redirect("/myBeehive/" + id);
  }
}
