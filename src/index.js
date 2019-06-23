import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import { MainLayout } from "./components/MainLayout";
import { Terms } from "./components/Terms";
import { Home } from "./components/Home";
import ProductItem from "./components/ProductItem";
import { Faq } from "./components/Faq";
import  { ContactForm }  from "./components/ContactForm";
import  Cart from "./components/Cart";
import { NoMatch } from "./components/NoMatch";

import "./index.scss";

import cartReducer from './reducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>

        <MainLayout >
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/produkt/:id"} render={props => (
                  <ProductItem
                    id={props.match.params.id}
                    {...props} />
                  )}
            />
            <Route exact path={"/faq"} component={Faq} />
            <Route exact path={"/regulamin"} component={Terms} />
            <Route exact path={"/kontakt"} component={ContactForm} />
            <Route exact path={"/koszyk"} component={Cart} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const store = createStore(cartReducer);

const rootElement = document.getElementById("root");
render(<Provider store={store}><App /></Provider>, rootElement);

