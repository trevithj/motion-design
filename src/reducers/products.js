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
export const updateCurtains = data => {
    const { name, value } = data;//console.info(data);
    const params = name.split(":");
    const payload = { id: params[0], name: params[1], value };
    return {
	    payload, type: UPDATE_CURTAINS
    };
};
const initState = { curtains: []};

//expect payload to be new (unique) id
const doAddCurtains = (state, id) => {
    id = id || state.curtains.length;
    const curtains = [...state.curtains, {
        id
    }];
    console.info(curtains);
    return Object.assign({}, state, {curtains});
};

//Expect payload to equal id of record to remove
const doDeleteCurtains = (state, payload) => {
    const curtains = state.curtains.filter(dat => dat.id !== payload.id);
    return Object.assign({}, state, {curtains});
};

//Expect payload of form: {id, name, value}
const doUpdateCurtains = (state, payload) => {
    const {id, name, value} = payload;
    const curtains = state.curtains.map(dat => {
        if (`${dat.id}` !== id) {
            return dat;
        }
        return Object.assign({}, dat, {[name]: value});
    });
    console.info(curtains);
    return Object.assign({}, state, {curtains});
};

const map = {
    [PRODUCTS_LOADED]: (state, payload) => payload,
    [ADD_CURTAINS]: doAddCurtains,
    [DELETE_CURTAINS]: doDeleteCurtains,
    [UPDATE_CURTAINS]: doUpdateCurtains
}

export const products = (state = initState, action) => {
    const reducer = map[action.type];
    return reducer ? reducer(state, action.payload) : state;
};
