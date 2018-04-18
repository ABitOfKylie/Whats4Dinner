import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';
import InfoHeader from './InfoHeader/InfoHeader';
import CardList from './CardGroup/CardList';
import FormInput from './Form/addDinnerForm';

let dinners = [
  {
    meal:"Pizza",
    ethnicity:"Italian",
    description:"A circular platform covered with a tangy tomato sauce, smothered in cheese.",
    image:"../../images/Pizza.jpg",
    ordered:false
  },
  {
    meal:"Penne PenneArrabiata",
    ethnicity:"Italian",
    description:"Penne pasta with spicy tomato sauce.",
    image:"../../images/PenneArrabiata.jpg",
    ordered:false
  },  
  {
    meal:"Lasagna",
    ethnicity:"Italian",
    description:"Meat and noodles covered with a tangy tomato sauce, smothered in cheese.",
    image:"../../images/Lasagna.jpg",
    ordered:false
  },
  {
    meal:"Burritos",
    ethnicity:"Mexican",
    description:"Rolled up beans, cheese and gunk.",
    image:"../../images/Burritos.jpg",
    ordered:false
  },
  {
    meal:"Chicken Mole",
    ethnicity:"Mexican",
    description:"Mexican chocolate adds an intriguing complexity to the smoky, savory sauce. Stir in some cooked, shredded chicken and you've got a whole new go-to chili.",
    image:"../../images/ChickenMole.jpg",
    ordered:false
  },
  {
    meal:"Fried Chicken",
    ethnicity:"American",
    description:"Fried chicken (also referred to as Southern fried chicken for the variant in the United States) is a dish consisting of chicken pieces usually from broiler chickens which have been floured or battered and then pan-fried, deep fried, or pressure fried.",
    image:"../../images/FriedChicken.jpg",
    ordered:false
  },   
  {
    meal:"Hamburgers",
    ethnicity:"American",
    description:"A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. You can order a hamburger, fries, and a shake at most fast food restaurants. Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes.",
    image:"../../images/Hamburger.jpg",
    ordered:false
  }   
];

class ParentComponent extends Component {
  state = {
    currentChoices: null,
    randomMeal: null,
    dinners: dinners,
    rating: null,
    ethnicSort:null,
    inputTest:"",
    meal:"",
    ethnicity:"",
    description:"",
    image:"",
    ordered:false
  };


  // viewAll () {
  //   this.state.dinners.map((dinner, index) => {
  //     return(
  //       console.log(dinners)
  //     );
  //   })
  // }


   handleEthnicityChange = (event, data) => {
     this.setState({ethnicSort: event.target.value});
     console.log(this.state.ethnicSort);
    }

  addNewDinner (e) {
    let updated = this.state.dinners.slice();
    updated.push("");
    this.setState({dinners:updated});
  }
   save() {
      var todos = [...this.state.todos];
      todos.push(this.newText.value);
      this.setState({todos});
    }

    inputChange = (e) => {
      this.setState({
        [e.target.name]:e.target.value
      });
        console.log(e.target.value);
    }

    handleKeyDown(e){
      if(e.keyCode !== 13){
        return;
      } 
    }
  chooseRandom = (e) => {
    e.preventDefault();
    let randomChoice = dinners[Math.floor(Math.random() * dinners.length)];
    console.log(randomChoice);
    let chosenMeal = randomChoice.meal;
    console.log(chosenMeal);
    this.setState({randomMeal:chosenMeal});
    console.log(this.state.randomMeal);
  }

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  change = (e) => {
    this.setState({
      [e.target.name]:e.target.value 
    })
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
      ordered:false
    })
    console.log(this.state);
  }

  render(){
    const { randomMeal, dinners, currentChoices, ethnicSort, inputTest, meal, ethnicity, description, image, ordered} = this.state;
    return(
      <div>
        <InfoHeader
          randomMeal={randomMeal}
          currentChoices={dinners.length}          
          chooseRandom={this.chooseRandom}
          addNewDinner={null}
          ethnicSort={ethnicSort}
          handleEthnicityChange={this.handleEthnicityChange}
          viewAll={null}
          inputTest={inputTest}
          inputChange={this.inputChange}
          handleKeyDown={this.handleKeyDown}
        />
        <Container>
          <CardList
            randomMeal={randomMeal}
            dinners={dinners}
            removeDinner={null}
            handleRate={null}
          />
        </Container>
        <Container>
          <FormInput
            meal={meal}
            ethnicity={ethnicity}
            description={description}
            image={image}
            ordered={false}
            change={this.change}
            onSubmit={this.onSubmit}
          />
        </Container>
      </div>

    );
  }
};




export default ParentComponent;
