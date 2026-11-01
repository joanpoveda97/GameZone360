
function Hero() {
  return (
    <div className="container mt-5" id="inicio">
      <div className="row align-items-center">

        <div className="col-12 col-md-6">
          <h1>Bienvenido a GameZone 360</h1>

          <p>
            Una plataforma donde puedes conocer
            diferentes videojuegos, explorar categorías
            y descubrir las últimas novedades.
          </p>

          <p>
            Juego destacado: Reinos Perdidos
          </p>

          <a href="#juegos" className="btn btn-warning">
            Explorar juegos
          </a>
        </div>

        <div className="col-12 col-md-6">
          <img
            src="/imagenes/reinos.jpg"
            className="img-fluid rounded"
            alt="Videojuego Reinos Perdidos"
          />
        </div>

      </div>
    </div>
  )
}

export default Hero
