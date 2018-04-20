import React from 'react';
import { Card, Button, Rating, Popup} from 'semantic-ui-react';


const DinnerCard = (props) => {
  return(
    <Card className="card"
      image = {props.image}
      header = {props.meal}
      meta = {props.ethnicity}
      description = {props.description}
     	extra = {
     		<div two bottom attached className="bottomCardRow">
     			<Rating maxRating={4} icon="heart"onRate={this.handleRate}>
      		 <pre>{JSON.stringify(this.state, null, 2)} </pre>
      		</Rating>
  				<Popup     
  					trigger={
  						<Button icon='trash' floated="right" color="red"/>
						}
    				content='Remove this dinner forever!'
  				/>
      	</div>
    	}
    />
  );
}




export default DinnerCard
