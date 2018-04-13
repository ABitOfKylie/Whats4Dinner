Functions:

Random Pick (started/needs fixing)
	random # , used as index, displays that dinner card

View All - 
above: this.state.dinners []

render(){ 
	return (
	<ul className="list-group">
	{this.state.dinners.map(todo, index) => 
		<li className= "list-group-item" key{index}>
			<h4> className="list-group-item-heading">
				{dinner.meal}
			</h4>
		</li>
	}				
	</ul>
	);
}

*********** Card Extra *************

extra = {}
      <div>
        <div className="rating">
          <Rating clearable icon='star' size="huge" defaultRating={3} maxRating={4} />
          <Rating maxRating={5} onRate={this.handleRate} />
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div> 
        <Button icon labelPosition = "right" floated="right" color="red">
            remove
              <Icon name='trash' />
        </Button>
      </div>