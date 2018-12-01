import types from './actionTypes';

const initialState = {
    products: []
}


export default function reducer(state = initialState.products, { type, payload }){
    switch(type){
        case types.ADD_PRODUCT: 
            return [...state, payload]
        case types.REMOVE_PRODUCT:
            return state.filter(item => item.id !== payload)    
        default:
            return state;    
    }
}
