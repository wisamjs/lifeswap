var FirstName = React.createClass({
  render: function(){
    return (
      <div>
        <label htmlFor={this.props.id}>First Name: </label>
        <input id={this.props.id} placeholder="Enter your first name" type="text" value={this.props.value} onChange={this.props.onChange} />
      </div>
      )
  }
});

var LastName = React.createClass({
  render: function(){
    return (
      <div>
        <label htmlFor={this.props.id}>Last Name: </label>
        <input id={this.props.id} placeholder="Enter your last name" type="text" value={this.props.value} onChange={this.props.onChange} />
      </div>
      )
  }
});

var Location = React.createClass({
  render: function(){
    return (
      <div>
        <label htmlFor={this.props.id}>Location: </label>
        <input id={this.props.id} placeholder="Enter your location" type="text" value={this.props.value} onChange={this.props.onChange} />
      </div>
      )
  }
});

var Property = React.createClass({
  render: function(){
    return (
      <div>
        <label htmlFor={this.props.id}>Property Info: </label>
        <textarea id={this.props.id} placeholder="Enter details about your home" value={this.props.value} onChange={this.props.onChange} />
      </div>
      )
  }
});


var User = React.createClass({
  getInitialState: function(){
    return {
      firstName: 'First Name',
      lastName: 'Last Name',
      location: 'Toronto, Canada',
      property: 'I live in a sweet apartment'
    }
  },
  handleChange: function(e){
    var id = e.target.id;
    var newState = {};
    newState[id] = e.target.value;

    this.setState(newState);
  },
  render: function(){
    return (
      <div>
        <FirstName id={this.state.firstName} value={this.state.firstName} onChange={this.handleChange}/>
        <br />
        <LastName id={this.state.lastName} value={this.state.lastName} onChange={this.handleChange}/>
        <br />
        <Location id={this.state.location} value={this.state.location} onChange={this.handleChange}/>
        <br />
        <Property id={this.state.property} value={this.state.property} onChange={this.handleChange} />
        <br />
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
        <User />
        <Amenities />
      </div>
      )
  }
});

React.render(<Form />, document.getElementById('app'));

