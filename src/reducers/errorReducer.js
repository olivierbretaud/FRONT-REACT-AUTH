import { GET_ERRORS } from '../actions/types'

const intititalState = {}

export default function(state = intititalState, action ) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload
        default:
            return state;
    }
}