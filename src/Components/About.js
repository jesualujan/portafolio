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
                    <p align="justify">Soy un amante de la tecnología me considero una persona autodidacta que siempre busca estar en constante 
                     estudio para poder ampliar mis conocimientos dentro de la industia de las tecnologias de la información y comunicación 
                      y de la Arquitectura de Software. Por otra parte 
                      estoy en cursos de seguridad informática y hacking ético pues deseo contribuir en la comunidad hacker y en la industria
                      en poder hallar fallos de seguridad y poder dar brindar un mejor servicio y autonomia.
                      Actualmente cuento con acceso a más de 20 cursos en la academia de platzi, 
                     con el proposito de mejorar mis habilidades en las áres de desarollo web y de app móviles, usando herramientas tales
                     como ReactJS & React-Native, para poder formarme como desarrollador FULL-STACK.</p>
                     
                     <p align="justify">
                     Más allá de la tecnologia planeo seguir recorriendo el mundo y poder aprender algo nuevo a cualquier sitio que pueda
                     visitar y seguir construyendo un mejor futuro para mi vida.
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
                <h3>Estructura de Datos & Administración de Proyectos</h3>
                <p align="justify">La gestión de proyectos es un conjunto de 
                    metodologías que nos sirven para planificar 
                    y dirigir los procesos de un proyecto. 
                    Un proyecto comprende un cúmulo específico de operaciones 
                    diseñadas para lograr un objetivo con un alcance, recursos, inicio y final establecidos.
                    Bajo la dirección del PMBOOK la Guía de los 
                    fundamentos para la dirección de proyectos.</p>
                    
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                <h3>Desarrollo Web </h3>
                <p align="justify">
                   Crear una web para un negocio aposta credibilidad y 
                   una buena imagen de marca de cara a los clientes, es también una buena opción
                   para presentar con detalle tus servicios y/o productos 
                   un buen escaparate de tu negocio, sea digital o con una sede física.</p>
                   
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
                    <p align="justify">
                    En la actualidad, cualquier organización que se precie, 
                    por pequeña que esta sea,es fundamental que cuente con una Base de Datos, 
                    pero para que sea del todo efectiva que debe ser, no basta con tenerla,
                    también debemos saber como tienen que ser gestionadas o admnistradas.
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
