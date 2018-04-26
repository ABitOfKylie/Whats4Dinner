import React from 'react';
import { Button, Grid, Header, Image, Menu, Segment, Icon, Dropdown, Statistic, Modal, Form } from 'semantic-ui-react';

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
      	randomMeal ={props.randomMeal}
      	chooseRandom = {props.chooseRandom}
      	addNewDinner = {props.addNewDinner}
      	ethnicity={props.ethnicity}
      	handleEthnicityChange={props.handleEthnicityChange}
      	viewAll={props.viewAll}
      	change={props.change}
        showModal={props.showModal}
        openModal={props.openModal}
        closeModal={props.closeModal}

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

const ModalButton = (props) => {
  return (
    <Modal closeIcon 
      trigger={<Button onClick={props.openModal}><Icon className='plus' />Add New Meal Form</Button>}
      open={props.showModal}
      onClose={props.closeModal}
      basic
      size="small"
  >
      <Modal.Header icon='add circle' content='Add New Meal' />
      <Modal.Content>
        <Form  id="theForm" size="large" onSubmit={props.addNewDinner}>
          <Form.Group widths="equal">
            <Form.Input
                fluid
                label="Dinner Name"
                placeholder="Enter New Meal Choice"
                name="meal"
                value={props.meal}
                onChange={props.change}
            >
            </Form.Input>
            <Form.Select
                fluid
                label="Ethnicity"
                options={EthnicChoices}
                placeholder="Ethnicity"
                name="ethnicity"
                onChange={props.handleEthnicityChange}
            >
            </Form.Select>
          </Form.Group>
        
          <Form.TextArea
                rows="3"
                label="Description"
                placeholder="Enter Meal Description"
                name="description"
                value={props.description}
                onChange={props.change}
          >
          </Form.TextArea>
          <Form.Input
              label="Image"
              image="image"
              type="text" 
              name="image"
              value={props.image}
              onChange={props.change}
              placeholder="Enter Meal Image example: http://..."
            >
          </Form.Input>
          <Form.Button fluid type="submit">
              Submit
          </Form.Button> 
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red'onClick={props.closeModal}>
          <Icon name='remove' /> Never mind
        </Button>
        <Button color='green' type="submit" value="submit" form="theForm">
          <Icon name='checkmark' /> Submit
        </Button>
      </Modal.Actions>
    </Modal>
  )
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
              <Menu.Item>
                <ModalButton />
              </Menu.Item>
            </Menu> 
          </Grid.Column> 
       </Grid> 
  </div>
  );
}



export default InfoHeader;