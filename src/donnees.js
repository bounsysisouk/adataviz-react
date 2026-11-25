import { formaterDonnee } from "./utils.js";

const brutes = [
  {
    objectid: 8,
    nom_enseigne: "ECOX Centre",
    adresse: "4, allée du Port Maillard",
    commune: "Nantes",
    telephone: "02 28 29 69 45",
    mail: "nantes@ecox.fr",
    lien: "https://www.ecox.fr/",
    vente_classique_mecanique: 2.0,
    vente_classique_vae: 1.0,
    vente_cargo_mecanique: 1.0,
    vente_cargo_ae: 1.0,
    location_classique_mecanique: 2.0,
    location_classique_vae: 1.0,
    location_cargo_mecanique: 1.0,
    location_cargo_ae: 1.0,
    reparation_hors_sav: 1.0,
    code_postal: "44000"
  },
  {
    objectid: 21,
    nom_enseigne: "Service Cycle Nantais",
    adresse: "172 Rue Paul Bellamy",
    commune: "Nantes",
    telephone: "02 40 02 91 43",
    mail: "servicecycle.nantais@gmail.com",
    lien: "https://www.servicecycle-nantes.fr/",
    vente_classique_mecanique: 1.0,
    vente_classique_vae: 1.0,
    vente_cargo_mecanique: 2.0,
    vente_cargo_ae: 2.0,
    reparation_hors_sav: 1.0,
    code_postal: "44000"
  },
  {
    objectid: 24,
    nom_enseigne: "DECATHLON ATLANTIS",
    adresse: "Centre commercial Atlantis",
    commune: "Saint-Herblain",
    telephone: "02 40 92 00 00",
    mail: null,
    lien: "https://www.decathlon.fr/",
    vente_classique_mecanique: 1.0,
    vente_classique_vae: 1.0,
    vente_cargo_mecanique: 1.0,
    vente_cargo_ae: 1.0,
    reparation_hors_sav: 1.0,
    vente_occasion: 1.0,
    code_postal: "44800"
  },
  {
    objectid: 25,
    nom_enseigne: "VELO HORIZON",
    adresse: "360 Boulevard Marcel Paul",
    commune: "Saint-Herblain",
    telephone: "02 40 43 25 76",
    mail: "denis@velo-horizon.fr",
    lien: "https://www.velo-horizon.fr/",
    vente_classique_mecanique: 1.0,
    vente_classique_vae: 1.0,
    vente_cargo_mecanique: 1.0,
    vente_cargo_ae: 1.0,
    location_classique_mecanique: 1.0,
    location_classique_vae: 1.0,
    reparation_hors_sav: 1.0,
    code_postal: "44800"
  },
  {
    objectid: 28,
    nom_enseigne: "1 Jour 1 Vélo",
    adresse: "1, L'étang du Fief",
    commune: "Sautron",
    telephone: "07 71 79 43 11",
    mail: "info@1jour1velo.fr",
    lien: "https://1jour1velo.fr/",
    vente_classique_mecanique: 2.0,
    vente_classique_vae: 2.0,
    location_classique_mecanique: 2.0,
    location_classique_vae: 1.0,
    location_pliant_mecanique: 2.0,
    location_pliant_ae: 2.0,
    reparation_hors_sav: 2.0,
    code_postal: "44880"
  },
  {
    objectid: 31,
    nom_enseigne: "L'ATELIER DU CYCLE",
    adresse: "6, allée des 5 continents",
    commune: "Vertou",
    telephone: "02 40 80 60 47",
    mail: "atelierducycle@bbox.fr",
    lien: "https://www.velo-cycle-nantes.fr/",
    reparation_hors_sav: 1.0,
    code_postal: "44120"
  }
];

export const donnees = brutes.map(formaterDonnee);


  
