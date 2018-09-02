import { combineReducers } from 'redux';
import { colours } from './colours';
import { materials } from './materials';
import { suburbs } from './suburbs';

export const productView = combineReducers({
	title: () => 'Product View',
	version: () => '1.2.3',
	colours,
	materials,
	suburbs
});
