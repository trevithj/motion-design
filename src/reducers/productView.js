import { combineReducers } from 'redux';
import { colours } from './colours';
import { customer } from './customer';
import { materials } from './materials';
import { products } from './products';
import { suburbs } from './suburbs';

export const productView = combineReducers({
	title: () => 'Product View',
	customer,
	products,
	colours,
	materials,
	suburbs
});
