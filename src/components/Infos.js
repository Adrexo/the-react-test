import React from 'react';

function Infos({ data }) {
  return (
    <div>
      <p>nom: {data.lastName}</p>
      <p>prénom: {data.firstName}</p>
      <p>adresse: {data.address}</p>
    </div>
  );
}

export default Infos;
