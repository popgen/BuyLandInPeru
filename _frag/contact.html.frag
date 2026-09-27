    <header class="page-hero">
      <div class="wrap">
        <p class="kicker">Intake</p>
        <h1>Tell me what you are actually trying to do</h1>
        <p class="lede">This form emails your note to <a href="mailto:info@buylandinperu.com">info@buylandinperu.com</a> and sends a short thank-you back to you. It is not stored as a page on this site.</p>
      </div>
    </header>
    <section class="section">
      <div class="wrap">
        <div id="form-status" class="note" tabindex="-1" hidden></div>
        <form id="intake" method="post" action="contact-send.php" accept-charset="UTF-8">
          <input type="hidden" name="lang" value="en">
          <div class="form-grid two">
            <label for="name">Name<input id="name" name="name" type="text" required autocomplete="name"></label>
            <label for="email">Your email<input id="email" name="email" type="email" required autocomplete="email"></label>
            <label for="country">Country you live in now<input id="country" name="country" type="text" required></label>
            <label for="budget">Budget
              <select id="budget" name="budget" required>
                <option value="">Choose</option>
                <option>Not sure yet</option>
                <option>A small lot, a few thousand dollars if the place allows it ($1,000–$10,000)</option>
                <option>A house, apartment, or larger lot ($10,000–$30,000)</option>
                <option>Large land, including forest ($30,000–$50,000)</option>
                <option>$50,000+</option>
                <option>I would rather talk it through</option>
              </select>
            </label>
            <label for="months">Months per year in Peru
              <select id="months" name="months">
                <option value="">Not sure</option>
                <option>A few weeks</option>
                <option>1–3 months</option>
                <option>About half the year</option>
                <option>Most of the year</option>
              </select>
            </label>
            <label for="purpose">Purpose
              <select id="purpose" name="purpose" required>
                <option value="">Choose</option>
                <option>Retirement</option>
                <option>Vacation home</option>
                <option>Investment-minded, understanding resale is not guaranteed</option>
                <option>A mix</option>
                <option>Not sure</option>
              </select>
            </label>
            <label for="rent">Will you rent it out?
              <select id="rent" name="rent">
                <option value="">Not sure</option>
                <option>No</option>
                <option>Maybe later</option>
                <option>Yes, long-term</option>
                <option>Yes, short stays</option>
              </select>
            </label>
            <label for="intent">Live there, or hold
              <select id="intent" name="intent">
                <option value="">Not sure</option>
                <option>Live there</option>
                <option>Hold and maybe build later</option>
                <option>Both</option>
              </select>
            </label>
          </div>
          <fieldset>
            <legend>Tolerance</legend>
            <div class="form-grid two">
              <label for="heat">Heat<select id="heat" name="heat"><option>Not sure</option><option>I wilt in heat</option><option>Warm is fine</option><option>I want heat</option></select></label>
              <label for="humidity">Humidity<select id="humidity" name="humidity"><option>Not sure</option><option>I want dry air</option><option>Some humidity is fine</option><option>Jungle humidity is fine</option></select></label>
              <label for="altitude">Altitude<select id="altitude" name="altitude"><option>Not sure</option><option>I need sea level</option><option>Around 2,000–2,800 m is possible</option><option>I will test a long stay above 3,000 m</option></select></label>
              <label for="rain">Rain<select id="rain" name="rain"><option>Not sure</option><option>I want a dry climate</option><option>A rainy season is fine</option><option>Heavy rain is fine</option></select></label>
              <label for="noise">Noise<select id="noise" name="noise"><option>Not sure</option><option>Quiet nights</option><option>Town noise is fine</option><option>Lively is fine</option></select></label>
              <label for="isolation">Isolation<select id="isolation" name="isolation"><option>Not sure</option><option>City services</option><option>Small city or large town</option><option>Remote is fine</option></select></label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Daily life</legend>
            <div class="form-grid two">
              <label for="healthcare">Health care<select id="healthcare" name="healthcare"><option>Not sure</option><option>Major hospital in the city</option><option>Regional hospital is enough</option><option>I can travel for care</option></select></label>
              <label for="airport">Airport<select id="airport" name="airport"><option>Not sure</option><option>International hub nearby</option><option>Domestic airport is enough</option><option>A long road is fine</option></select></label>
              <label for="schools">International schools<select id="schools" name="schools"><option>Not needed</option><option>Maybe</option><option>Yes</option></select></label>
              <label for="community">Community<select id="community" name="community"><option>Not sure</option><option>Expat-friendly</option><option>A mix</option><option>Full immersion</option></select></label>
              <label for="spanish">Spanish<select id="spanish" name="spanish"><option>Not sure</option><option>Little</option><option>Daily life</option><option>Comfortable</option></select></label>
              <label for="internet">Internet for remote work<select id="internet" name="internet"><option>Not sure</option><option>I need fiber</option><option>Satellite or mobile data is enough</option><option>Not working online</option></select></label>
            </div>
          </fieldset>
          <label for="region">Places you are already considering
            <input id="region" name="region" type="text" placeholder="Optional. A city, a coast, a valley.">
          </label>
          <label for="visit">Can you visit?
            <select id="visit" name="visit">
              <option>Not sure</option>
              <option>I can visit</option>
              <option>I want to rent there first</option>
              <option>I need remote help</option>
            </select>
          </label>
          <label for="notes">Anything else
            <textarea id="notes" name="notes" placeholder="Timing, health limits you want me to know, or a property you have already seen."></textarea>
          </label>
          <button class="btn" type="submit">Send the note</button>
        </form>
        <h2>If you would rather paste</h2>
        <p>Send the same topics, in your own order, to <a href="mailto:info@buylandinperu.com">info@buylandinperu.com</a>. Include your country, budget, months per year, purpose, climate limits, Spanish, and whether you can visit.</p>
        <div id="book-meet">
          <h2>Schedule a Google Meet</h2>
          <p class="actions">
            <a data-book-link class="btn" href="https://calendar.app.google/h65oLNrYFP7pGCRKA" target="_blank" rel="noopener noreferrer">Schedule a Google Meet</a>
          </p>
          <p>The meeting is added to the owner's Google Calendar and includes a Google Meet link when they configured it that way.</p>
        </div>
      </div>
    </section>
