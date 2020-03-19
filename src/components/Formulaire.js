import React, { useState } from 'react';
import { Input, Button } from 'antd';

function Formulaire({ history }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  function onSave() {
    console.log(firstName)
    console.log(lastName)
    console.log(address)
    history.replace({ pathname: '/Accueil', state: { firstName, lastName, address } });
  }

  return (
    <div>
      <Input placeholder="Nom" style={{ margin: 10, width: 200 }} onChange={(text) => setLastName(text.target.value)} />
      <Input placeholder="Prénom" style={{ margin: 10, width: 200 }} onChange={(text) => setFirstName(text.target.value)} />
      <Input placeholder="Adresse" style={{ margin: 10, width: 200 }} onChange={(text) => setAddress(text.target.value)} />
      <Button size="large" onClick={() => onSave()}>Valider</Button>
    </div>
  );
}

export default Formulaire;
