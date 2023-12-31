import { html } from "../../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../../data/util.js";

export const adoptBeehiveTemplate = (userData) => html`
  <section class="adopt-beehive">
    <style>
      #site {
        background: url(../../../src/styles/images/adopt-beehive.png);
        background-size: 30% auto;
        background-position: 2em 2em;
        background-repeat: no-repeat;
      }
      @media (width <= 600px) {
        #site {
          background: url(../../../src/styles/images/adopt-beehive.png);
          background-size: 60% auto;
          background-position: center 20em;
          background-repeat: no-repeat;
        }
      }
    </style>
    <div class="adopt-beehive-title">
      <h1>
        HEALTH FOR THE FAMILY
        <br />
        LIFE FOR THE BEES
      </h1>
    </div>
    <div class="adopt-beehive-text">
      <p>
        Adopting a beehive is a great way to support beekeeping and the
        protection of these essential pollinators. By choosing to adopt a
        beehive, you are not only helping to support the health and well-being
        of bees, but you are also supporting the production of local,
        sustainable honey.
      </p>
      <p>
        When you adopt a beehive, you become part of a community of people who
        are committed to protecting bees and their habitats.
      </p>
      <p>
        So why not join the hive and adopt a beehive today? You will not only be
        making a positive impact on the environment, but you will also be
        gaining some new furry, buzzing family members in the process!
      </p>
      <div class="adopt-button">
        ${userData
          ? html`<a href="/create" class="adopt-link">ADOPT NOW</a>`
          : html`<a href="/login" class="adopt-link">LOGIN TO ADOPT</a>`}
        <h5>&#8595; THIS IS WHAT YOU GET &#8595;</h5>
      </div>
    </div>

    <div class="cards-container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <h3>
              100% Genuine Honey
              <br />
              with your Custom Label
            </h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              "Health in a jar". Your bees will produce delicious, quality honey
              that will be arriving at your doorstep every month with your
              custom label in an elegant box.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <h3>A family treat</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              You cannot miss meeting your new family members, right? That's why
              your beekeeper will regularly update the status of your hive.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <h3>Name your Queen Bee</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Choosing a name for the queen bee is a fun and responsible task
              for kids and parents.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <h3>Your contribution</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Bees pollinate millions of flowers every day. We use our
              sensor-based technology to equip every beekeeper and create a
              report of the positive effect of your bee colony.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <h3>Smart equipment</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              With Pollenity's sensor technology, we monitor hive health and
              life in real-time and help the beekeeper take optimal care of your
              adopted hive.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <h3>Interactive profile</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Interactive profile with information about your hive, brood
              management and communication with your beekeeper. At any time you
              can see what is happening with your bees.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export async function adoptBeehivePage(ctx) {
  const userData = getUserData();
  ctx.render(adoptBeehiveTemplate(userData));
}
