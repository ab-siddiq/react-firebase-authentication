import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';



function App() {
  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<SignIn></SignIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
