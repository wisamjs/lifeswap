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

//Description
var Description = React.createClass({
  render: function(){
    return (
      <p>{this.props.info}</p>
    )
  }
});

// Input checkboxes for amenities
var Checkbox = React.createClass({
  render: function(){
    return (
      <div>
        <input type="checkbox" value={this.props.value} onClick={this.props.update} /> {this.props.value}
      </div>
      )
  }
});



//Paragraph display
var Preview = React.createClass({
        display: function(){
         return this.props.amenities().toString();
    },
    render: function(){
        return (
        <div>
          Hi there! I care about the following amenities: <br /> <br /> {this.display()}
        </div>
        )
    }
});

var Amenities = React.createClass({
    getInitialState: function(){

        var initState = {items:[]};
        var amenities = ['Desk','External Monitor','Keyboard Stand','Laptop Stand','Wifi'];

        //Make an object for each amenity
        //and add it to initial state
        amenities.forEach(function(item){
            initState.items.push({value:item,isChecked:false});
        })

        return initState;

    },
  render: function(){

    //Create a checkbox for each amenity object
    var listItems = this.state.items.map(function(item){
      return <Checkbox key={item.value} value={item.value} update={this.toggleInput} />
    },this);
    return (
      <div>
        {listItems}
        <br/>

        <Preview amenities={this.getChecked}/>
      </div>

      )
  },
  //Update isChecked property
  //of amenity that was checked/unchecked
   toggleInput: function(e){
    var updatedItems = this.state.items;
    updatedItems.forEach(function(item){
      if (item.value === e.target.value){
        item.isChecked = e.target.checked;
      }
     });
     this.setState({items:updatedItems});
    //Return names of all checked amenities
  },getChecked:function(){

    return this.state.items.filter(function(i){
         return i.isChecked;
     }).map(function(i){
        return i.value;
     });


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

