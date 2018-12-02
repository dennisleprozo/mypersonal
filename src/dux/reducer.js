const initialState = {
    user: {},
    cart: []
}

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CART = 'UPDATE_CART';

export default function reducer( state = initialState, action ) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign( {}, state, {user: action.payload} )
            // assign the state and action inside the Object
        case UPDATE_CART: 
            // assign new item in the cart
            return Object.assign( {}, state, {cart: action.payload} )

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

//returns action update cart with items payload
export function updateCart(cart) {
    return {
        type: UPDATE_CART,
        payload: cart
    }
}

