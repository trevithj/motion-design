import React from 'react';
import * as API from '../../api';
import { connect } from 'react-redux';
import { coloursLoaded } from '../../reducers/colours';
import { setCustomer, updateCustomer } from '../../reducers/customer';
import { materialsLoaded } from '../../reducers/materials';
import { productsLoaded, addCurtains, deleteCurtains, updateCurtains } from '../../reducers/products';
import { suburbsLoaded } from '../../reducers/suburbs';
import Header from './Header';
import Body from './Body';

const mapStateToProps = ({productView}) => {
    return productView;
};

const mapDispatchToProps = dispatch => ({
  setColours: (payload) => dispatch(coloursLoaded(payload)),
  setMaterials: (payload) => dispatch(materialsLoaded(payload)),
  setData: (data) => {
		dispatch(setCustomer(data.customer));
		dispatch(productsLoaded(data.products));
	},
  setSuburbs: (payload) => dispatch(suburbsLoaded(payload)),
  updateCustomer: (payload) => dispatch(updateCustomer(payload)),
  addCurtains: (payload) => dispatch(addCurtains(payload)),
  deleteCurtains: (payload) => dispatch(deleteCurtains(payload)),
  updateCurtains: (payload) => dispatch(updateCurtains(payload)),
});

const getHeaderProps = props => ({
	title: props.title,
	customer: props.customer,
	onChange: props.updateCustomer,
	suburbs: props.suburbs,
	materials: props.materials,
	colours: props.colours
});

class ProductView extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.onCustomerChange = (dat) => {
	// 		this.props.updateCustomer(dat);
	// 	}
	// }

	componentDidMount() {
		//initial load
		API.getData().then(this.props.setData);
		API.getColours().then(this.props.setColours);
		API.getMaterials().then(this.props.setMaterials);
		API.getSuburbs().then(this.props.setSuburbs);
	}

	render() {
		const { props } = this;
		console.log(props);
		return (
		  <div>
				<Header {...getHeaderProps(props)} />
				<Body products={props.products} />
			{/* <pre>{JSON.stringify(props, null, 3)}</pre> */}
		  </div>
		);

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
