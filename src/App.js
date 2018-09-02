import React from 'react';
import * as API from './api';
import { connect } from 'react-redux';
import { coloursLoaded } from './reducers/colours';
import { materialsLoaded } from './reducers/materials';
import { suburbsLoaded } from './reducers/suburbs';


const mapStateToProps = ({productView}) => ({productView});

const mapDispatchToProps = dispatch => ({
  setColours: (payload) => dispatch(coloursLoaded(payload)),
  setMaterials: (payload) => dispatch(materialsLoaded(payload)),
  setSuburbs: (payload) => dispatch(suburbsLoaded(payload)),
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

	componentDidMount() {
		API.getColours().then(this.props.setColours);
		API.getMaterials().then(this.props.setMaterials);
		API.getSuburbs().then(this.props.setSuburbs);
	}

	render() {
		const { props } = this;
		return (
		  <div>
			<pre>{JSON.stringify(props, null, 3)}</pre>
		  </div>
		);

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
