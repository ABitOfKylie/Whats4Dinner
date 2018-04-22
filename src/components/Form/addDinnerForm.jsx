import React from 'react';
import {Button, Header, Icon, Form, Segment, Grid, Flag } from 'semantic-ui-react'


const EthnicChoices = [
    {
      key:"Mexican",
      name:"Mexican",
      flag:"mx",
      text:"Mexican"
    },
    {
      key:"American",
      name:"American",
      text:"American",
      flag:"us",
    },
    {
      key:"Italian",
      name:"Italian",
      flag:"it",
      text:"Italian"
    },
    {
      key:"Indian",
      name:"Indian",
      flag:"in",
      text:"Indian"
    },
    {
      key:"Chinese",
      name:"Chinese",
      flag:"cn",
      text:"Chinese"
    }
]

const FormInput =(props) => {

  return(
    <div>
    <Grid text align="center" style={{height:"100%"}} verticalAlign="middle">
      <Grid.Column className="formCard" style={{maxWidth:600}}>
        <Header as='h2' icon textAlign='center'>
          <Icon name='food' color="red" circular />
          <Header.Content>
            Add New Dinner Option
          </Header.Content>
        </Header>
      <Segment className="formContent"stacked>
        <Form  size="large" onSubmit={props.handleAddDinner}>
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
                value={props.ethnicity}
                onChange={props.change}
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
      </Segment>
    </Grid.Column> 
  </Grid> 
  </div>
  );
}



export default FormInput;
