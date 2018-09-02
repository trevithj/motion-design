import { combineReducers } from 'redux';
import { productView } from './reducers/productView';
export default combineReducers({
	actionType: (state='', action) => action.type,
	productView
});
