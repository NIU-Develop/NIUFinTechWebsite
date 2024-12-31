import logo from '../assets/logo1.png'

function Header() {
    return (
    <>
    <nav className="nav">
      <a href="/" className="site-title">
      <img src={logo} alt="logo"/>
      </a>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/leadership">Leadership</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/log-in">Log In</a>
        </li>
      </ul>
    </nav>
    </>
    )
}

export default Header