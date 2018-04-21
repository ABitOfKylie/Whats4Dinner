import React from 'react';
import { Button, Grid, Header, Image, Menu, Segment, Icon, Dropdown, Statistic, Flag, Select, Input } from 'semantic-ui-react';

const EthnicChoices = [
		{
			key:"mx",
			value:"mx",
      name:"Mexican",
			flag:"mx",
			text:"Mexican"
		},
		{
			key:"us",
			value:"us",
			name:"American",
			text:"American",
			flag:"us",
		},
		{
			key:"it",
			value:"it",
      name:"Italian",
			flag:"it",
			text:"Italian"
		},
		{
			key:"in",
			value:"in",
      name:"Indian",
			flag:"in",
			text:"Indian"
		},
		{
			key:"cn",
			value:"cn",
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
      	randomMeal ={props.randomMeal}
      	chooseRandom = {props.chooseRandom}
      	addNewDinner = {props.addNewDinner}
      	ethnicType={props.ethnicType}
      	handleEthnicityChange={props.handleEthnicityChange}
      	viewAll={props.viewAll}
      	inputTest={props.inputTest}
      	change={props.change}
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
                <Button className="showAll" icon labelPosition='left' onClick={props.viewAll}>
                  <Icon name='food' />
                  View All
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Dropdown 
                    floating
                    labeled
                    className="icon"
                    icon="flag"
                    iconPosition="left"
                    size="tiny"
                    onChange={props.handleEthnicityChange}
                    options={EthnicChoices}
                    placeholder='Select Ethnic Type'  
                    selection
                    value={props.ethnicType}
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


// const EthnicChoice = (props) => {
// 	return(
//         <Dropdown className="icon" icon='flag' iconPosition="left" placeholder='Select Ethnic Type' floating labeled selection options={EthnicChoices} />
// 		);
// }

const flagRenderer = item => {
	return(
	<Flag name={item.countryCode} />
	);
}


export default InfoHeader;