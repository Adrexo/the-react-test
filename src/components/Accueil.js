import React from 'react';
import Infos from './Infos';
import { Button } from 'antd';

function Accueil(props) {
  console.log(props.location.state)
  return (
    <div>
      <Button size="large" onClick={() => props.history.replace({ pathname: '/Formulaire' })}>Aller au formulaire</Button>
      { props.location.state && <Infos data={props.location.state} /> }
    </div>
  );
}

export default Accueil;
