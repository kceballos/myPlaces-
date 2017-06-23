import React, { Component } from 'react';
import GMaps, { Marker } from './taqsMap';
import SidebarRightOverlay from './sidebar';
import InputExampleFluid from './Input';

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

    handlePlaceClick(place){
      console.log('in here')
      this.setState({
        pos: {
          lat: place.lat,
          lng: place.lng,
        },

      })
    }


    render() {
        console.log('APP STATE', this.state)
        return (
        <div>
        <div>
        	<SidebarRightOverlay handlePlaceClick={this.handlePlaceClick.bind(this)} location={this.state.pos} {...this.props}>
				{this.state.pos ? <GMaps {...this.props} apiKey={"AIzaSyBACizJOC_KdP_vmNWSGsHprpJTRTQMfdg"} center={this.state.pos}>
	            	<Marker position={this.state.pos} animation="DROP" />
	        	</GMaps> : null}
        	</SidebarRightOverlay>
        }
      }

        </div>
        </div>
        )
    }
}

//AIzaSyAdHdePExLrWT5do9Y1bdQ72HIlSWpCOG0