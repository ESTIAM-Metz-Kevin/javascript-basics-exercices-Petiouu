const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
const nom_boutique = prompt("Comment se nomme ta boutique ? 🧙‍♂️");

let nb_potion_soins = 15;
let prix_potion_soins = 7;

let nb_potion_attaque = 15;
let prix_potion_attaque = 5;

let nb_potion_rage = 15;
let prix_potion_rage = 2;

let boutique_oc = true;
let argent_aventurier = 150;

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

// console.log(etat_boutique(boutique_oc));

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

// affichage(nom_boutique, nom_sorcier, prix_potion_soins, nb_potion_soins);

function demande_potion_soin(
  prix_potion_soins,
  nb_potion_soins,
  argent_aventurier
) {
  const nb_achat = prompt(
    "Combien de potion(s) de soin souhaitez-vous acheter ?"
  );
  const prix_final = nb_achat * prix_potion_soins;
  if (nb_achat <= nb_potion_soins && prix_final <= argent_aventurier) {
    return (
      "Le prix de " +
      nb_achat +
      " potions de soins : " +
      +prix_final +
      " 🪙 mon cher Aventurier. 💸"
    );
  } else {
    return "Vous ne pouvez pas acheter autant de potions";
  }
}

// console.log(demande_potion_soin(prix_potion_soins, nb_potion_soins, argent_aventurier));

let Liste_potions = ["Potion de vie", "Potion d'attaque", "Potion de rage"];
console.log(Liste_potions);

console.log(Liste_potions[0]);
console.log(Liste_potions[Liste_potions.length - 1]);
for (let i = 0; i < Liste_potions.length; i++) {
  console.log("Nous avons de la " + Liste_potions[i]);
}

// - Affiche le nom de la première potion.
// - Affiche le nom de la dernière potion **sans utiliser l'indice directement, mais en utilisant la taille du tableau** (en utilisant la propriété length de l'objet Array).
// - Affiche le nom de chaque potions avec une boucle `for` et affiche le message `Nous avons de la <nom_potion> !`
