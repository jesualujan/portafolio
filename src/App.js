import React from 'react';
import './App.css';
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import About from './Components/About'
import Timeline from './Components/Timeline'

function App() {
  return (
    <React.Fragment>

    <div id="colorlib-page">
      <div id="container-wrap">
     <Sidebar> </Sidebar>
        <div id="colorlib-main">
        <Home></Home>
        <About></About>
        <Timeline></Timeline>
        </div>
      	</div>
      </div>
   
        
      </React.Fragment>
    )
  
}


export default App
