import React from "react";

import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <div id="carouselExample" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://tecnosoluciones.com/wp-content/uploads/2024/04/Desarrollo-de-Aplicaciones-de-Realidad-Virtual-y-Realidad-Aumentada.jpg"
                className="d-block w-100"
                alt="Realidad Aumentada en Educación"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://tecnosoluciones.com/wp-content/uploads/2024/04/Desarrollo-de-Aplicaciones-de-Realidad-Virtual-y-Realidad-Aumentada.jpg"
                className="d-block w-100"
                alt="Aplicaciones en Medicina"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://tecnosoluciones.com/wp-content/uploads/2024/04/Desarrollo-de-Aplicaciones-de-Realidad-Virtual-y-Realidad-Aumentada.jpg"
                className="d-block w-100"
                alt="Transformación Digital"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
  
        <div className="container">
          <h1 className="text-center mb-4">Explora la Realidad Aumentada</h1>
          <p className="text-center">
            La realidad aumentada (RA) transforma la forma en que interactuamos con el mundo,
            ofreciendo experiencias inmersivas y dinámicas en áreas como la educación, la medicina y el entretenimiento.
          </p>
  
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="card">
                <img
                     src="https://aulasimple.ai/blog/wp-content/uploads/2024/01/realidad-aumentada-en-la-educacion.jpg"
                  className="card-img-top"
                  alt="Educación"
                />
                <div className="card-body">
                  <h5 className="card-title">Educación</h5>
                  <p className="card-text">
                    Aprende cómo la RA mejora la comprensión de conceptos complejos en aulas modernas.
                  </p>
                  <Link to="/login" className="btn btn-primary">
                    Explorar más
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeuw4a_hr-dGiBOrNdo35dXHk1Qibf53AbA&s"
                  className="card-img-top"
                  alt="Medicina"
                />
                <div className="card-body">
                  <h5 className="card-title">Medicina</h5>
                  <p className="card-text">
                    La RA revoluciona el diagnóstico y la capacitación médica con simulaciones avanzadas.
                  </p>
                  <Link to="/crud" className="btn btn-primary">
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://www.bbva.com/wp-content/uploads/2018/06/RealidadAumentada-BBVA-1920x1180.jpg"
                  className="card-img-top"
                  alt="Entretenimiento"
                />
                <div className="card-body">
                  <h5 className="card-title">Entretenimiento</h5>
                  <p className="card-text">
                    Descubre experiencias inmersivas en videojuegos y aplicaciones de ocio.
                  </p>
                  <Link to="/login" className="btn btn-primary">
                    Conoce más
                  </Link>
                </div>
              </div>
            </div>
          </div>
  
          <div className="text-center">
            <h2 className="mb-3">¿Listo para unirte?</h2>
 
            <Link to="/crud" className="btn btn-success btn-lg me-3">
              Iniciar Sesion
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  