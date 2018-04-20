import React from 'react';
import { Button, Grid, Header, Image, Menu, Segment, Icon, Dropdown, Statistic, Flag, Select, Input } from 'semantic-ui-react';

const EthnicChoices = [
		{
			key:"mx",
			value:"com",
			flag:"mx",
			text:"Mexican"
		},
		{
			key:"us",
			value:"us",
			name:"us",
			text:"American",
			flag:"us",
		},
		{
			key:"it",
			value:"it",
			flag:"it",
			text:"Italian"
		},
		{
			key:"in",
			value:"in",
			flag:"in",
			text:"Indian"
		},
		{
			key:"cn",
			value:"cn",
			flag:"cn",
			text:"Chinese"
		}

]

const InfoHeader =(props) =>{
	return(  
		<div className="InfoHeader">
    <Segment.Group raised>
      <Banner 
      	dinners = {props.dinners}
      	currentChoices = {props.currentChoices}
      />
      <Navbar
      	randomMeal ={props.randomMeal}
      	chooseRandom = {props.chooseRandom}
      	addNewDinner = {props.addNewDinner}
      	ethnicSort={props.ethnicSort}
      	handleEthnicityChange={props.handleEthnicityChange}
      	viewAll={props.viewAll}
      	inputTest={props.inputTest}
      	inputChange={props.inputChange}
      	handleKeyDown={props.handleKeyDown}
      />
    </Segment.Group>
	</div>
	);
}


const Banner = (props) => {
  return (
    <div className="banner">
      <Segment.Group horizontal raised >
        <Segment>
          <h1 className="headline"> 
          <Image size="small" src = '../images/utensilsBlack.jpg'avatar />
            What 's For Dinner 
            <Flag name='ae' />
            <Flag name="mx"/>
          </h1>
        </Segment>
        <Segment>
					<Stat 
					currentChoices={props.currentChoices}
					/>				
				</Segment>
      </Segment.Group>
    </div>
  );
}

const Stat = (props) => {
	// console.log(props.currentChoices);
  return (
    <div className="DinnerTotal" >
      <Header as = 'h3' floated="right">
        <Statistic color="black" >
          <Statistic.Value>
            <Icon color = "red" name="food" size="small"/>
            <span>: </span>            
              {props.currentChoices} 
          </Statistic.Value>
          <Statistic.Label >Dinner Choices</Statistic.Label>
        </Statistic>
      </Header> 
    </div>
    );
}

const Navbar = (props) => {
  return (
  <div className="Navbar">

        <Grid columns = { 5 } doubling className="buttonBar">
          <Grid.Column >
            <Menu secondary pointing >
              <Menu.Item >
	             	<Button className="barButton" icon labelPosition="left" onClick={props.chooseRandom}>
	             		<Icon name='food' />
	              	Random Pick
	              </Button>
              </Menu.Item>
              <Menu.Item>
			  				<h4>
		              {props.randomMeal}              
		            </h4> 
	  					</Menu.Item>
              <Menu.Item>
                <Button className="bubba" icon labelPosition='left' onClick={props.viewAll}>
                  <Icon name='food' />
                  View All
                </Button>
              </Menu.Item>
              	<EthnicChoice />
              <Menu.Item >
                <Button onClick={props.addNewDinner} icon labelPosition = 'left' >
                   <Icon name = 'plus circle' />
                   Add a meal
                </Button> 
              </Menu.Item> 
              <Menu.Item >
                <Input 
                	name="inputTest" 
                	type="text"
                	placeholder="Dinner Wish" 
                	value={props.inputTest} 
                	onChange={(e) => props.inputChange(e)} 
                	// onChange={(e) => {console.log(e.target.value)}}
                	// onKeyDown={props.handleKeyDown}
                	icon="plus circle" 
                	labelPosition = 'left'
              	/>
              </Menu.Item> 
            </Menu> 
          </Grid.Column> 
       </Grid> 
  </div>
  );
}

const EthnicChoice = (props) => {
	return(

			<Menu.Item>
				<Dropdown text = "Ethnic Choice" icon = "flag"
					floating labeled button className = "icon" onClick={props.handleEthnicityChange} >
					<Dropdown.Menu>
						<Dropdown.Header>
							<Dropdown.Item
								label = { { flag: 'mx' } } Flag name="mx" key="Mexican" text = 'Mexican' value="Mexican">
							</Dropdown.Item>
							<Dropdown.Item
								label = { { color: 'blue', empty: true, circular: true } } key="American" text="American" value="American">
							</Dropdown.Item>
							<Dropdown.Item
								label = { { color: 'orange', empty: true, circular: true } } key="Asian" text="Asian" value="Asian">
							</Dropdown.Item>
							<Dropdown.Item
								label = { { color: 'red', empty: true, circular: true } } key="Italian" text = "Italian" value="Italian">
							</Dropdown.Item>
							<Dropdown.Item
								label = { { name: 'India' } } key="Indian" text = 'Indian' value="Indian">
							</Dropdown.Item>
						</Dropdown.Header>
					</Dropdown.Menu>
				</Dropdown>
			</Menu.Item>
		);
}

const flagRenderer = item => {
	return(
	<Flag name={item.countryCode} />
	);
}

const EthnicSelect =(props) => {
	return(
		<Select placeholder="Choose Type"
			options = {EthnicChoices}
		/>
		);
}

export default InfoHeader;