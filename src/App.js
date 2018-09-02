import React from 'react';
import ProductView from './views/product/ProductView';
import AppFooter from './views/AppFooter';

const App = props => {
	return (
		<div>
			<ProductView />
			<AppFooter version="Version 1.2.3" />
		</div>
	);
}

export default App;
