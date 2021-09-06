import './App.scss';
import Header from './components/header/Header';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Listingpage from './pages/Listingpage/Listingpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/job/:id' component={Listingpage}/>
      </Switch>
    </div>
  );
}

export default App;
