function jeu() {
  const nom_sorcier = prompt("Comment te nommes-tu, aventurier ? 🧙‍♂️");
  const boutique_oc = true;
  let argent_aventurier = 100;
  let mon_argent = 0;

  const potion_soin = {
    indice: 1,
    nom: "Potion de soin",
    prix: 40,
    stock: 1,
  };

  const potion_endurance = {
    indice: 2,
    nom: "Potion d'endurance",
    prix: 1,
    stock: 20,
  };

  const potion_mana = {
    indice: 3,
    nom: "Potion de mana",
    prix: 2,
    stock: 20,
  };

  const inventaire = {
    potion_soin,
    potion_endurance,
    potion_mana,
  };

  const inventaire_aventurier = {};

  console.log(etat_boutique(boutique_oc));
  console.log(demande_potion(inventaire, argent_aventurier, mon_argent));
}

function etat_boutique(boutique_oc) {
  if (boutique_oc === true) {
    return "Bienvenue dans la boutique Aventurier ! 🎉";
  } else {
    return "La boutique est fermée, revenez plus tard Aventurier ! 😴";
  }
}

function demande_potion(inventaire, argent_aventurier, mon_argent) {
  console.log("Voici toutes nos potions : ");
  afficher_inventaire(inventaire);

  const indice_achat = prompt(
    "Quelle potion souhaitez vous acheter ? (veuillez entrer l'indice)"
  );

  const nb_achat = parseInt(prompt("Combien voulez-vous en acheter ?"));
  const quelle_potion = parcours_potion(inventaire, indice_achat);
  const prix_final = nb_achat * inventaire[quelle_potion]["prix"];

  if (
    nb_achat <= inventaire[quelle_potion]["stock"] &&
    prix_final <= argent_aventurier
  ) {
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

function afficher_inventaire(inventaire) {
  for (let [key, value] of Object.entries(inventaire)) {
    if (value["stock"] > 0) {
      console.log("\nPotion 1 : ");
      console.log("Nom : " + value["nom"]);
      console.log("Prix : " + value["prix"]);
      console.log("Stock : " + value["stock"]);
      console.log("Stock : " + value["indice"]);
    }
  }
}

function parcours_potion(inventaire, indice_achat) {
  for (let [key, value] of Object.entries(inventaire)) {
    if (value["indice"] == indice_achat) {
      return key;
    }
  }
}

jeu();
