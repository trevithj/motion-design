// { id, name, red, green, blue }
export const COLOURS_LOADED = 'ColoursLoaded';
const initState = [];

export const colours = (state = initState, action) => {
    switch(action.type) {
        case COLOURS_LOADED:
            return action.payload;
        default:
            return state;
    }
};
