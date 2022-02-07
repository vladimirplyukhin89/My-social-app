import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
  //debugger
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs
            store={props.store}
          />} />
          <Route path='/profile' element={<Profile
            state={props.state.profilePage}
            dispatch={props.dispatch}
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

