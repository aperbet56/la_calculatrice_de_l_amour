// Récupération des éléments HTML
const footerCopyrightYear = document.querySelector(".footer__text__year");
const calculateBtn = document.querySelector(".calculate__btn");
const resultLovePercentage = document.querySelector(".lovePercentage");
const yourNameInput = document.querySelector("#yourName");
const yourCrushInput = document.querySelector("#yourCrush");
const observation = document.querySelector(".observation");
const resetBtn = document.querySelector(".reset");
const resultTestSection = document.querySelector(".resultTest");

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

// Regex
const regex = /^(?:[^\d\W][\-\s\']{0,1}){2,20}$/i;

/**
 * Fonction firstNameAndLastNameValidation pour la validation du champ votre prénom et nom
 * @param {String} yourName
 */
const firstNameAndLastNameValidation = (yourName) => {
  // Ecoute de l'événement "input" sur l'input yourName
  yourName.addEventListener("input", (e) => {
    e.preventDefault();
    if (regex.test(yourName.value) === false) {
      // console.log("false");
      yourName.style.backgroundColor = "#ff5470";
      return false;
    } else {
      yourName.style.backgroundColor = "#00ebc7";
      // console.log("true");
      return true;
    }
  });
};
// Appel de la fonction firstNameAndLastNameValidation
firstNameAndLastNameValidation(yourName);

/**
 * Fonction firstNameAndLastNameCrushValidation pour la validation du champ votre crush prénom et nom
 * @param {String} yourCrush
 */
const firstNameAndLastNameCrushValidation = (yourCrush) => {
  // Ecoute de l'événement "input" sur l'input yourCrush
  yourCrush.addEventListener("input", (e) => {
    e.preventDefault();
    if (regex.test(yourCrush.value) === false) {
      // console.log("false");
      yourCrush.style.backgroundColor = "#ff5470";
      return false;
    } else {
      // console.log("true");
      yourCrush.style.backgroundColor = "#00ebc7";
      return true;
    }
  });
};
// Appel de la fonction firstNameAndLastNameCrushValidation
firstNameAndLastNameCrushValidation(yourCrush);

// Déclaration de la fonction calculateLove qui va permettre de calculer la comptabilité amoureuse entre deux personnes
const calculateLove = () => {
  let random = Math.random();
  random = random * 100 + 1;
  random = Math.floor(random);
  console.log(random);
  resultLovePercentage.textContent = `${random} %`;

  // if ...else if... else
  if (random < 50) {
    resultLovePercentage.style.color = "#ff8906";
    observation.textContent = `Faible compatibilité amoureuse entre ${yourNameInput.value} et ${yourCrushInput.value}. Nous vous conseillons de rester amis.`;
  } else if (random >= 50 && random <= 70) {
    resultLovePercentage.style.color = "#f25f4c";
    observation.textContent = `Bonne compatibilité amoureuse entre ${yourNameInput.value} et ${yourCrushInput.value}. Cette relation pourrait durer dans le temps.`;
  } else {
    resultLovePercentage.style.color = "#e53170";
    observation.textContent = `Excellente compatibilité amoureuse entre ${yourNameInput.value} et ${yourCrushInput.value}. Vous avez trouvé votre l'âme sœur !`;
  }
};

// Déclaration de la fonction send qui permet d'envoyer les données
const send = () => {
  // Ecoute de l'événement "click" sur le bouton
  calculateBtn.addEventListener("click", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    if (
      regex.test(yourName.value) === false ||
      regex.test(yourCrush.value) === false
    ) {
      //if (yourNameInput.value.trim() == "" || yourCrushInput.value.trim() == "") {
      alert("Veuillez remplir les différents champs !!");
    } else {
      // Appel de la fonction calculateLove()
      calculateLove();
      calculateBtn.style.display = "none";
      resultTestSection.style.display = "block";
      resetBtn.style.opacity = "1";
    }
  });
};
// Appel de la fonction send()
send();

// Ecoute de l'événement "click" sur le bouton "Réaliser un nouveau test"
resetBtn.addEventListener("click", () => {
  yourNameInput.value = "";
  yourCrushInput.value = "";
  document.location.reload();
  window.scrollTo(0, 0);
});

// Ecoute du chargement de la page
window.addEventListener("load", () => {
  new cursoreffects.emojiCursor({ emoji: ["💕 ", "❤️"], delay: 25 });
});
