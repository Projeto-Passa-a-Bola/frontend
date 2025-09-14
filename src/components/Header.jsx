import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-white flex flex-row items-center justify-between p-5 px-85">
        <a href="#hero">
          <img src="../public/logoRoxa.png" alt="logo" className="w-10 h-10" />
        </a>
        <div id="nav-bar" className="flex justify-center items-center">
          <ul className="flex flex-row gap-15 font-medium text-(color:--text-secondary) text-lg">
            <li>
              <a
                href="#resumo"
                className="hover:text-purple-600 ease-out duration-100 hover:border-b-4 p-1"
              >
                Resumo
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-purple-600 ease-out duration-100 hover:border-b-4 p-1"
              >
                Copa
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="hover:text-purple-600 ease-out duration-100 hover:border-b-4 p-1"
              >
                Contato
              </a>
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
          <button className="p-5 h-10 items-center justify-center flex bg-linear-to-r from-purple-500 to-violet-500 cursor-pointer rounded-lg shadow-lg text-white hover:scale-105 transition">
            Cadastro
          </button>
          {/* <button className="p-1 bg-slate-200 cursor-pointer rounded-lg shadow-lg">D</button> */}
        </div>
      </div>
    </>
  );
}

export default Header;
