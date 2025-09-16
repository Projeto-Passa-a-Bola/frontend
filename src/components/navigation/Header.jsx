import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isPanelPage = location.pathname === '/';

  const NavLink = ({ to, children }) => {
    return isPanelPage ? (
      <a
        href={to}
        className="hover:text-purple-600 ease-out duration-100 hover:border-b-4 p-1"
      >
        {children}
      </a>
    ) : (
      <Link
        to={`/${to}`}
        className="hover:text-purple-600 ease-out duration-100 hover:border-b-4 p-1"
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <div className="bg-white flex flex-row items-center justify-between p-5 px-85">
        <Link to="/">
          <img src="../public/logoRoxa.png" alt="logo" className="w-10 h-10" />
        </Link>
        <div id="nav-bar" className="flex justify-center items-center">
          <ul className="flex flex-row gap-15 font-medium text-text-secondary text-lg">
            <li>
              <NavLink to="#resumo">
                Resumo
              </NavLink>
            </li>
            <li>
              <NavLink to="#copa">
                Copa
              </NavLink>
            </li>
            <li>
              <NavLink to="#footer">
                Contato
              </NavLink>
            </li>
          </ul>
        </div>
        <div id="botoes" className="flex gap-20 font-medium">
          <Link
            to="/login"
            className="p-5 h-10 items-center justify-center flex bg-slate-200 cursor-pointer rounded-lg shadow-lg hover:scale-105 transition"
          >
            Entrar
          </Link>
          <Link
            to="/register"
            className="p-5 h-10 items-center justify-center flex bg-linear-to-r from-purple-500 to-violet-500 cursor-pointer rounded-lg shadow-lg text-white hover:scale-105 transition"
          >
            Cadastro
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;