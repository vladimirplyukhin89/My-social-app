import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer
            store={props.store}
          />} />
          <Route path='/profile'
            element={<ProfileContainer
              store={props.store}
            />} />
          <Route path='/users' element={<UsersContainer
            store={props.store}
          />} />
          {/*<Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />*/}
        </Routes>
      </div>
    </div>
  );
}

export default App;

