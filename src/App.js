import React from 'react';
import './App.css';




//function for the heading

function Heading(){

  return <h2>Burger Demo</h2>;
}

//funtion for top bread
function TopBread() {
 return (
 <div
    style={{
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '100px',
      width: '70em',
    }}
 >
 <button  className="topBread"></button>

 </div>
 );
};



//function for tomoto
function Tomato(){
  return (
  
  <div 
  style={{
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70em',
    
    
  }}
  ><button  className="tomato">Tomato</button></div> );

  
};

//function for meat
function Meat(){
  return ( <div
    style={{
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      width: '70em',
  
    }}
  ><button  className="meat">Meat</button></div>
    );
};

//function for lattice
function Lattice(){


  return ( <div
    style={{
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      width: '70em',
  
    }}
  ><button  className="lattice">Lattice</button></div>
    );
};

//function for Bottom bread
function BottomBread(){

  return (
  
    <div
    style={{
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      width: '70em',
 
    }}
    ><button  className="bottomBread"></button></div>
    );
};

function App() {
  return (
    <div className="App">
      <Heading/>
     <TopBread/>
     <Tomato/>
     <Meat/>
     <Lattice/>
     <BottomBread/>
 

    </div>
  );
}

export default App;
