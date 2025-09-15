import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderLogado, HeroCampeonato } from "../navigation";


function Campeonato() {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  const [activeTab, setActiveTab] = useState('meu-time');

  // Se o token não existir, redireciona para a página de login
  if (!token) {
    navigate('/login');
    return null;
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'meu-time':
        return <div className="p-6">Conteúdo do Meu Time</div>;
      case 'jogos':
        return <div className="p-6">Conteúdo dos Jogos</div>;
      case 'estatisticas':
        return <div className="p-6">Conteúdo das Estatísticas</div>;
      case 'cadastro-campeonato':
        return <div className="p-6">Conteúdo do Cadastro de Campeonato</div>;
      default:
        return <div className="p-6">Conteúdo do Meu Time</div>;
    }
  };

  return (
    <div>
      
      
      {/* SubNav */}
      <nav className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('meu-time')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'meu-time'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Meu Time
            </button>
            <button
              onClick={() => setActiveTab('jogos')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'jogos'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Jogos
            </button>
            <button
              onClick={() => setActiveTab('estatisticas')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'estatisticas'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Estatísticas
            </button>
            <button
              onClick={() => setActiveTab('cadastro-campeonato')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'cadastro-campeonato'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Cadastro Campeonato
            </button>
          </div>
        </div>
      </nav>

      {/* Conteúdo da aba ativa */}
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default Campeonato;