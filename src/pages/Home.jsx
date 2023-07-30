import Logements from "../data/logements.json"
import CardLogement from "../composants/CardLogement"

export default function Home() {
  console.log(Logements)
  return (
    <div>
        <main>
            <h1>KASA</h1>
            <div className="card-logements">
              {Logements.map(l=><CardLogement title={l.title} image={l.cover}/>)}
            </div>
        </main>
    </div>
  )
}
