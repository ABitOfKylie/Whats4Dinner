import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import InfoHeader from './InfoHeader/InfoHeader';
import CardBase from './CardGroup/Card';

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

class ParentComponent extends Component {
  state = {
    currentDinner: "Chicken Parmesan",
    currentChoices: null,
    prepTime: 22,
    randomPick:"",
    counter: 1,
    dinners: dinners
  };

  render(){
    return(
      <div>
        <InfoHeader/>
        <Container>
          <CardBase/>
        </Container>
      </div>
    );
  }
};



export default ParentComponent;
