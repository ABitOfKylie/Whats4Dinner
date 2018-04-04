import React from 'react';
import { Menu, Button, Container, Card, Header, Segment, Image, Popup, Icon, Label, Grid, Dropdown, Input, Statistic } from 'semantic-ui-react';

var dinners = [
  {
    meal:"Pizza",
    ethnicity:"Italian",
    prepTime:"25 min",
    description:"A circular platform covered with a tangy tomato sauce, smothered in cheese.",
    image:"",
    ordered:false
  },
  {
    meal:"Penne Arrabica",
    ethnicity:"Italian",
    prepTime:"35 min",
    description:"Penne pasta with spicy tomato sauce.",
    image:"",
    ordered:false
  },  
  {
    meal:"Lasagna",
    ethnicity:"Italian",
    prepTime:"45 min",
    description:"Meat and noodles covered with a tangy tomato sauce, smothered in cheese.",
    image:"",
    ordered:false
  },
  {
    meal:"Burritos",
    ethnicity:"Mexican",
    prepTime:"35 min",
    description:"Rolled up beans, cheese and gunk.",
    image:"",
    ordered:false
  },
  {
    meal:"Chicken Mole",
    ethnicity:"Mexican",
    prepTime:"75 min",
    description:"Mexican chocolate adds an intriguing complexity to the smoky, savory sauce. Stir in some cooked, shredded chicken and you've got a whole new go-to chili.",
    image:"",
    ordered:false
  },
  {
    meal:"Fried Chicken",
    ethnicity:"American",
    prepTime:"55 min",
    description:"Fried chicken (also referred to as Southern fried chicken for the variant in the United States) is a dish consisting of chicken pieces usually from broiler chickens which have been floured or battered and then pan-fried, deep fried, or pressure fried.",
    image:"",
    ordered:false
  },   
  {
    meal:"Fried Chicken 2",
    ethnicity:"American",
    prepTime:"55 min",
    description:"Fried chicken (also referred to as Southern fried chicken for the variant in the United States) is a dish consisting of chicken pieces usually from broiler chickens which have been floured or battered and then pan-fried, deep fried, or pressure fried.",
    image:"",
    ordered:false
  }   
];


const StaticComponents = (props) => {
  return (
    <div>
      <Banner />
      <InfoHeader />
      <CardList />
      <Footer />
    </div>
  );
}

const Banner = () => {
  return (
    <div className="banner">
     <h1 className="headline"> 
        <Image size="small" src = '../images/dinnerLogo.jpeg'avatar />
        What 's For Dinner </h1>
    </div>
  );
}
const InfoHeader = () => {
  return (
  <div className="InfoHeader">
      <Segment clearing>
        <Header as = 'h3' floated="left">
          <Statistic>
            <Statistic.Value>
              <Icon name="food" size="tiny"/>
                33
            </Statistic.Value>
            <Statistic.Label>Dinner Choices</Statistic.Label>
          </Statistic>
        </Header> 
         <Header as = "h2" floated="right">       
              <label>
              Dinner being prepared:
              current dinner = props.currentDinner
              <br/>
              <i className = "hourglass half icon"></i>
                  Prep Time Remaining:
                  <Label.Detail>10:46 (coded) </Label.Detail>

              </label>
          </Header>
       </Segment>
        <Grid columns = { 3 } doubling >
          <Grid.Column >
            <Menu secondary pointing >
              <Menu.Item >
              <Button color="blue" > Random Pick < /Button> 
              </Menu.Item>

              <Menu.Item >
                <Dropdown text = 'Choose Meal'
                  icon = 'flag'
                  floating labeled button className = 'icon'>
                  <Dropdown.Menu >
                  <Dropdown.Header content = 'Search for a particular Meal' / >
                    <Input icon = 'search'
                    iconPosition = 'left'
                    name = 'search' / >
                    <Dropdown.Header icon = 'flag'
                    content = 'Filter by ethnicity'/>
                  <Dropdown.Divider />
                    <Dropdown.Item label = { { flag: 'mx' } } text = 'Mexican' value="Mexican"/ >
                    <Dropdown.Item label = { { color: 'blue', empty: true, circular: true } } text = 'American' / >
                    <Dropdown.Item label = { { color: 'green', empty: true, circular: true } } text = 'Italian' / >
                    <Dropdown.Item label = { { color: 'yellow', empty: true, circular: true } } text = 'Indian' / >
                    <Dropdown.Item label = { { color: 'red', empty: true, circular: true } } text = 'Chinese' / >

                  </Dropdown.Menu> 
                </Dropdown> 
              </Menu.Item> 
              <Menu.Item >
                <Button icon labelPosition = 'left' >
                  <Icon name = 'plus circle' / >
                  Add a meal
                </Button> 
              </Menu.Item> 
            </Menu> 
          </Grid.Column> 
       </Grid> 
  </div>
  );
}

const dinnerChoices =() => {
  return(
    33
  );
}

const prepTimeLeft = () => {
  return(
    <Label.Detail>10:46 (coded) </Label.Detail>
  );
}

const CardList = () => {
  return (
    <Card.Group itemsPerRow={4}>

      <Card
        image="https://lh6.ggpht.com/IhJmL3aCUrtPsgXby8TefqIwwP4_VUGXaAZVn3-SIwlGr6u3w1A3DROfMMwDqkxZQg=w300" 
        header="Dinner"
        meta="Ethnicity and Flag"
        description="lasagne made with mozzarella cheese, tomato sauce, ground beef and flavored with wine, garlic, onion, and oregano."
        extra={<Button fluid content="   PrepTime 22 min   " icon="arrow circle outline right" color='red'/>}


      />
      <Card
        image="https://lh6.ggpht.com/IhJmL3aCUrtPsgXby8TefqIwwP4_VUGXaAZVn3-SIwlGr6u3w1A3DROfMMwDqkxZQg=w300" 
        header="Dinner"
        meta="Ethnicity and Flag"
        description="Bacon ipsum dolor amet aute do cupidatat commodo sausage tenderloin salami tri-tip jerky incididunt ribeye short ribs sirloin occaecat non. Ut meatloaf cupim strip steak flank anim ipsum culpa bacon, pariatur leberkas pancetta beef ribs buffalo."
        extra={<Button fluid content="   PrepTime 22 min   " icon="arrow circle outline right" color='red'/>}
      />

      <Card
        image="https://lh6.ggpht.com/IhJmL3aCUrtPsgXby8TefqIwwP4_VUGXaAZVn3-SIwlGr6u3w1A3DROfMMwDqkxZQg=w300" 
        header="Dinner"
        meta="Ethnicity and Flag"
        description="Spicy jalapeno bacon ipsum dolor amet biltong ea fatback pork chop tongue. Qui et fatback incididunt biltong cupim. Leberkas ullamco tail tri-tip turkey, pork loin sed. Nulla shank duis sed in esse shankle filet mignon veniam dolore drumstick sirloin."
        extra={<Button fluid content="   PrepTime 22 min   " icon="arrow circle outline right" color='red' />}
      />

      <Card
        image="https://lh6.ggpht.com/IhJmL3aCUrtPsgXby8TefqIwwP4_VUGXaAZVn3-SIwlGr6u3w1A3DROfMMwDqkxZQg=w300" 
        header="Dinner"
        meta="Ethnicity and Flag"
        description="Consequat flank irure alcatra biltong magna esse. Enim est ground round meatball, burgdoggen nisi andouille ex ham hock. Ad irure qui drumstick t-bone exercitation tongue. Hamburger nulla fatback chuck pig."
        extra={<Button fluid content="   PrepTime 22 min   " icon="arrow circle outline right" color='red'/>}
      />
      <Card
        image="https://lh6.ggpht.com/IhJmL3aCUrtPsgXby8TefqIwwP4_VUGXaAZVn3-SIwlGr6u3w1A3DROfMMwDqkxZQg=w300" 
        header="Dinner"
        meta="Ethnicity and Flag"
        description="Aliqua exercitation alcatra labore nostrud pig culpa turducken ex beef ribs spare ribs ea irure. Exercitation magna consequat, dolore culpa in elit hamburger jowl spare ribs. Landjaeger enim dolore, reprehenderit shankle adipisicing cow ex flank tri-tip bacon."
        extra={<Button fluid content="   PrepTime 22 min   " icon="arrow circle outline right" color='red'/>}
      />

    </Card.Group>
  );
}

const Footer = () => {
  return (
    <footer>
     <span>&copy;Serving Dinner On Demand</span>
    </footer>
  );
}

export default StaticComponents;