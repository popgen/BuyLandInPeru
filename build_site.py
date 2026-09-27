# -*- coding: utf-8 -*-
"""Wrap fragment HTML into full pages. Run from anywhere: python build_site.py"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent
FRAG = ROOT / "_frag"

DISCLAIMER = (
    "This is personal orientation from my own buying and living in Peru. "
    "It is not legal, tax, immigration, or investment advice. Confirm current rules "
    "with a Peruvian lawyer, a notary, and a cross-border accountant. Land values can fall. "
    "Buying property does not grant residency."
)
DISCLAIMER_ES = (
    "Esto es orientación personal, a partir de mis propias compras y de vivir en el Perú. "
    "No es asesoría legal, tributaria, migratoria ni de inversión. Confirme las reglas vigentes "
    "con un abogado peruano, un notario y un contador que entienda los dos países. "
    "El valor de un terreno puede bajar. Comprar un inmueble no otorga residencia."
)

PRIMARY = [
    ("start.html", "Start", "start"),
    ("places.html", "Places", "places"),
    ("scout.html", "Scouting", "scout"),
    ("legal.html", "Due diligence", "legal"),
    ("money.html", "Money", "money"),
    ("journal.html", "Journal", "journal"),
    ("contact.html", "Contact", "contact"),
]
MORE = [
    ("quiz.html", "Region quiz", "quiz"),
    ("find.html", "Finding property", "find"),
    ("after.html", "After you buy", "after"),
    ("residency.html", "Residency", "residency"),
    ("services.html", "Services", "services"),
    ("timeline.html", "Timeline", "timeline"),
    ("checklist.html", "Checklist", "checklist"),
    ("glossary.html", "Glossary", "glossary"),
    ("cases.html", "Case notes", "cases"),
    ("about.html", "About", "about"),
    ("faq.html", "FAQ", "faq"),
]
ES_PRIMARY = [
    ("es/start.html", "Empezar", "start"),
    ("es/places.html", "Lugares", "places"),
    ("es/scout.html", "Recorridos", "scout"),
    ("es/legal.html", "Debida diligencia", "legal"),
    ("es/money.html", "Dinero", "money"),
    ("es/journal.html", "Diario", "journal"),
    ("es/contact.html", "Contacto", "contact"),
]
ES_MORE = [
    ("es/quiz.html", "Cuestionario", "quiz"),
    ("es/find.html", "Buscar inmueble", "find"),
    ("es/after.html", "Después de comprar", "after"),
    ("es/residency.html", "Residencia", "residency"),
    ("es/services.html", "Servicios", "services"),
    ("es/timeline.html", "Plazos", "timeline"),
    ("es/checklist.html", "Lista", "checklist"),
    ("es/glossary.html", "Glosario", "glossary"),
    ("es/cases.html", "Casos", "cases"),
    ("es/about.html", "Acerca de", "about"),
    ("es/faq.html", "Preguntas", "faq"),
]
BRAND = "Buy Land in Peru"
EMAIL = "info@buylandinperu.com"

PAGES = [
    ("index.html", "Home", "On-the-ground help buying property in Peru, from a small lot to forest land.", "home", "en", []),
    ("start.html", "What you actually want", "Intake questions, altitude, a reality check, and renting before you buy.", "start", "en", []),
    ("places.html", "Where to live in Peru", "Practical region guides: climate, daily life, health care, and infrastructure.", "places", "en", []),
    ("find.html", "Finding property", "How the Peruvian market actually works, and how I look off-market.", "find", "en", []),
    ("scout.html", "On-the-ground scouting", "The core service: walking a property so you do not have to guess from photos.", "scout", "en", []),
    ("legal.html", "Due diligence and the legal path", "Plain-language orientation to title, notaries, and the checks that matter.", "legal", "en", []),
    ("money.html", "Money, taxes, and closing costs", "How money moves, what buyers usually pay, and an illustrative calculator.", "money", "en", ["js/calc.js"]),
    ("residency.html", "Residency and immigration", "Buying property does not grant residency. A high-level look at the difference.", "residency", "en", []),
    ("after.html", "After the purchase", "Caretakers, construction, utilities, rentals, and settling in.", "after", "en", []),
    ("services.html", "Services", "Consultation, scouting, remote viewing, purchase accompaniment, and later oversight.", "services", "en", []),
    ("timeline.html", "A typical timeline", "Step-by-step ranges. Typical, not guaranteed.", "timeline", "en", []),
    ("checklist.html", "Due diligence checklist", "A printable checklist for a careful purchase in Peru.", "checklist", "en", []),
    ("glossary.html", "Glossary", "Peruvian property words in Spanish, with plain English.", "glossary", "en", []),
    ("cases.html", "Case notes", "A place for purchases before and after citizenship, in the owner's words.", "cases", "en", []),
    ("journal.html", "Journal", "Essays on mistakes, cheap property, altitude, and incomplete listings.", "journal", "en", []),
    ("journal/mistakes.html", "Mistakes foreigners make", "Specific, ordinary mistakes people make when buying property in Peru.", "journal", "en", []),
    ("journal/cheap.html", "What cheap property looks like", "What a low asking price usually means on the ground.", "journal", "en", []),
    ("journal/altitude.html", "Altitude is not a detail", "Cusco, Arequipa, Huancayo, and Puno, and why a weekend is a poor test.", "journal", "en", []),
    ("journal/listings.html", "Why the listings are incomplete", "Se vende signs, portals, Facebook, and everything that never goes online.", "journal", "en", []),
    ("about.html", "About", "A US-born guide who later became a Peruvian citizen, and the limits of the work.", "about", "en", []),
    ("contact.html", "Contact", "Send the discovery questions. Fees are quoted after intake.", "contact", "en", ["js/booking.js"]),
    ("faq.html", "Questions people ask", "Residency, budgets, lawyers, forest land, and what a visit includes.", "faq", "en", []),
    ("quiz.html", "Region matching quiz", "Match climate, health care, and budget to region guides. Nothing is stored.", "quiz", "en", ["js/quiz.js"]),
    ("es/index.html", "Inicio", "Ayuda en el terreno para comprar un inmueble en el Perú, desde un lote pequeño hasta bosque.", "home", "es", []),
    ("es/start.html", "Por dónde empezar", "Preguntas de ingreso, altura, una revisión realista y alquilar antes de comprar.", "start", "es", []),
    ("es/places.html", "Dónde vivir en el Perú", "Guías prácticas por región: clima, vida diaria, salud e infraestructura.", "places", "es", []),
    ("es/find.html", "Cómo se encuentra un inmueble", "Cómo funciona de verdad el mercado peruano, y cómo busco fuera de los portales.", "find", "es", []),
    ("es/scout.html", "Recorridos en el terreno", "El servicio central: caminar el inmueble para que usted no adivine por fotos.", "scout", "es", []),
    ("es/legal.html", "Debida diligencia y el camino legal", "Orientación en lenguaje claro sobre el título, el notario y las verificaciones que importan.", "legal", "es", []),
    ("es/money.html", "Dinero, impuestos y costos de cierre", "Cómo se mueve el dinero, qué suele pagar el comprador y una calculadora ilustrativa.", "money", "es", ["js/calc.js"]),
    ("es/residency.html", "Residencia e inmigración", "Comprar un inmueble no otorga residencia. Una mirada de alto nivel a la diferencia.", "residency", "es", []),
    ("es/after.html", "Después de la compra", "Guardianes, obra, servicios, alquiler y cómo instalarse.", "after", "es", []),
    ("es/services.html", "Servicios", "Consulta, recorrido, visita remota, acompañamiento de compra y supervisión posterior.", "services", "es", []),
    ("es/timeline.html", "Un plazo típico", "Rangos paso a paso. Típicos, no garantizados.", "timeline", "es", []),
    ("es/checklist.html", "Lista de debida diligencia", "Una lista para imprimir de una compra cuidadosa en el Perú.", "checklist", "es", []),
    ("es/glossary.html", "Glosario", "Términos inmobiliarios peruanos, explicados en español.", "glossary", "es", []),
    ("es/cases.html", "Notas de casos", "Un lugar para compras antes y después de la ciudadanía, en palabras del autor.", "cases", "es", []),
    ("es/journal.html", "Diario", "Ensayos sobre errores, propiedad barata, altura y avisos incompletos.", "journal", "es", []),
    ("es/journal/mistakes.html", "Errores que cometen los extranjeros", "Errores concretos y ordinarios al comprar un inmueble en el Perú.", "journal", "es", []),
    ("es/journal/cheap.html", "Cómo se ve una propiedad barata", "Qué suele significar un precio bajo cuando se pisa el terreno.", "journal", "es", []),
    ("es/journal/altitude.html", "La altura no es un detalle", "Cusco, Arequipa, Huancayo y Puno, y por qué un fin de semana prueba poco.", "journal", "es", []),
    ("es/journal/listings.html", "Por qué los avisos están incompletos", "Letreros de se vende, portales, Facebook y lo que nunca se publica.", "journal", "es", []),
    ("es/about.html", "Acerca de", "Un guía nacido en Estados Unidos que luego se hizo ciudadano peruano, y los límites del trabajo.", "about", "es", []),
    ("es/contact.html", "Contacto", "Envíe las preguntas de descubrimiento. Los honorarios se cotizan después del ingreso.", "contact", "es", ["js/booking.js"]),
    ("es/faq.html", "Preguntas frecuentes", "Residencia, presupuestos, abogados, bosque y qué incluye una visita.", "faq", "es", []),
    ("es/quiz.html", "Cuestionario de regiones", "Cruza clima, salud y presupuesto con las guías de región. No se guarda nada.", "quiz", "es", ["js/quiz.js"]),
]


def prefix_for(path: str) -> str:
    depth = path.count("/")
    return "../" * depth


def link_path(target: str, src: str) -> str:
    return prefix_for(src) + target


def current_attr(key, current):
    return ' aria-current="page"' if key == current else ""


def lang_switch(path: str) -> str:
    p = prefix_for(path)
    if path.startswith("es/"):
        en_target = path[3:]
        es_self = path.split("/")[-1]
        return (
            f'<p class="lang"><a href="{p}{en_target}" lang="en" hreflang="en">EN</a>'
            f'<a href="{es_self}" lang="es" hreflang="es" aria-current="true">ES</a></p>'
        )
    return (
        f'<p class="lang"><a href="{p}{path}" lang="en" hreflang="en" aria-current="true">EN</a>'
        f'<a href="{p}es/{path}" lang="es" hreflang="es">ES</a></p>'
    )


def nav_html(path, current, lang):
    if lang == "es":
        items = []
        for href, label, key in ES_PRIMARY:
            items.append(
                f'<li><a href="{link_path(href, path)}"{current_attr(key, current)}>{label}</a></li>'
            )
        more = []
        for href, label, key in ES_MORE:
            more.append(
                f'<li><a href="{link_path(href, path)}"{current_attr(key, current)}>{label}</a></li>'
            )
        return (
            '<nav class="nav-panel" id="nav-panel" aria-label="Principal">'
            f'<ul class="nav-list">{"".join(items)}</ul>'
            '<details class="more"><summary>Más</summary>'
            f'<ul class="more-list">{"".join(more)}</ul></details></nav>'
        )
    items = []
    for href, label, key in PRIMARY:
        items.append(
            f'<li><a href="{link_path(href, path)}"{current_attr(key, current)}>{label}</a></li>'
        )
    more = []
    for href, label, key in MORE:
        more.append(
            f'<li><a href="{link_path(href, path)}"{current_attr(key, current)}>{label}</a></li>'
        )
    return (
        '<nav class="nav-panel" id="nav-panel" aria-label="Primary">'
        f'<ul class="nav-list">{"".join(items)}</ul>'
        '<details class="more"><summary>More</summary>'
        f'<ul class="more-list">{"".join(more)}</ul></details></nav>'
    )


def footer(path, lang):
    p = prefix_for(path)
    if lang == "es":
        cols = f"""
        <div>
          <h2>Guías</h2>
          <ul class="footer-nav">
            <li><a href="{p}es/start.html">Empezar</a></li>
            <li><a href="{p}es/places.html">Lugares</a></li>
            <li><a href="{p}es/find.html">Buscar inmueble</a></li>
            <li><a href="{p}es/scout.html">Recorridos</a></li>
            <li><a href="{p}es/legal.html">Debida diligencia</a></li>
            <li><a href="{p}es/money.html">Dinero e impuestos</a></li>
            <li><a href="{p}es/residency.html">Residencia</a></li>
            <li><a href="{p}es/after.html">Después de comprar</a></li>
          </ul>
        </div>
        <div>
          <h2>Herramientas</h2>
          <ul class="footer-nav">
            <li><a href="{p}es/quiz.html">Cuestionario</a></li>
            <li><a href="{p}es/services.html">Servicios</a></li>
            <li><a href="{p}es/timeline.html">Plazos</a></li>
            <li><a href="{p}es/checklist.html">Lista para imprimir</a></li>
            <li><a href="{p}es/glossary.html">Glosario</a></li>
            <li><a href="{p}es/journal.html">Diario</a></li>
            <li><a href="{p}es/cases.html">Casos</a></li>
            <li><a href="{p}es/about.html">Acerca de</a></li>
            <li><a href="{p}es/faq.html">Preguntas</a></li>
            <li><a href="{p}es/contact.html">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h2>Escribir</h2>
          <p><a href="mailto:{EMAIL}">{EMAIL}</a></p>
        </div>
        """
        disc = DISCLAIMER_ES
        return f"""
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <h2>{BRAND}</h2>
          <p>Acompaño a personas que compran un inmueble en el Perú y recorro el terreno. No soy su abogado, ni su notario, ni su contador.</p>
          <p><a href="{p}es/index.html">Inicio</a></p>
        </div>
        {cols}
      </div>
      <div class="wrap disclaimer"><p>{disc}</p></div>
    </footer>
    """
    else:
        cols = f"""
        <div>
          <h2>Guides</h2>
          <ul class="footer-nav">
            <li><a href="{p}start.html">Start</a></li>
            <li><a href="{p}places.html">Places</a></li>
            <li><a href="{p}find.html">Finding property</a></li>
            <li><a href="{p}scout.html">Scouting</a></li>
            <li><a href="{p}legal.html">Due diligence</a></li>
            <li><a href="{p}money.html">Money and taxes</a></li>
            <li><a href="{p}residency.html">Residency</a></li>
            <li><a href="{p}after.html">After you buy</a></li>
          </ul>
        </div>
        <div>
          <h2>Tools and trust</h2>
          <ul class="footer-nav">
            <li><a href="{p}quiz.html">Region quiz</a></li>
            <li><a href="{p}services.html">Services</a></li>
            <li><a href="{p}timeline.html">Timeline</a></li>
            <li><a href="{p}checklist.html">Printable checklist</a></li>
            <li><a href="{p}glossary.html">Glossary</a></li>
            <li><a href="{p}journal.html">Journal</a></li>
            <li><a href="{p}cases.html">Case notes</a></li>
            <li><a href="{p}about.html">About</a></li>
            <li><a href="{p}faq.html">FAQ</a></li>
            <li><a href="{p}contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2>Write</h2>
          <p><a href="mailto:{EMAIL}">{EMAIL}</a></p>
        </div>
        """
        disc = DISCLAIMER
    return f"""
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <h2>{BRAND}</h2>
          <p>I guide people through buying property in Peru and I scout on the ground. I am not your lawyer, notary, or accountant.</p>
          <p><a href="{p}index.html">Home</a></p>
        </div>
        {cols}
      </div>
      <div class="wrap disclaimer"><p>{disc}</p></div>
    </footer>
    """


def render(path, title, desc, current, lang, scripts, body):
    p = prefix_for(path)
    extra = "".join(f'\n  <script src="{p}{src}" defer></script>' for src in scripts)
    home = "es/index.html" if lang == "es" else "index.html"
    html_lang = lang
    return f"""<!DOCTYPE html>
<html lang="{html_lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title} — {BRAND}</title>
  <meta name="description" content="{desc}">
  <meta property="og:title" content="{title} — {BRAND}">
  <meta property="og:description" content="{desc}">
  <meta property="og:type" content="website">
  <link rel="icon" href="{p}favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,520;9..144,620&amp;family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{p}css/site.css">
  <script src="{p}js/site.js" defer></script>
  {extra}
</head>
<body>
  <a class="skip" href="#main">{"Saltar al contenido" if lang == "es" else "Skip to content"}</a>
  <header class="site-header">
    <div class="wrap header-bar">
      <a class="brand" href="{p}{home}">
        <span class="mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <span><strong>{BRAND}</strong><small>{"Guía en el terreno" if lang == "es" else "On-the-ground property guidance"}</small></span>
      </a>
      <div class="header-tools">
        {lang_switch(path)}
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-panel">{"Menú" if lang == "es" else "Menu"}</button>
      </div>
    </div>
    <div class="wrap">
      {nav_html(path, current, lang)}
    </div>
  </header>
  <main id="main">
{body}
  </main>
  {footer(path, lang)}
</body>
</html>
"""


def main():
    missing = []
    for path, title, desc, current, lang, scripts in PAGES:
        frag = FRAG / (path + ".frag")
        if not frag.exists():
            missing.append(str(frag))
            continue
        body = frag.read_text(encoding="utf-8")
        out = ROOT / path
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(render(path, title, desc, current, lang, scripts, body), encoding="utf-8")
        print("wrote", path)
    if missing:
        print("MISSING", len(missing))
        for m in missing:
            print(" -", m)


if __name__ == "__main__":
    main()
