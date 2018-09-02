// { id, name }
export const MATERIALS_LOADED = 'MaterialsLoaded';
const initState = [];

export const materials = (state = initState, action) => {
    switch(action.type) {
        case MATERIALS_LOADED:
            return action.payload;
        default:
            return state;
    }
};
