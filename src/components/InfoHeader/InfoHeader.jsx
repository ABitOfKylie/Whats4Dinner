import React from 'react';
import { Button, Grid, Header, Image, Menu, Segment, Icon, Dropdown, Statistic, Input } from 'semantic-ui-react';

const EthnicChoices = [
		{
			key:"mx",
			value:"Mexican",
      name:"Mexican",
			flag:"mx",
			text:"Mexican"
		},
		{
			key:"us",
			value:"American",
			name:"American",
			text:"American",
			flag:"us",
		},
		{
			key:"it",
			value:"Italian",
      name:"Italian",
			flag:"it",
			text:"Italian"
		},
		{
			key:"in",
			value:"Indian",
      name:"Indian",
			flag:"in",
			text:"Indian"
		},
		{
			key:"cn",
			value:"Chinese",
      name:"Chinese",
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
		  updateDisplayType={props.updateDisplayType}
      	randomMeal ={props.randomMeal}
      	chooseRandom = {props.chooseRandom}
      	addNewDinner = {props.addNewDinner}
      	ethnicity={props.ethnicity}
      	handleEthnicityChange={props.handleEthnicityChange}
      	viewAll={props.viewAll}
      	inputTest={props.inputTest}
      	change={props.change}
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
            Whats For Dinner
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
				  <Button
					  className="barButton"
					  icon
					  labelPosition="left"
					  onClick={() => {
							  props.updateDisplayType();
						  }
					  }
				  >
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
                <Button className="showAll" icon labelPosition='left' onClick={() => props.updateDisplayType('all')}>
                  <Icon name='food' />
                  View All
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Dropdown
                    floating
                    label="Ethnicity"
                    button
                    className="icon"
                    icon="flag"
                    size="tiny"
                    onChange={props.handleEthnicityChange}
                    options={EthnicChoices}
                    placeholder='Select Ethnic Type'
                    selection
                    value={props.ethnicity}
                />
              </Menu.Item>
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
                	onChange={(e) => props.change(e)}
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



export default InfoHeader;
