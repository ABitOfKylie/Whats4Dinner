import React, {Component} from 'react';
import { Menu, Button, Container, Card, Header, Segment, Image, Icon, Grid, Dropdown, Statistic } from 'semantic-ui-react';

var dinners = [
  {
    meal:"Pizza",
    ethnicity:"Italian",
    prepTime: 25,
    description:"A circular platform covered with a tangy tomato sauce, smothered in cheese.",
    image:"",
    ordered:false
  },
  {
    meal:"Penne Arrabica",
    ethnicity:"Italian",
    prepTime: 35,
    description:"Penne pasta with spicy tomato sauce.",
    image:"",
    ordered:false
  },  
  {
    meal:"Lasagna",
    ethnicity:"Italian",
    prepTime: 45,
    description:"Meat and noodles covered with a tangy tomato sauce, smothered in cheese.",
    image:"",
    ordered:false
  },
  {
    meal:"Burritos",
    ethnicity:"Mexican",
    prepTime: 35,
    description: "Rolled up beans, cheese and gunk.",
    image:"",
    ordered:false
  },
  {
    meal:"Chicken Mole",
    ethnicity:"Mexican",
    prepTime: 75,
    description:"Mexican chocolate adds an intriguing complexity to the smoky, savory sauce. Stir in some cooked, shredded chicken and you've got a whole new go-to chili.",
    image:"",
    ordered:false
  },
  {
    meal:"Fried Chicken",
    ethnicity:"American",
    prepTime: 55,
    description:"Fried chicken (also referred to as Southern fried chicken for the variant in the United States) is a dish consisting of chicken pieces usually from broiler chickens which have been floured or battered and then pan-fried, deep fried, or pressure fried.",
    image:"",
    ordered:false
  },   
  {
    meal:"Fried Chicken 2",
    ethnicity:"American",
    prepTime: 55,
    description:"Fried chicken (also referred to as Southern fried chicken for the variant in the United States) is a dish consisting of chicken pieces usually from broiler chickens which have been floured or battered and then pan-fried, deep fried, or pressure fried.",
    image:"",
    ordered:false
  }   
];

class StaticComponents extends Component {
  state = {
    currentDinner: "Chicken Parmesan",
    currentChoices: null,
    prepTime: 22,
    randomPick:"",
    counter: 1,
    dinners
  };

  handleKeyPress = (e) => {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault()
      this.updateLog('Button received click with keyboard')
    }
  }

  activateRandomPick = () => {
    var randomPick = dinners[Math.floor(Math.random() * dinners.length)];
    console.log(randomPick);
    this.setState({randomPick:randomPick});
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter:prevState.counter + 1

    })    
  )};

    handleAddDinner(dinner) {
    this.setState({dinners: [...this.state.dinners, dinner]});
  }

  handleRemoveDinner(index) {
    this.setState({
      dinners: this.state.dinners.filter(function (e, i) {
        return i !== index;
      })
    });
  }

 render(){
    const {randomPick, counter, dinners } = this.state;
    return (
      <div>
        <InfoHeader
          randomPick={randomPick}
          counter={this.state.counter}
          updateState = {this.updateState}

        />
        <Container>
          <CardList />
        </Container>
        <Footer />
      </div>
    );
  }
}

const InfoHeader = () => {
  return(
    <Segment.Group raised>
      <Banner />
      <Navbar />
    </Segment.Group>
    );
}
const Banner = () => {
  return (
    <div className="banner">
      <Segment.Group horizontal raised >
        <Segment>
          <h1 className="headline"> 
          <Image size="small" src = '../images/dinnerLogo.jpeg'avatar />
            What 's For Dinner 
          </h1>
        </Segment>
        <Segment>
          <Stat />
        </Segment>
      </Segment.Group>
    </div>
  );
}

const Stat = (props) => {
  return (
    <div className="DinnerTotal" >
      <Header as = 'h3' floated="right">
        <Statistic color="orange" >
          <Statistic.Value>
            <Icon color = "red" name="food" size="small"/>
            <span>: </span>            
            <CurrentChoices
              currentChoices = {props.currentChoices} 
            />            
          </Statistic.Value>
          <Statistic.Label >Dinner Choices</Statistic.Label>
        </Statistic>
      </Header> 
    </div>
    );
}
const Navbar = (props) => {
  return (
  <div className="Navbar">

        <Grid columns = { 5 } doubling >
          <Grid.Column >
            <Menu secondary pointing >
              <Menu.Item >
              <Button> 
                 Random HardCode
              </Button>
              </Menu.Item>
              <Menu.Item>
                <TestButton
                  circular
                  icon labelPosition='left' className ="home"
                  size='large'
                  counter={props.counter}
                />
              </Menu.Item>
              <Menu.Item>
                <Button icon labelPosition='left'>
                  <Icon name='utensils' />
                  View All
                </Button>
              </Menu.Item>
              <Menu.Item >
                <Dropdown text = 'Ethnic Restaurants'
                  icon = 'flag'
                  floating labeled button className = 'icon'>
                  <Dropdown.Menu >
                  <Dropdown.Header content = 'Search for a particular Meal' / >
                    <Dropdown.Item label = { { name: 'China', countryCode: 'cn' } } text = 'Mexican' value="Mexican"/ >
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

const CurrentChoices =() => {
  return(
    dinners.length
  );
}


const RandomPick = (props) => {
  return(
    <Button.Group labeled icon
      labelPosition = 'left' 
      icon name = 'plus circle'
      content = "Random Pick"
      color = 'blue'
      onClick={() => {
        props.activateRandomPick()
      }}
    / >
  );
} 

const TestButton = (props) => {
  return(
    <button 
    secondary="true"
    color="orange"
    content = "{this.state.counter}"
    onClick={()=>{
      props.handleClick
    }}
    />
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