function Cartes ({
    nomEnseigne,
    adresse,
    codePostal,
    commune,
    adresseEmail,
    services,
}) {
    return (
        <>
        <article className="carte-velociste">
            <h3>{nomEnseigne}</h3>
            <p>{adresse}, {codePostal}, {commune}</p>
            <p>{adresseEmail}</p>
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