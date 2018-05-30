import c from '../constants'

const tracks = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TRACK': 
            return [...state, action.payload]
        case 'REMOVE_TRACK': 
            return state.filter(el => el !== action.payload)
        default: 
            return state
    }
}

export default tracks