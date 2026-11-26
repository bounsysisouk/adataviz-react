function Recherche({
  recherche,
  setRecherche,
  commune,
  setCommune,
  communesDisponibles,
}) {
  return (
    <>
      <sectiion className="barre-recherche">
        <div className="champ-recherche">
          <label htmlFor="recherche-velo">Rechercher un vélociste</label>
          <input
            id="recherche-velo"
            type="search"
            value={recherche}
            onChange={(event) => setRecherche(event.target.value)}
          />
          {recherche !== "" && (
            <button type="button" onClick={() => setRecherche("")}>
              Effacer
            </button>
          )}
        </div>

        <div className="champ-commune">
          <label htmlFor="filtre-commune">Filtrer par commune</label>
          <select
            id="filtre-commune"
            value={commune}
            onChange={(event) => setCommune(event.target.value)}
          >
            <option value="">Toutes les communes</option>
            {communesDisponibles.map((nomCommune) => (
              <option key={nomCommune} value={nomCommune}>
                {nomCommune}
              </option>
            ))}
          </select>
        </div>
      </sectiion>
    </>
  );
}

export default Recherche;
