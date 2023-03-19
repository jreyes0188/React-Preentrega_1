import React, { Component } from "react";
import "./App.css";


// Componentes //
import Info from "./Componentes/Info/Info"
import Header from "./Componentes/Header/Header"
import NavBar from "./Componentes/NavBar/NavBar";
import Greeting from "./Componentes/Greeting/Greeting";
import Card from "./Componentes/Card/Productos";
import img1 from "./Componentes/Card/vaso.png";
import img2 from "./Componentes/Card/vaso2.png";
import img3 from "./Componentes/Card/vaso3.png";
import img4 from "./Componentes/Card/llavero.png";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <Header title="Arte con Resina" />
        <NavBar />
        <Greeting/>
        <div className="productos">
          <Card 
            nombre="Vasos"
            descripcion="Acero inoxidable, térmico, Tapa con orificio de salida, Capacidad de 500ml"
            img={img1}
            backgroudColor="rgb(109, 109, 109)"
            h5 ="white"
            border = "3px solid rgb(207, 127, 223)"/>
            

          <Card
            nombre="Termo Deportivo"
            descripcion="Acero inoxidable, térmico, Pico de silicona, tapa rosca, apertura con botón
            Capacidad de 500ml"
            img={img2}
            backgroudColor="rgb(109, 109, 109)"
            h5 ="white"
            border = "3px solid rgb(207, 127, 223)"/>

          <Card
            nombre="Mate de Madera"
            descripcion="Madera de algarrobo, Incluye bombilla"
            img={img3} 
            backgroudColor="rgb(109, 109, 109)"
            h5 ="white"
            border = "3px solid rgb(207, 127, 223)"
            />
            

          <Card
            nombre="Llaveros"
            descripcion="Letra con Pompom ó Dije Resina"
            img={img4} 
            backgroudColor="rgb(109, 109, 109)"
            h5 ="white"
            border = "3px solid rgb(207, 127, 223)"/>
        </div>
      </div>
    )
  }
}

export default App;