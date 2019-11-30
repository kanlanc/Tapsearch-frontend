import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import NewDoc from './components/NewDoc/NewDoc';
import ViewAll from './components/ViewAll/ViewAll';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/addnewdoc' component={NewDoc} />
        <Route exact path='/viewall' component={ViewAll} />
      </Switch>
    </div>
  );
}

export default App;
