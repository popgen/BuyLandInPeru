(function () {
  var form = document.getElementById("quiz");
  if (!form) return;

  var regions = [
    {
      id: "lima", name: "Lima", href: "places.html#lima",
      heat: 1, humidity: 1, alt: 0, rain: 0, noise: 2, isol: 0,
      health: 2, airport: 2, internet: 2, expat: true, pricey: true, entry: false, land: false,
      caution: "Sea level and the best hospitals, with gray winter garúa and traffic. Central districts are not where an 8×20 lot costs a few thousand dollars."
    },
    {
      id: "north", name: "Northern beaches (Máncora, Punta Sal, Huanchaco)", href: "places.html#north-coast",
      heat: 2, humidity: 1, alt: 0, rain: 1, noise: 1, isol: 1,
      health: 1, airport: 1, internet: 1, expat: true, pricey: false, entry: true, land: false,
      caution: "Heat, tourist noise in season, and El Niño floods. Punta Sal sits in Tumbes; have a lawyer measure the 50 km border rule for the exact lot."
    },
    {
      id: "arequipa", name: "Arequipa", href: "places.html#arequipa",
      heat: 1, humidity: 0, alt: 2, rain: 0, noise: 1, isol: 0,
      health: 2, airport: 1, internet: 2, expat: false, pricey: false, entry: false, land: false,
      caution: "About 2,300 meters. Drier than Lima, still high enough to matter for hearts and lungs. I am not a doctor."
    },
    {
      id: "cusco", name: "Cusco", href: "places.html#cusco",
      heat: 0, humidity: 0, alt: 3, rain: 1, noise: 2, isol: 0,
      health: 1, airport: 1, internet: 2, expat: true, pricey: true, entry: false, land: false,
      caution: "The historic center is about 3,400 meters. A weekend visit is a poor test of whether you can live there."
    },
    {
      id: "valley", name: "Sacred Valley", href: "places.html#sacred-valley",
      heat: 1, humidity: 0, alt: 2, rain: 1, noise: 1, isol: 1,
      health: 1, airport: 1, internet: 1, expat: true, pricey: true, entry: true, land: true,
      caution: "Lower than Cusco plaza and still high, often around 2,800 meters. Ask about flood paths and who actually holds title."
    },
    {
      id: "selva", name: "Selva alta: Tarapoto, Lamas, Moyobamba", href: "places.html#selva-alta",
      heat: 2, humidity: 2, alt: 0, rain: 2, noise: 1, isol: 1,
      health: 1, airport: 1, internet: 1, expat: false, pricey: false, entry: true, land: true,
      caution: "Heat, humidity, termites, and rainy-season roads. Forest land here is a different project from a city condo."
    },
    {
      id: "oxapampa", name: "Oxapampa", href: "places.html#oxapampa",
      heat: 1, humidity: 2, alt: 1, rain: 2, noise: 0, isol: 1,
      health: 1, airport: 0, internet: 1, expat: false, pricey: false, entry: true, land: true,
      caution: "Cooler cloud forest, heavy rain, and a long road from Lima. Confirm internet and hospital access for the exact valley."
    },
    {
      id: "iquitos", name: "Iquitos", href: "places.html#iquitos",
      heat: 2, humidity: 2, alt: 0, rain: 2, noise: 1, isol: 2,
      health: 1, airport: 1, internet: 1, expat: false, pricey: false, entry: false, land: false,
      caution: "A river city with no road to the rest of Peru. Parts of Loreto fall inside the border zone even if the city itself is the draw."
    },
    {
      id: "cajamarca", name: "Cajamarca", href: "places.html#cajamarca",
      heat: 0, humidity: 1, alt: 2, rain: 1, noise: 0, isol: 1,
      health: 1, airport: 1, internet: 1, expat: false, pricey: false, entry: true, land: true,
      caution: "A highland city around 2,700 meters, with rain and a quieter pace. Specialty medicine is not Lima."
    },
    {
      id: "huancayo", name: "Huancayo", href: "places.html#huancayo",
      heat: 0, humidity: 0, alt: 3, rain: 1, noise: 1, isol: 0,
      health: 1, airport: 0, internet: 1, expat: false, pricey: false, entry: true, land: false,
      caution: "About 3,200 meters, and the road to Lima can close with huaicos in the rains."
    },
    {
      id: "puno", name: "Puno", href: "places.html#puno",
      heat: 0, humidity: 0, alt: 3, rain: 1, noise: 0, isol: 1,
      health: 1, airport: 1, internet: 1, expat: false, pricey: false, entry: false, land: true,
      caution: "Among the highest cities people casually shop, near 3,800 meters, and close enough to Bolivia that the border rule has to be measured."
    }
  ];

  var es = document.documentElement.lang === "es";
  var cautionEs = {
    lima: "Nivel del mar y los mejores hospitales, con garúa gris en invierno y tráfico. Los distritos céntricos no son donde un lote de 8×20 cuesta unos pocos miles de dólares.",
    north: "Calor, ruido de turistas en temporada e inundaciones de El Niño. Punta Sal está en Tumbes; un abogado debe medir la regla de los 50 km de frontera para ese lote.",
    arequipa: "Unos 2.300 metros. Más seco que Lima, y todavía lo bastante alto como para importar al corazón y a los pulmones. No soy médico.",
    cusco: "El centro histórico está a unos 3.400 metros. Un fin de semana es una mala prueba de si se puede vivir ahí.",
    valley: "Más bajo que la plaza de Cusco y todavía alto, a menudo alrededor de 2.800 metros. Pregunte por las crecidas y por quién tiene de verdad el título.",
    selva: "Calor, humedad, comején y caminos de temporada de lluvias. Un predio de bosque aquí es otro proyecto, distinto de un departamento en la ciudad.",
    oxapampa: "Bosque de neblina más fresco, mucha lluvia y una carretera larga desde Lima. Confirme internet y hospital para ese valle.",
    iquitos: "Una ciudad de río, sin carretera al resto del Perú. Parte de Loreto cae en la zona de frontera aunque la ciudad sea el atractivo.",
    cajamarca: "Una ciudad de sierra alrededor de 2.700 metros, con lluvia y un ritmo más quieto. La medicina especializada no es la de Lima.",
    huancayo: "Unos 3.200 metros, y la carretera a Lima puede cerrarse con huaicos en las lluvias.",
    puno: "Entre las ciudades más altas que la gente mira con calma, cerca de 3.800 metros, y tan cerca de Bolivia que la regla de frontera hay que medirla."
  };

  function val(name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : "";
  }

  function score(r) {
    var heat = Number(val("heat"));
    var humidity = Number(val("humidity"));
    var rain = Number(val("rain"));
    var noise = Number(val("noise"));
    var alt = val("altitude");
    var isol = val("isolation");
    var health = val("health");
    var airport = val("airport");
    var internet = val("internet");
    var purpose = val("purpose");
    var budget = val("budget");
    var s = 20;
    s -= Math.abs(r.heat - heat) * 3;
    s -= Math.abs(r.humidity - humidity) * 3;
    s -= Math.abs(r.rain - rain) * 2;
    s -= Math.abs(r.noise - noise) * 2;
    if (alt === "sea" && r.alt === 2) s -= 6;
    if (alt === "sea" && r.alt >= 3) s -= 12;
    if (alt === "mid" && r.alt >= 3) s -= 8;
    if (alt === "high" && r.alt >= 3) s += 3;
    if (alt === "high" && r.alt === 0) s -= 1;
    if (isol === "city" && r.isol > 0) s -= r.isol * 3;
    if (isol === "town" && r.isol === 0) s -= 1;
    if (isol === "town" && r.isol > 1) s -= 3;
    if (isol === "remote" && r.isol > 0) s += 2;
    if (health === "major" && r.health < 2) s -= 5;
    if (health === "flex") s += 0;
    if (airport === "intl" && r.airport < 2) s -= 5;
    if (airport === "road" && r.airport === 2) s -= 1;
    if (internet === "fiber" && r.internet < 2) s -= 4;
    if (purpose === "hold" && r.land) s += 4;
    if (purpose === "live" && r.isol < 2 && r.health > 0) s += 2;
    if (purpose === "visit" && r.expat) s += 1;
    if (budget === "entry" && r.entry) s += 3;
    if (budget === "entry" && r.pricey) s -= 3;
    if (budget === "land" && r.land) s += 4;
    if (budget === "house" && !r.land) s += 1;
    return s;
  }

  function why(r) {
    var bits = [];
    var alt = val("altitude");
    var humidity = Number(val("humidity"));
    var heat = Number(val("heat"));
    if (r.alt === 0 && alt === "sea") bits.push(es ? "se mantiene cerca del nivel del mar" : "it stays near sea level");
    if (r.alt >= 2 && alt !== "sea") bits.push(es ? "coincide con la disposición a lidiar con la altura" : "it matches a willingness to deal with altitude");
    if (r.humidity <= humidity) bits.push(es ? "la humedad cabe en lo que marcó" : "the humidity is inside what you marked");
    if (r.heat <= heat) bits.push(es ? "el calor cabe en lo que marcó" : "the heat is inside what you marked");
    if (val("health") === "major" && r.health === 2) bits.push(es ? "la atención hospitalaria es más fuerte aquí que en pueblos pequeños" : "hospital care is stronger here than in smaller towns");
    if (val("airport") === "intl" && r.airport === 2) bits.push(es ? "el aeropuerto internacional está en la misma ciudad" : "the international airport is in the same city");
    if (val("internet") === "fiber" && r.internet === 2) bits.push(es ? "la fibra es realista en barrios consolidados" : "fiber is realistic in established neighborhoods");
    if (val("purpose") === "hold" && r.land) bits.push(es ? "el predio grande forma parte del mercado local" : "larger land is part of the local market");
    if (val("budget") === "entry" && r.entry) bits.push(es ? "a veces los lotes pequeños empiezan baratos, y eso no es cierto en cada ciudad" : "small-lot prices sometimes start low, which is not true in every city");
    if (val("isolation") === "city" && r.isol === 0) bits.push(es ? "los servicios diarios son de escala de ciudad" : "daily services are city-scale");
    if (!bits.length) bits.push(es ? "es el lugar más cercano de esta lista, con la advertencia de abajo" : "it is the closest of the places on this list, with the caution underneath");
    var sentence = bits.slice(0, 3).join("; ") + ".";
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var ranked = regions.map(function (r) {
      return { r: r, s: score(r) };
    }).sort(function (a, b) { return b.s - a.s; });
    var out = document.getElementById("quiz-out");
    var html = es
      ? '<h2>Lea esto primero</h2><p>Esto es una lista de lectura según sus respuestas. No es una recomendación de compra, y no conoce su salud.</p>'
      : '<h2>Read these first</h2><p>This is a reading list based on your answers. It is not a recommendation to buy, and it does not know your health.</p>';
    ranked.slice(0, 3).forEach(function (item, i) {
      var caution = es ? (cautionEs[item.r.id] || item.r.caution) : item.r.caution;
      var whyLabel = es ? "Por qué subió." : "Why it rose.";
      var readLabel = es ? "Lea esto antes de encariñarse." : "Read before you get attached.";
      var matchLabel = es ? "Coincidencia " : "Match ";
      html += '<article class="result"><p class="tag">' + matchLabel + (i + 1) + '</p><h3><a href="' + item.r.href + '">' + item.r.name + '</a></h3>';
      html += "<p><strong>" + whyLabel + "</strong> " + why(item.r) + "</p>";
      html += "<p><strong>" + readLabel + "</strong> " + caution + "</p></article>";
    });
    html += es
      ? '<p class="actions"><a class="btn" href="contact.html">Enviar el ingreso</a> <a class="btn secondary" href="start.html">Volver a las preguntas</a></p>'
      : '<p class="actions"><a class="btn" href="contact.html">Send an intake</a> <a class="btn secondary" href="start.html">Revisit the questions</a></p>';
    out.innerHTML = html;
    out.hidden = false;
    out.focus();
  });
})();
