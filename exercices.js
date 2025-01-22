const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
const nom_boutique = prompt("Comment se nomme ta boutique ? 🧙‍♂️");
var nb_potion_soins = 13;
var prix_potion_soins = 2;
var boutique_oc = true;

console.log("Le sorcier se nomme : " + nom_sorcier + " ! 🎉");
console.log("La boutique s'appelle : " + nom_boutique + " ! 🎉");
console.log("Il y a " + nb_potion_soins + " potions de soin ! 🎉");
console.log("Elles coûtent chacune " + prix_potion_soins + " 🪙 !");

function etat_boutique(boutique_oc) {
  if (boutique_oc === true) {
    return "Bienvenue dans la boutique " + nom_boutique + " Aventurier ! 🎉";
  } else {
    return (
      "La boutique " +
      nom_boutique +
      " est fermée, revenez plus tard Aventurier ! 😴"
    );
  }
}

console.log(etat_boutique(boutique_oc));

function affichage(
  nom_boutique,
  nom_sorcier,
  prix_potion_soins,
  nb_potion_soins
) {
  console.log(
    "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔"
  );
  console.log("\n1. Le nom de la boutique");
  console.log("\n2. Le nom du Sorcier");
  console.log("\n3. Le prix d'un potion de soin");
  console.log("\n4. La quantité de potions de soin");

  const choix = parseInt(prompt("Votre choix (entre 1 et 4) : "));

  switch (choix) {
    case 1:
      console.log(nom_boutique);
      break;
    case 2:
      console.log(nom_sorcier);
      break;
    case 3:
      console.log(prix_potion_soins);
      break;
    case 4:
      console.log(nb_potion_soins);
      break;
    default:
      console.log(
        "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
      );
  }
}

affichage(nom_boutique, nom_sorcier, prix_potion_soins, nb_potion_soins);

function demande_potion_soin(prix_potion_soins, nb_potion_soins) {
  const nb_achat = prompt(
    "Combien de potion(s) de soin souhaitez-vous acheter ?"
  );
  if (nb_achat <= nb_potion_soins) {
    return (
      "Le prix de " +
      nb_achat +
      " potions de soins : " +
      nb_achat * prix_potion_soins +
      " 🪙 mon cher Aventurier. 💸"
    );
  } else {
    return "Il n'y a pas assez de potions disponibles";
  }
}

console.log(demande_potion_soin(prix_potion_soins, nb_potion_soins));

// Demande avec `prompt` une quantité de potion de soin, et affiche ensuite dans la `console` => `Prix de <quantite_potion> potions de soins : <prix_total> 🪙 mon cher Aventurier. 💸`.
