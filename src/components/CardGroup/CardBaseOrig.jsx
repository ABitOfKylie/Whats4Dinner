import React from 'react'
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'

const CardBase = () => (
  <Card>
    <Image src='/images/dinnerLogo.jpeg' />
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
      <div>
      <Rating clearable icon='star' size="huge" defaultRating={3} maxRating={4} />
      <Button icon labelPosition = "right" floated="right" color="red">
          remove
            <Icon name='trash' />
      </Button>
      </div>
    </Card.Content>
  </Card>
)

export default CardBase