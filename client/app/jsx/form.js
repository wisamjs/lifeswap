var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      firstname: 'First Name', 
      lastname: 'Last Name',
      location: 'Toronto, Canada',
      property: 'I live in a sweet apartment'
    }
  },
  handleFirstName: function(e){
    this.setState({
      firstname: e.target.value
      
    });
  },

  handleLastName: function(e){
    this.setState({
      lastname: e.target.value
    });
  },

  handleLocation: function(e){
    this.setState({
      location: e.target.value
    });
  },

  handleProperty: function(e){
     this.setState({
       property: e.target.value
     });
   },
  render: function(){
    return (
      <div>
        <p>I am <span class="completeMe">{this.state.firstname}</span> <span class="completeMe">{this.state.lastname}</span> and I have a life to swap. My home is in <span class="completeMe">{this.state.location}.</span></p>
        <p>{this.state.property}</p>
        <label for="firstname">First Name: </label>
        <input id="firstname" placeholder="Enter your first name" type="text" value={this.state.firstname} onChange={this.handleFirstName} />
        <label for="lastName">Last Name: </label>
        <input id="lastName" placeholder="Enter your last name" type="text" value={this.state.lastname} onChange={this.handleLastName} />
        <label for="location">Location: </label>
        <input id="location" placeholder="Enter location" type="text" value={this.state.location} onChange={this.handleLocation} />
        <label for="property">Property Info: </label>
        <textarea id="property" placeholder="Enter details about your home"  value={this.state.property} onChange={this.handleProperty}></textarea>
      </div>
    )
  }
});

//Page title
var Title = React.createClass({
  render: function(){
    return (
        <h2>{this.props.name}</h2>
      )
  }
});


var Description = React.createClass({
  render: function(){
    return (
      <p>{this.props.info}</p>
    )

  }
});

var Checkbox = React.createClass({
  getInitialState: function(){
    return {isChecked:false};
  },
  toggleInput: function(e){
    this.setState({isChecked:e.target.checked});
  },
  display: function(){
    if (this.state.isChecked){
      return 'checked'
    }else{
      return 'unchecked'
    }
  },
  render: function(){
    return (
      <div>
        <input type="checkbox" value={this.props.value} onClick={this.toggleInput} /> {this.props.value} ({this.display()})
      </div>
      )
  }
});


var Amenities = React.createClass({
  render: function(){
    return (
      <div>
        <Checkbox value="Desk"/>
        <Checkbox value="Internet Connection" />
        <Checkbox value="External Monitor" />
        <Checkbox value="Keyboard" />
        <Checkbox value="Laptop Stand" />
        <Checkbox value="Wifi" />
        <br/>

      </div>

      )
  }
});


var Form = React.createClass({
  render: function(){
    return (
      <div>
        <Title name="Life Swap Form"/>
        <Description info="Fill out the form below:"/>
        <Amenities/>
      </div>
      )
  }
});

React.render(<Form />, document.getElementById('app'));

