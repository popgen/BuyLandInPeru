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
    ("es/index.html", "Inicio", "home"),
    ("es/start.html", "Empezar", "start"),
    ("es/scout.html", "Recorridos", "scout"),
    ("es/contact.html", "Contacto", "contact"),
]
ES_MORE = [
    ("places.html", "Lugares"),
    ("quiz.html", "Cuestionario de regiones"),
    ("find.html", "Buscar inmueble"),
    ("legal.html", "Debida diligencia"),
    ("money.html", "Dinero"),
    ("after.html", "Después de comprar"),
    ("residency.html", "Residencia"),
    ("services.html", "Servicios"),
    ("timeline.html", "Plazos"),
    ("checklist.html", "Lista"),
    ("glossary.html", "Glosario"),
    ("cases.html", "Casos"),
    ("journal.html", "Diario"),
    ("about.html", "Acerca de"),
    ("faq.html", "Preguntas"),
]
ES_PAIRS = {
    "index.html": "es/index.html",
    "start.html": "es/start.html",
    "scout.html": "es/scout.html",
    "contact.html": "es/contact.html",
}

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
    ("contact.html", "Contact", "Send the discovery questions. Fees are quoted after intake.", "contact", "en", []),
    ("faq.html", "Questions people ask", "Residency, budgets, lawyers, forest land, and what a visit includes.", "faq", "en", []),
    ("quiz.html", "Region matching quiz", "Match climate, health care, and budget to region guides. Nothing is stored.", "quiz", "en", ["js/quiz.js"]),
    ("es/index.html", "Inicio", "Ayuda en el terreno para comprar un inmueble en el Perú.", "home", "es", []),
    ("es/start.html", "Por dónde empezar", "Preguntas de ingreso, altura, costos reales y alquilar antes de comprar.", "start", "es", []),
    ("es/scout.html", "Recorridos en el terreno", "El servicio central: caminar el inmueble para que usted no adivine por fotos.", "scout", "es", []),
    ("es/contact.html", "Contacto", "Envíe las preguntas de descubrimiento. Los honorarios se cotizan después.", "contact", "es", []),
]


def prefix_for(path: str) -> str:
    depth = path.count("/")
    return "../" * depth


def link_path(target: str, src: str) -> str:
    return prefix_for(src) + target


def current_attr(key, current):
    return ' aria-current="page"' if key == current else ""


def lang_switch(path: str) -> str:
    if path.startswith("es/"):
        en_target = path[3:]
        return (
            f'<p class="lang"><a href="{prefix_for(path)}{en_target}" lang="en" hreflang="en">EN</a>'
            f'<a href="{path.split("/")[-1]}" lang="es" hreflang="es" aria-current="true">ES</a></p>'
        )
    es_target = ES_PAIRS.get(path, "es/index.html")
    en_current = ' aria-current="true"'
    title = "" if path in ES_PAIRS else ' title="Spanish home. This page is still in English."'
    return (
        f'<p class="lang"><a href="{prefix_for(path)}{path}" lang="en" hreflang="en"{en_current}>EN</a>'
        f'<a href="{prefix_for(path)}{es_target}" lang="es" hreflang="es"{title}>ES</a></p>'
    )


def nav_html(path, current, lang):
    if lang == "es":
        items = []
        for href, label, key in ES_PRIMARY:
            items.append(
                f'<li><a href="{link_path(href, path)}"{current_attr(key, current)}>{label}</a></li>'
            )
        more = []
        for href, label in ES_MORE:
            more.append(f'<li><a href="{link_path(href, path)}">{label} · English</a></li>')
        return (
            '<nav class="nav-panel" id="nav-panel" aria-label="Principal">'
            f'<ul class="nav-list">{"".join(items)}</ul>'
            '<details class="more"><summary>Más, en inglés</summary>'
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
          <h2>Peruvian Dreamland</h2>
          <p>Acompaño a personas que compran un inmueble en el Perú y recorro el terreno. No soy su abogado, ni su notario, ni su contador.</p>
          <p><a href="{p}es/index.html">Inicio</a></p>
        </div>
        <div>
          <h2>En español</h2>
          <ul class="footer-nav">
            <li><a href="{p}es/index.html">Inicio</a></li>
            <li><a href="{p}es/start.html">Empezar</a></li>
            <li><a href="{p}es/scout.html">Recorridos</a></li>
            <li><a href="{p}es/contact.html">Contacto</a></li>
          </ul>
          <p>El resto del sitio sigue en inglés. La traducción completa está en camino.</p>
        </div>
        <div>
          <h2>Escribir</h2>
          <p><a href="mailto:hello@peruviandreamland.example">hello@peruviandreamland.example</a><br>
          <span class="fine">Dirección de ejemplo. Hay que reemplazarla.</span></p>
        </div>
        """
        disc = DISCLAIMER_ES
        return f"""
    <footer class="site-footer">
      <div class="wrap footer-grid">{cols}</div>
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
          <p class="fine">En español por ahora: <a href="{p}es/index.html">inicio</a>, <a href="{p}es/start.html">empezar</a>, <a href="{p}es/scout.html">recorridos</a>, <a href="{p}es/contact.html">contacto</a>. Full Spanish is in progress.</p>
        </div>
        <div>
          <h2>Write</h2>
          <p><a href="mailto:hello@peruviandreamland.example">hello@peruviandreamland.example</a><br>
          <span class="fine">Placeholder address. Replace it before you publish.</span></p>
        </div>
        """
        disc = DISCLAIMER
    return f"""
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <h2>Peruvian Dreamland</h2>
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
    extra = "".join(f'<script src="{p}{src}" defer></script>' for src in scripts)
    home = "es/index.html" if lang == "es" else "index.html"
    banner = ""
    if lang == "es":
        banner = f'''<div class="banner"><div class="wrap">Estas páginas están en español: inicio, empezar, recorridos y contacto. El resto del sitio sigue en inglés. <a href="{p}places.html">Lugares</a> y las demás guías, por ahora, se leen en inglés.</div></div>'''
    html_lang = lang
    return f"""<!DOCTYPE html>
<html lang="{html_lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title} — Peruvian Dreamland</title>
  <meta name="description" content="{desc}">
  <meta property="og:title" content="{title} — Peruvian Dreamland">
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
        <span><strong>Peruvian Dreamland</strong><small>{"Guía en el terreno" if lang == "es" else "On-the-ground property guidance"}</small></span>
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
  {banner}
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
