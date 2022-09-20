import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';
import { Route, Switch } from 'react-router-dom';
import About from './Container/About-us/About';
import Menu from './Container/Menu/Menu';
import Blog from './Container/Blog/Blog';
import Contact from './Container/Contact/Contact';
import Login from './Container/Login/Login';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store, { configureStore, persistor } from './Container/Redux/Store';
import cart from './Container/Cart/cart';
import Category from './Components/Category/Category';
import Cat_admin from './Adminpanel/Cat_admin';
import Pr_Admin from './Adminpanel/Pr_Admin';
import Productdetails from './Adminpanel/Productdetails';

function App() {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/menu"} component={Menu} />
          <Route exact path={"/blog"} component={Blog} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"cart"} component={cart}/>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/category"} component={Category}/>
          <Route exact path={"/cat_admin"} component={Cat_admin}/>
          <Route exact path={"/pr_admin"} component={Pr_Admin} />
          <Route exact path={"/Productdetails"} component={Productdetails} />
        </Switch>
        <Footer />
      </PersistGate>
      </Provider>
    </>
  );
}

export default App;
