import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
// note - need to change form element syntax below render

//see notes on addDinnerFormLogic - pull over add dinner function



const FormInput extends Component (
	state={
    meal:"",
    ethnicity:"",
    prepTime:"",
    description:"",
    image:"",
    ordered:false
  };

  // old style - not needed anymore??
  // this.handleInputChange = this.handleInputChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);

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
  } //render
) //FormInput


export default FormInput;
