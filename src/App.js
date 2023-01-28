
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPerson from './Screens/AddPerson/AddPerson';
import Contact from './Screens/Contact/contact';
import Main from './Screens/Main/main';
import NotFound from './Screens/NotFound/NotFound';
import OzodMe from './Screens/OzodMe/OzodMe';

function App() {
  return (
    <div className="app">
      <Main />
      <Routes>
        <Route path='/' />
        <Route path='/contact' element={<Contact />} />
        <Route path='/ozod-me' element={<OzodMe />} />
        <Route path='/add-person' element={<AddPerson />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
