
function Novedades() {
  return (
    <div className="container mt-5" id="novedades">
      <h2>Últimas novedades</h2>
      <p>Conoce las noticias y recomendaciones de GameZone 360.</p>

      <div className="row">

        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Próximos lanzamientos
              </h5>
              <p className="card-text">
                Muy pronto tendremos nuevos videojuegos
                de acción, aventura y carreras.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Juegos recomendados
              </h5>
              <p className="card-text">
                Descubre nuestros videojuegos destacados
                y encuentra nuevas aventuras para disfrutar.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Novedades
