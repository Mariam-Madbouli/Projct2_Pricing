import './App.css';
import React from 'react';
import photo1 from './images/bg-top.svg'
import photo2 from './images/bg-bottom.svg'

function App() {
  return (
    <div className="App">

      <div className= "photoR">
        <img  src={photo1} alt=""/>  
      </div>

      <div className= "photoL">
        <img src={photo2} alt=""/> 
      </div>


      <div className= "container">
        <div className= "content">
          <h1> Our Pricing</h1>

          <div className= "toggleLine">
            <p>Annually</p>
            <input type="checkbox" name="switch" id="switch"></input>
            <label for="switch"></label>
            <p>Monthly</p>
          </div>

          <div className= "cards">
            <div className= "card card1">
              <span className="title">Basic</span>
              <h1>$19.99</h1>
              <p>500 GB Storage</p>
              <p>2 Users Allowed</p>
              <p>Send up to 3 GB</p>
              <button>LEARN MORE</button>
            </div>

            <div className= "card card2">
              <span className="title" >Professional</span>
              <h1>$24.99</h1>
              <p>1 TB Storage</p>
              <p>5 Users Allowed</p>
              <p>Send up to 10 GB</p>
              <button>LEARN MORE</button>
            </div>

            <div className= "card card3">
              <span className="title">Master</span>
              <h1>$39.99</h1>
              <p>2 TB Storage</p>
              <p>10 Users Allowed</p>
              <p>Send up to 20 GB</p>
              <button>LEARN MORE</button>
            </div>

          </div>

        </div>

      </div>

      
    </div>
  );
}

export default App;
