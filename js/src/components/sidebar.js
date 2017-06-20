import React, { Component } from 'react'
import { Sidebar, Segment, Input, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
var Autocomplete = require('google-places-browser/autocomplete')
var Places = require('google-places-browser/places')

var autocomplete = Autocomplete(google)
var places = Places(google)

class SidebarRightOverlay extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  
  search = (e) => {
    if(e.which === 13) autocomplete.query({input: e.target.value}, function (err, results) {
        results.map(result=>{
          console.log(result.description)
        })
    })
 
    // console.log(e.target.value)
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <Input onKeyDown={this.search} className="semantic-input" fluid icon='search' placeholder='Search...' />
        <Button onClick={this.toggleVisibility}>My Places</Button>
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
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
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
