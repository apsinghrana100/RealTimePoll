import logo from './logo.svg';
import './App.css';
import Poll from './component/Poll';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './component/loginPage/loginPage';
import Dashborad from './component/dashboard/dashboard';
import SignUpPageComponent from './component/signin/signin';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashborad />} />
        <Route path="/signup" element={<SignUpPageComponent />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashborad />} />
        {/* <Route path="*" element={<ErrorPageComponent />} /> */}
      

    </Routes>
  </BrowserRouter >
  );
}

export default App;
