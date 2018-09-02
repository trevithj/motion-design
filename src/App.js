import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const App = props =>(
  <div>
    <pre>{JSON.stringify(props, null, 3)}</pre>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
