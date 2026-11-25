import { formaterDonnee } from "./utils.js";

// Trois objets copiés depuis "results"
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
    vente_occasion: 1.0,
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
    vente_accessoire: 1.0,
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
  }
];

export const donnees = brutes.map(formaterDonnee);
