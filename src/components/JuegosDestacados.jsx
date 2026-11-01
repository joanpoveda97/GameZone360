
function JuegosDestacados() {
  return (
    <div className="container mt-5" id="juegos">
      <h2>Juegos destacados</h2>
      <p>Conoce algunos de nuestros videojuegos.</p>

      <div className="row">

        <div className="col-12 col-sm-6 col-lg-4 mb-3">
          <div className="card">
            <img
              src="/imagenes/reinos.jpg"
              className="card-img-top"
              alt="Reinos Perdidos"
            />
            <div className="card-body">
              <h5 className="card-title">Reinos Perdidos</h5>
              <p className="card-text">
                Género: Aventura. Explora mundos
                desconocidos y descubre secretos.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 mb-3">
          <div className="card">
            <img
              src="/imagenes/nitrus.jpg"
              className="card-img-top"
              alt="Nitro Rush"
            />
            <div className="card-body">
              <h5 className="card-title">Nitro Rush</h5>
              <p className="card-text">
                Género: Carreras. Compite en pistas
                y demuestra tu velocidad.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 mb-3">
          <div className="card">
            <img
              src="/imagenes/cyber.jpg"
              className="card-img-top"
              alt="Cyber Force"
            />
            <div className="card-body">
              <h5 className="card-title">Cyber Force</h5>
              <p className="card-text">
                Género: Acción. Supera misiones
                en una ciudad futurista.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default JuegosDestacados
