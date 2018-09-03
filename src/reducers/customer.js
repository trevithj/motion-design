// { id, name, red, green, blue }
const SET_CUSTOMER = 'SetCustomer';
const UPDATE_CUSTOMER = 'UpdateCustomer';
export const setCustomer = payload => ({
	payload, type: SET_CUSTOMER
});
export const updateCustomer = ({name, value}) => ({
	payload: {[name]: value}, type: UPDATE_CUSTOMER
});
const initState = {};

const map = {
    [SET_CUSTOMER]: (state, payload) => payload,
    [UPDATE_CUSTOMER]: (state, payload) => Object.assign({}, state, payload),
};

export const customer = (state = initState, action) => {
    const reducer = map[action.type];
    return reducer ? reducer(state, action.payload) : state;
};
