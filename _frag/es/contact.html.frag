    <header class="page-hero">
      <div class="wrap">
        <p class="kicker">Ingreso</p>
        <h1>Cuénteme qué está tratando de hacer</h1>
        <p class="lede">Este formulario envía su nota a <a href="mailto:info@buylandinperu.com">info@buylandinperu.com</a> y le manda un agradecimiento breve. No se guarda como una página en este sitio.</p>
      </div>
    </header>
    <section class="section">
      <div class="wrap">
        <div id="form-status" class="note" tabindex="-1" hidden></div>
        <form id="intake" method="post" action="../contact-send.php" accept-charset="UTF-8">
          <input type="hidden" name="lang" value="es">
          <div class="form-grid two">
            <label for="name">Nombre<input id="name" name="name" type="text" required autocomplete="name"></label>
            <label for="email">Su correo<input id="email" name="email" type="email" required autocomplete="email"></label>
            <label for="country">País donde vive ahora<input id="country" name="country" type="text" required></label>
            <label for="budget">Presupuesto
              <select id="budget" name="budget" required>
                <option value="">Elegir</option>
                <option>Aún no sé</option>
                <option>Un lote pequeño, unos pocos miles de dólares si el lugar lo permite ($1,000–$10,000)</option>
                <option>Casa, departamento o lote más grande ($10,000–$30,000)</option>
                <option>Terreno grande, incluido bosque ($30,000–$50,000)</option>
                <option>$50,000+</option>
                <option>Prefiero conversarlo</option>
              </select>
            </label>
            <label for="months">Meses al año en el Perú
              <select id="months" name="months">
                <option value="">No sé</option>
                <option>Unas semanas</option>
                <option>1 a 3 meses</option>
                <option>Como la mitad del año</option>
                <option>Casi todo el año</option>
              </select>
            </label>
            <label for="purpose">Para qué
              <select id="purpose" name="purpose" required>
                <option value="">Elegir</option>
                <option>Jubilación</option>
                <option>Casa de vacaciones</option>
                <option>Con idea de inversión, sabiendo que revender no está garantizado</option>
                <option>Una mezcla</option>
                <option>No sé</option>
              </select>
            </label>
            <label for="rent">¿Lo va a alquilar?
              <select id="rent" name="rent">
                <option value="">No sé</option>
                <option>No</option>
                <option>Quizás después</option>
                <option>Sí, plazo largo</option>
                <option>Sí, estancias cortas</option>
              </select>
            </label>
            <label for="intent">Vivir o guardar
              <select id="intent" name="intent">
                <option value="">No sé</option>
                <option>Vivir ahí</option>
                <option>Guardar y quizás construir después</option>
                <option>Las dos cosas</option>
              </select>
            </label>
          </div>
          <fieldset>
            <legend>Tolerancia</legend>
            <div class="form-grid two">
              <label for="heat">Calor<select id="heat" name="heat"><option>No sé</option><option>El calor me vence</option><option>El calor moderado está bien</option><option>Quiero calor</option></select></label>
              <label for="humidity">Humedad<select id="humidity" name="humidity"><option>No sé</option><option>Quiero aire seco</option><option>Algo de humedad está bien</option><option>La humedad de selva está bien</option></select></label>
              <label for="altitude">Altura<select id="altitude" name="altitude"><option>No sé</option><option>Necesito el nivel del mar</option><option>Unos 2.000 a 2.800 m es posible</option><option>Probaría una estancia larga sobre 3.000 m</option></select></label>
              <label for="rain">Lluvia<select id="rain" name="rain"><option>No sé</option><option>Quiero un clima seco</option><option>Una temporada de lluvias está bien</option><option>La lluvia fuerte está bien</option></select></label>
              <label for="noise">Ruido<select id="noise" name="noise"><option>No sé</option><option>Noches tranquilas</option><option>El ruido de un pueblo está bien</option><option>Un lugar movido está bien</option></select></label>
              <label for="isolation">Aislamiento<select id="isolation" name="isolation"><option>No sé</option><option>Servicios de ciudad</option><option>Ciudad pequeña o pueblo grande</option><option>Lo remoto está bien</option></select></label>
            </div>
          </fieldset>
          <fieldset>
            <legend>La vida diaria</legend>
            <div class="form-grid two">
              <label for="healthcare">Salud<select id="healthcare" name="healthcare"><option>No sé</option><option>Hospital grande en la misma ciudad</option><option>Un hospital regional basta</option><option>Puedo viajar para atenderme</option></select></label>
              <label for="airport">Aeropuerto<select id="airport" name="airport"><option>No sé</option><option>Un hub internacional cerca</option><option>Un aeropuerto nacional basta</option><option>Una carretera larga está bien</option></select></label>
              <label for="schools">Colegios internacionales<select id="schools" name="schools"><option>No hacen falta</option><option>Quizás</option><option>Sí</option></select></label>
              <label for="community">Entorno<select id="community" name="community"><option>No sé</option><option>Con otros extranjeros</option><option>Una mezcla</option><option>Inmersión</option></select></label>
              <label for="spanish">Español<select id="spanish" name="spanish"><option>No sé</option><option>Poco</option><option>La vida diaria</option><option>Cómodo</option></select></label>
              <label for="internet">Internet para trabajar<select id="internet" name="internet"><option>No sé</option><option>Necesito fibra</option><option>Satélite o datos móviles bastan</option><option>No trabajo en línea</option></select></label>
            </div>
          </fieldset>
          <label for="region">Lugares que ya está mirando
            <input id="region" name="region" type="text" placeholder="Opcional. Una ciudad, una costa, un valle.">
          </label>
          <label for="visit">¿Puede visitar?
            <select id="visit" name="visit">
              <option>No sé</option>
              <option>Puedo visitar</option>
              <option>Quiero alquilar ahí primero</option>
              <option>Necesito ayuda a distancia</option>
            </select>
          </label>
          <label for="notes">Algo más
            <textarea id="notes" name="notes"></textarea>
          </label>
          <button class="btn" type="submit">Enviar la nota</button>
        </form>
        <div id="book-meet">
          <h2>Programar una reunión de Google Meet</h2>
          <p class="actions">
            <a data-book-link class="btn" href="https://calendar.app.google/h65oLNrYFP7pGCRKA" target="_blank" rel="noopener noreferrer">Programar una reunión de Google Meet</a>
          </p>
          <p>La reunión se agrega al Google Calendar del propietario e incluye un enlace de Google Meet si así lo configuró.</p>
        </div>
      </div>
    </section>
