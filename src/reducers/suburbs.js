// { id, name, city }
export const SUBURBS_LOADED = 'SuburbsLoaded';
const initState = [];

export const suburbs = (state = initState, action) => {
    switch(action.type) {
        case SUBURBS_LOADED:
            return action.payload;
        default:
            return state;
    }
};
