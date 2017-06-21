import React, { Component } from 'react'
import { Sidebar, Segment, Input, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
var Autocomplete = require('google-places-browser/autocomplete')
var Places = require('google-places-browser/places')

var autocomplete = Autocomplete(google)
var places = Places(google)

class SidebarRightOverlay extends Component {
  state = { 
    visible: true,
    places: []
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  
  search = (e) => {
    let location = new google.maps.LatLng(this.props.location); 

    let options = {
      input: e.target.value, 
      location,
      radius: 3000   //in meters
    };

    if(e.which === 13) autocomplete.query(options, function (err, results) {
        this.setState({
          places: results
        })
    }.bind(this))
 
    // console.log(e.target.value)
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.tacos}>More Tacos</Button>
        <Input onKeyDown={this.search} className="semantic-input" fluid icon='search' placeholder='Search...' />
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            
            {this.state.places.map((place, index)=>{
              console.log('PLACE',place)
              return <Menu.Item key={index} name={place.description}></Menu.Item>
            })}
            
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'></Header>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarRightOverlay
