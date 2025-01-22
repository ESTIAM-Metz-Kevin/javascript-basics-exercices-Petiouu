const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
const nom_boutique = prompt("Comment se nomme ta boutique ? 🧙‍♂️");
var nb_potion_soins = 3;
var prix_potion_soins = 2;
var boutique_oc = true;

console.log("Le sorcier se nomme : " + nom_sorcier + " ! 🎉");
console.log("La boutique s'appelle : " + nom_boutique + " ! 🎉");
console.log("Il y a " + nb_potion_soins + " potions de soin ! 🎉");
console.log("Elles coûtent chacune " + prix_potion_soins + " 🪙 !");

function etat_boutique(boutique_oc) {
  if (boutique_oc === true) {
    return "Bienvenue dans la boutique " + nom_boutique + "Aventurier ! 🎉";
  } else {
    return (
      "La boutique " +
      nom_boutique +
      " est fermée, revenez plus tard Aventurier ! 😴"
    );
  }
}

console.log(etat_boutique(boutique_oc));
