/**
 * Created by Administrator on 2017/3/21.
 */
import  React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../actions/UserAction';
import './User.css';

class Counter extends React.Component {

    add = () => {
        this.props.actions.addUser();
    };

    render() {
        const {text} = this.props.UserReducer;
        return (
            <div>
                <p>状态 {text}</p>
                <button onClick={this.add}>增加用户</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);