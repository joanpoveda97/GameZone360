
function Categorias() {
  return (
    <div className="container mt-5" id="categorias">
      <h2>Categorías de videojuegos</h2>
      <p>Explora los diferentes tipos de videojuegos.</p>

      <div className="row">

        <div className="col-12 col-sm-6 col-lg-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Acción</h5>
              <p className="card-text">
                Juegos de combate y desafíos.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Aventura</h5>
              <p className="card-text">
                Explora mundos y descubre historias.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Deportes</h5>
              <p className="card-text">
                Disfruta diferentes competencias deportivas.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Estrategia</h5>
              <p className="card-text">
                Juegos donde debes planear tus movimientos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Categorias
