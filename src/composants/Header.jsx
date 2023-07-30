import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>Header
      {props.pageEnCours}
      <nav>
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
      </nav>
    </header>
    //props
  )
}
