document.getElementById("countrySubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("countryInput").value;
    if (value === "") {
        return;
    }
    const url = "https://v6.exchangerate-api.com/v6/9577f2e3f2bda274e39164f4/latest/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);
        let results1 = "";
        let results2 = "";
        let results3 = "";
        
        results1 += '<h2>Base Currency: ' + json.base_code + "</h2>";
        
        results2 += "<p>" + "United Arab Emirates (AED): " + json.conversion_rates.AED  + "</p>";
        results2 += "<p>" + "Afghanistan (AFN): " + json.conversion_rates.AFN + "</p>";
        results2 += "<p>" + "Argentina (ARS): " + json.conversion_rates.ARS + "</p>";
        results2 += "<p>" + "Australia (AUD): " + json.conversion_rates.AUD + "</p>";
        results2 += "<p>" + "Bolivia (BOB): " + json.conversion_rates.BOB + "</p>";
        results2 += "<p>" + "Brazil (BRL): " + json.conversion_rates.BRL + "</p>";
        results2 += "<p>" + "Belize (BZD): " + json.conversion_rates.BZD + "</p>";
        results2 += "<p>" + "Canada (CAD): " + json.conversion_rates.CAD + "</p>";
        results2 += "<p>" + "European Union (EUR): " + json.conversion_rates.EUR + "</p>";
        results2 += "<p>" + "Guatemala (GTQ): " + json.conversion_rates.GTQ + "</p>";
        results2 += "<p>" + "Japan (JPY): " + json.conversion_rates.JPY + "</p>";
        results2 += "<p>" + "Mexico (MXN): " + json.conversion_rates.MXN + "</p>";
        results2 += "<p>" + "Turkey (TRY): " + json.conversion_rates.TRY + "</p>";
        results2 += "<p>" + "Tonga (TOP): " + json.conversion_rates.TOP + "</p>";

        results3 += "<h2>Last Updated: " + json.time_last_update_utc;
        document.getElementById("baseCurrency").innerHTML = results1;
        document.getElementById("currencyResults").innerHTML = results2;
        document.getElementById("timeUpdated").innerHTML = results3;
    });
  });