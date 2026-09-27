# -*- coding: utf-8 -*-
"""Wrap fragment HTML into full pages. Run from anywhere: python build_site.py"""
import html
import json
import re
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
ORIGIN = "https://buylandinperu.com"

PAGES = [
    ("index.html", "Home", "On-the-ground help for people outside Peru buying a small lot, a house, or forest land, with clear limits on legal advice, investment, and residency.", "home", "en", []),
    ("start.html", "What you actually want", "Questions to sort what you want before you shop: climate, altitude, budget, months in Peru, and whether renting there first is the wiser step.", "start", "en", []),
    ("places.html", "Where to live in Peru", "Practical notes on Lima, the north coast, Arequipa, Cusco, the Sacred Valley, selva alta, Oxapampa, Iquitos, Cajamarca, Huancayo, and Puno for daily life.", "places", "en", []),
    ("find.html", "Finding property", "How property is actually found in Peru: portals, se vende signs, Facebook, and off-market leads, and why many real options never appear online.", "find", "en", []),
    ("scout.html", "On-the-ground scouting", "A walk of the property for buyers who are not in Peru: neighbors, boundaries, services, and photos so you are not guessing from a listing on the ground.", "scout", "en", []),
    ("legal.html", "Due diligence and the legal path", "Plain orientation to SUNARP, title, notaries, possession, border limits, and the checks that matter before you sign or send a deposit in Peru.", "legal", "en", []),
    ("money.html", "Money, taxes, and closing costs", "How buyers usually pay in Peru, alcabala and closing costs, and an illustrative calculator. Figures are orientation, not a quote or tax advice.", "money", "en", ["js/calc.js"]),
    ("residency.html", "Residency and immigration", "Buying a house or land in Peru does not grant residency or a visa. A high-level look at how immigration stays a separate process from the purchase.", "residency", "en", []),
    ("after.html", "After the purchase", "What changes after the deed in Peru: caretakers, construction, utilities, rentals, and settling in when you do not live on the property full time.", "after", "en", []),
    ("services.html", "Services", "Consultation, on-the-ground scouting, remote viewing, purchase accompaniment, and later oversight for property in Peru. Fees are quoted after a real intake.", "services", "en", []),
    ("timeline.html", "A typical timeline", "A typical sequence from first questions to a signed purchase in Peru, with ranges that are ordinary, not a promise of speed or a sure outcome.", "timeline", "en", []),
    ("checklist.html", "Due diligence checklist", "A printable due diligence checklist for buying property in Peru: title, boundaries, services, taxes, and the questions to ask before you pay.", "checklist", "en", []),
    ("glossary.html", "Glossary", "Peruvian property words such as SUNARP, partida registral, alcabala, and poder, with a short plain-English explanation of each term used in a purchase.", "glossary", "en", []),
    ("cases.html", "Case notes", "Notes on purchases the guide made before and after Peruvian citizenship, in the owner's words. Not testimonials and not a results promise from those sales.", "cases", "en", []),
    ("journal.html", "Journal", "Essays from buying property in Peru: ordinary mistakes, what cheap land looks like, altitude, and why so many listings never go online for buyers abroad.", "journal", "en", []),
    ("journal/mistakes.html", "Mistakes foreigners make", "Ordinary mistakes foreigners make when buying property in Peru, from skipping a visit to treating a listing photo as the whole story of the land.", "journal", "en", []),
    ("journal/cheap.html", "What cheap property looks like", "What a low asking price usually means on the ground in Peru: missing services, unclear title, access, and work the photo does not show a buyer.", "journal", "en", []),
    ("journal/altitude.html", "Altitude is not a detail", "Why Cusco, Arequipa, Huancayo, and Puno are not a weekend test. Altitude changes sleep, work, and whether you will actually stay there year round.", "journal", "en", []),
    ("journal/listings.html", "Why the listings are incomplete", "Why Peruvian listings are incomplete: se vende signs, portals, Facebook groups, and property that is never posted online at all for a foreign buyer.", "journal", "en", []),
    ("about.html", "About", "A US-born guide who later became a Peruvian citizen, what the work covers, and the limits: not a lawyer, notary, or investment advisor on this site.", "about", "en", []),
    ("contact.html", "Contact", "Send a note about buying property in Peru. You get a thank-you with a link to book a Google Meet. Fees are quoted after intake, when the work is clear.", "contact", "en", ["js/booking.js"]),
    ("faq.html", "Questions people ask", "Short answers on buying property in Peru: residency, small budgets, forest land, lawyers, visit reports, fees, and how to start with this guide.", "faq", "en", []),
    ("quiz.html", "Region matching quiz", "A short quiz that matches climate, health care, and budget to region guides in Peru. Nothing is stored. It is a starting sort, not advice for you.", "quiz", "en", ["js/quiz.js"]),
    ("es/index.html", "Inicio", "Ayuda en el terreno para quien compra desde fuera del Perú: un lote pequeño, una casa o bosque, con límites claros sobre abogados, inversión y residencia.", "home", "es", []),
    ("es/start.html", "Por dónde empezar", "Preguntas para ordenar lo que busca antes de mirar avisos: clima, altura, presupuesto, meses en el Perú y si conviene alquilar primero de verdad.", "start", "es", []),
    ("es/places.html", "Dónde vivir en el Perú", "Notas prácticas sobre Lima, la costa norte, Arequipa, Cusco, el Valle Sagrado, la selva alta, Oxapampa, Iquitos, Cajamarca, Huancayo y Puno.", "places", "es", []),
    ("es/find.html", "Cómo se encuentra un inmueble", "Cómo se encuentra de verdad un inmueble en el Perú: portales, letreros de se vende, Facebook y contactos. Mucho nunca se publica en internet.", "find", "es", []),
    ("es/scout.html", "Recorridos en el terreno", "Un recorrido del inmueble para quien no está en el Perú: vecinos, linderos, servicios y fotos, para no adivinar desde un aviso que usted no puede ver.", "scout", "es", []),
    ("es/legal.html", "Debida diligencia y el camino legal", "Orientación clara sobre SUNARP, partida registral, notario, posesión y la zona de frontera, antes de firmar una compra en el Perú. No reemplaza a un abogado.", "legal", "es", []),
    ("es/money.html", "Dinero, impuestos y costos de cierre", "Cómo suele pagar el comprador en el Perú, la alcabala y los costos de cierre, más una calculadora ilustrativa. No es cotización ni asesoría.", "money", "es", ["js/calc.js"]),
    ("es/residency.html", "Residencia e inmigración", "Comprar una casa o un terreno en el Perú no otorga residencia ni visa. Una mirada breve a por qué la inmigración es otro trámite. Confirme las reglas vigentes.", "residency", "es", []),
    ("es/after.html", "Después de la compra", "Qué cambia después de la escritura: guardianes, obra, servicios, alquiler y cómo instalarse si no vive en el inmueble todo el año en el Perú.", "after", "es", []),
    ("es/services.html", "Servicios", "Consulta, recorrido en el terreno, visita remota, acompañamiento de compra y supervisión posterior. Los honorarios se cotizan tras el ingreso.", "services", "es", []),
    ("es/timeline.html", "Un plazo típico", "Una secuencia típica desde las primeras preguntas hasta la firma en el Perú, con plazos ordinarios y sin promesa de rapidez ni resultado de una compra.", "timeline", "es", []),
    ("es/checklist.html", "Lista de debida diligencia", "Una lista imprimible de debida diligencia para comprar en el Perú: título, linderos, servicios, impuestos y qué preguntar antes de pagar al vendedor.", "checklist", "es", []),
    ("es/glossary.html", "Glosario", "Términos inmobiliarios del Perú, como SUNARP, partida registral, alcabala y poder, con una explicación corta en español de cada uno en una compra.", "glossary", "es", []),
    ("es/cases.html", "Notas de casos", "Notas de compras del guía antes y después de la ciudadanía peruana, en sus palabras. No son testimonios ni una promesa de resultados del autor.", "cases", "es", []),
    ("es/journal.html", "Diario", "Ensayos sobre comprar un inmueble en el Perú: errores ordinarios, cómo se ve lo barato, la altura y por qué tantos avisos no salen en línea.", "journal", "es", []),
    ("es/journal/mistakes.html", "Errores que cometen los extranjeros", "Errores ordinarios de quienes compran desde fuera: saltarse la visita o tomar la foto del aviso como si fuera toda la historia del inmueble.", "journal", "es", []),
    ("es/journal/cheap.html", "Cómo se ve una propiedad barata", "Qué suele significar un precio bajo en el terreno: servicios que faltan, título poco claro, acceso y obra que la foto no muestra al comprador.", "journal", "es", []),
    ("es/journal/altitude.html", "La altura no es un detalle", "Por qué Cusco, Arequipa, Huancayo y Puno no se prueban en un fin de semana. La altura cambia el sueño, el trabajo y si de verdad se queda allí.", "journal", "es", []),
    ("es/journal/listings.html", "Por qué los avisos están incompletos", "Por qué los avisos en el Perú están incompletos: letreros de se vende, portales, Facebook y predios que nunca se publican para quien busca desde fuera.", "journal", "es", []),
    ("es/about.html", "Acerca de", "Un guía nacido en Estados Unidos que luego se hizo ciudadano peruano, qué cubre el trabajo y sus límites: no es abogado, notario ni asesor de inversión.", "about", "es", []),
    ("es/contact.html", "Contacto", "Envíe una nota sobre comprar un inmueble en el Perú. Recibe un agradecimiento con enlace para reservar una reunión. Los honorarios van después.", "contact", "es", ["js/booking.js"]),
    ("es/faq.html", "Preguntas frecuentes", "Respuestas cortas sobre comprar en el Perú: residencia, presupuestos pequeños, bosque, abogados, informes de visita, honorarios y cómo empezar.", "faq", "es", []),
    ("es/quiz.html", "Cuestionario de regiones", "Un cuestionario breve que cruza clima, salud y presupuesto con las guías de región del Perú. No se guarda nada. Es un orden inicial, no asesoría.", "quiz", "es", ["js/quiz.js"]),
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


def public_url(path: str) -> str:
    if path == "index.html":
        return ORIGIN + "/"
    if path == "es/index.html":
        return ORIGIN + "/es/"
    return ORIGIN + "/" + path


def language_pair(path: str):
    if path.startswith("es/"):
        return path[3:], path
    return path, "es/" + path


def plain_text(fragment: str) -> str:
    text = re.sub(r"<[^>]+>", " ", fragment)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def faq_entities(body: str):
    parts = re.split(r"<h2>(.*?)</h2>", body, flags=re.S)
    entities = []
    for index in range(1, len(parts) - 1, 2):
        question = plain_text(parts[index])
        answer_match = re.search(r"<p>(.*?)</p>", parts[index + 1], flags=re.S)
        if not question or not answer_match:
            continue
        answer = plain_text(answer_match.group(1))
        if not answer:
            continue
        entities.append(
            {
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {"@type": "Answer", "text": answer},
            }
        )
    return entities


def breadcrumb(path: str, title: str, lang: str):
    home_name = "Inicio" if lang == "es" else "Home"
    home_path = "es/index.html" if lang == "es" else "index.html"
    items = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": home_name,
            "item": public_url(home_path),
        }
    ]
    position = 2
    if path.startswith("journal/") or path.startswith("es/journal/"):
        journal_path = "es/journal.html" if lang == "es" else "journal.html"
        items.append(
            {
                "@type": "ListItem",
                "position": position,
                "name": "Diario" if lang == "es" else "Journal",
                "item": public_url(journal_path),
            }
        )
        position += 1
    items.append(
        {
            "@type": "ListItem",
            "position": position,
            "name": title,
            "item": public_url(path),
        }
    )
    return {"@type": "BreadcrumbList", "itemListElement": items}


def json_ld(path: str, title: str, lang: str, body: str) -> str:
    graph = [
        {
            "@type": ["Organization", "ProfessionalService"],
            "name": BRAND,
            "url": ORIGIN + "/",
            "email": EMAIL,
            "areaServed": {"@type": "Country", "name": "Peru"},
            "availableLanguage": ["English", "Spanish"],
        }
    ]
    if path in ("index.html", "es/index.html"):
        graph.append(
            {
                "@type": "WebSite",
                "name": BRAND,
                "url": ORIGIN + "/",
                "inLanguage": ["en", "es"],
            }
        )
    else:
        graph.append(breadcrumb(path, title, lang))
    if path.endswith("faq.html"):
        questions = faq_entities(body)
        if questions:
            graph.append({"@type": "FAQPage", "mainEntity": questions})
    payload = {"@context": "https://schema.org", "@graph": graph}
    raw = json.dumps(payload, ensure_ascii=False, indent=2)
    raw = raw.replace("<", "\\u003c")
    return f'<script type="application/ld+json">\n{raw}\n  </script>'


def head_meta(path: str, title: str, desc: str, lang: str, body: str) -> str:
    full_title = f"{title} — {BRAND}"
    esc_title = html.escape(full_title, quote=True)
    esc_desc = html.escape(desc, quote=True)
    en_path, es_path = language_pair(path)
    canonical = html.escape(public_url(path), quote=True)
    en_url = html.escape(public_url(en_path), quote=True)
    es_url = html.escape(public_url(es_path), quote=True)
    locale = "es_ES" if lang == "es" else "en_US"
    locale_alt = "en_US" if lang == "es" else "es_ES"
    return f"""  <title>{esc_title}</title>
  <meta name="description" content="{esc_desc}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="{canonical}">
  <link rel="alternate" hreflang="en" href="{en_url}">
  <link rel="alternate" hreflang="es" href="{es_url}">
  <link rel="alternate" hreflang="x-default" href="{en_url}">
  <meta property="og:title" content="{esc_title}">
  <meta property="og:description" content="{esc_desc}">
  <meta property="og:url" content="{canonical}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="{locale}">
  <meta property="og:locale:alternate" content="{locale_alt}">
  <meta name="twitter:card" content="summary">
  {json_ld(path, title, lang, body)}"""


def sitemap_meta(path: str):
    if path == "index.html":
        return "weekly", "1.0"
    if path == "es/index.html":
        return "weekly", "0.9"
    if path.startswith("journal/") or path.startswith("es/journal/"):
        return "yearly", "0.4"
    if path in ("journal.html", "es/journal.html"):
        return "monthly", "0.5"
    if path in (
        "contact.html",
        "es/contact.html",
        "start.html",
        "es/start.html",
        "faq.html",
        "es/faq.html",
    ):
        return "monthly", "0.8"
    return "monthly", "0.6"


def write_sitemap():
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for path, _title, _desc, _current, _lang, _scripts in PAGES:
        freq, priority = sitemap_meta(path)
        loc = public_url(path)
        lines.extend(
            [
                "  <url>",
                f"    <loc>{loc}</loc>",
                f"    <changefreq>{freq}</changefreq>",
                f"    <priority>{priority}</priority>",
                "  </url>",
            ]
        )
    lines.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("wrote sitemap.xml", len(PAGES))


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
{head_meta(path, title, desc, lang, body)}
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
        full_title = f"{title} — {BRAND}"
        if len(full_title) > 60 or not 140 <= len(desc) <= 160:
            print("LENGTH", path, len(full_title), len(desc))
        out.write_text(render(path, title, desc, current, lang, scripts, body), encoding="utf-8")
        print("wrote", path)
    write_sitemap()
    if missing:
        print("MISSING", len(missing))
        for m in missing:
            print(" -", m)


if __name__ == "__main__":
    main()
