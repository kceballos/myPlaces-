import React, { Component } from 'react';
import GMaps, { Marker } from './taqsMap';
import SidebarRightOverlay from './sidebar';
import InputExampleFluid from './Input';
// import actions from '../actions'


export default class App extends Component {

	constructor(props){
		super(props)

		this.state = {
			// pos: {lat: 40.730610, lng: -73.935242 }
      userplaces: []
		}
	}

	componentDidMount(){
    this.props.dispatch('LOAD_PLACES')

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
      console.log(place)
      this.props.dispatch('SAVE_PLACES', {place})
      this.setState({
        pos: {
          lat: place.lat,
          lng: place.lng,
        },

      })
    }


  render() {
      // console.log('APP PROPS', this.props);
      const PLACES = Object.values(this.props.PLACES || []);
      console.log(PLACES)
      const gmaps = <GMaps {...this.props} apiKey={"AIzaSyBACizJOC_KdP_vmNWSGsHprpJTRTQMfdg"} center={this.state.pos}>
        <Marker position={this.state.pos} animation="DROP" />
      </GMaps>

      return (<div>
        <div>
        	<SidebarRightOverlay handlePlaceClick={this.handlePlaceClick.bind(this)} location={this.state.pos} {...this.props}>
				    {this.state.pos ? gmaps : null}
        	</SidebarRightOverlay>
        </div>
        <div>
          {PLACES.map(place => {
            console.log(place)
            return <h3>{place.name}</h3>
          })}
        </div>
      
      </div>)
  }
}

//AIzaSyAdHdePExLrWT5do9Y1bdQ72HIlSWpCOG0