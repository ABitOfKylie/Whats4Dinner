import React from 'react';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment, Icon, Popup, Dropdown, Input, Flag, Label } from 'semantic-ui-react';
// import DropdownEthnic from "./dropdownEthnic";
const InfoHeader = () => ( 
<Container style = { { marginTop: '3em' } } >
	<Segment clearing>
    <Header as = 'h1' floated="left">
	    <Image src = '../images/dinnerLogo.jpeg'avatar />
	    What 's For Dinner 
	    <Popup 
	    	trigger = { < Icon circular name = 'utensils'
	        small / > } 
	      content = "Number of dinner choices currently available. Input#"
	    	on = 'hover' />
	  </Header> 
	   <Header as = "h2" floated="right">	    	
		    	<label>
		    	Dinner being prepared:
		    	current dinner = props.currentDinner
			    <br/>
			    <i class = "hourglass half icon" iconPosition = 'right'></i>
			        Prep Time Remaining:
		    	<Label.Detail>10:46 (coded) </Label.Detail>
		    	</label>
	    </Header>
   </Segment>
    <Grid columns = { 3 } doubling >
    	<Grid.Column >
    		<Menu secondary pointing >
			    <Menu.Item >
			    <Button purple > Random Pick < /Button> 
			    </Menu.Item>

			    <Menu.Item >
			    	<Dropdown text = 'Choose Meal'
			    		icon = 'flag'
			    		floating labeled button className = 'icon'>
				    	<Dropdown.Menu >
					    <Dropdown.Header content = 'Search for a particular Meal' / >
						    <Input icon = 'search'
						    iconPosition = 'left'
						    name = 'search' / >
						    <Dropdown.Header icon = 'flag'
						    content = 'Filter by ethnicity'/>
					    <Dropdown.Divider />
						    <Dropdown.Item label = { { Flag: 'mx' } } text = 'Mexican' value="Mexican"/ >
						    <Dropdown.Item label = { { color: 'blue', empty: true, circular: true } } text = 'American' / >
						    <Dropdown.Item label = { { color: 'green', empty: true, circular: true } } text = 'Italian' / >
						    <Dropdown.Item label = { { color: 'yellow', empty: true, circular: true } } text = 'Indian' / >
						    <Dropdown.Item label = { { color: 'red', empty: true, circular: true } } text = 'Chinese' / >

			    		</Dropdown.Menu> 
			    	</Dropdown> 
			    </Menu.Item> 
			    <Menu.Item >
			    	<Button icon labelPosition = 'left' >
			    		<Icon name = 'plus circle' / >
			    		Add a meal
			    	</Button> 
			    </Menu.Item> 
    		</Menu> 
    	</Grid.Column> 
   </Grid> 
</Container>
);


export default InfoHeader;