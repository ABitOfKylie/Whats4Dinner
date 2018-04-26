import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';
import InfoHeader from './InfoHeader/InfoHeader';
import CardList from './CardGroup/CardList';
import FormInput from './Form/addDinnerForm';
import DinnerCard from './CardGroup/DinnerCard';
import ModalForm from './Form/addDinnerModal';


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
    meal:"",
    ethnicity:"",
    description:"",
    image:"",
    display:false,
    showModal:false
  }

/* **********  Navbar Methods **************** */
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


  handleEthnicityChange = (e, data) => {
    e.preventDefault
    console.log(data.value);
     this.setState({ethnicity: data.value});
     console.log(this.state.ethnicity);

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

  openModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

/* **********  Card Related Methods **************** */

handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating });

removeDinner(e, index) {  
  console.log("remove button clicked")
  this.setState({
    dinners: this.state.dinners.filter(function(e,i){
    return i !== index;
    })
  });
}


  render() {
    const { randomMeal, dinners, currentChoices, meal, ethnicity, description, image, showModal, rating} = this.state;
    return(
      <div>
        <InfoHeader
          currentChoices={dinners.length}          
          randomMeal={randomMeal}
          chooseRandom={this.chooseRandom}
          addNewDinner={this.addNewDinner}
          ethnicity={ethnicity}
          handleEthnicityChange={this.handleEthnicityChange}
          viewAll={this.viewAll}
          change={this.change}
          openModal={this.openModal}
          closeModal={this.closeModal}
          showModal={showModal}
        />
        <Container>
          <CardList
            randomMeal={this.randomMeal}
            dinners={dinners}
            handleRate={null}
            removeDinner={this.removeDinner}
          />
        </Container>
          <DinnerCard
            removeDinner={this.removeDinner}
            handleRate={this.handleRate}
            rating={rating}
          />
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
          <ModalForm
            addNewDinner={this.addNewDinner}
            openModal={this.openModal}
            closeModal={this.closeModal}
            showModal={showModal}
          />
      </div>

    );
  }
};




export default ParentComponent;
