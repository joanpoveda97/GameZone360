
function Navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container">

        <a className="navbar-brand" href="#inicio">
          GameZone 360
        </a>

        <div className="d-flex flex-wrap gap-3">
          <a className="nav-link" href="#inicio">
            Inicio
          </a>

          <a className="nav-link" href="#categorias">
            Categorías
          </a>

          <a className="nav-link" href="#juegos">
            Juegos
          </a>

          <a className="nav-link" href="#novedades">
            Novedades
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
