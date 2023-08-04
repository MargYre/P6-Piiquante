import Logements from "../data/logements.json"
import CardLogement from "../composants/CardLogement"
import BannerHome from "../composants/BannerHome"

export default function Home() {
  console.log(Logements)
  return (
    <>
          <BannerHome/>
            <div className="card-logements">
              {Logements.map(l=><CardLogement title={l.title} image={l.cover}/>)}
            </div>
    </>
  )
}
