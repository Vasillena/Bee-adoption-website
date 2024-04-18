import { html } from "../../../node_modules/lit-html/lit-html.js";
import { createBeehive } from "../../data/beehives.js";
import { createSubmitHandler } from "../../data/util.js";

export const createTemplate = (onCreate) => html` <section class="adoption">
  <img
    class="adoption-form-img"
    src="../../../src/styles/images/adopt-form.png"
    alt="Bee"
  />
  <div class="adoption-form-title">
    <h1>Adopt a Beehive</h1>
  </div>
  <div class="adoption-form">
    <form id="adoption" @submit=${onCreate}>
      <div class="container">
        <div class="form-elements">
          <label for="name"></label>
          <input type="text" id="username" name="username" placeholder="Name" />
        </div>
        <div class="form-elements">
          <label for="address"></label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
          />
        </div>
        <div class="form-elements">
          <label for="beehiveName"></label>
          <input
            type="text"
            id="beehiveName"
            name="beehiveName"
            placeholder="Beehive name"
          />
        </div>
        <div class="form-elements">
          <label for="queenName"></label>
          <input
            type="text"
            id="queenName"
            name="queenName"
            placeholder="Queen Bee name"
          />
        </div>
        <div class="form-elements">
          <label for="honeyLabel"></label>
          <input
            type="text"
            id="honeyLabel"
            name="honeyLabel"
            placeholder="Honey label URL"
          />
        </div>
        <div class="form-elements">
          <input type="submit" class="submit-button" value="SEND" />
        </div>
      </div>
    </form>
  </div>
</section>`;

export function createPage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onCreate)));

  async function onCreate({
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
    await createBeehive({
      username,
      address,
      beehiveName,
      queenName,
      honeyLabel,
    });
    ctx.page.redirect("/");
  }
}
