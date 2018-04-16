import React from 'react';
import { Card, Button, Rating} from 'semantic-ui-react';


const DinnerCard = (props) => {
  return(
    <Card
      image = {props.image}
      header = {props.meal}
      meta = {props.ethnicity}
      description = {props.description}
     	extra = {
     		<Rating maxRating={5} onRate={this.handleRate} />,
        <pre>{JSON.stringify(this.state, null, 2)} </pre>,
      		<Button icon labelPosition = "right" floated="right" color="red" content="Remove" icon="trash" labelPosition='right'
      		/>
    	}
    />
  );
}



export default DinnerCard
