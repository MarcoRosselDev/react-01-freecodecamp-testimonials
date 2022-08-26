import React from "react";

function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require("../images/testimonio-emma.png")} alt="Foto de Emma"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellendus cum porro libero accusantium soluta, cupiditate earum, modi rerum labore blanditiis quis expedita, similique perspiciatis aliquam praesentium excepturi doloribus? Maxime.</p>
      </div>
    </div>
  );
}