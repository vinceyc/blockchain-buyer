import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

import HeaderContainer from "./containers/headerContainer";
import ItemContainer from "./containers/itemContainer";
import ShopItemsContainer from "./containers/shopItemsContainer";
import CartContainer from "./containers/cartContainer";
import NoMatch from "./containers/noMatch";

import Home from "./components/home";
import AboutUs from "./components/aboutus";
import Checkout from "./components/checkout";
import reducers from './reducers/reducers'

import "./App.css";

const store = createStore(reducers, applyMiddleware(thunk));

// FUNCTIONS
// getOptionsArray
const getOptionsArray = (count) => {
    const array = [];
    for (let i = 0; i < count; i++) {
      array.push(i + 1);
    }
  
    return array;
  };

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route path="/" component={HeaderContainer} />
                        <Switch>
                          <Route path="/checkout" component={Checkout} />
                          <Route path="/aboutus" component={AboutUs} />
                          <Route exact path="/" component={Home} />
                          <Route path="/shop" component={ShopItemsContainer} />
                          <Route path='item/:id' component={ItemContainer} />
                          <Route path='cart' component={CartContainer} />
                          <Route path='*' component={NoMatch} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;