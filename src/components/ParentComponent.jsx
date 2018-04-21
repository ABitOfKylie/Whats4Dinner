import React, { Component } from 'react';
import { Container, Form} from 'semantic-ui-react';
import InfoHeader from './InfoHeader/InfoHeader';
import CardList from './CardGroup/CardList';
import FormInput from './Form/addDinnerForm';
import DinnerCard from './CardGroup/DinnerCard';

let dinners = [
  {
    id:1,
    meal:"Pizza",
    ethnicity:"Italian",
    description:"A circular platform covered with a tangy tomato sauce, smothered in cheese.",
    image:"../../images/Pizza.jpg",
    display:false
  },
  {
    id:2,
    meal:"Penne Arrabiata",
    ethnicity:"Italian",
    description:"Penne pasta with spicy tomato sauce.",
    image:"../../images/PenneArrabiata.jpg",
    display:false
  },  
  {
    id:3,
    meal:"Lasagna",
    ethnicity:"Italian",
    description:"Meat and noodles covered with a tangy tomato sauce, smothered in cheese.",
    image:"../../images/Lasagna.jpg",
    display:false
  },
  {
    id:4,
    meal:"Burritos",
    ethnicity:"Mexican",
    description:"Rolled up beans, cheese and gunk.",
    image:"../../images/Burritos.jpg",
    display:false
  },
  {
    id:5,
    meal:"Chicken Mole",
    ethnicity:"Mexican",
    description:"Mexican chocolate adds an intriguing complexity to the smoky, savory sauce. Stir in some cooked, shredded chicken and you've got a whole new go-to chili.",
    image:"../../images/ChickenMole.jpg",
    display:false
  },
  {
    id:6,
    meal:"Fried Chicken",
    ethnicity:"American",
    description:"Fried chicken (also referred to as Southern fried chicken for the variant in the United States) is a dish consisting of chicken pieces usually from broiler chickens which have been floured or battered and then pan-fried, deep fried, or pressure fried.",
    image:"../../images/FriedChicken.jpg",
    display:false
  },   
  {
    id:7,
    meal:"Hamburgers",
    ethnicity:"American",
    description:"A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. You can order a hamburger, fries, and a shake at most fast food restaurants. Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes.",
    image:"../../images/Hamburger.jpg",
    display:false
  }   
];

class ParentComponent extends Component {  
  state = {
    currentChoices: null,
    randomMeal: null,
    dinners: dinners,
    rating: null,
    ethnicType:null,
    inputTest:"",
    meal:"",
    ethnicity:"",
    description:"",
    image:"",
    display:false
  }


  chooseRandom = (e) => {
    e.preventDefault();
    let randomChoice = dinners[Math.floor(Math.random() * dinners.length)];
    console.log(randomChoice);
    let chosenMeal = randomChoice.meal;
    this.setState({randomMeal:chosenMeal});
    console.log(chosenMeal);
  }

  change = (e) => {
      this.setState({
        [e.target.name]:e.target.value 
      });
        console.log(e.target.value)
    }

  handleChange = (e, { value }) => this.setState({ value })

  chooseRandom = (e) => {
    e.preventDefault();
    let randomChoice = dinners[Math.floor(Math.random() * dinners.length)];
    console.log(randomChoice);
    let chosenMeal = randomChoice.meal;
    this.setState({randomMeal:chosenMeal});
    console.log(chosenMeal);
  }


  handleEthnicityChange = (e, data) => {
    e.preventDefault
    console.log(data.value);
     this.setState({ethnicType: data.value});
     console.log(this.state.ethnicType);
    }
      
   viewAll = (e) => {
    this.state.dinners.map(dinner => {
     /* <DinnerCard 
      key={dinner.index} 
      meal={dinner.meal} 
      description={dinner.description} 
      image={dinner.image} 
      ethnicity={dinner.ethnicity} 
      /> */
      console.log("button was clicked");
    });
  }

  addNewDinner = (e) => {
    console.log("add button has been clicked");
    let updated = this.state.dinners.slice();
    updated.push("");
    this.setState({dinners:updated});
    console.log("dinners new state:" + {dinners})
  }

  handleAddDinner = () => {
    this.setState({
      dinners: this.state.dinners.concat([
        { meal: "",
          ethnicity: "",
          description: "",
          image:"",
          display:false
        }
      ])
    });
  }

  onSubmit = (e) => {
    e.preventDefault
    console.log(this.state);
    // this.props.onSubmit (this.state)
    this.setState({
      meal:"",
      ethnicity:"",
      description:"",
      image:"",
      display:false
    })
    console.log(this.state);
  }


  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating });

/* removeDinner(e, i) {
     let filteredArray = this.state.dinners.filter(index => index !== e.target.value)
     this.setState({dinners: filteredArray});
 } 



removeDinner(index) {  
  this.setState({
    dinners: this.state.dinners.filter(function(e,i){
    return i !== index;
    })
  });
}
 */

  render() {
    const { randomMeal, dinners, currentChoices, ethnicType, inputTest, meal, ethnicity, description, image, display} = this.state;
    return(
      <div>
        <InfoHeader
          currentChoices={dinners.length}          
          randomMeal={randomMeal}
          chooseRandom={this.chooseRandom}
          addNewDinner={this.addNewDinner}
          ethnicType={ethnicType}
          handleEthnicityChange={this.handleEthnicityChange}
          viewAll={this.viewAll}
          inputTest={inputTest}
          change={this.change}
          handleKeyDown={this.handleKeyDown}
        />
        <Container>
          <CardList
            randomMeal={this.randomMeal}
            dinners={dinners}
            handleRate={null}
            removeDinner={this.removeDinner}
          />
          <FormInput
            meal={meal}
            ethnicity={ethnicity}
            description={description}
            image={image}
            display={false}
            change={this.change}
            onSubmit={this.onSubmit}
            display={display}
          />
        </Container>
      </div>

    );
  }
};




export default ParentComponent;
