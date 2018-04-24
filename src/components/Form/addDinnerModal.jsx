import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


const ModalForm= (props) => (
  <Modal closeIcon onClose={props.closeModal} open={showModal} trigger={<Button onClick{() => this.setState({Show Modal:true})}><Icon className="addCircle"/>Add New Meal</Button>}>
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