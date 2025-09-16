import { Link } from "react-router-dom";

function HeaderLogado() {
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
                href="#home"
                className="hover:text-purple-600 ease-out duration-100 hover:border-b-4 p-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="campeonato"
                className="hover:text-purple-600 ease-out duration-100 hover:border-b-4 p-1"
              >
                Campeonato
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="hover:text-purple-600 ease-out duration-100 hover:border-b-4 p-1"
              >
                Sobre
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
            <li>
              <a
                href="#perfil"
                className="hover:text-purple-600 ease-out duration-100 hover:border-b-4 p-1"
              >
                Perfil
              </a>
            </li>
          </ul>
        </div>
        <div id="botoes" className="flex gap-20 font-medium">
          
          {/* <button className="p-1 bg-slate-200 cursor-pointer rounded-lg shadow-lg">D</button> */}
        </div>
      </div>
    </>
  );
}

export default HeaderLogado;
