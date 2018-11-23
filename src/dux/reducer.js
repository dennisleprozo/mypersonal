const initialState = {
    user: {}
}

const UPDATE_USER = 'UPDATE_USER';

export default function reducer( state = initialState, action ) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign( {}, state, {user: action.payload} )
            // assign the state and action inside the Object
        default:
            return state;
    }
}

// returns action update user and payload
export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}