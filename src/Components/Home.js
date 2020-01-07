import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                    <li style={{backgroundImage: 'url(images/1.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner js-fullheight">
                                <div className="desc">
                                <h1>Hola! Soy<br />Jesua Hadai</h1>
                                <h2>América Latina necesita más hackers</h2>
                                  </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li style={{backgroundImage: 'url(images/2.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner">
                                <div className="desc">
                                <h1>Soy<br />Orgullo Mexicano</h1>
                                <h2>Desarrollé las habilidades <br/>
                                    de un Ingeniero de Software.</h2>
                                <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1v95sXb6YjBb-HuepqCa9SaXpAgz2wmsXBelFiiWKBeI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Descargar CV<em className="icon-briefcase3" /></a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
            </section>
          </div>
        )
    }
}
