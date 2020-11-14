import React from 'react';
import { connect } from 'react-redux';
import {
    increaseCounter,
    decreaseCounter,
} from '../redux/Counter/counter.actions';

function Dashboard(props) {
    return (

        <div className='App'>
            <h1 >
                Dashboard
      </h1>
            <div>Count : {props.count}</div>
            <button onClick={() => props.increaseCounter()}>Increase Count</button>
            <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
        </div>

    );
}

const mapStateToProps = (state) => {
    console.log('state:', state);
    return {
        count: state.counter.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
