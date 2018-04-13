import React from 'react';
import { Card } from 'semantic-ui-react';


const DinnerCard = (props) => {
  return(
    <Card
      image = {props.image}
      header = {props.meal}
      meta = {props.ethnicity}
      description = {props.description}
    />
  );
}

export default DinnerCard
