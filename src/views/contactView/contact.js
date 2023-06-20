import { html } from "../../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../../data/util.js";

export const contactTemplate = (onContact) => html` <section class="contact">
  <style>
    #site {
      background: url(../../../src/styles/images/contact.png);
      background-size: 40% auto;
      background-position: center top;
      background-repeat: no-repeat;
    }
  </style>
  <div class="contact-section">
    <h1>NEED ANSWERS</h1>
    <p>
      If you have a question, no matter how big or small, our awesome customer
      support team will get back to you as soon as possible – you can usually
      expect a response within 24 hours.
    </p>
  </div>
  <div class="contact-section-form">
    <form id="contact" @submit=${onContact}>
      <div class="container">
        <div class="form-elements">
          <label for="name"></label>
          <input type="text" id="username" name="username" placeholder="Name" />
        </div>
        <div class="form-elements">
          <label for="email"></label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div class="form-elements">
          <label for="message"></label>
          <textarea
            id="message"
            name="message"
            cols="50"
            rows="2"
            placeholder="Hi..."
          ></textarea>
        </div>
        <div class="form-elements">
          <input type="submit" class="submit-button" value="SEND" />
        </div>
      </div>
    </form>
  </div>
  ${sentTemplate()}
</section>`;

const sentTemplate = () => html`<div class="sent-message">
  <p>
    Thank you for reaching out to us! We appreciate your interest and value your
    inquiry. Our team will do our best to respond to your question as soon as
    possible.
  </p>
  <button class="close-button">Close</button>
</div>`;

export async function contactPage(ctx) {
  ctx.render(contactTemplate(createSubmitHandler(onContact)));

  function onContact({ username, email, message }, form) {
    if (username == "" || email == "" || message == "") {
      return alert("All fields are required");
    }

    console.log("Thank you!");
    form.reset();

    const messageCard = document.querySelector(".sent-message");
    messageCard.classList.add("show");

    const closeButton = messageCard.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      messageCard.classList.remove("show");
    });

    ctx.page.redirect("/contact");
  }
}
