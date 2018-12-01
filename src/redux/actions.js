import types from './actionTypes';

// payload must be a object
export function addProduct(product){
    return {
        type: types.ADD_PRODUCT,
        payload: product
    }
}

// payload must be an id
export function removeProduct(id){
    return {
        type: types.REMOVE_PRODUCT,
        payload: id
    }
}
