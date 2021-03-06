import React from 'react';
import { Card } from 'semantic-ui-react';

import DinnerCard from './DinnerCard';

const CardList = (props) => {
  return (
    <Card.Group itemsPerRow={4}>
      {
         props.randomMeal ? 
         props.dinners.map((dinner, index) => {
           if(dinner.meal === props.randomMeal) {
             return (
               <DinnerCard
                 key={index}
                 meal={dinner.meal}
                 ethnicity={dinner.ethnicity}
                 image={dinner.image}
                 description={dinner.description}
               />
             )
           }
         })
         :
         props.dinners.map((dinner, index) => (
           <DinnerCard
             key={index}
             meal={dinner.meal}
             ethnicity={dinner.ethnicity}
             image={dinner.image}
             description={dinner.description}
           />
         ))
       }
      </Card.Group>
  );
}

export default CardList;