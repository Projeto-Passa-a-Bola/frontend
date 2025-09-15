
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderLogado } from "../navigation";
import SearchComponent from '../SearchComponent';


function HomeLogada() {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  // Se o token não existir, redireciona para a página de login
  if (!token) {
    navigate('/login');
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo(a) de volta!</h1>
      <p className="text-xl">Você está logado e pode acessar todo o nosso conteúdo.</p>
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