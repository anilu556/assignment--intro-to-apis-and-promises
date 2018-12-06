const request = superagent

function addDom(flags, names, capitals) {

  var card = document.createElement("div");
  var image = document.createElement("img");
  var title = document.createElement("h4");
  var text = document.createElement("p");

  card.className = "country-card"
  image.src = flags;
  image.className = "country-flag"
  title.textContent = names;
  text.textContent = capitals;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(text);

  document.querySelector(".countries-container").appendChild(card);
}

request
  .get('https://restcountries.eu/rest/v2/all')
  .then(res => {


  res.body.forEach(function(countries){

  addDom(countries.flag, countries.name, countries.capital);
    })
  })
  .catch(err => {
        console.log("Not found", err)
     });
