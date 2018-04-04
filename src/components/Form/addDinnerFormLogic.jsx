import React from 'react'

//originally this was together with the FormInput constructor on my App.js
// need to rethink where the functions should be - this section just
//makes a list of the available dinners, when instead this should feed into the card List.
//however the add dinner function should move over to addDinnerForm
//the remove function can be used when you add a remove button to dinner card.
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


class DinnerList extends Component {
    state= {
      dinners
    };

    // this.handleAddDinner = this.handleAddDinner.bind(this);
  }

  handleAddDinner(dinner){
    this.setState({
      dinners:[...this.state.dinners, dinner]});
  }

// // filter creates a new array, if "return i !=index"
// is true the i input (item clicked)is not in the current array then return i and add it to the new array
// if not true and i (clicked item index) is in the current array - do not return and it will not be incl in the new arr
  handleRemoveDinner(index){
    this.setState({
      dinners:this.state.dinners.filter(function(e, i){
        return i !== index;
      })
    });
  }
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">What is For Dinner?</h1>
        </header>
            <DinnerInput
              onAddDinner={this.handleAddDinner}>
            </DinnerInput>
            <hr />
            <h2>Available Dinner Choices: <span className="badge">{this.state.dinners.length}</span>
            </h2>
            <ul className="list-group">
              {this.state.dinners.map((dinner, index) =>
                  <li className="list-group-item" key={index}>
                    <h4 className="list-group-item-heading">{dinner.meal}<small><span className="label label-info">  ({dinner.ethnicity})</span></small></h4>
                    <p><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{dinner.description}</p>
                    <button className="btn btn-danger btn-sm" onClick={this.handleRemoveDinner.bind(this,index)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span>Delete</button>
                  </li>
              )}
            </ul>
            <hr />
      </div>
    );
  }
}

export default DinnerList
