import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
            <div>
              <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
              <aside id="colorlib-aside" className="border js-fullheight">
                <div className="text-center">
                  <div className="author-img" style={{backgroundImage: 'url(images/3.jpg)'}} />
                  <h1 id="colorlib-logo"><a href="/">Ingeniería de Software</a></h1>
                  <p>ESCRÍBEME:
                  <a href="mailto:lujan.oficial@gmail.com?Subject=Interesado%20en%20el%20curso"> <span className="email"><i className="icon-mail"></i> lujan.oficial@gmail.com</span></a>
                  </p>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                  <div id="navbar" className="collapse">
                    <ul>
                      <li className="active"><a href="#home" data-nav-section="home">Introducción</a></li>
                      <li><a href="#about" data-nav-section="about">Sobre mi</a></li>
                      {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                      <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                      <li><a href="#timeline" data-nav-section="timeline">Historial</a></li>
                    </ul>
                  </div>
                </nav>
                <nav id="colorlib-main-menu">
                  <ul>
                    <li><a href="https://www.facebook.com/jesua.lujan.31" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                    <li><a href="https://www.instagram.com/jesulujan/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                    <li><a href="https://mx.linkedin.com/in/jesua-hadai-alderete-lujan-a2325a121" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                    <li><a href="https://github.com/jesualujan" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                   </ul>
                </nav>
                <div className="colorlib-footer">
                  <p><small>
                      Desarrollemos tecnlogia con el <i className="icon-heart" aria-hidden="true" /> y <i className="icon-beer" aria-hidden="true"></i><br></br>
                      Gracias a<a href="https://devf.la/" target="_blank" rel="noopener noreferrer"> DEVF LATINOAMERIA</a> por la inspiración || Contáctame!
                  </small></p>
                </div>
              </aside>
            </div>
          </div>
        )
    }
}
