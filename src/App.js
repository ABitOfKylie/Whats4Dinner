import React, { Component } from 'react';
// import StaticComponents from './Static/staticcomponent1';

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

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      dinners
    };

    this.handleAddDinner = this.handleAddDinner.bind(this);
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

class DinnerInput extends Component {
  constructor(props){
    super(props);

    this.state = {
    meal:"",
    ethnicity:"",
    prepTime:"",
    description:"",
    image:"",
    ordered:false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value  //[name] makes it generic handles all properties' change
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onAddDinner(this.state);
    this.setState({
      meal:"",
      ethnicity:"",
      prepTime:"",
      description:"",
      image:"",
    });
  }
    render() {
    return (
      <div>
        <h4>Add New Dinner Option</h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputDinnerMeal" className="col-sm-2" control-label>Name of Meal</label>
            <div className="col-sm-10">
              <input
                  name="meal" 
                  type="text" 
                  className="form-control" 
                  id="inputDinnerMeal" 
                  value={this.state.meal} 
                  onChange={this.handleInputChange} 
                  placeholder="Enter New Meal Choice">
              </input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDinnerEthnicity" className="col-sm-2" control-label>Meal Ethnicity</label>
            <div className="col-sm-10">
              <select
                  name="ethnicity" 
                  type="text" 
                  className="form-control" 
                  id="inputDinnerEthnicity" 
                  value={this.state.ethnicity} 
                  onChange={this.handleInputChange}>
                  <option>American</option>
                  <option>Chinese</option>
                  <option>Indian</option>
                  <option>Italian</option>
                  <option>Mexican</option>
                  <option>Thai</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDinnerprepTime" className="col-sm-2" control-label>Preparation Time</label>
            <div className="col-sm-10">
              <input
                  name="prepTime" 
                  type="text" 
                  className="form-control" 
                  id="inputDinnerprepTime" 
                  value={this.state.prepTime} 
                  onChange={this.handleInputChange} 
                  placeholder="Enter Meal Preparation Time">
              </input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDinnerDescription" className="col-sm-2" control-label>Meal Description</label>
            <div className="col-sm-10">
              <textarea
                  name="description"  
                  className="form-control" 
                  rows="3"
                  id="inputDinnerDescription" 
                  value={this.state.description} 
                  onChange={this.handleInputChange} 
                  placeholder="Enter Meal Description">
              </textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDinnerImage" className="col-sm-2" control-label>Meal Image</label>
            <div className="col-sm-10">
              <input
                  image="image" 
                  type="text" 
                  className="form-control" 
                  id="inputDinnerImage" 
                  value={this.state.image} 
                  onChange={this.handleInputChange} 
                  placeholder="Enter Meal Image Src ex: http://...">
              </input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">Add Meal</button>
            </div>
          </div> 
        </form>
      </div>
    );
    }
}

export default App;
