import { Link } from "react-router-dom";

function NavbarLogada(){
    return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <ul className="flex space-x-6 text-white font-semibold">
        <li>
            <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/campeonato">Campeonato</Link>
        </li>
        <li>
          <Link to="/sobre">Perfil</Link>
        </li>
        <li>
          <Link to="/perfil">Configurações</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarLogada;
