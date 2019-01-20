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
import reducers from "./reducers/reducers";

import "./styles/css/App.css";

// INITIAL STATE
const initialState = {
  cart: [],
  stock: [
    {
      id: 0,
      name: 'TC 2017 LS',
      description: 'VC FlexLight Jersey with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
      price: 34.95,
      count: 12,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_LS_Mens_grande.jpg?v=1485541617',
    }, {
      id: 1,
      name: 'TC 2017 Shorts',
      description: 'VC FlexLight Shorts with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
      price: 25.00,
      count: 7,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_Shorts_White_grande.jpg?v=1485541580',
    }, {
      id: 2,
      name: 'TC 2016 Red SS',
      description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
      price: 74.00,
      count: 11,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_red_SS_front_grande.jpg?v=1468602448',
    }, {
      id: 3,
      name: 'TC 2016 Dark SS',
      description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
      price: 35.99,
      count: 13,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_SS_front_grande.jpg?v=1460557226',
    }
  ],
};

const store = createStore(reducers, initialState, applyMiddleware(thunk));

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
                          <Route path='/item/:id' component={ItemContainer} />
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