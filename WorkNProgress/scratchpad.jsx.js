current issues: line83 and down
import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const DropdownExampleInput = () => (
  <Dropdown text='Filter' icon='filter' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header content='Search Issues' />
      <Input icon='search' iconPosition='left' name='search' />
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item label={{ color: 'red', empty: true, circular: true }} text='Important' />
      <Dropdown.Item label={{ color: 'blue', empty: true, circular: true }} text='Announcement' />
      <Dropdown.Item label={{ color: 'black', empty: true, circular: true }} text='Discussion' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleInput

I want the flag as the label
                // <Dropdown.Item>
                //  <label> 
                //    <Flag name='us' /> American 
                //  </label>
                // <Dropdown.Item/>

import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendOptions } from '../common'

const DropdownExampleImage = () => (
  <Dropdown text='Add user' icon='add user' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header content='People You Might Know' />
      {friendOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
    </Dropdown.Menu>
  </Dropdown>
)

https://react.semantic-ui.com/modules/dropdown#dropdown-example-image

------ pop up for number of dinner choices -------

import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

const PopupExampleSize = () => (
  <div>
    <Popup
      trigger={<Icon circular name='heart' />}
      content='Hello. This is a mini popup'
      size='mini'
    />

    or
    import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleHover = () => (
  <Popup
    trigger={<Button icon='add' content='Add a friend' />}
    content='Sends an email invite to a friend.'
    on='hover'
  />
)

export default PopupExampleHover

          <Menu.Item >
            <Label size = "huge" >
            <Icon name = 'mail' / >
            <Label.Detail > Current# of Choices < /Label.Detail>
            23 
            </Label> 
          </Menu.Item> 

          
          <Popup 
            trigger = {<Button icon='food' content='Total Choices' />}
            content = "Number of dinner choices currently available. Input#"
            on = 'hover' />

staticBase.jsx
currentDinner
currentChoices defined in state line 66

passed in render(){
    const { currentDinner, currentChoices, dinners } = this.state;
}


const ButtonExampleLabeledIcon = () => (
  <div>
    <Button icon labelPosition='left'>
      <Icon name='pause' />
      Pause
    </Button>
  </div>
)

                    <Input icon = 'search'
                    iconPosition = 'left'
                    name = 'search' / >
                    <Dropdown.Header icon = 'flag'
                    content = 'Filter by ethnicity'/>
                  <Dropdown.Divider />


<div className="page-header">
          <h1>React Sample Application <small>by <a href="http://codingthesmartway.com" target="_blank">CodingTheSmartWay.com</a></small></h1>
        </div>
        <TodoInput
          onAddTodo={this.handleAddTodo}
          />
        <hr />
        <h4>
          Todo Count: <span className="badge">{this.state.todos.length}</span>
        </h4>
        <ul className="list-group">
          { this.state.todos.map((todo, index) =>
              <li className="list-group-item" key={index}>
                <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="label label-info">{todo.todoPriority}</span></small></h4>
                <p><span className="glyphicon glyphicon-user" aria-hidden="true"></span> {todo.todoResponsible}</p>
                <p>{todo.todoDescription}</p>
                <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button>
              </li>
          )}
        </ul>

    description css 
    div.b {
    white-space: nowrap; 
    width: 70px; 
    overflow: hidden;
    text-overflow: ellipsis; 
    border: 1px solid #000000;

    var dinnerList = [
      {
        image:"../images/dinnerLogo.jpeg",
        header:"Dinner",
        meta:"Ethnicity and Flag",
        description:"lasagne made with mozzarella cheese, tomato sauce, ground beef and flavored with wine, garlic, onion, and oregano.",
        extra: <Button fluid basic color="red" content="   PrepTime 22 min   " icon="alarm"/>
      },
      {
        image:"https://lh6.ggpht.com/IhJmL3aCUrtPsgXby8TefqIwwP4_VUGXaAZVn3-SIwlGr6u3w1A3DROfMMwDqkxZQg=w300",
        header:"Dinner",
        meta:"Ethnicity and Flag",
        description:"Bacon ipsum dolor amet aute do cupidatat commodo sausage tenderloin salami tri-tip jerky incididunt ribeye short ribs sirloin occaecat non. Ut meatloaf cupim strip steak flank anim ipsum culpa bacon, pariatur leberkas pancetta beef ribs buffalo.",
        extra: <Button fluid basic color="red" content="   PrepTime 22 min   " icon="alarm"/>
      },

      { image:"https://lh6.ggpht.com/IhJmL3aCUrtPsgXby8TefqIwwP4_VUGXaAZVn3-SIwlGr6u3w1A3DROfMMwDqkxZQg=w300",
        header:"Dinner",
        meta:"Ethnicity and Flag",
        description:"Spicy jalapeno bacon ipsum dolor amet biltong ea fatback pork chop tongue. Qui et fatback incididunt biltong cupim. Leberkas ullamco tail tri-tip turkey, pork loin sed. Nulla shank duis sed in esse shankle filet mignon veniam dolore drumstick sirloin.",
        extra:<Button fluid content="   PrepTime 22 min   " icon="arrow circle outline right" color='red' />
      },

      { image:"https://lh6.ggpht.com/IhJmL3aCUrtPsgXby8TefqIwwP4_VUGXaAZVn3-SIwlGr6u3w1A3DROfMMwDqkxZQg=w300",
        header:"Dinner",
        meta:"Ethnicity and Flag",
        description:"Consequat flank irure alcatra biltong magna esse. Enim est ground round meatball, burgdoggen nisi andouille ex ham hock. Ad irure qui drumstick t-bone exercitation tongue. Hamburger nulla fatback chuck pig.",
        extra:<Button fluid content="   PrepTime 22 min   " icon="arrow circle outline right" color='red'/>
      }
]

}