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
import Checkout from "./components/blockchainCheckout";
import reducers from "./reducers/reducers";

import styled from 'styled-components'
import "./styles/css/App.css";

// INITIAL STATE
const initialState = {
  isCheckoutVisible: false,
  cart: [{
    id: 0,
    name: 'Evolv Shaman Rock Shoes - Unisex',
    description: 'With a down camber and down-turned, asymmetric toe profile, the Shaman delivers high-performance for the gym, steep sport climbing, and bouldering. Redesigned with more rubber for toe hooking, and an inset front strap for better medial side toe scrumming.',
    price: 185.00,
    count: 2,
    img: 'https://mec.imgix.net/medias/sys_master/high-res/high-res/8809652748318/5046656-BL027.jpg?w=600&h=600&auto=format&q=40&fit=fill&bg=FFF',
  }],
  stock: [
    {
      id: 0,
      name: 'Evolv Shaman Rock Shoes - Unisex',
      description: 'With a down camber and down-turned, asymmetric toe profile, the Shaman delivers high-performance for the gym, steep sport climbing, and bouldering. Redesigned with more rubber for toe hooking, and an inset front strap for better medial side toe scrumming.',
      price: 185.00,
      count: 12,
      img: 'https://mec.imgix.net/medias/sys_master/high-res/high-res/8809652748318/5046656-BL027.jpg?w=600&h=600&auto=format&q=40&fit=fill&bg=FFF',
    }, {
      id: 1,
      name: 'So Ill Street Rock Shoes - Unisex',
      description: 'Aggressively shaped and futuristically sensitive, these shoes are made for crushing. Super-sticky thin rubber suits desperate scumming and inventive heel hooking. 2 buckle closures ensure a locked-in fit, while the low-profile tongue provides just enough cush for pumpy endurance routes.',
      price: 149.00,
      count: 7,
      img: 'https://mec.imgix.net/medias/sys_master/high-res/high-res/8809656451102/5049169-BK000.jpg?w=600&h=600&auto=format&q=60&fit=fill&bg=FFF',
    }, {
      id: 2,
      name: 'Evolv X1 Rock Shoes - Men\'s',
      description: 'An unusual combination of sensitivity, softness and aggression. The X1 offers a more sensitive feel than most shoes. Trax SAS outsole, thin midsole and massive toe patch give it a true sock-like fit, without sacrificing security. It\'s built on a mid-volume, down-turned, cambered last to suit gym training and sending hard outside. The single hook and loop strap closure makes it easy to get on and off.',
      price: 165.00,
      count: 11,
      img: 'https://mec.imgix.net/medias/sys_master/high-res/high-res/8967050493982/5058433-SFM02.jpg?w=600&h=600&auto=format&q=60&fit=fill&bg=FFF',
    }, {
      id: 3,
      name: 'La Sportiva Otaki Rock Shoes - Women\'s',
      description: 'Precisely curved and exacting, these shoes suit in-your-face routes and powerful climbing. The Velcro® closures are designed to push your foot forward to get power into your toes so you can work small holds and overhanging terrain. The heel is crafted for stability, with very firm rubber on the inside edge that resists being deformed under torsion so you can set a heel hook and bear down on it. Shaped like a classic slipper, the Otaki is a precision instrument that sings on the sharp end.',
      price: 200,
      count: 13,
      img: 'https://mec.imgix.net/medias/sys_master/high-res/high-res/8809650356254/5044820-SLF01.jpg?w=600&h=600&auto=format&q=60&fit=fill&bg=FFF',
    }
  ],
};

const StyledPage = styled.div`
  min-height: 100vh;
`

const store = createStore(reducers, initialState, applyMiddleware(thunk));

class App extends Component {
  componentDidUpdate() {
    console.log(store.getState());
  }

  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <StyledPage>
                    <Route path="/" component={HeaderContainer} />
                    <Switch>
                      <Route path="/blockchaincheckout" component={Checkout} />
                      <Route path="/aboutus" component={AboutUs} />
                      <Route exact path="/" component={Home} />
                      <Route path="/shop" component={ShopItemsContainer} />
                      <Route path='/item/:id' component={ItemContainer} />
                      <Route path='/cart' component={CartContainer} />
                      <Route path='*' component={NoMatch} />
                    </Switch>
                </StyledPage>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;