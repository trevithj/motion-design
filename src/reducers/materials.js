// { id, name }
const MATERIALS_LOADED = 'MaterialsLoaded';
export const materialsLoaded = payload => ({
	payload, type: MATERIALS_LOADED
});

const initState = [];

export const materials = (state = initState, action) => {
    switch(action.type) {
        case MATERIALS_LOADED:
            return action.payload;
        default:
            return state;
    }
};
