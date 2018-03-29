import React, { Component } from 'react';
// import StaticComponents from './Static/staticcomponent1';

var dinners = [
  {
    name:"Pizza",
    type:"Italian",
    prepTime:"25 min",
    description:"A circular platform covered with a tangy tomato sauce, smothered in cheese.",
    image:"",
    ordered:false
  },
  {
    name:"Penne Arrabica",
    type:"Italian",
    prepTime:"35 min",
    description:"Penne pasta with spicy tomato sauce.",
    image:"",
    ordered:false
  },  
  {
    name:"Lasagna",
    type:"Italian",
    prepTime:"45 min",
    description:"Meat and noodles covered with a tangy tomato sauce, smothered in cheese.",
    image:"",
    ordered:false
  },
  {
    name:"Burritos",
    type:"Mexican",
    prepTime:"35 min",
    description:"Rolled up beans, cheese and gunk.",
    image:"",
    ordered:false
  },
  {
    name:"Chicken Mole",
    type:"Mexican",
    prepTime:"75 min",
    description:"Mexican chocolate adds an intriguing complexity to the smoky, savory sauce. Stir in some cooked, shredded chicken and you've got a whole new go-to chili.",
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
    this.setState({dinners:[...this.state.dinners, dinner]});
  }

  handleRemoveDinner(index){
    this.setState({
      dinners:this.state.dinners.filter(function(e, i){
        return i != index;
      })
    });
  }
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">What is For Dinner?</h1>
        </header>
            <h2>Available Dinner Choices: <span className="badge">{this.state.dinners.length}</span>
            </h2>
            <ul className="list-group">
              {this.state.dinners.map((dinner, index) =>
                  <li className="list-group-item" key={index}>
                    <h4 className="list-group-item-heading">{dinner.name}<small><span className="label label-info">  ({dinner.type})</span></small></h4>
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

export default App;
