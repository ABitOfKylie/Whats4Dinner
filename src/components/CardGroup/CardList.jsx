import React from 'react';
import { Card } from 'semantic-ui-react';

import DinnerCard from './DinnerCard';

const CardList = (props) => {
  return (
    <Card.Group itemsPerRow={4}>
      {
        props.dinners.map((dinner, index) => (
          <DinnerCard
            key={index}
            meal={dinner.meal}
            ethnicity={dinner.artist}
            image={dinner.image}
            description={dinner.description}
          />
        ))
      }
    </Card.Group>
  );
}

export default CardList;