const buttonContainer = document.getElementById("button-container");
var listArr = [];

(async function() {
  try {
    const response = await fetch('cond-data.json');
    const data = await response.json();
    const listArr = data.cards;
    createButtons(listArr);
    // Restante do seu código...
  } catch (error) {
    console.log('Error:', error);
  }
})();


function createButtons(listArr) {
  let cardContainer = document.getElementById("card-container");

  listArr.forEach((condominio) => {
    console.log("chegouaqui")

    let card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    const nomeCondominio = document.createElement("p")
    nomeCondominio.innerHTML = condominio.nome;
    nomeCondominio.className = "nome";

    card.appendChild(nomeCondominio);

    const mikrotikButton = document.createElement("button");
    mikrotikButton.innerHTML = `Link Mikrotik`;
    mikrotikButton.addEventListener("click", function (event) {
      event.preventDefault();
      const url = `${item}:7894`;
      navigator.clipboard
        .writeText(url)
        .then(function () {
          // alert(`${item}:7894 copiado`);
        })
        .catch(function (err) {
          console.error("Erro ao copiar o link: ", err);
        });
    });
    mikrotikButton.className = "button";
    card.appendChild(mikrotikButton);

    const ataButton = document.createElement("button");
    ataButton.innerText = "ATA";
    ataButton.addEventListener("click", function () {
      window.open(`http://${condominio.dominio}:8888`, "_blank");
    });
    ataButton.className = "button";
    card.appendChild(ataButton);

    const guaritaButton = document.createElement("button");
    guaritaButton.innerHTML = `Guarita`;
    guaritaButton.addEventListener("click", function () {
      window.open(`http://${condominio.dominio}:8093`, "_blank");
    });
    guaritaButton.className = "button";
    card.appendChild(guaritaButton);

    // card.style.display = "none";
    cardContainer.appendChild(card);
  });
}


document.getElementById('search-bar').addEventListener('input', function () {
  var input = this.value.toLowerCase();
  var cards = document.getElementsByClassName('card');

  Array.from(cards).forEach(function (card) {
    var name = card.getElementsByTagName('p')[0].textContent.toLowerCase();
    if (name.includes(input)) {
      card.style.display = 'block';
      console.log(card);
    } else {
      card.style.display = 'none';
      console.log("none");
    }
  });
});