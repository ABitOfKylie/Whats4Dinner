import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const CardBase = () => (
  <Card>
    image="https://lh6.ggpht.com/IhJmL3aCUrtPsgXby8TefqIwwP4_VUGXaAZVn3-SIwlGr6u3w1A3DROfMMwDqkxZQg=w300"
    <Card.Content>
      <Card.Header>
        Dinner
      </Card.Header>
      <Card.Meta>
        <span className='string'>
          Ethnicity & Flag
        </span>
      </Card.Meta>
      <Card.Description>
          A traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='clock outline' />
        Prep Time: 22 min
      </a>
      <Button floated='right'>Order Now</Button>
    </Card.Content>
  </Card>
)

export default CardBase
