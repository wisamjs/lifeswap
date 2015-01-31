/** @jsx React.DOM */
var HelloWorld = React.createClass({
    render: function() {
        return <div>Hello World</div>;
    }
});


var HelloUser = React.createClass({
    getInitialState: function(){
      return {
        username: 'Jess!',
        age:30,
        pass: 'fakePassword'
      }
    },

    handleName: function(e){
      this.setState({
        username:e.target.value
      });
    },
    handleAge: function(e){
      this.setState({
        age:e.target.value
      });
    },
    handlePass: function(e){
      this.setState({
        pass:e.target.value
      });
    },
    reduceAge: function(){
      this.setState({
        age:this.state.age -1
      });
    },
    render:function(){
      return (
        <div>
          Hello {this.state.username}, you are {this.state.age} years old! And you probably should not share your password which is {this.state.pass}<br/>
          change name: <input type="text" value={this.state.username} onChange={this.handleName}/>
          <br/>Decrease age here: <button onClick={this.reduceAge}>test</button>
          change pass: <input type="password" value={this.state.pass} onChange={this.handlePass}/>

        </div>
        )
    }
});

// React.render(<HelloWorld />, document.getElementById('app'));
React.render(<HelloUser />, document.getElementById('app'));
