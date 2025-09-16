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
          {/* aqui você pode adicionar outras rotas privadas */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
