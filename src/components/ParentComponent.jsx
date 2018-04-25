import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';
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
    // added a display type that the cardlist will use to determine what it should display
    state = {
        displayType: "all",
      currentChoices: null,
      randomMeal: null,
      dinners: dinners,
      rating: null,
      inputTest:"",
      meal:"",
      ethnicity:"",
      description:"",
      image:"",
      display:false,
      showModal:false
    }

  /* **********  Navbar Methods **************** */
    // this method will help us update state on displayType which will update what we render in cardlist
    // The method was passed to navbar and used on random, view all and ethnicity buttons
    updateDisplayType = (displayType) => {
      console.log('Navbar Updated to Display', displayType);
    }

    handleEthnicityChange = (e, data) => {
        e.preventDefault
        this.updateDisplayType('ethnicity')
        console.log(data.value);
        this.setState({ethnicity: data.value});
        console.log(this.state.ethnicity);

    }

  chooseRandom = (e) => {
    e.preventDefault();
    let randomChoice = dinners[Math.floor(Math.random() * dinners.length)];
    console.log(randomChoice);
    let chosenMeal = randomChoice.meal;
    this.setState({randomMeal:chosenMeal});
    console.log(chosenMeal);
  }

   viewAll = (e) => {
    this.state.dinners.map(dinner => {
     <DinnerCard
      key={dinner.index}
      meal={dinner.meal}
      description={dinner.description}
      image={dinner.image}
      ethnicity={dinner.ethnicity}
      />
      console.log("button was clicked");
    });
  }

/* **********  Modal Form Related Methods **************** */

  change = (e) => {
      this.setState({
        [e.target.name]:e.target.value

      });
        console.log(e.target.value)
    }

 addNewDinner = (e) => {
    e.preventDefault
    console.log("add button has been clicked");
    let updated = this.state.dinners.slice();
      const newDinner = {
        meal: this.state.meal,
        ethnicity: this.state.ethnicity,
        description: this.state.description,
        image:this.state.image,
        display: false,
        id: this.state.dinners.length + 1
    }
    updated.push(newDinner);
    this.setState({dinners:updated});
    console.log("dinners new state:" + {dinners})
    console.log("Here comes the clear");
    this.clearForm();
    this.closeModal();
  }

  clearForm = () => this.setState({ meal: "", description: "", image:"", ethnicity:"" })

  closeModal = () => {
    this.setState({ showModal: false })
  }

/* **********  Card Related Methods **************** */

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating });

removeDinner(index) {
  this.setState({
    dinners: this.state.dinners.filter(function(e,i){
    return i !== index;
    })
  });
}


  render() {
    const { displayType, randomMeal, dinners, currentChoices, inputTest, meal, ethnicity, description, image, showModal} = this.state;
    return(
      <div>
        <InfoHeader
            updateDisplayType={this.updateDisplayType}
          currentChoices={dinners.length}
          randomMeal={randomMeal}
          chooseRandom={this.chooseRandom}
          addNewDinner={this.addNewDinner}
          ethnicity={ethnicity}
          handleEthnicityChange={this.handleEthnicityChange}
          viewAll={this.viewAll}
          inputTest={inputTest}
          change={this.change}
        />
        <Container>
          <CardList
              displayType={displayType}
            randomMeal={this.randomMeal}
            dinners={dinners}
            handleRate={null}
            removeDinner={this.removeDinner}
          />
        </Container>
          <FormInput
            dinners={dinners}
            meal={meal}
            ethnicity={ethnicity}
            description={description}
            image={image}
            change={this.change}
            onSubmit={null}
            addNewDinner={this.addNewDinner}
            handleEthnicityChange={this.handleEthnicityChange}
          />
      </div>

    );
  }
};




export default ParentComponent;
