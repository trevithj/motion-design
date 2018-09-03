import React from 'react';
import ProductView from './views/product/ProductView';
import AppFooter from './views/AppFooter';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
`;

const App = props => {
	return (
		<Container>
			<ProductView />
			<AppFooter version="Version 1.2.3" />
		</Container>
	);
}

export default App;
