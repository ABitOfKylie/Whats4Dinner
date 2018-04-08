import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// import { friendOptions } from '../common'
ethnicOptions = [
  {
    text: 'American',
    value: 'American'
  },
  {
    text: 'Asian',
    value: 'Asian'
  },
  {
    text: 'Indian',
    value: 'Indian'
  },
  {
    text: 'Italian',
    value: 'Italian'
  },
  {
    text: 'Mexican',
    value: 'Mexican'
  }
];


const DropdownEthnic = () => (
	this.state= {
      ethnicOptions
    },
  <Dropdown placeholder='Select Type of Food' fluid selection options={this.state} />
);

export default DropdownEthnic;