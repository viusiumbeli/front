import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from "../product/Product";

class App extends Component {
    render() {
        return (
            <div>
                {/*<HotProducts store={this.props.hotElements}/>*/}
                <Product store={this.props.hotElements}/>
            </div>
        );
    }
}

export default connect(
    state => ({
        hotElements: state
    }),
    dispatch => ({})
)(App);