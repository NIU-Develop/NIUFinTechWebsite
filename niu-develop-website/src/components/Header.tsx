import logo from '../assets/logo1.png'
import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Header(): JSX.Element {
    return (
    <>
    <nav className="nav">
      <a href="/" className="site-title">
      <img src={logo} alt="logo"/>
      </a>
      <ul>
        <LinkedHeaders to="/home">Home</LinkedHeaders>
        <LinkedHeaders to="/about">About</LinkedHeaders>
        <LinkedHeaders to="/leadership">Leadership</LinkedHeaders>
        <LinkedHeaders to="/contact">Contact</LinkedHeaders>
        <LinkedHeaders to="/login">Login</LinkedHeaders>
      </ul>
    </nav>
    </>
    )
}

interface LinkedHeadersProps {
  to: string;
  children: React.ReactNode;
}

function LinkedHeaders({ to, children, ...props }: LinkedHeadersProps) {
  const resolvedPath = useResolvedPath(to) // This is to find the current pathname
  // This is used to check if we're activley in a path (optimize website performance)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}