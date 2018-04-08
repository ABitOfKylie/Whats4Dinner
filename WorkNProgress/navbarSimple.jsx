import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Card, Icon } from 'semantic-ui-react'

const navbarSimple = () => (
  <div>
    <Menu ui pointing menu>
      <Container>
        <div className="headerItem">
            <img src="/images/dinnerLogo.jpeg" alt="cartoon dinner plate"/>
        </div>
        <Menu.Item>
          <i className="coffee icon"   ></i>
           What's For Dinner?
        </Menu.Item>
        <Menu.Item className='randomChoice'>
        <div className="ui primary button randomChoice">Today's Recommendation</div>
        </Menu.Item>

        <Dropdown item simple text='Choose Ethnicity'>
          <Dropdown.Menu>
            <Dropdown.Item>American</Dropdown.Item>
            <Dropdown.Item>Indian</Dropdown.Item>
            <Dropdown.Item>Italian</Dropdown.Item>
            <Dropdown.Item>Mexican</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item className='randomChoice'>
          <div className="ui button teal addMeal">Add New Meal</div>
        </Menu.Item>

        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
        </div>

      </Container>
    </Menu>   
)

export default navbarSimple;