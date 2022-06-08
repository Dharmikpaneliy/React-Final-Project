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

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component = {Home} />
        <Route exact path={"/about"} component ={About} />
        <Route exact path={"/menu"} component = {Menu} />
        <Route exact path={"/blog"} component = {Blog} />
        <Route exact path={"/contact"} component = {Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
