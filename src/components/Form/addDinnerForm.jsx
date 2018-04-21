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
        <Form  size="large">
          <Form.Group widths="equal">
            <Form.Input
                fluid
                label="Dinner Name"
                placeholder="Enter New Meal Choice"
            >
            </Form.Input>
            <Form.Select
                fluid
                label="Ethnicity"
                options={EthnicChoices}
                placeholder="Ethnicity"
            >
            </Form.Select>
          </Form.Group>
        
          <Form.TextArea
                rows="3"
                label="Description"
                placeholder="Enter Meal Description"
          >
          </Form.TextArea>
          <Form.Input
              label="Image"
              image="image" 
              type="text" 
              placeholder="Enter Meal Image example: http://...">
          </Form.Input>
          <Form.Button fluid onSubmit={props.change}>
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
