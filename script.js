const buttonContainer = document.getElementById("button-container");

const listArr = [
  "cond-abiliotavares.dyndns.org",
  "cond-agragarden.dyndns.org",
  "cond-alamedadosdantas.dyndns.org",
  "cond-alamedadosipes.dyndns.org",
  "cond-alamedamonicacampos.dyndns.org",
  "cond-alicemaria.dyndns.org",
  "cond-anabella.dyndns.org",
  "cond-anacristina.dyndns.org",
  "cond-anaregina.dyndns.org",
  "cond-andarai.dyndns.org",
  "cond-andregide.dyndns.org",
  "cond-andressadealmeida.dyndns.org",
  "cond-antigua.dyndns.org",
  "cond-aquarius.dyndns.org",
  "cond-arcadia.dyndns.org",
  "cond-atalaia.dyndns.org",
  "cond-atlantico.dyndns.org",
  "cond-azaleias.dyndns.org",
  "cond-bali.dyndns.org",
  "cond-baraodemelgaco.dyndns.org",
  "cond-belavistaqualiport.dyndns.org",
  "cond-bellagio.dyndns.org",
  "cond-berna.dyndns.org",
  "cond-bongi.dyndns.org",
  "cond-bosquedelyon.dyndns.org",
  "cond-bosquetacaruna.dyndns.org",
  "cond-camilopereira.dyndns.org",
  "cond-casaalta.dyndns.org",
  "cond-casabella.dyndns.org",
  "cond-centauro.dyndns.org",
  "cond-chateaulacave.dyndns.org",
  "cond-citrino.dyndns.org",
  "cond-claricecavalcanti.dyndns.org",
  "cond-coliseu.dyndns.org",
  "cond-concorde.dyndns.org",
  "cond-congressopassaros.dyndns.org",
  "cond-conlar.dyndns.org",
  "cond-contato.dyndns.org",
  "cond-cory.dyndns.org",
  "cond-costadalmacia.dyndns.org",
  "cond-costadorio.dyndns.org",
  "cond-costarica.dyndns.org",
  "cond-costavicentina.dyndns.org",
  "cond-cotedazulr.dyndns.org",
  "cond-dalia.dyndns.org",
  "cond-davinci.dyndns.org",
  "cond-domingos.dyndns.org",
  "cond-domrodrigo.dyndns.org",
  "cond-duasnacoes.dyndns.org",
  "cond-dulcerodrigues.dyndns.org",
  "cond-ebano.dyndns.org",
  "cond-ecadequeiroz.dyndns.org",
  "cond-emanuella.dyndns.org",
  "cond-engenhopoeta.dyndns.org",
  "cond-fernandodantas.dyndns.org",
  "cond-frontenac.dyndns.org",
  "cond-genesis.dyndns.org",
  "cond-gilbertofreyre.dyndns.org",
  "cond-goldengarden.dyndns.org",
  "cond-goldensea.dyndns.org",
  "cond-greenpark.dyndns.org",
  "cond-helena.dyndns.org",
  "cond-henrique.dyndns.org",
  "cond-henriqueii.dyndns.org",
  "cond-hortenciaqualiport.dyndns.org",
  "cond-ibiruba.dyndns.org",
  "cond-ilhadecapri.dyndns.org",
  "cond-ilhaderhodes.dyndns.org",
  "cond-ilhadesantorine.dyndns.org",
  "cond-imola.dyndns.org",
  "cond-ivoneasfora.dyndns.org",
  "cond-jaqueirapark.dyndns.org",
  "cond-jaqueiraparklane.dyndns.org",
  "cond-jeronimo.dyndns.org",
  "cond-joaofrancisco.dyndns.org",
  "cond-joaopauloii.dyndns.org",
  "cond-jorgefelipe.dyndns.org",
  "cond-joseferreirapinto.dyndns.org",
  "cond-kintela.dyndns.org",
  "cond-lancaster.dyndns.org",
  "cond-lemeridien.dyndns.org",
  "cond-leonardo.dyndns.org",
  "cond-lioz.dyndns.org",
  "cond-lofthomedesign.dyndns.org",
  "cond-longbeach.dyndns.org",
  "cond-luau.dyndns.org",
  "cond-lulacardoso.dyndns.org",
  "cond-maisongaudi.dyndns.org",
  "cond-manaca1.dyndns.org",
  "cond-mangara.dyndns.org",
  "cond-manoeldebrito.dyndns.org",
  "cond-maracabeach.dyndns.org",
  "cond-marbella.dyndns.org",
  "cond-marcelinoi.dyndns.org",
  "cond-mardoce.dyndns.org",
  "cond-maresol.dyndns.org",
  "cond-mariacelina.dyndns.org",
  "cond-mariadagloria.dyndns.org",
  "cond-mariadiva.dyndns.org",
  "cond-mariaortelia.dyndns.org",
  "cond-marinasdocupe.dyndns.org",
  "cond-marquesdoparana.dyndns.org",
  "cond-massangana.dyndns.org",
  "cond-medusa.dyndns.org",
  "cond-miranteclassic.dyndns.org",
  "cond-monarca.dyndns.org",
  "cond-monica.dyndns.org",
  "cond-montarroyos.dyndns.org",
  "cond-montrealqualiport.dyndns.org",
  "cond-moradacolonial.dyndns.org",
  "cond-moradadosrodrigues.dyndns.org",
  "cond-oceantower.dyndns.org",
  "cond-pacodoatlantico.dyndns.org",
  "cond-pajucara.dyndns.org",
  "cond-pedradetoque.dyndns.org",
  "cond-pedrorodrigues.dyndns.org",
  "cond-piazzadoscarvalhos.dyndns.org",
  "cond-portalbv.dyndns.org",
  "cond-pracadabarra.dyndns.org",
  "cond-pracadasnogueiras.dyndns.org",
  "cond-pracadasorquideas.dyndns.org",
  "cond-pracadoatlantico2.dyndns.org",
  "cond-pracavianacastelo.dyndns.org",
  "cond-principedeorange.dyndns.org",
  "cond-quazar.dyndns.org",
  "cond-quintadaspalmeiras.dyndns.org",
  "cond-quintadatridade.dyndns.org",
  "cond-quintamanoel.dyndns.org",
  "cond-raffaello-recife.dyndns.org",
  "cond-residencialabc.dyndns.org",
  "cond-ricardoii.dyndns.org",
  "cond-richelieu.dyndns.org",
  "cond-sagarana.dyndns.org",
  "cond-sahara.dyndns.org",
  "cond-saintmichel.dyndns.org",
  "cond-saonicolau.dyndns.org",
  "cond-selmasuassuna.dyndns.org",
  "cond-september.dyndns.org",
  "cond-serradomar.dyndns.org",
  "cond-sh.dyndns.org",
  "cond-sinfonia.dyndns.org",
  "cond-solardecandeias.dyndns.org",
  "cond-solardoslordes.dyndns.org",
  "cond-sparta1.dyndns.org",
  "cond-tatiana.dyndns.org",
  "cond-taua.dyndns.org",
  "cond-teorema.dyndns.org",
  "cond-tiagoonofre1.dyndns.org",
  "cond-torreeiffel.dyndns.org",
  "cond-turqueza.dyndns.org",
  "cond-ubajara.dyndns.org",
  "cond-urbanov.dyndns.org",
  "cond-venezuela.dyndns.org",
  "cond-viamanzoni.dyndns.org",
  "cond-villadelporto.dyndns.org",
  "cond-villadomar.dyndns.org",
  "cond-village.dyndns.org",
  "cond-vitoria.dyndns.org",
  "cond-vivenda.dyndns.org",
  "cond-yvressesvillage.dyndns.org",
  "cond-zezo.dyndns.org",
];

(function createButtons() {
  let cardContainer = document.getElementById("card-container");

  listArr.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    const nomeCondominio = document.createElement("p");
    nomeCondominio.innerHTML = item;
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
          alert(`${item}:7894 copiado`);
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
      window.open(`http://${item}:8888`, "_blank");
    });
    ataButton.className = "button";
    card.appendChild(ataButton);

    const guaritaButton = document.createElement("button");
    guaritaButton.innerHTML = `Guarita`;
    guaritaButton.addEventListener("click", function () {
      window.open(`http://${item}:8093`, "_blank");
    });
    guaritaButton.className = "button";
    card.appendChild(guaritaButton);

    // card.style.display = "none";
    cardContainer.appendChild(card);
  });
})();


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