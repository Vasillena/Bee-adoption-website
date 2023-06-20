import { html } from "../../../node_modules/lit-html/lit-html.js";

export const ourHoneyTemplate = () => html` <section class="our-honey">
  <style>
    #site {
      background: url(../../../src/styles/images/our-honey.png);
      background-size: 90% auto;
      background-position: left -3em;
      background-repeat: no-repeat;
    }
    @media (width <= 600px) {
      #site {
        background: url(../../../src/styles/images/our-honey.png);
        background-size: 140% auto;
        background-position: -2em -1em;
        background-repeat: no-repeat;
      }
    }
  </style>
  <div class="title">
    <h1>NATURAL AND PURE</h1>
  </div>

  <div class="product-container">
    <div class="product-section">
      ${Array.from({ length: 4 }, () => honeyTemplate())}
    </div>
    <div class="img-container">
      <img
        src="../../../src/styles/images/honey-jar.png"
        alt="Honey jar image"
        class="honey-jar-img"
      />
    </div>
  </div>
  ${honeyDetailsTemplate()}
</section>`;

const honeyTemplate = () => html`
  <div class="product">
    <div class="product-img">
      <img
        src="../../../src/styles/images/honey-jar.png"
        alt="Honey jar image"
      />
    </div>
    <div class="product-title">
      <h5>NATURAL HONEY</h5>
    </div>
    <div class="product-button">
      <button class="more-info">More Info</button>
    </div>
  </div>
`;

const honeyDetailsTemplate = () => html` <div class="honey-details">
  <h3>NATURAL HONEY</h3>
  <div class="content-img">
    <img src="../../../src/styles/images/honey-jar.png" alt="Honey jar img" />
  </div>
  <div class="content-text">
    <p>
      Introducing our all-natural and pure honey, straight from the hives of our
      local beekeepers! By choosing our honey, you are not only indulging in a
      deliciously sweet treat, but you are also supporting beekeeping and the
      protection of these essential pollinators. Our honey is carefully
      harvested using sustainable and ethical practices, ensuring the bees'
      health and well-being. With each purchase, you are making a positive
      impact on the environment and helping to ensure the continued survival of
      these incredible creatures. Try our honey today and taste the difference
      that pure and natural honey can make!
    </p>
  </div>
  <button class="close-button">Close</button>
</div>`;

export async function ourHoneyPage(ctx) {
  const renderPage = () => {
    ctx.render(ourHoneyTemplate());

    const productSection = document.querySelector(".product-section");
    const honeyDetails = document.querySelector(".honey-details");
    const closeButton = honeyDetails.querySelector(".close-button");

    productSection.addEventListener("click", (event) => {
      if (event.target.classList.contains("more-info")) {
        honeyDetails.classList.add("show");
      }
    });

    closeButton.addEventListener("click", () => {
      honeyDetails.classList.remove("show");
    });
  };

  renderPage();
  window.addEventListener("beforeunload", () => {});
}
