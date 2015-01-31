/** @jsx React.DOM */

var FriendsContainer = React.createClass({
	getInitialState: function(){
		alert('In get intial state');
		return {
			name: 'Jess'
		}
	},
	componentWillMount: function(){
		alert('In components will Mount');

	},
	componentDidMount: function(){
		console.log(this.getDOMNode());
		alert('In components Did Mount');
	},
	componentWillReceiveProps: function(){
		alert('In components Will Receive Props');
	},
	componentWillUnmount: function(){

	},
	render: function(){
		return(
			<div>
				Hello, {this.state.name}
			</div>
		)
	}
});

React.render(<FriendsContainer />, document.getElementById('app'));


