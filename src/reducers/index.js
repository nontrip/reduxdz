import { combineReducers } from 'redux'

import playlists from './playlists'
import tracks from './tracks'

export default combineReducers({
    tracks,
    playlists
})