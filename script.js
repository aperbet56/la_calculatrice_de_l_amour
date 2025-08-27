// Récupération des éléments HTML
const footerCopyrightYear = document.querySelector(".footer__text__year");
const calculateBtn = document.querySelector(".calculate__btn");
const resultLovePercentage = document.querySelector(".lovePercentage");
const yourNameInput = document.querySelector("#yourName");
const yourCrushInput = document.querySelector("#yourCrush");

// Déclaration de la fonction getCurrentYear qui va permettre l'affichage dynamique de l'année
const getCurrentYear = () => {
  // Récupération de la date actuelle stockée dans la constante date
  const date = new Date();
  //console.log(date);

  // Récupération de l'année stockée dans la constante year
  const year = date.getFullYear();
  //console.log(year);

  // Affichage dynamique de l'année en cours
  footerCopyrightYear.textContent = `${year}`;
};
// Appel de la fonction getCurrentYear()
getCurrentYear();

// Déclaration de la fonction calculateLove qui va permettre de calculer la comptabilité amoureuse entre deux personnes
const calculateLove = () => {
  let random = Math.random();
  random = random * 100 + 1;
  random = Math.floor(random);
  console.log(random);
  resultLovePercentage.textContent = `${random} %`;
};

// Déclaration de la fonction send qui permet d'envoyer les données
const send = () => {
  // Ecoute de l'événement "click" sur le bouton
  calculateBtn.addEventListener("click", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    if (yourNameInput.value.trim() == "" && yourCrushInput.value.trim() == "") {
      alert("Veuillez remplir les différents champs !!");
    } else {
      // Appel de la fonction calculateLove()
      calculateLove();
    }
  });
};
// Appel de la fonction send()
send();
