import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.image} />
      <ul>
        <li>Name: {props.name}</li>
        <li> Location: {props.location.name}</li>
        <li>Origin: {props.origin.name}</li>
      </ul>
    </div>
  );
}
