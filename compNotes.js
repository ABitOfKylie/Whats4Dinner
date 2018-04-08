// For Discussion purposes

import React from 'react';
import React, {Component} from 'react';
/*note when import React, {Component} you no longer need to 
// extends React. Component -- now just extends Component
// import React from 'react';
 class App extends React.Component {*/

**** before arrows ****
// explain how binding / where's the callback in the arrow? =>
https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc
// constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };

**** Initialize / Declare? State ****

class StaticComponents extends Component {
  state = {
    currentDinner: "Chicken Parmesan",
    currentChoices: null,
    prepTime: 22,
    randomPick:"",
    counter: 1,
    dinners  // see array variable above component
  };
   
 **** add functions to the parent component  lines 34 - 65****
   
   updateState() {
      this.setState({data: 'Data updated from the child component...'})
   }

   activateRandomPick = () => {
    var randomPick = dinners[Math.floor(Math.random() * dinners.length)];
    console.log(randomPick);
    this.setState({randomPick:randomPick});
  }

*** Note on activateRandomPick () *** 
once random # use # as [i], search dinner array, and then 
  display that card only. (filter function ?)

  handleClick = () => {
    this.setState((prevState) => ({
      counter:prevState.counter + 1

    })    
  )};

    handleAddDinner(dinner) {
    this.setState({dinners: [...this.state.dinners, dinner]});
  }

  handleRemoveDinner(index) {
    this.setState({
      dinners: this.state.dinners.filter(function (e, i) {
        return i !== index;
      })
    });
  }


   render() {
      return (
         <div>
            <Content myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content>
         </div>
      );
   }
}

 **** render section of the parent component  lines 76 - 100****

  render(){
    const { currentDinner, currentChoices, prepTime, randomPick, counter, dinners } = this.state;
    return (
      <div>
        <Banner />
        <InfoHeader
          currentDinner={currentDinner}
          currentChoices={currentChoices}
          prepTime={prepTime}
          randomPick={randomPick}
          counter={this.state.counter}
          updateState = {this.updateState}

        />
        <Container>
          <CardList />
        </Container>
        <Footer />
      </div>
    );
  }


**** const - section by section banner, InfoHeader...100-250 ****
const Banner = () => {
  return (
    <div className="banner">
     <h1 className="headline"> 
        <Image size="small" src = '../images/dinnerLogo.jpeg'avatar />
        What 's For Dinner </h1>
    </div>
  );
}
const InfoHeader = (props) => {
  return (
  <div className="InfoHeader">
      <Segment clearing>
        <Header as = 'h3' floated="left">
          <Statistic>
            <Statistic.Value>
              <Icon name="food" size="tiny"/>            
              <CurrentChoices
                currentChoices = {props.currentChoices} 
              />            
            </Statistic.Value>
            <Statistic.Label>Dinner Choices</Statistic.Label>
          </Statistic>
        </Header> 
         <Header as = "h2" floated="right">       
              <label>
                Dinner being prepared:
                <span>  </span>                
                {props.currentDinner}              
              </label>
              <br/>
              <label>
              <i className = "hourglass half icon"></i>
                  Preparation Time:
                  <span>  </span> 
                  <PrepTime
                    prepTime = {props.prepTime}
                  />
                  <span> minutes</span>
              </label>
          </Header>
       </Segment>
        <Grid columns = { 5 } doubling >
          <Grid.Column >
            <Menu secondary pointing >
              <Menu.Item >
              <Button> 
                 Random Pick
              </Button>
              </Menu.Item>
              <Menu.Item>
                <TestButton
                  counter={props.counter}
                />
              </Menu.Item>
              <Menu.Item>
                <Button icon labelPosition='left'>
                  <Icon name='utensils' />
                  View All
                </Button>
              </Menu.Item>
              <Menu.Item >
                <Dropdown text = 'Ethnic Choice'
                  icon = 'flag'
                  floating labeled button className = 'icon'>
                  <Dropdown.Menu >
                  <Dropdown.Header content = 'Search for a particular Meal' / >

                    <Dropdown.Item label = { { flag: 'mx' } } text = 'Mexican' value="Mexican"/ >
                    <Dropdown.Item label = { { color: 'blue', empty: true, circular: true } } text = 'American' / >
                    <Dropdown.Item label = { { color: 'green', empty: true, circular: true } } text = 'Italian' / >
                    <Dropdown.Item label = { { color: 'yellow', empty: true, circular: true } } text = 'Indian' / >
                    <Dropdown.Item label = { { color: 'red', empty: true, circular: true } } text = 'Chinese' / >

                  </Dropdown.Menu> 
                </Dropdown> 
              </Menu.Item> 
              <Menu.Item >
                <Button icon labelPosition = 'left' >
                  <Icon name = 'plus circle' / >
                  Add a meal
                </Button> 
              </Menu.Item> 
            </Menu> 
          </Grid.Column> 
       </Grid> 
  </div>
  );
}

const CurrentChoices =() => {
  return(
    dinners.length
  );
}

const CurrentDinner = () => {
  return(
    <span>10:46 (coded) </span>
  );
}
const PrepTime = () => {
  return(
    <Label.Detail>
      22 (activated by user choice) 
    </Label.Detail>
  );
}

**** button alternative one Random Dinner [i] -- should show counter ****
** connected lines : (f) l 40, 87 pcomp Summary, 148 - incl in jsx **
** 'RandomPick' is assigned a value but never used line 236?**
const RandomPick = (props) => {
  return(
    <Button  
      labelPosition = 'left' 
      icon name = 'plus circle'
      color = 'blue'
      onClick={() => {
        props.activateRandomPick()
      }}
    / >
  );
} 

*** note additionl formatting on Random Pick button - 
turn it into a Button Group labeled icon

const RandomPick = (props) => {
  return(
    <Button.Group labeled icon
      labelPosition = 'left' 
      icon name = 'plus circle'
      content = "Random Pick"
      color = 'blue'
      onClick={() => {
        props.activateRandomPick()
      }}
    / >
  );
} 

**** button alternative two Counter -- should show counter ****
** connected lines : (f) l 50, 88 pcomp Summary, 152 - incl in jsx **
** Uncaught TypeError: Cannot read property 'handleClick' of undefined **
** 'counter' is assigned a value but never used l 102  **

const TestButton = (props) => {
  return(
    <button 
		color="blue"
    	onClick={this.props.handleClick}>
    	Counter
      {this.props.counter}
  );
}


*** note comparisons ***
class Content extends React.Component {
   render() {
      return (
         <div>
            <button onClick = {this.props.updateStateProp}>CLICK</button>
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

******* alt Mario *********

const songState = (props)
	return(
		<Button
			fluid
			onClick = {() => {
				props.updateCurrentSong(props.song)
			}}
		/>
	);

	const SongState = (props) => {
  return (
    <Button
      fluid
      icon={props.playing ? "stop" : "play"}
      color={props.playing ? "red" : "green"}
    />
  );
}

*************** Temporary Holding **********************

testing react doc click - need to put handleClick for counter on Holding
handleClick = () => {
    this.setState((prevState) => ({
      counter:prevState.counter + 1

    })    
  )};


*********************************************************
export default App;