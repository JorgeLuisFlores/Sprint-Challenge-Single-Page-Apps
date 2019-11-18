import React from "react";

export default function LocationCard(props) {
  return (
    <div>
      <p>Type: {props.type}</p>
      <p>Name: {props.name}</p>
      <p>Residents: {props.residents.length}</p>
      <p>Dimension: {props.dimension}</p>
    </div>
  );
}
