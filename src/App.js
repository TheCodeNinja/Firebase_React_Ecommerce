import HomePage from './pages/home/homepage.component';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import LoginSignupPage from './pages/login-signup/login-signup.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/login' component={LoginSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
