import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Page from './Pages/Page';
import Shopdetails from './Pages/Shopdetails';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route match exact path='/'>
            <Login/>
          </Route>
          <Route match exact path='/Login'>
            <Login/>
          </Route>
          <Route match exact path='/SignUp'>
            <SignUp/>
          </Route>
          <Route match exact path='/Shopdetails'>
            <Shopdetails/>
          </Route>
          <Route match exact path='/Page'>
            <Page/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
