// { id, name, red, green, blue }
const SET_CUSTOMER = 'SetCustomer';
const UPDATE_CUSTOMER = 'UpdateCustomer';
export const setCustomer = payload => ({
	payload, type: SET_CUSTOMER
});
export const updateCustomer = payload => ({
	payload, type: UPDATE_CUSTOMER
});
const initState = {};

export const customer = (state = initState, action) => {
    switch(action.type) {
        case SET_CUSTOMER:
            return action.payload;
        case UPDATE_CUSTOMER:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
