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