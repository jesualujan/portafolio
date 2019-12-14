import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Sobresaliente</span>
                <h2 className="colorlib-heading animate-box">Historial Académico</h2>
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
                        <h2>Huawei <span>2015</span></h2>
                        <p align="justify">“SEMILLAS PARA EL FUTURO” - En julio del año 2015 participe en la beca “SEEDS FOR THE FUTURE” 
                         siendo parte de la primera generación de México en participar en esta convocatoria,
                         tuve una estancia de un mes, la primer semana estuve en Beijing China donde estudie el idioma mandarín en la
                          universidad de idiomas y caligrafía, las otras dos semanas restantes estuve en la ciudad de SHENZHEN donde 
                          estuve desarrollando prácticas sobre telecomunicaciones en la empresa matriz de HUAWEI.</p>
                        </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Programación Android<span> 2015-2016</span></h2>
                        <p align="justify">En el año 2016 tome cursos sobre Internet de todos e Internet de las cosas que la academia cisco brinda a través de los puntos México en el desarrollo de nuevas tecnologías e Innovación 
                            Tome los cursos de la unam en programación básica en Android en línea.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Devf - Desarrollando personas <span>Actualmente</span></h2>
                        <p align="justify">Gracias a una conferencia imporatida por GOOGLE - CRECE CON GOOGLE OAXACA formo parte del batch 35 de devf latinoameria - cinta roja, en el desarrollo de sistemas bajo la arquitectura cliente-servidor, próximo a obtener la cinta negra y desarrollar las habilidades de un Ingeniero de Software</p> 
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
