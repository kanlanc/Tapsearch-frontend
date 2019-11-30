import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import NewDoc from './components/NewDoc/NewDoc';
import ViewAll from './components/ViewAll/ViewAll';
function App() {
  return (
    <div className='App'>
      <NavBar />
      {/* Use react router here for switching between mainpage and new doc and view all pages */}
      <MainPage />
      {/* <NewDoc /> */}
      {/* <ViewAll /> */}
    </div>
  );
}

export default App;
