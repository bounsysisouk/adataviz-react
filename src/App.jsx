import { useEffect, useState } from "react";
import "./App.css";
import Cartes from "./components/Cartes.jsx";
import Entete from "./components/Entete.jsx";
import Recherche from "./components/Recherche.jsx";
//import des fonctions depuis utils.js
import {
  recupererVelociste,
  formaterDonnee,
  filtrerVelocistes,
} from "./utils.js";
function App() {
  const [velocistes, setVelocites] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [chargement, setChargement] = useState(true);
  
  // 1 charger les donnees au demarrage
  useEffect(() => {
    async function charger() {
        try{

            const brutes = await recupererVelociste();
            const formatees = brutes.map(formaterDonnee);
            setVelocites(formatees);
            setChargement(false);
        }
    }
    charger()
  }, []);
  // calcul de la liste filtrée
  const visibles = filtrerVelocistes(velocistes, recherche, "")
    if (chargement) {
        return <p>Chargement...</p>;
    }
  return (
    <>
      <Entete />
      <main>
        <Recherche recherche={recherche} setRecherche={setRecherche} />
        <p>{visibles.length} vélociste(s)</p>

        {visibles.length === 0 && (
          <p>Aucun vélociste ne corespond à ta demande</p>
        )}
        <div className="cartes">
          {visibles.map((velociste) => (
            <Cartes key={velociste.id} velociste={velociste} />
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2026 Bounsy Sisouk</p>
      </footer>
    </>
  );
}

export default App;
