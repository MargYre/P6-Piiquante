import { Link } from "react-router-dom";
import logo from '../images/logo.png'

export default function Header() {
  return (
    <header className="container">
      <img src={logo} alt="" className="logo" />
      <nav>
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
      </nav>
    </header>
    //props
  )
}
