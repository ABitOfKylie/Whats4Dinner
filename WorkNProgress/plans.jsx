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