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
     		<div className='ui two buttons'>
     			<div className="rateBox">
     			<Rating maxRating={4} icon="heart"onRate={this.handleRate} />
      		 <pre>{JSON.stringify(this.state, null, 2)} </pre>
      		 </div>
     			<Button icon="trash" labelPosition = "right" floated="right" color="red" content="Remove" size="tiny"
      		/>
      		</div>
     			
     		// <Rating maxRating={5} onRate={this.handleRate} />,
       //  <pre>{JSON.stringify(this.state, null, 2)} </pre>,
      		// <Button icon labelPosition = "right" floated="right" color="red" content="Remove" icon="trash" labelPosition='right'
      		// />
      		// <Button icon labelPosition = "left" floated="left" color="red" content="Remove" icon="trash" labelPosition='right'
      		// />
    	}
    />
  );
}




export default DinnerCard
