import React from 'react';
import {Button, Header, Icon, Form, Segment, Grid, Container } from 'semantic-ui-react'
// note - need to change form element syntax below render

//see notes on addDinnerFormLogic - pull over add dinner function



const FormInput =(props) => {
  return(
    <Grid text align="center" style={{height:"100%"}} verticalAlign="middle">
      <Grid.Column className="formCard" style={{maxWidth:300}}>
        <Header as='h2' icon textAlign='center'>
          <Icon name='food' color="red" circular />
          <Header.Content>
            Add New Dinner Option
          </Header.Content>
        </Header>
      <Segment className="formContent"stacked>
        <Form  size="large" onSubmit={this.handleSubmit}>
          <Form.Group >

            <Form.Input
                label="Dinner Name"
                name="meal" 
                type="text" 
                value={props.meal} 
                onChange={(e) => props.change (e)} 
                placeholder="Enter New Meal Choice">
            </Form.Input>
          </Form.Group>
        
          <Form.Group>
            <Form.Input label="Meal Description">
                <textarea
                    name="description"  
                    rows="3"
                    value={props.description} 
                    onChange={(e) => props.change (e)}                  
                    placeholder="Enter Meal Description">
                </textarea>
            </Form.Input>
          </Form.Group>
          <Form.Group>
              <Form.Input
                  label="Image"
                  name="image"
                  image="image" 
                  type="text" 
                  value={props.image} 
                  onChange={(e) => props.change (e)} 
                  placeholder="Enter Meal Image Src ex: http://...">
              </Form.Input>
          </Form.Group>
          <Form.Group>
              <Button fluid onClick={e =>props.onSubmit (e)}>
                Submit
              </Button>
          </Form.Group> 
        </Form>
      </Segment>
    </Grid.Column> 
  </Grid> 
  );
}



export default FormInput;
