import React from "react";

class Opciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button className="botones" id="A" onClick={this.props.handleClick}>
            A
          </button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button className="botones" id="B" onClick={this.props.handleClick}>
            B
          </button>
          <h2>{this.props.opcionB}</h2>
        </div>
      </div>
    );
  }
}

export default Opciones;