import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Index';
import OnlineRes from './Components/Online_Res';
import BookSession from './Components/Book Session';
import Feedback from './Components/Feedback';
import Contact from './Components/Contact';
import SignUp from './Components/Sign Up';
import Login from './Components/Login';
import SelfAsses from './Components/Self Assessment';
import Courses from './Components/Courses';
import RefMaterials from './Components/Reference Materials';

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="online-res" element={<OnlineRes />} />
          <Route path="self-asses" element={<SelfAsses />} />
          <Route path="ref-materials" element={<RefMaterials />} />
          <Route path="courses" element={<Courses />} />
          <Route path="book-session" element={<BookSession />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
