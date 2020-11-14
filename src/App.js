import React from 'react';
import './App.css';

import history from './services/history';
import Routes from './routes';
import { Router } from 'react-router-dom';

function App(props) {
  return (

    <Router history={history}>
      <Routes />
    </Router>
  );
}
export default App;


// const mapStateToProps = (state) => {
//   console.log('state:', state);
//   return {
//     count: state.counter.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
