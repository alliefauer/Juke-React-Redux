import {connect} from 'react-redux';
import Stations from '../components/Stations';
import React, {Component} from 'react';


// class StationsContainer extends Component {
//     constructor(props) {
//         super(props);
//         //this.state = store.getState();
//     }



//     render() {
//         return (

//         )
//     }
// }

export const convertSongsToStations = function (songsArray) {
    const stations = {};
    songsArray && songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
}

const mapStateToProps = function(state, ownProps) {
        //console.log(state)
        return {stations: convertSongsToStations(state.songs)}

    }
const mapDispatchToProps = function(dispatch, ownProps) {
        return {};
    }

const StationsContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Stations);

export default StationsContainer;