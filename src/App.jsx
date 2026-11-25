import { useState } from 'react'
import './App.css'
import { donnees } from './donnees.js'
import Cartes from './components/Cartes'
import Entete from './components/Entete'

function App() {
    const [count, setCount] = useState(0)

        return (
        <>
         <Entete />
         <main>
            <p>{donnees.length} velocistes trouvés</p>
                <div id="liste-velocites">
                {donnees.map((velociste) => (
                    <Cartes key={velociste.id} {...velociste} />
                ))}
                </div>
         </main>
         <footer>
            <p>&copy; 2026 Bounsy Sisouk</p>
         </footer>
        </>
    

        )    
}

export default App
