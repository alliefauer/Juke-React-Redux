import {connect} from 'react-redux';
import Station from '../components/Station';
import React, {Component} from 'react';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player';


const getSongs = function(songs, ownProps) {
    return songs && songs.filter(song => {
        return song.genre === ownProps.params.genreName;
    }).map(convertSong);
 
}

const mapStateToProps = function(state, ownProps) {
        //console.log(getSongs(state.songs, ownProps));
        return {songs: getSongs(state.songs, ownProps),
                currentSong: state.player.currentSong,
                 isPlaying: state.player.isPlaying,
                genre: ownProps.params.genreName,
                list: state.currentSongList}

    }


const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleOne: function(song, list) {
            dispatch(toggleSong(song, list));
        }
    };
}


    const StationContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Station);

export default StationContainer;