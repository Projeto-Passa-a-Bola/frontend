import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  PublicLayout, 
  PrivateLayout, 
  HomePageWrapper, 
  Login, 
  Register, 
  HomeLogada,
  HeaderLogado,
  PrivateRoute, 
  Campeonato,
  HeroCampeonato,
  Sobre,
} from "./components";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout público */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Layout privado */}
        <Route
          element={
            <PrivateRoute>
              <PrivateLayout />
            </PrivateRoute>
          }
        >
          <Route path="/painel" element={<HomeLogada />} />
          <Route path="/campeonato" element={<Campeonato/>}/>
          <Route path="/sobre" element={<Sobre />} />
          
          {/* aqui você pode adicionar outras rotas privadas */}
        </Route>
      </Routes>
      
      {/* Test Login removido */}
    </BrowserRouter>
  );
}

export default App;
