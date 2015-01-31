/** @jsx React.DOM */
var FriendsContainer = React.createClass({
	getInitialState: function(){
		return {
			name: 'Wisam',
			friends: ['Jess', 'Jana', 'Haris', 'Trudy']
		}

	},
	addFriend: function(friend){
		this.setState({
			friends: this.state.friends.concat([friend])
		});
	},
	render: function(){
		return (
			<div>
				<h3> name: {this.state.name}</h3>
				<AddFriend addNew={this.addFriend}/>
				<ShowList names={this.state.friends}/>
			</div>
			)
	}
});

var AddFriend = React.createClass({
	getInitialState: function(){
		return {newFriend:''}
	},

	updateNewFriend: function(e){
		this.setState({
			newFriend: e.target.value
		});
	},
	handleAddNew: function(){
		this.props.addNew(this.state.newFriend);
		this.setState({
			newFriend: ''
		});
	},
	render: function(){
		return(
			<div>
				<input type="text" value={this.state.newFriend} onChange={this.updateNewFriend}/>
				<button onClick={this.handleAddNew}>Add Friend</button>
			</div>
		);
	}
});

var ShowList = React.createClass({
	render: function(){
		var listItems = this.props.names.map(function(friend){
			return <li>{friend}</li>
		});
		return(
			<div>
				<h3>friends</h3>
				<ul>{listItems}</ul>
			</div>
		)
	}
});


var HelloProps = React.createClass({
    render: function(){
      return(
          <div>hello, {this.props.name}</div>
        )
    }
});


React.render (<HelloProps name='Jess!'/>, document.getElementById('app'));
React.render (<FriendsContainer/>,document.getElementById('app'));
