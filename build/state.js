/** @jsx React.DOM */
var HelloUser = React.createClass({displayName: "HelloUser",
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
        React.createElement("div", null, 
          "Hello ", this.state.username, ", you are ", this.state.age, " years old! And you probably should not share your password which is ", this.state.pass, React.createElement("br", null), 
          "change name: ", React.createElement("input", {type: "text", value: this.state.username, onChange: this.handleName}), 
          React.createElement("br", null), "Decrease age here: ", React.createElement("button", {onClick: this.reduceAge}, "test"), 
          "change pass: ", React.createElement("input", {type: "password", value: this.state.pass, onChange: this.handlePass})

        )
        )
    }
});

React.render(React.createElement(HelloUser, null), document.getElementById('app'));