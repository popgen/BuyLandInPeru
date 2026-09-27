    <header class="page-hero">
      <div class="wrap">
        <p class="kicker">A starting match</p>
        <h1>Which kind of place should you read first?</h1>
        <p class="lede">Eleven questions. The result is a reading list, not a town you should buy in. Your answers stay in this browser. I never see them unless you choose to write.</p>
      </div>
    </header>
    <section class="section">
      <div class="wrap">
        <noscript>
          <p class="warn">This quiz needs JavaScript. The <a href="places.html">region guides</a> work without it.</p>
        </noscript>
        <form id="quiz">
          <fieldset>
            <legend>Heat</legend>
            <label><input type="radio" name="heat" value="0" required> I wilt in real heat</label>
            <label><input type="radio" name="heat" value="1"> Warm days are fine</label>
            <label><input type="radio" name="heat" value="2"> I want heat</label>
          </fieldset>
          <fieldset>
            <legend>Humidity</legend>
            <label><input type="radio" name="humidity" value="0" required> I want dry air</label>
            <label><input type="radio" name="humidity" value="1"> Some humidity is fine</label>
            <label><input type="radio" name="humidity" value="2"> Jungle humidity is fine</label>
          </fieldset>
          <fieldset>
            <legend>Altitude</legend>
            <label><input type="radio" name="altitude" value="sea" required> I need sea level, or close to it</label>
            <label><input type="radio" name="altitude" value="mid"> I can consider a city around 2,000–2,800 meters if I take it seriously</label>
            <label><input type="radio" name="altitude" value="high"> I am willing to test a long stay above 3,000 meters</label>
          </fieldset>
          <fieldset>
            <legend>Rain</legend>
            <label><input type="radio" name="rain" value="0" required> I want a dry climate</label>
            <label><input type="radio" name="rain" value="1"> A rainy season is fine</label>
            <label><input type="radio" name="rain" value="2"> Heavy rain does not bother me</label>
          </fieldset>
          <fieldset>
            <legend>Noise</legend>
            <label><input type="radio" name="noise" value="0" required> I want quiet nights</label>
            <label><input type="radio" name="noise" value="1"> Ordinary town noise is fine</label>
            <label><input type="radio" name="noise" value="2"> I like a lively place</label>
          </fieldset>
          <fieldset>
            <legend>Isolation</legend>
            <label><input type="radio" name="isolation" value="city" required> I want city services</label>
            <label><input type="radio" name="isolation" value="town"> A small city or a large town</label>
            <label><input type="radio" name="isolation" value="remote"> Remote is fine if the land is right</label>
          </fieldset>
          <fieldset>
            <legend>Health care</legend>
            <label><input type="radio" name="health" value="major" required> I want a major hospital in the same city</label>
            <label><input type="radio" name="health" value="regional"> A regional hospital is enough if Lima is a flight away</label>
            <label><input type="radio" name="health" value="flex"> I will travel for serious care</label>
          </fieldset>
          <fieldset>
            <legend>Airport</legend>
            <label><input type="radio" name="airport" value="intl" required> I want an international hub nearby</label>
            <label><input type="radio" name="airport" value="domestic"> A domestic airport is enough</label>
            <label><input type="radio" name="airport" value="road"> A long road is acceptable</label>
          </fieldset>
          <fieldset>
            <legend>Spanish</legend>
            <label><input type="radio" name="spanish" value="little" required> Little Spanish</label>
            <label><input type="radio" name="spanish" value="some"> I can manage daily life</label>
            <label><input type="radio" name="spanish" value="good"> Comfortable</label>
          </fieldset>
          <fieldset>
            <legend>Internet, if you work remotely</legend>
            <label><input type="radio" name="internet" value="fiber" required> I need reliable fiber for calls</label>
            <label><input type="radio" name="internet" value="starlink"> Satellite or strong mobile data is enough</label>
            <label><input type="radio" name="internet" value="none"> I am not working online</label>
          </fieldset>
          <fieldset>
            <legend>Budget shape</legend>
            <label><input type="radio" name="budget" value="entry" required> Entry: a small lot, a few thousand dollars if that place allows it ($1,000–$10,000)</label>
            <label><input type="radio" name="budget" value="house"> A house, apartment, or larger lot ($10,000–$30,000)</label>
            <label><input type="radio" name="budget" value="land"> Large land, including forest ($30,000–$50,000)</label>
            <label><input type="radio" name="budget" value="over"> $50,000+</label>
          </fieldset>
          <fieldset>
            <legend>Live there, or hold</legend>
            <label><input type="radio" name="purpose" value="live" required> Live there most of the year</label>
            <label><input type="radio" name="purpose" value="visit"> A few months a year, or a vacation base</label>
            <label><input type="radio" name="purpose" value="hold"> Hold land and decide later</label>
          </fieldset>
          <button class="btn" type="submit">Show places to read</button>
        </form>
        <div id="quiz-out" class="section" tabindex="-1" hidden></div>
        <p class="fine">Spanish level is collected so we can talk about daily life. It is not used as a score that hides cities from you. Altitude, heat, hospitals, and isolation move the list.</p>
      </div>
    </section>
