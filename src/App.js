import React from 'react';
import './App.css';



//funtion for top bread
function TopBread() {
 return <button >Top Bread</button>;

}

//function for Bottom bread
function BottomBread(){
  return <button>Bottom Bread</button>;
}

//function for tomoto
function Tomato(){
  return <button>Tomato</button>;
}

//function for meat
function Meat(){
  return <button>Meat</button>;
}

//function for lattice
function Lattice(){
  return <button>Lattice</button>;
}

function App() {
  return (
    <div className="App">
     <TopBread/>
     <Tomato/>
     <Meat/>
     <Lattice/>
     <BottomBread/>
    </div>
  );
}

export default App;
