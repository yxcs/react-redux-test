/**
 * Created by Administrator on 2017/3/23.
 */
import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../actions/AppleAction';

class AppleEat extends React.Component {

    fetchData = () => {

    };

    render() {
        const {numb} = this.props.AppleReducer;
        this.fetchData();
        return (
            <div>
                <p>苹果数量 {numb}</p>
                <button onClick={this.props.actions.addNumb}>+</button>
                <button onClick={this.props.actions.delNumb}>-</button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    AppleReducer: state.AppleReducer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppleEat);