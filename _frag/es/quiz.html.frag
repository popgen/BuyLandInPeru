    <header class="page-hero">
      <div class="wrap">
        <p class="kicker">Un primer cruce</p>
        <h1>¿Qué tipo de lugar debería leer primero?</h1>
        <p class="lede">Once preguntas. El resultado es una lista de lectura, no un pueblo donde debería comprar. Sus respuestas se quedan en este navegador. Yo no las veo salvo que usted decida escribir.</p>
      </div>
    </header>
    <section class="section">
      <div class="wrap">
        <noscript>
          <p class="warn">Este cuestionario necesita JavaScript. Las <a href="places.html">guías de región</a> funcionan sin él.</p>
        </noscript>
        <form id="quiz">
          <fieldset>
            <legend>Calor</legend>
            <label><input type="radio" name="heat" value="0" required> El calor de verdad me vence</label>
            <label><input type="radio" name="heat" value="1"> Los días cálidos están bien</label>
            <label><input type="radio" name="heat" value="2"> Quiero calor</label>
          </fieldset>
          <fieldset>
            <legend>Humedad</legend>
            <label><input type="radio" name="humidity" value="0" required> Quiero aire seco</label>
            <label><input type="radio" name="humidity" value="1"> Algo de humedad está bien</label>
            <label><input type="radio" name="humidity" value="2"> La humedad de selva está bien</label>
          </fieldset>
          <fieldset>
            <legend>Altura</legend>
            <label><input type="radio" name="altitude" value="sea" required> Necesito el nivel del mar, o cerca</label>
            <label><input type="radio" name="altitude" value="mid"> Puedo considerar una ciudad alrededor de 2.000 a 2.800 metros si lo tomo en serio</label>
            <label><input type="radio" name="altitude" value="high"> Estoy dispuesto a probar una estancia larga sobre los 3.000 metros</label>
          </fieldset>
          <fieldset>
            <legend>Lluvia</legend>
            <label><input type="radio" name="rain" value="0" required> Quiero un clima seco</label>
            <label><input type="radio" name="rain" value="1"> Una temporada de lluvias está bien</label>
            <label><input type="radio" name="rain" value="2"> La lluvia fuerte no me molesta</label>
          </fieldset>
          <fieldset>
            <legend>Ruido</legend>
            <label><input type="radio" name="noise" value="0" required> Quiero noches tranquilas</label>
            <label><input type="radio" name="noise" value="1"> El ruido ordinario de un pueblo está bien</label>
            <label><input type="radio" name="noise" value="2"> Me gusta un lugar movido</label>
          </fieldset>
          <fieldset>
            <legend>Aislamiento</legend>
            <label><input type="radio" name="isolation" value="city" required> Quiero servicios de ciudad</label>
            <label><input type="radio" name="isolation" value="town"> Una ciudad pequeña o un pueblo grande</label>
            <label><input type="radio" name="isolation" value="remote"> Lo remoto está bien si el terreno es el correcto</label>
          </fieldset>
          <fieldset>
            <legend>Salud</legend>
            <label><input type="radio" name="health" value="major" required> Quiero un hospital grande en la misma ciudad</label>
            <label><input type="radio" name="health" value="regional"> Un hospital regional basta si Lima queda a un vuelo</label>
            <label><input type="radio" name="health" value="flex"> Viajaré para una atención seria</label>
          </fieldset>
          <fieldset>
            <legend>Aeropuerto</legend>
            <label><input type="radio" name="airport" value="intl" required> Quiero un hub internacional cerca</label>
            <label><input type="radio" name="airport" value="domestic"> Un aeropuerto nacional basta</label>
            <label><input type="radio" name="airport" value="road"> Una carretera larga es aceptable</label>
          </fieldset>
          <fieldset>
            <legend>Español</legend>
            <label><input type="radio" name="spanish" value="little" required> Poco español</label>
            <label><input type="radio" name="spanish" value="some"> Me arreglo en la vida diaria</label>
            <label><input type="radio" name="spanish" value="good"> Cómodo</label>
          </fieldset>
          <fieldset>
            <legend>Internet, si trabaja a distancia</legend>
            <label><input type="radio" name="internet" value="fiber" required> Necesito fibra confiable para llamadas</label>
            <label><input type="radio" name="internet" value="starlink"> Satélite o datos móviles fuertes bastan</label>
            <label><input type="radio" name="internet" value="none"> No trabajo en línea</label>
          </fieldset>
          <fieldset>
            <legend>Forma del presupuesto</legend>
            <label><input type="radio" name="budget" value="entry" required> Entrada: un lote pequeño, unos pocos miles de dólares si el lugar lo permite ($1,000–$10,000)</label>
            <label><input type="radio" name="budget" value="house"> Casa, departamento o lote más grande ($10,000–$30,000)</label>
            <label><input type="radio" name="budget" value="land"> Terreno grande, incluido bosque ($30,000–$50,000)</label>
            <label><input type="radio" name="budget" value="over"> $50,000+</label>
          </fieldset>
          <fieldset>
            <legend>Vivir ahí, o guardar</legend>
            <label><input type="radio" name="purpose" value="live" required> Vivir ahí casi todo el año</label>
            <label><input type="radio" name="purpose" value="visit"> Unos meses al año, o una base de vacaciones</label>
            <label><input type="radio" name="purpose" value="hold"> Guardar terreno y decidir después</label>
          </fieldset>
          <button class="btn" type="submit">Mostrar lugares para leer</button>
        </form>
        <div id="quiz-out" class="section" tabindex="-1" hidden></div>
        <p class="fine">El nivel de español se recoge para poder hablar de la vida diaria. No se usa como un puntaje que le esconda ciudades. La altura, el calor, los hospitales y el aislamiento mueven la lista.</p>
      </div>
    </section>
