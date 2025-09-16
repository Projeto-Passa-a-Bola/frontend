import React from 'react';

const Chaveamento = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chaveamento do Campeonato
          </h1>
          <p className="text-lg text-gray-600">
            Acompanhe a evolução dos jogos e veja quem avança para as próximas fases
          </p>
        </div>

        {/* Chaveamento Container */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Sistema de Chaveamento
            </h2>
            
            {/* Placeholder para o chaveamento */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
              <div className="text-gray-500">
                <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Chaveamento em Construção
                </h3>
                <p className="text-gray-500">
                  O sistema de chaveamento será implementado em breve. 
                  Aqui você poderá visualizar todas as fases do campeonato.
                </p>
              </div>
            </div>

            {/* Informações sobre o chaveamento */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Fase de Grupos</h4>
                <p className="text-blue-700 text-sm">
                  Times divididos em grupos para a primeira fase
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Eliminatórias</h4>
                <p className="text-green-700 text-sm">
                  Sistema de mata-mata a partir das oitavas de final
                </p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Final</h4>
                <p className="text-yellow-700 text-sm">
                  Grande final para definir o campeão
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chaveamento;
