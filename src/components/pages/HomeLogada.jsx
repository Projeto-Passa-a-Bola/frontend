import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeLogada() {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  // Se o token não existir, redireciona para a página de login
  if (!token) {
    navigate('/login');
    return null;
  }

  // Dados estáticos de exemplo para os jogos
  const proximosJogos = [
    {
      id: 1,
      timeA: "Águias Douradas",
      timeB: "Fênix FC",
      horario: "15:00",
      data: "25/09",
      local: "Estádio Municipal"
    },
    {
      id: 2,
      timeA: "Valkírias",
      timeB: "Guardiãs da Floresta",
      horario: "17:30",
      data: "25/09",
      local: "Arena Litorânea"
    },
    {
      id: 3,
      timeA: "Panteras Negras",
      timeB: "Lobas do Gelo",
      horario: "19:00",
      data: "26/09",
      local: "Complexo Esportivo Central"
    }
  ];

  return (
    <>
      <div className="overflow-x-hidden min-h-screen bg-purple-100 flex flex-col items-center p-8 md:p-16">
        {/* Seção de Boas-vindas */}
        <div className="relative w-full max-w-5xl text-center mb-16">
          <div className="absolute inset-0 z-0 bg-purple-500 rounded-2xl opacity-10"></div>
          <div className="relative z-10 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800">
              Bem-vindo(a) de volta!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
              Sua jornada no mundo do futebol feminino continua. Fique por dentro dos próximos jogos e novidades da Passa a Bola.
            </p>
            <div className="flex justify-center mt-8">
              <a href="/painel" className="px-8 py-3 w-fit text-lg font-bold rounded-full text-white bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg hover:scale-105 transition-transform duration-300">
                Ir para o Painel →
              </a>
            </div>
          </div>
        </div>

        {/* Seção de Próximos Jogos */}
        <div className="w-full max-w-5xl">
          <div className="py-4 px-10 bg-amber-50 rounded-r-3xl w-fit mb-8">
            <h2 className="text-2xl md:text-4xl text-purple-600 uppercase font-bold">Próximos Jogos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proximosJogos.map((jogo) => (
              <div key={jogo.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-800">{jogo.timeA}</span>
                  <span className="text-lg font-bold text-gray-500">vs</span>
                  <span className="text-lg font-bold text-gray-800">{jogo.timeB}</span>
                </div>
                <div className="border-t border-purple-200 pt-4 text-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-purple-500">Data:</span> {jogo.data}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold text-purple-500">Horário:</span> {jogo.horario}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold text-purple-500">Local:</span> {jogo.local}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLogada;