import React, {Component} from 'react';
import Header from "../header/Header";
import {Route, Switch} from "react-router-dom";
import ProductNavigation from "./ProductNavigation";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    {/*<Route exact path='/' component={Header}/>*/}
                    <Route path='/products' component={ProductNavigation}/>
                </Switch>
            </div>
        )
    }
}

export default Navigation;