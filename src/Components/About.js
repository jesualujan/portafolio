import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Sobre Mi</span>
                    <h2 className="colorlib-heading">¿Quién Soy?</h2>
                    <p align="justify">Soy un amante de la tecnología me considero una persona autodidacta que siempre busca acualizar mis conocimientos dentro de la industia de las Tic´s y de la Arquitectura de Software,
                    Estoy en proceso de convertirme en un verdadero Hacker abarcando temas como són programación, seguridad informática y hacking ético!.</p>
                    <p align="justify">Estoy por comenzar con los cursos de platzi, para mejorar mis habilidades en las áres de desarollo web y de app móviles, usando herramientas tales
                        como ReactJS & React-Native, para poder formarme como desarrollador FULL-STACK
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">¿A qué me dedico?</span>
                <h2 className="colorlib-heading">Parte de mis habilidades</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Desarrollador Web </h3>
                    <p align="justify">Tengo experiencia en el desarollo de sitios web bajo la estructura Frontend, usando las extensiones de Chrome como son: JavaScript, React, HTML, CSS</p>
                    <p align="justify">Mejoro mis prácticas como programador en el desarollo de Backend, usando NodeJS, ReactJS, Express, etc...</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Estructura de Datos & Administración de Proyectos</h3>
                    <p align="justify">Como programador desarrolle la práctica de documentar mis codigos para hacer de forma eficaz el desarrollo de sitios web.</p>
                    
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Base de Datos</h3>
                    <p align="justify">Anteriormente he utilizado Base de Datos tales como MySql y PostgreSql actualmente me encuentro manejando MongoDB y los servicios de atlas</p>
                    <p align="justify">Con la práctica desarollo la lógica en las estructuas de base de datos relaciones y no relaciones para evitar la 
                        redundancia de datos.
                    </p>
                </div>
                </div>
            </div>
         
            </div>
        </div>
        </section>
      </div>
        )
    }
}
