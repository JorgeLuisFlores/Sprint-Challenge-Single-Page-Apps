import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";
import styled from "styled-components";

export const Card = styled.div`
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 100%;
  background-color: blue;
  text-align: center;
`;

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/location/`).then(res => {
      setLocations(res.data.results);
    });
  }, []);

  return (
    <section className="">
      {locations.map(location => {
        return (
          <Card>
            <LocationCard
              key={location.key}
              type={location.type}
              name={location.name}
              dimension={location.dimension}
              residents={location.residents}
            />
          </Card>
        );
      })}
    </section>
  );
}
