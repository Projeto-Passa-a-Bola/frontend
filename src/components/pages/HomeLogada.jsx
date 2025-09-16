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
      timeA: "Time 1",
      timeB: "Time 2",
      horario: "15:00",
      data: "25/09",
      local: "Estádio Municipal"
    },
    {
      id: 2,
      timeA: "Time 3",
      timeB: "Time 4",
      horario: "17:30",
      data: "25/09",
      local: "Arena Litorânea"
    },
    {
      id: 3,
      timeA: "Time 5",
      timeB: "Time 6",
      horario: "19:00",
      data: "26/09",
      local: "Complexo Esportivo Central"
    }
  ];

  return (
    <>
      <div className="overflow-x-hidden">
        {/* Seção de Boas-vindas */}
        <div id="Hero" className="relative flex flex-col justify-center items-center p-8 md:p-16 lg:px-24 xl:px-40 min-h-screen">
                        {/* Contêiner do Vídeo de Fundo */}
                        <div className="absolute inset-0 z-0 overflow-hidden bg-[url(../../public/resumoImg.png)] bg-no-repeat bg-cover bg-center">
                        </div>
        
                        {/* Camada de Escurecimento (Overlay) */}
                        <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
        
                        {/* Conteúdo por cima do vídeo e do overlay */}
                        <div className="relative z-10 flex flex-col items-center text-center gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                Passa a <span className="text-purple-500">Bola</span>
                            </h1>
                            <p className="text-base md:text-lg lg:text-2xl text-white">
                                A plataforma profissional que conecta atletas, técnicos e organizações do futebol feminino. Transformando carreiras e elevando o esporte a um novo patamar.
                            </p>
                            <button className="px-8 py-3 w-fit text-lg font-bold rounded-xl cursor-pointer text-white bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg hover:scale-105 transition-transform duration-300">
                                Comece Agora →
                            </button>
        
                            <div id="Pesquisa" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">1.2K+</h1>
                                    <p className="text-sm md:text-base text-white font-semibold">Atletas Profissionais</p>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">150+</h1>
                                    <p className="text-sm md:text-base text-white font-semibold">Clubes Parceiros</p>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">50+</h1>
                                    <p className="text-sm md:text-base text-white font-semibold">Competições</p>
                                </div>
                            </div>
                        </div>
                    </div>

        {/* Seção de Próximos Jogos */}
        <div className="bg-gradient-to-bl from-purple-500 to-blue-400">
          <div className='py-25'>
            <div className='flex'> 
              <div className='flex-4'>
                <div className="p-10 px-20 bg-white rounded-r-xl w-fit">
                  <h2 className="text-2xl md:text-4xl text-purple-600 uppercase font-bold">Próximos Jogos</h2>
                </div>
              </div>
            <div className="flex flex-col flex-3 gap-8 px-45 py-10">
              {proximosJogos.map((jogo) => (
                <div key={jogo.id} className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
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
        </div>
        <div id='patrocinadores'>
            <div className='py-100 bg-gradient-to-br from-blue-100 to-purple-500'>
                <div className="p-10 px-20 bg-white rounded-r-xl w-fit">
                  <h2 className="text-2xl md:text-4xl text-purple-600 uppercase font-bold">Patrocinadores</h2>
                </div>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default HomeLogada;