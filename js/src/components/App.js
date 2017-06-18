import React, { Component } from 'react';
import GMaps, { Marker } from './taqsMap';

export default class App extends Component {

	constructor(props){
		super(props)

		this.state = {
			// pos: {lat: 40.730610, lng: -73.935242 }
		}
	}

	componentDidMount(){
		if (navigator.geolocation) {
          	navigator.geolocation.getCurrentPosition(function(position) {
          
        	this.setState({
        		pos: {
              		lat: position.coords.latitude,
              		lng: position.coords.longitude
            	}
        	})
		}.bind(this))
      }
  	}

    render() {
        return <div>{this.state.pos ? <GMaps {...this.props} apiKey={"AIzaSyAdHdePExLrWT5do9Y1bdQ72HIlSWpCOG0"} center={this.state.pos}>
            <Marker position={this.state.pos} animation="DROP" />
        </GMaps> : null}</div>
    }
}
