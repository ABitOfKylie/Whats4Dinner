import React from 'react';
import { Button, Grid, Header, Image, Menu, Segment, Icon, Dropdown, Statistic, Flag, Select } from 'semantic-ui-react';

const EthnicChoices = [
		{
			key:"mx",
			value:"mx",
			flag:"mx",
			text:"Mexican"
		},
		{
			key:"us",
			value:"us",
			flag:"us",
			text:"American"
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

const flagRenderer = item =>
	<Flag name={item.countryCode} />


const InfoHeader = () => { 
	return(
  <div className="InfoHeader">
    <Segment.Group raised>
      <Banner />
      <Navbar />
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
          <Image size="small" src = '../images/dinnerLogo.jpeg'avatar />
            What 's For Dinner 
            <Flag name='ae' />
            <Flag name="mx"/>
          </h1>
        </Segment>
        <Segment>
          <Stat />
						currentChoices={props.currentChoices}
						dinners={props.dinners}        
				</Segment>
      </Segment.Group>
    </div>
  );
}

const Stat = (props) => {
  return (
    <div className="DinnerTotal" >
      <Header as = 'h3' floated="right">
        <Statistic color="orange" >
          <Statistic.Value>
            <Icon color = "red" name="food" size="small"/>
            <span>: </span>            
            <CurrentChoices
              currentChoices = {props.currentChoices} 
            />            
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

        <Grid columns = { 5 } doubling >
          <Grid.Column >
            <Menu secondary pointing >
              <Menu.Item >
              <Button> 
                 Random Pick
              </Button>
              </Menu.Item>
              <Menu.Item>
                <Button icon labelPosition='left'>
                  <Icon name='food' />
                  View All
                </Button>
              </Menu.Item>
              	<EthnicChoice />
              <Menu.Item >
                <Button icon labelPosition = 'left' >
                  <Icon name = 'plus circle' / >
                  Add a meal
                </Button> 
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
					floating labeled button className = "icon">
					<Dropdown.Menu>
						<Dropdown.Header>
							<Dropdown.Item
								label = { { name: 'China' } } text = 'Mexican' value="Mexican">
							</Dropdown.Item>
							<Dropdown.Item
								label = { { color: 'blue', empty: true, circular: true } } text = 'American'>
							</Dropdown.Item>
							<Dropdown.Item
								label = { { color: 'orange', empty: true, circular: true } } text = 'Asian'>
							</Dropdown.Item>
							<Dropdown.Item
								label = { { color: 'red', empty: true, circular: true } } text = 'Italian'>
							</Dropdown.Item>
							<Dropdown.Item
								label = { { name: 'India' } } text = 'Indian' value="Indian">
							</Dropdown.Item>
						</Dropdown.Header>
					</Dropdown.Menu>
				</Dropdown>
			</Menu.Item>

		);
}

const EthnicSelect =(props) => {
	return(
		<Select placeholder="Choose Type"
			options = {EthnicChoices}
		/>
		);
}

const CurrentChoices =(props) => {
  return(
    <strong> 88 </strong>
  );
}
export default InfoHeader;