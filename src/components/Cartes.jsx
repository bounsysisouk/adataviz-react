import { useState } from "react";

function Cartes ({
    nomEnseigne,
    adresse,
    codePostal,
    commune,
    adresseEmail,
    services,
    telephone,
    lien
}) {
    //EXO 2 Chaque carte à son etat
    const [ouvert, setOuvert] = useState(false);
    //EXO 1 chaque bouton ecris le nom de sa carte 
    const ouvrirCarte = () => {
        console.log(nomEnseigne);
        setOuvert(!ouvert);
    };
    return (
        <>
        <article className="carte-velociste">
            <h3>{nomEnseigne}</h3>
            <p>{adresse}, {codePostal}, {commune}</p>
            <p>{adresseEmail}</p>

    {/* EXO 3 : le texte dit ce qu'il va faire */} 
            <button onClick={ouvrirCarte}aria-expanded={ouvert}>
                {ouvert ? "Masquer les details" : "Voir les details"}
            </button>
                {ouvert && ( // EXO 2 : champs de plus quand la cartes est ouverte
                <section>
                    <p>{telephone}</p>
                    {lien && <a href={lien}>Site web</a>}
                </section>
                )}       
            <section>
                <h4>Service proposés</h4>
                    <ul>{services.map((service) => (
                        <li key={service}>{service}</li>
                    ))}
                    </ul>
            </section>
        </article>
        </>
    );
}
export default Cartes