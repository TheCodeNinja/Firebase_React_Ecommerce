import HomePage from './pages/home/homepage.component';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shoppage.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
