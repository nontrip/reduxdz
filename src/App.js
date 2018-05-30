import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as playlistActions from './actions/playlist'

console.log(playlistActions)

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      newSongName: ''
    }
  }

  componentDidMount(){
    console.log(this.props)
  }

  addTrack = () => {
    const songName = this.state.newSongName
    // const { onAddTrack } = this.props.actions
    const { onAddTrack } = this.props
    onAddTrack(songName)
    this.setState({
      newSongName: ''
    })
  }

  changeName = (e) => {
    this.setState({
      newSongName: e.target.value
    })
  }

  removeTrack = (e) => {
    // const { onRemoveTrack } = this.props.actions
    const { onRemoveTrack } = this.props
    const name = e.target.dataset.name
    onRemoveTrack(name)
  }

  render() {
    const { tracks } = this.props
    const { newSongName } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {tracks.map((el, i) => 
            <li key={i} data-name={el} onClick={this.removeTrack}>{el}</li>
          )}
        </ul>
        <input value={newSongName} onChange={this.changeName}/>
        <button onClick={this.addTrack}>Add track</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    actions: bindActionCreators(playlistActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  dispatch => ({

    onAddTrack: (name) => {
      const action = playlistActions.onAddTrack(name)
      dispatch(action)
    },
    onRemoveTrack: (name) => {
      const action = playlistActions.onRemoveTrack(name)
      dispatch(action)
    }
  
  })
)(App);
