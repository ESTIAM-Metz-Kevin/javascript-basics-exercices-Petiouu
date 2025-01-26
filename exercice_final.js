function jeu() {
  const nom_sorcier = prompt("Comment te nommes-tu, aventurier ? 🧙‍♂️");
  const boutique_oc = true;
  let argent_aventurier = 100;
  let mon_argent = 0;

  let inventaire = {
    1: {
      nom: "Potion de soin",
      prix: 40,
      stock: 1,
    },
    2: {
      nom: "Potion d'endurance",
      prix: 1,
      stock: 20,
    },
    3: {
      nom: "Potion de mana",
      prix: 2,
      stock: 20,
    },
  };

  let inventaire_aventurier = {};

  console.log(etat_boutique(boutique_oc));

  do {
    let tableau_valeurs = demande_potion(
      /*Problème avec le return donc obligé de faire un tableau*/
      inventaire,
      argent_aventurier,
      mon_argent,
      inventaire_aventurier
    );
    mon_argent = tableau_valeurs[0];
    inventaire = tableau_valeurs[1];
    argent_aventurier = tableau_valeurs[2];
    inventaire_aventurier = tableau_valeurs[3];

    tableau_valeurs = rachete_potion(
      inventaire,
      argent_aventurier,
      mon_argent,
      inventaire_aventurier
    );
    console.log(tableau_valeurs);
    mon_argent = tableau_valeurs[0];
    inventaire = tableau_valeurs[1];
    argent_aventurier = tableau_valeurs[2];
    inventaire_aventurier = tableau_valeurs[3];
    console.log("Je t'ai jeté un sort, tu dois vider ta bourse !");
    console.log(argent_aventurier);
  } while (argent_aventurier > 0);

  console.log("Au revoir");
}

function etat_boutique(boutique_oc) {
  if (boutique_oc === true) {
    return "Bienvenue dans la boutique Aventurier ! 🎉";
  } else {
    return "La boutique est fermée, revenez plus tard Aventurier ! 😴";
  }
}

function demande_potion(
  inventaire,
  argent_aventurier,
  mon_argent,
  inventaire_aventurier
) {
  console.log("Voici toutes nos potions : ");
  afficher_inventaire(inventaire);

  const indice_achat = prompt(
    "Quelle potion souhaitez vous acheter ? (veuillez entrer l'indice), il vous reste " +
      argent_aventurier +
      "🪙"
  );

  const nb_achat = parseInt(prompt("Combien voulez-vous en acheter ?"));
  const prix_final = nb_achat * inventaire[indice_achat]["prix"];

  if (
    nb_achat <= inventaire[indice_achat]["stock"] &&
    prix_final <= argent_aventurier
  ) {
    console.log(
      "Le prix de " +
        nb_achat +
        " potions de soins : " +
        +prix_final +
        " 🪙 mon cher Aventurier. 💸"
    );

    inventaire_aventurier[indice_achat] = Object.assign(
      {},
      inventaire[indice_achat]
    ); /* le = ne marche pas il fait juste une copie*/
    mon_argent += inventaire[indice_achat]["prix"] * nb_achat;
    inventaire[indice_achat]["stock"] -= nb_achat;
    argent_aventurier -= inventaire[indice_achat]["prix"] * nb_achat;
    console.log(nb_achat);
    inventaire_aventurier[indice_achat]["stock"] = nb_achat;
  } else {
    console.log("Vous ne pouvez pas acheter autant de potions");
  }
  return [mon_argent, inventaire, argent_aventurier, inventaire_aventurier];
}

function afficher_inventaire(inventaire) {
  for (let [key, value] of Object.entries(inventaire)) {
    if (value["stock"] > 0) {
      console.log("\nPotion " + key + " : ");
      console.log("Nom : " + value["nom"]);
      console.log("Prix : " + value["prix"]);
      console.log("Stock : " + value["stock"]);
    }
  }
}

function rachete_potion(
  inventaire,
  argent_aventurier,
  mon_argent,
  inventaire_aventurier
) {
  let rejouer = 1;

  do {
    const nombre_aleatoire = Math.floor(Math.random() * 5) + 1;
    console.log(nombre_aleatoire);
    const nombre_choisi = prompt("Choisissez un nombre entre 1 et 5 : ");
    if (nombre_aleatoire == nombre_choisi) {
      for (let [key, value] of Object.entries(inventaire_aventurier)) {
        console.log(inventaire_aventurier[key]["stock"]);

        diff_argent =
          inventaire_aventurier[key]["prix"] *
          inventaire_aventurier[key]["stock"];
        mon_argent -= diff_argent;
        argent_aventurier += diff_argent;

        inventaire[inventaire_aventurier[key]["stock"]] +=
          inventaire_aventurier[key]["stock"];

        inventaire_aventurier[key]["stock"] = 0;

        console.log(mon_argent);
        console.log(argent_aventurier);
        console.log(inventaire);
        console.log(inventaire_aventurier);
      }
    } else {
      rejouer = parseInt(prompt("Entrez 1 pour rejouer : "));
    }
  } while (rejouer == 1);

  return [mon_argent, inventaire, argent_aventurier, inventaire_aventurier];
}

jeu();
