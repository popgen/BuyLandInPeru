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
    var price = num("price");
    var exempt = num("exempt");
    var rate = num("rate");
    var notary = num("notary");
    var registry = num("registry");
    var legal = num("legal");
    var currency = document.getElementById("currency").value;
    var errors = [];
    if (price === null || !(price >= 0)) errors.push("Enter a purchase price of zero or more.");
    if (exempt === null || !(exempt >= 0)) errors.push("Enter an exempt amount, or 0 if you have not confirmed one yet.");
    if (rate === null || !(rate >= 0)) errors.push("Enter the alcabala rate to use. 3 is the usual assumption.");
    ["notary", "registry", "legal"].forEach(function (id, i) {
      var v = [notary, registry, legal][i];
      if (v === null || !(v >= 0)) errors.push("Enter 0 or an estimate for every fee line.");
    });
    if (errors.length) {
      out.hidden = false;
      out.innerHTML = "<h3>Check the inputs</h3><p>" + errors.join(" ") + "</p>";
      return;
    }
    var base = Math.max(0, price - exempt);
    var tax = base * (rate / 100);
    var fees = notary + registry + legal;
    var total = tax + fees;
    var zeroFees = [];
    if (notary === 0) zeroFees.push("notary");
    if (registry === 0) zeroFees.push("registration");
    if (legal === 0) zeroFees.push("legal");
    var html = "<h3>Illustration only</h3>";
    html += "<p>Confirm every figure with a Peruvian notary, your lawyer, and the current UIT. This is not a quote, a tax bill, or an invoice.</p>";
    html += "<p>Price: <strong>" + money(price, currency) + "</strong><br>";
    html += "Your exempt-amount assumption: <strong>" + money(exempt, currency) + "</strong><br>";
    html += "Amount the rate is applied to: <strong>" + money(base, currency) + "</strong><br>";
    html += "Alcabala at your rate of " + rate + "%: <strong>" + money(tax, currency) + "</strong><br>";
    html += "Notary + registration + legal estimates: <strong>" + money(fees, currency) + "</strong><br>";
    html += "Illustrated total of those lines: <strong>" + money(total, currency) + "</strong></p>";
    if (exempt === 0) {
      html += "<p>The exempt amount is 0, so this overstates alcabala until you type the current exemption.</p>";
    }
    if (zeroFees.length) {
      html += "<p>These lines are 0 because you left them at 0: " + zeroFees.join(", ") + ". Real closings include those costs.</p>";
    }
    html += "<p>Currency label: " + currency + ". This page does not convert soles to dollars. Enter every number in the same currency. The seller may also owe tax on a gain. That is their issue to price, and it is not calculated here.</p>";
    out.hidden = false;
    out.innerHTML = html;
  });
})();
