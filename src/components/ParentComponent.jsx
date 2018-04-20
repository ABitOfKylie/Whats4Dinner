import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';
import InfoHeader from './InfoHeader/InfoHeader';
import CardList from './CardGroup/CardList';
import FormInput from './Form/addDinnerForm';
import DinnerCard from './CardGroup/DinnerCard'

let dinners = [
  {
    meal:"Pizza",
    ethnicity:"Italian",
    description:"A circular platform covered with a tangy tomato sauce, smothered in cheese.",
    image:"../../images/Pizza.jpg",
    display:false
  },
  {
    meal:"Penne Arrabiata",
    ethnicity:"Italian",
    description:"Penne pasta with spicy tomato sauce.",
    image:"../../images/PenneArrabiata.jpg",
    display:false
  },  
  {
    meal:"Lasagna",
    ethnicity:"Italian",
    description:"Meat and noodles covered with a tangy tomato sauce, smothered in cheese.",
    image:"../../images/Lasagna.jpg",
    display:false
  },
  {
    meal:"Burritos",
    ethnicity:"Mexican",
    description:"Rolled up beans, cheese and gunk.",
    image:"../../images/Burritos.jpg",
    display:false
  },
  {
    meal:"Chicken Mole",
    ethnicity:"Mexican",
    description:"Mexican chocolate adds an intriguing complexity to the smoky, savory sauce. Stir in some cooked, shredded chicken and you've got a whole new go-to chili.",
    image:"../../images/ChickenMole.jpg",
    display:false
  },
  {
    meal:"Fried Chicken",
    ethnicity:"American",
    description:"Fried chicken (also referred to as Southern fried chicken for the variant in the United States) is a dish consisting of chicken pieces usually from broiler chickens which have been floured or battered and then pan-fried, deep fried, or pressure fried.",
    image:"../../images/FriedChicken.jpg",
    display:false
  },   
  {
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
    ethnicSort:null,
    inputTest:"",
    meal:"",
    ethnicity:"",
    description:"",
    image:"",
    display:false
  };


  viewAll () {
    return
    this.state.dinners.map(dinner => {
      <DinnerCard key={dinner.index} meal={dinner.meal} description={dinner.description} image={dinner.image} ethnicity={dinner.ethnicity} display={dinner.display} />
      return(
        console.log(this.state.dinners)
      )
    })
  }

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
      display:false
    })
    console.log(this.state);
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

  handleRemoveDinner = (idx) => () => {
    this.setState({
      dinners: this.state.dinners.filter((s, sidx) => idx !== sidx)
    });
  }
  render(){
    const { randomMeal, dinners, currentChoices, ethnicSort, inputTest, meal, ethnicity, description, image, display} = this.state;
    return(
      <div>
        <InfoHeader
          randomMeal={randomMeal}
          currentChoices={dinners.length}          
          chooseRandom={this.chooseRandom}
          addNewDinner={null}
          ethnicSort={ethnicSort}
          handleEthnicityChange={this.handleEthnicityChange}
          viewAll={this.viewAll}
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
