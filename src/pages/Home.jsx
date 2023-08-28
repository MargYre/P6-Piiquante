import { useState, useEffect } from "react"
import CardLogement from "../composants/CardLogement"
import BannerHome from "../composants/BannerHome"

export default function Home() {

  const [logements, setLogements] = useState([]);
  useEffect(()=> {
    fetch('/data/logements.json')
      .then(res => res.json())
      .then(data => setLogements(data))
      .catch(error => console.log(error))
 },[]); //n tableau de dépendances vides pour executer la fonction uniquement au lancement du composant en cours

  return (
    <>
          <BannerHome/>
            <div className="card-logements">
              {logements.map(l=><CardLogement title={l.title} image={l.cover} id={l.id} key={l.id}/>)}
            </div>
    </>
  )
}
