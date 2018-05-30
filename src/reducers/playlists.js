const playlists = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PLAYLIST': 
            return [...state.playlists, action.payload]
        case 'REMOVE_PLAYLIST': 
            return state.playlists.filter(el => el !== action.payload)
        default: 
            return state
    }
}

export default playlists