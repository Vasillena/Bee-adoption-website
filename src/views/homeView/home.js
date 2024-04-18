import { html } from "../../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../../data/util.js";
import { createSubmitHandler } from "../../data/util.js";
import { getAllBeehives } from "../../data/beehives.js";

export const homeTemplate = (
  userData,
  onContact,
  beehives
) => html` <section class="hero-section" id="hero">
    <div class="hero-image">
      <img src="../../../src/styles/images/hero-bee.png" alt="Hero bee" />
    </div>
   <h1>If I Die We All Die</h1>
  </section>
  <section class="about-us" id="about-us">
  <div class="about-us-section">
      <h1>We are About Saving the Bees!</h1>
      <p>
        We are a family with a mission - to help protect and preserve the
        essential role that bees play in our ecosystem. We are passionate about
        beekeeping and the production of sustainable, local honey. But more than
        that, we are committed to spreading awareness about the dangers facing
        bees and their habitats.
      </p>
      <img class="hex-divider" src="../../../src/styles/images/hex.svg" alt="Hex" />
      <p>
        As we've learned more about the critical role that bees play in
        pollination and biodiversity, we've become increasingly concerned about
        the threats they face from climate change, habitat loss, and pesticide
        use. That's why we've made it our mission to not only support beekeeping
        and the production of local honey but also to educate others about the
        importance of bees and the risks associated with their decline.
      </p>
   <img class="hex-divider" src="../../../src/styles/images/hex.svg" alt="Hex" />
      <p>
        Through our website and social media channels, we aim to share our
        knowledge and passion for beekeeping with others and inspire them to
        take action to protect these essential pollinators. Join us in our
        mission to protect bees and their habitats. Together, we can make a
        difference and ensure a healthy and sustainable future for ourselves and
        for the bees.
      </p>
  </div>
</section>
<div class="divider"><img src="../../../src/styles/images/divider-bee.svg" alt="Divider bee" /></div>
  <section class="bees-matter" id="bees-matter">
    <div class="title-section">
      <h2>Why Bees Matter</h2>
            <img class="bees-matter-image" src="../../../src/styles/images/adopt-beehive.png" alt="Bee" />
    </div>
    <div class="text-section">
      <div class="paragraphs paragraphs-first-row">
        <div class="hex-container">
          <div class="hex">
            <div class="front">
              <div class="hex-title">
                <h4>The Importance of Bees:</h4>
              </div>
            </div>
            <div class="back">
              <div class="paragraph">
                <p>
                  Bees are vital pollinators, responsible for over 75% of the
                  world's food crops. Without them, plants struggle to produce
                  seeds, leading to food scarcity and endangering many species.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="hex-container">
          <div class="hex">
            <div class="front">
              <div class="hex-title">
                <h4>Guardians of Biodiversity:</h4>
              </div>
            </div>
            <div class="back">
              <div class="paragraph">
                <p>
                  Bees play a vital role in supporting biodiversity and the food
                  chain. Their decline would result in fewer plant species,
                  impacting air quality as plants absorb carbon dioxide and
                  produce oxygen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="hex-container">
          <div class="hex">
            <div class="front">
              <div class="hex-title">
                <h4>Threats to Bee Populations:</h4>
              </div>
            </div>
            <div class="back">
              <div class="paragraph">
                <p>
                  Pesticides, climate change, and habitat loss are major threats
                  to bees. Pesticides harm them directly, climate change
                  disrupts their food sources, and habitat destruction limits
                  their foraging and nesting abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="paragraphs paragraphs-second-row">
                <div class="hex-container">
          <div class="hex">
            <div class="front">
              <div class="hex-title">
                <h4>Challenges Facing Bees:</h4>
              </div>
            </div>
            <div class="back">
              <div class="paragraph">
                <p>
                    Pesticides, habitat loss, and climate change threaten bees.
              Pesticides weaken immunity, habitat loss disrupts foraging, and
              climate change impacts nesting.
                </p>
              </div>
            </div>
          </div>
      </div>
                  <div class="hex-container">
          <div class="hex">
            <div class="front">
              <div class="hex-title">
                <h4>Supporting Bees:</h4>
              </div>
            </div>
            <div class="back">
              <div class="paragraph">
                <p>
                       To protect bees, we must cut pesticide use, embrace sustainable
              farming, plant bee-friendly flowers, back local beekeepers,
              support bee conservation groups, and push for bee-friendly
              policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
          </div>
    </div>
    <div class="divider-reversed"><img src="../../../src/styles/images/divider-bee.svg" alt="Divider bee" /></div>
  </section>
  <section class="adopt-beehive" id="adopt-beehive">
    <div class="adopt-beehive-title">
      <h2>
         Health for the Family
        <br />
   Life for the Bees
      </h2>
    </div>
      <img class="adopt-bee-image" src="../../../src/styles/images/about-us.png" alt="Bee" />
    <div class="adopt-beehive-text">
      <p>
        Adopting a beehive is a great way to support beekeeping and the
        protection of these essential pollinators. By choosing to adopt a
        beehive, you are not only helping to support the health and well-being
        of bees, but you are also supporting the production of local,
        sustainable honey.
      </p>
         <img class="hex-divider" src="../../../src/styles/images/hex-2.svg" alt="Hex" />
      <p>
        When you adopt a beehive, you become part of a community of people who
        are committed to protecting bees and their habitats.
      </p>
         <img class="hex-divider" src="../../../src/styles/images/hex-2.svg" alt="Hex" />
      <p>
        So why not join the hive and adopt a beehive today? You will not only be
        making a positive impact on the environment, but you will also be
        gaining some new furry, buzzing family members in the process!
      </p>
      <div class="what-you-get">
             <img class="hex-divider" src="../../../src/styles/images/hex-2.svg" alt="Hex" />
        <p>&#8595; THIS IS WHAT YOU GET &#8595;</p>
      </div>
    </div>
    <div>
      <ul class="timeline">
  <li>
    <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Honey with your Custom Label</span>
        <span class="time-wrapper"><span class="time">1</span></span>
      </div>
      <p class="desc">Health in a jar". Your bees will produce delicious, quality honey
              that will be arriving at your doorstep every month with your
              custom label in an elegant box.</p>
    </div>
  </li>
  <li>
    <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">A family treat</span>
        <span class="time-wrapper"><span class="time">2</span></span>
      </div>
      <p class="desc">    You cannot miss meeting your new family members, right? That's why
              your beekeeper will regularly update the status of your hive.</p>
    </div>
  </li>
  <li>
    <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Name your Queen Bee</span>
        <span class="time-wrapper"><span class="time">3</span></span>
      </div>
      <p class="desc">      Choosing a name for the queen bee is a fun and responsible task
        for kids and parents.</p>
      </div>
    </li>
    <li>
      <div class="direction-l">
        <div class="flag-wrapper">
          <span class="hexa"></span>
          <span class="flag">Your contribution</span>
          <span class="time-wrapper"><span class="time">4</span></span>
        </div>
        <p class="desc">  Bees pollinate millions of flowers every day. We use our
                sensor-based technology to equip every beekeeper and create a
                report of the positive effect of your bee colony.</p>
      </div>
    </li>
        <li>
      <div class="direction-r">
        <div class="flag-wrapper">
          <span class="hexa"></span>
          <span class="flag">Smart equipment</span>
          <span class="time-wrapper"><span class="time">5</span></span>
        </div>
        <p class="desc">     With Pollenity's sensor technology, we monitor hive health and
              life in real-time and help the beekeeper take optimal care of your
              adopted hive.</p>
      </div>
    </li>
            <li>
      <div class="direction-l">
        <div class="flag-wrapper">
          <span class="hexa"></span>
          <span class="flag">Interactive profile</span>
          <span class="time-wrapper"><span class="time">6</span></span>
        </div>
        <p class="desc">         Interactive profile with information about your hive, brood
              management and communication with your beekeeper. At any time you
              can see what is happening with your bees.</p>
      </div>
    </li>
</ul>

      <div class="adopt-button">
        ${
          userData
            ? html`<a href="/create" class="adopt-link">Adopt now</a>`
            : html`<a href="/login" class="adopt-link">Login to adopt</a>`
        }
             </div>
    </div>
  </section>
    <div class="divider"><img src="../../../src/styles/images/divider-bee.svg" alt="Divider bee" /></div>
    <section class="our-honey" id="our-honey">
        <div class="img-container">
      <img
        src="../../../src/styles/images/honey-jar.png"
        alt="Honey jar image"
        class="honey-jar-img"
      />
    </div>
    <div class="cards-container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <h3>
              Natural and Pure
            </h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
                  Introducing our all-natural and pure honey, straight from the hives of our
      local beekeepers! By choosing our honey, you are not only indulging in a
      deliciously sweet treat, but you are also supporting beekeeping and the
      protection of these essential pollinators.
            </p>
          </div>
        </div>
      </div>
        </div>
        </section>
            <div class="divider-reversed"><img src="../../../src/styles/images/divider-bee.svg" alt="Divider bee" /></div>
                ${
                  userData
                    ? html` <section class="my-beehive" id="my-beehive">
                          <div class="my-beehive-section">
                            <div class="my-beehive-title">
                              <h1>Welcome to our Family</h1>
                            </div>
                            <div class="my-beehives-table">
                              ${beehives.length > 0
                                ? beehives.map(myBeehiveCard)
                                : html`<h2>No beehives yet.</h2>
                                    <br />
                                    <a href="/create" class="adopt-link"
                                      >Adopt now</a
                                    >`}
                            </div>
                          </div>
                        </section>
                        <div class="divider">
                          <img
                            src="../../../src/styles/images/divider-bee.svg"
                            alt="Divider bee"
                          />
                        </div>`
                    : ""
                }
            <section class="contact" id="contact">
  <div class="contact-section">
    <h2>Need Answers</h2>
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
</section>
                        <img
        src="../../../src/styles/images/contact.png"
        alt="Bee"
        class="footer-img"
      />
  `;

const myBeehiveCard = (beehive) => html` <div class="beehive-card">
  <img
    class="beehive"
    src="../../../src/styles/images/beehive.svg"
    alt="Beehive"
    width="500"
  />
  <h3>${beehive.beehiveName}</h3>
  <br />
  <a class="action-link" href="/myBeehive/${beehive._id}">Manage Beehive</a>
</div>`;

const sentTemplate = () => html`<div class="sent-message">
  <p>
    Thank you for reaching out to us! We appreciate your interest and value your
    inquiry. Our team will do our best to respond to your question as soon as
    possible.
  </p>
  <button class="close-button">Close</button>
</div>`;

export async function homePage(ctx) {
  const userData = getUserData();
  const beehives = await getAllBeehives();
  ctx.render(homeTemplate(userData, createSubmitHandler(onContact), beehives));

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
