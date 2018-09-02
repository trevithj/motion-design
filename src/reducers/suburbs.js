// { id, name, city }
const SUBURBS_LOADED = 'SuburbsLoaded';
export const suburbsLoaded = payload => ({
	payload, type: SUBURBS_LOADED
});

const initState = [];

export const suburbs = (state = initState, action) => {
    switch(action.type) {
        case SUBURBS_LOADED:
            return action.payload;
        default:
            return state;
    }
};
