import c from '../constants'

export const onAddTrack = (name) => {
    return {
        type: c.ADD_TRACK, 
        payload: name
    }
  }

export const onRemoveTrack = (name) => {
    return {
        type: c.REMOVE_TRACK,
        payload: name
    }
  }
