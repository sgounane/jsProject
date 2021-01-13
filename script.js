const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const mail = document.getElementById("mail");
const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const form = document.getElementById("form");
const moy = document.getElementById("moy");

function validateForm(e) {
  //console.log(e);

  if (
    requiredElement() &&
    nomValidate(nom.value) &&
    nomValidate(prenom.value) &&
    validateEmail()
  ) {
    const a = confirm(
      "Toutes les données sont validées! voulez vous les envoyer au serveur?"
    );
    if (a) {
    } else e.preventDefault();
  } else e.preventDefault();
}
form.onsubmit = validateForm;

function calculMoyen() {
  if (noteValidate()) {
    const m = (eval(m1.value) + eval(m2.value) + eval(m3.value)) / 3;
    if (m >= 10) {
      moy.innerHTML = "VALIDER";
      moy.style.backgroundColor = "green";
    } else {
      moy.innerHTML = "NON VALIDER";
      moy.style.backgroundColor = "red";
    }
    return true;
  }
  moy.innerHTML = "ERROR NOTE!!";
  return false;
}
function resetStyle(e) {
  e.target.style.backgroundColor = "white";
  return false;
}

function nomValidate(nom) {
  if (/\d/.test(nom)) {
    alert("Le nom et le prenom ne doivent contenir que des lettres");
    return false;
  }
  return true;
}
//btn.addEventListener("click", validateForm);
nom.addEventListener("keydown", resetStyle);
prenom.addEventListener("keydown", resetStyle);
mail.addEventListener("keydown", resetStyle);
m1.addEventListener("keydown", resetStyle);
m2.addEventListener("keydown", resetStyle);
m3.addEventListener("keydown", resetStyle);

m1.addEventListener("keyup", calculMoyen);
m2.addEventListener("keyup", calculMoyen);
m3.addEventListener("keyup", calculMoyen);

function requiredElement(e) {
  if (nom.value.trim() === "") {
    nom.focus();
    nom.style.backgroundColor = "red";
    alert("le champs NOM est vide ");
    return false;
  }
  if (prenom.value.trim() === "") {
    prenom.focus();
    prenom.style.backgroundColor = "red";
    alert("le champs PRENOM est vide ");
    return false;
  }
  if (mail.value.trim() === "") {
    mail.focus();
    mail.style.backgroundColor = "red";
    alert("le champs MAIL est vide ");
    return false;
  }
  if (m1.value.trim() === "") {
    m1.focus();
    m1.style.backgroundColor = "red";
    alert("le champs M1 est vide ");
    return false;
  }
  if (m2.value.trim() === "") {
    m2.focus();
    m2.style.backgroundColor = "red";
    alert("le champs M2 est vide ");
    return false;
  }
  if (m3.value.trim() === "") {
    m3.focus();
    m3.style.backgroundColor = "red";
    alert("le champs M3 est vide ");
    return false;
  }
  return true;
}

function isValide(note) {
  return !isNaN(note) && note <= 20 && note >= 0;
}

function noteValidate() {
  if (!isValide(m1.value.trim())) {
    m1.focus();
    m1.style.backgroundColor = "red";
    alert("Note 1 is not valid");
    return false;
  }

  if (!isValide(m2.value.trim())) {
    m2.focus();
    m2.style.backgroundColor = "red";
    alert("Note 2 is not valid");
    return false;
  }

  if (!isValide(m3.value.trim())) {
    m3.focus();
    m3.style.backgroundColor = "red";
    alert("Note 3 is not valid");
    return false;
  }
  return true;
}

function validateEmail(email) {
  var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var v = EMAIL_REGEX.test(mail.value);
  if (!v) {
    mail.style.backgroundColor = "red";
    alert("Email non valide");
    return false;
  }
  return true;
}
