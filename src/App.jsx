import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx'; 
import HomeLogada from './components/HomeLogada.jsx'; 
import PrivateRoute from './components/PrivateRoute.jsx'; // A linha que você precisa
import HomePageWrapper from './components/HomePageWrapper.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route 
          path="/painel" 
          element={
            <PrivateRoute>
              <HomeLogada />
            </PrivateRoute>
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;