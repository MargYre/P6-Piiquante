import { Link } from "react-router-dom";
import logo from '../images/logo.png'

export default function Header() {
  return (
    <header className="container">
      <img src={logo} alt="" className="logo" />
      <nav>
        <Link to={`/`}>Accueil</Link>
        <Link to={`/about`}>A Propos</Link>
      </nav>
    </header>
    //props
  )
}
