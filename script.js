var listArr = [];

async function loadData() {
  try {
    const response = await fetch('cond-data.json');
    const data = await response.json();
    const listArr = data.cards;
    createButtons(listArr);
  } catch (error) {
    console.log('Error:', error);
  }
}

// Run the loadData function initially
loadData();

// Run the loadData function every 30 seconds
setInterval(loadData, 30000);

function createButtons(listArr) {
  let cardContainer = document.getElementById("card-container");
  var textArea = document.getElementById("offlineNotification");
  textArea.value = "";

  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  listArr.forEach((condominio) => {

    let card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    const nomeCondominio = document.createElement("p")
    nomeCondominio.innerHTML = condominio.nome;
    nomeCondominio.className = "nome";
    card.appendChild(nomeCondominio);

    const image = new Image();
    image.src = `http://${condominio.dominio}:797/mikrotik_logo.png`;
    image.addEventListener("error", function () {
      // Image failed to load, change background color to red
      card.style.backgroundColor = "red";
      textArea.value += `${condominio.nome} \n`;

    });

    image.addEventListener("load", function () {
      // Image is successfully loaded, change background color to green
      card.style.backgroundColor = "green";
    });

    const troncoButton = document.createElement("button");
    troncoButton.innerHTML = condominio.tronco;
    troncoButton.className = "troncoButton";
    troncoButton.id = "troncoButton";
    troncoButton.addEventListener("click", function (event) {
      event.preventDefault();
      navigator.clipboard
        .writeText(condominio.tronco)
        .catch(function (err) {
          console.error("Erro ao copiar o link: ", err);
        });
    });
    if (condominio.autonomo) {
      troncoButton.style.backgroundColor = "red";
      troncoButton.style.color = "white";
    }
    card.appendChild(troncoButton);

    const mikrotikButton = document.createElement("button");
    mikrotikButton.innerHTML = `Mikrotik`;
    mikrotikButton.addEventListener("click", function (event) {
      event.preventDefault();
      const url = `${condominio.dominio}:7890`;
      navigator.clipboard
        .writeText(url)
        .then(function () {
          // alert(`${item}:7894 copiado`); //alerta ao copiar o link do mikrotik
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
      window.open(`http://${condominio.dominio}:8889`, "_blank");
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

    const dvrButton = document.createElement("button");
    dvrButton.innerHTML = "DVR";
    dvrButton.addEventListener("click", function () {
      window.open(`http://${condominio.dominiodvr}`, "_blank");
    });
    dvrButton.className = "button";
    card.appendChild(dvrButton);

    if (condominio.dominiodvr2 != "") {
      const dvrButton = document.createElement("button");
      dvrButton.innerHTML = "DVR 2";
      dvrButton.addEventListener("click", function () {
        window.open(`http://${condominio.dominiodvr2}`, "_blank");
      });
      dvrButton.className = "button";
      card.appendChild(dvrButton);
    }

    if (condominio.dominiodvr3 != "") {
      const dvrButton = document.createElement("button");
      dvrButton.innerHTML = "DVR 3";
      dvrButton.addEventListener("click", function () {
        window.open(`http://${condominio.dominiodvr3}`, "_blank");
      });
      dvrButton.className = "button";
      card.appendChild(dvrButton);
    }

    cardContainer.appendChild(card);
  });
}

// function checkConection(){
//   var cards = document.getElementsByClassName('card');

//   Array.from(cards).forEach(function (card) {
//     var name = card.getElementsByTagName('p')[0].textContent.toLowerCase();
//     var tronco = card.getElementsByTagName('button')[0].textContent.toLowerCase();
//     if (name.includes(input) || tronco.includes(input)) {
//       card.style.display = 'block';
//     } else {
//       card.style.display = 'none';
//     }
//   });

// }



document.getElementById('search-bar').addEventListener("input", matchingCards);
document.getElementById('search-bar').addEventListener("change", matchingCards);

function matchingCards() {
  var input = this.value.toLowerCase();
  var cards = document.getElementsByClassName('card');
  console.log("match executado");

  Array.from(cards).forEach(function (card) {
    var name = card.getElementsByTagName('p')[0].textContent.toLowerCase();
    var tronco = card.getElementsByTagName('button')[0].textContent.toLowerCase();
    if (name.includes(input) || tronco.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.getElementById('eraser').addEventListener("click", function () {
  var input = document.getElementById('search-bar');
  input.value = "";
  var cards = document.getElementsByClassName('card');

  Array.from(cards).forEach(function (card) {
    card.style.display = 'block';
  });

  input.focus();
})

function runCreateButtons(listArr) {
  createButtons(listArr);
  setTimeout(function () {
    runCreateButtons(listArr);
  }, 60000);
}



