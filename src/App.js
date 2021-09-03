import './App.scss';
import Header from './components/header/Header';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
