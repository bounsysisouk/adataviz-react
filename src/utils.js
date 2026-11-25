// RECHERCHE PAR NOM

export const filtrerParNom = (velocistes, recherche) => {
    return velocistes.filter((velociste) => {
        return velociste.nom_enseigne != null &&
            velociste.nom_enseigne.trim().toLowerCase().includes(recherche.trim().toLowerCase());
    });
};

// COMBINE RECHERHCE PAR NOM ET COMMUNE

export const filtrerVelocistes = (velocistes, recherche, commune) => {
    const parNom = filtrerParNom(velocistes, recherche);

    if (commune === "") {
        return parNom
    }
    return parNom.filter((velociste) => {
        return velociste.commune === commune;
    });
};

// EXTRAIRE SERVICES

export const extraireServices = (velociste) => {
    const services = []
    // Regroupe les champs de l'API concernant la vente 
    const champsVente = [
        velociste.vente_classique_mecanique,
        velociste.vente_classique_vae,
        velociste.vente_cargo_mecanique,
        velociste.vente_cargo_ae,
        velociste.vente_pliant_mecanique,
        velociste.vente_pliant_ae
    ];
    // Regroupe les champs de l'API concernant la location    
    const champsLocation = [
        velociste.location_classique_mecanique,
        velociste.location_classique_vae,
        velociste.location_cargo_mecanique,
        velociste.location_cargo_ae,
        velociste.location_pliant_mecanique,
        velociste.location_pliant_ae
    ];
    // Regroupe le champ de l'API concernant la réparation
    const champsReparations = [
        velociste.reparation_hors_sav,
        velociste.rdv_reparation
    ];
    // Ajout les champs si au moins un element correspond avec (.some())
    if (champsVente.some((valeur) => valeur === 1)) {
        services.push("Vente de vélos");
    }
    if (champsLocation.some((valeur) => valeur === 1)) {
        services.push("Location de vélos");
    }
    if (champsReparations.some((valeur) => valeur === 1)) {
        services.push("Réparation");
    }
    return services;
};

// FORMATER LES DONNEES (TRANSFORME LES DONNEE DE L'API)
/**
 * formatage de donnee
 * @param {*} item 
 * @returns 
 */
export const formaterDonnee = (item) => {
    return {
        id: String(item.objectid),
        nomEnseigne: item.nom_enseigne ?? "Nom manquant",
        adresse: item.adresse ?? "Adresse non renseignée",
        commune: item.commune ?? "Commune non renseignée",
        codePostal: item.code_postal ?? "Non renseigné",
        adresseEmail: item.mail ?? "Email non renseigné",
        services: extraireServices(item)
    };
};

export const recupererVelociste = async () => {
    const url = "https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_velocistes-nantes-metropole/records?limit=-1"
    try {
        const reponse = await fetch(url);
        if (!reponse.ok) {
            throw new Error("Erreur HTTP " + reponse.status)
        }
        const data = await reponse.json();
        return data.results;

    } catch (erreur) {
        console.error("Erreur :", erreur)
        return []
    };
}




const config = {
    "version": 1.0,
    filtrerParNom,
    filtrerVelocistes,
    extraireServices,
    formaterDonnee,
    recupererVelociste

};


export default config