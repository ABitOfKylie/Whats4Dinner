import React from 'react'
import { Button, Icon, Modal, Form } from 'semantic-ui-react'


const ModalForm= (props) => (
  <Modal closeIcon 
    trigger={<Button onClick={props.openModal}><Icon className='plus' />Add New Meal Form</Button>}
    open={props.showModal}
    onClose={props.closeModal}
    basic
    size="small"
  >
    <Modal.Header icon='add circle' content='Add New Meal' />
    <Modal.Content>
      <Form  size="large" onSubmit={props.addNewDinner}>
          <Form.Input
            fluid
            label="Dinner Name"
            placeholder="Enter New Meal Choice"
            name="meal"
            value={props.meal}
            onChange={props.change}
            >
          </Form.Input>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> Cancel
      </Button>
      <Button color='green' type="submit">
        <Icon name='checkmark' /> Submit
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalForm