// { id, name, red, green, blue }
const PRODUCTS_LOADED = 'ProductsLoaded';
const ADD_CURTAINS = 'AddCurtains';
const DELETE_CURTAINS = 'DeleteCurtains';
const UPDATE_CURTAINS = 'UpdateCurtains';
export const productsLoaded = payload => ({
	payload, type: PRODUCTS_LOADED
});
export const addCurtains = payload => ({
	payload, type: ADD_CURTAINS
});
export const deleteCurtains = payload => ({
	payload, type: DELETE_CURTAINS
});
export const updateCurtains = payload => ({
	payload, type: UPDATE_CURTAINS
});
const initState = {};

export const products = (state = initState, action) => {
    switch(action.type) {
        case PRODUCTS_LOADED:
            return action.payload;
        case ADD_CURTAINS:
            return action.payload;
        case DELETE_CURTAINS:
            return action.payload;
        case UPDATE_CURTAINS:
            return action.payload;
        default:
            return state;
    }
};
