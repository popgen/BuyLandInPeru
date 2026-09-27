(function () {
  var form = document.getElementById("calc");
  if (!form) return;
  var out = document.getElementById("calc-out");

  function num(id) {
    var raw = document.getElementById(id).value.trim().replace(/,/g, "");
    if (raw === "") return null;
    var n = Number(raw);
    return Number.isFinite(n) ? n : NaN;
  }

  function money(n, currency) {
    try {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
        maximumFractionDigits: 2
      }).format(n);
    } catch (err) {
      return n.toFixed(2) + " " + currency;
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var es = document.documentElement.lang === "es";
    var price = num("price");
    var exempt = num("exempt");
    var rate = num("rate");
    var notary = num("notary");
    var registry = num("registry");
    var legal = num("legal");
    var currency = document.getElementById("currency").value;
    var errors = [];
    if (price === null || !(price >= 0)) errors.push(es ? "Escriba un precio de compra de cero o más." : "Enter a purchase price of zero or more.");
    if (exempt === null || !(exempt >= 0)) errors.push(es ? "Escriba un monto exento, o 0 si todavía no lo confirmó." : "Enter an exempt amount, or 0 if you have not confirmed one yet.");
    if (rate === null || !(rate >= 0)) errors.push(es ? "Escriba la tasa de alcabala. 3 es la suposición habitual." : "Enter the alcabala rate to use. 3 is the usual assumption.");
    ["notary", "registry", "legal"].forEach(function (id, i) {
      var v = [notary, registry, legal][i];
      if (v === null || !(v >= 0)) errors.push(es ? "Escriba 0 o un estimado en cada línea de honorarios." : "Enter 0 or an estimate for every fee line.");
    });
    if (errors.length) {
      out.hidden = false;
      out.innerHTML = (es ? "<h3>Revise los datos</h3><p>" : "<h3>Check the inputs</h3><p>") + errors.join(" ") + "</p>";
      return;
    }
    var base = Math.max(0, price - exempt);
    var tax = base * (rate / 100);
    var fees = notary + registry + legal;
    var total = tax + fees;
    var zeroFees = [];
    if (notary === 0) zeroFees.push(es ? "notario" : "notary");
    if (registry === 0) zeroFees.push(es ? "inscripción" : "registration");
    if (legal === 0) zeroFees.push(es ? "abogado" : "legal");
    var html = es ? "<h3>Solo una ilustración</h3>" : "<h3>Illustration only</h3>";
    html += es
      ? "<p>Confirme cada cifra con un notario peruano, su abogado y la UIT vigente. Esto no es una cotización, una liquidación de impuestos ni una factura.</p>"
      : "<p>Confirm every figure with a Peruvian notary, your lawyer, and the current UIT. This is not a quote, a tax bill, or an invoice.</p>";
    if (es) {
      html += "<p>Precio: <strong>" + money(price, currency) + "</strong><br>";
      html += "Su supuesto de monto exento: <strong>" + money(exempt, currency) + "</strong><br>";
      html += "Monto al que se aplica la tasa: <strong>" + money(base, currency) + "</strong><br>";
      html += "Alcabala a su tasa de " + rate + "%: <strong>" + money(tax, currency) + "</strong><br>";
      html += "Estimados de notario, inscripción y abogado: <strong>" + money(fees, currency) + "</strong><br>";
      html += "Total ilustrado de esas líneas: <strong>" + money(total, currency) + "</strong></p>";
    } else {
      html += "<p>Price: <strong>" + money(price, currency) + "</strong><br>";
      html += "Your exempt-amount assumption: <strong>" + money(exempt, currency) + "</strong><br>";
      html += "Amount the rate is applied to: <strong>" + money(base, currency) + "</strong><br>";
      html += "Alcabala at your rate of " + rate + "%: <strong>" + money(tax, currency) + "</strong><br>";
      html += "Notary + registration + legal estimates: <strong>" + money(fees, currency) + "</strong><br>";
      html += "Illustrated total of those lines: <strong>" + money(total, currency) + "</strong></p>";
    }
    if (exempt === 0) {
      html += es
        ? "<p>El monto exento es 0, así que esto exagera la alcabala hasta que escriba la exención vigente.</p>"
        : "<p>The exempt amount is 0, so this overstates alcabala until you type the current exemption.</p>";
    }
    if (zeroFees.length) {
      html += es
        ? "<p>Estas líneas están en 0 porque las dejó en 0: " + zeroFees.join(", ") + ". Un cierre real incluye esos costos.</p>"
        : "<p>These lines are 0 because you left them at 0: " + zeroFees.join(", ") + ". Real closings include those costs.</p>";
    }
    html += es
      ? "<p>Etiqueta de moneda: " + currency + ". Esta página no convierte soles a dólares. Escriba cada número en la misma moneda. El vendedor también puede deber impuesto sobre una ganancia. Eso lo define su contador, y aquí no se calcula.</p>"
      : "<p>Currency label: " + currency + ". This page does not convert soles to dollars. Enter every number in the same currency. The seller may also owe tax on a gain. That is their issue to price, and it is not calculated here.</p>";
    out.hidden = false;
    out.innerHTML = html;
  });
})();
