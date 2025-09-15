import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderLogado } from "../navigation";
import SearchComponent from '../SearchComponent';


function HomeLogada() {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  const [activeTab, setActiveTab] = useState('times');
  const [searchResults, setSearchResults] = useState(null);

  // Se o token não existir, redireciona para a página de login
  if (!token) {
    navigate('/login');
    return null;
  }

  const handleSearchResults = (results) => {
    setSearchResults(results);
    console.log('Resultados da busca:', results);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo(a) de volta!</h1>
      <p className="text-xl">Você está logado e pode acessar todo o nosso conteúdo.</p>
      {/* Seção de busca */}
      <div className="mt-8 w-full max-w-4xl px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Buscar no Sistema</h2>
        <p className="text-gray-600 text-center mb-6">Encontre rapidamente times e jogadoras cadastrados</p>
        {/* Tabs */}
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('times')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'times'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Times
            </button>
            <button
              onClick={() => setActiveTab('jogadoras')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'jogadoras'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Jogadoras
            </button>
          </div>
        </div>
        {/* Componente de busca */}
        <SearchComponent
          searchType={activeTab}
          onResults={handleSearchResults}
          compact={true}
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Páginas de Acesso Rápido</h2>
        <ul className="list-disc list-inside">
          <li><a href="/painel" className="text-purple-600 hover:underline">Ir para o Painel</a></li>
          <li><a href="/outra-pagina-restrita" className="text-purple-600 hover:underline">Outra página</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HomeLogada;