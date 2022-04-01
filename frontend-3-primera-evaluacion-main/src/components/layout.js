import React from "react";
import Opciones from "./opciones";
import Recordatorio from "./recordatorio";
import data from "../database/data.json";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indice: 0,
      seleccionAnterior: "",
      historial: []
    };
  }

  componentDidUpdate() {
    this.state.historial.push(this.state.seleccionAnterior);
  }

  handleClick = (e) => {
    console.log("Hiciste click en " + e.target.id);
    const letra = e.target.id;
    if (this.state.indice >= 7) {
      alert("Fin de la historia!");
    } else if (letra === "B") {
      this.setState({
        indice: this.state.indice + 2,
        seleccionAnterior: "B"
      });
    } else if (letra === "B" && this.state.seleccionAnterior === "A") {
      this.setState({
        indice: this.state.indice + 3,
        seleccionAnterior: "B"
      });
    } else if (letra === "A" && this.state.seleccionAnterior === "A") {
      this.setState({
        indice: this.state.indice + 2
      });
    } else if (letra === "A" && this.state.seleccionAnterior !== "A") {
      this.setState({
        indice: this.state.indice + 1,
        seleccionAnterior: "A"
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.indice].historia}</h1>
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.indice].opciones.a}
          opcionB={data[this.state.indice].opciones.b}
        />
        <Recordatorio
          seleccionAnterior={this.state.seleccionAnterior}
          historial={this.state.historial.map(
            (element, index) => (
              <li key={index}>{element}</li>
            ),
            data[this.state.indice].id
          )}
        />
      </div>
    );
  }
}

export default Layout;
