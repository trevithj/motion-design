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
import Footer from './Footer';

const mapStateToProps = ({productView}) => {
    return productView;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
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

const getChangeHandler = handler => e => {
	const {name, value} = e.target;
	handler({name, value});
}


const getHeaderProps = props => ({
	title: props.title,
	customer: props.customer,
	handleChange: getChangeHandler(props.updateCustomer),
	suburbs: props.suburbs,
	materials: props.materials,
	colours: props.colours
});

const getBodyProps = props => ({
	products: props.products,
	handleChange: getChangeHandler(props.updateCurtains),
	handleDelete: props.deleteCurtains
});

const getFooterProps = props => ({
	doAdd: props.addCurtains,
	doBack: () => { alert('Not implemented yet.'); }
});

class ProductView extends React.Component {

	constructor(props) {
		super(props);
		this.saveAll = () => {
			const { customer, products } = this.props;
			API.postData({ customer, products }).then(data => {
				console.info(data);
			});
		}
	}

	componentDidMount() {
		//initial load
		API.getData().then(this.props.setData);
		API.getColours().then(this.props.setColours);
		API.getMaterials().then(this.props.setMaterials);
		API.getSuburbs().then(this.props.setSuburbs);
	}

	render() {
		const { props } = this;
		return (
		  <div>
				<Header {...getHeaderProps(props)} />
				<Body {...getBodyProps(props)} />
				<Footer {...getFooterProps(props)} doSave={this.saveAll} />
		  </div>
		);

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
