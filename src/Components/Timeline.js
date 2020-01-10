import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Sobresaliente 2020</span>
                <h2 className="colorlib-heading animate-box">PROYECTOS A REALIZAR</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Platzi <span>  Cursos Online</span></h2>
                        <p align="justify">Platzi es otra comunidad hacker con más de 20 cursos a los cuales tengo acceso
                        para así poder convertirme en un master dentro de la tecnología , de los cuales actualmente llevo 
                        matemáticas para programación, programación para Frontend y Backend con sus respectivos lenguajes
                        de programación y previamente continuar con el curso de  Base de datos para empresas.</p>
                        </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Dev.f<span>  Cinta Negra</span></h2>
                        <p align="justify">Tras finalizar con éxito el curso de cinta roja en la escuela
                        de programación Dev.f, mi siguiente meta a cumplir es obtener el mayor grado
                        de experiencia y conocimiento dentro de la arquitectura de software, por consiguiente
                        planeo continuar con el curso de cinta negra ya que al finalizar el programa, me permitirá 
                        especializarme en las mejores prácticas de ingeniería de software. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master en Idiomas<span> Clases Presenciales</span></h2>
                        <p align="justify">Mi gran meta es poder dominar los idiomas de Inglés Francés y Mandarín 
                        para poder tener un master en cada uno de ellos y mejorar mis habilidades en la comunicación
                        con el extranjero, ya que no solo basta con ser bilingüe, pues hoy las en día las empresas buscan
                        personas políglotas que puedan proporcionar un alza a sus finanzas.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        )
    }
}
