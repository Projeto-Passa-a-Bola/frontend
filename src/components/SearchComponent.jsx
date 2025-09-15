import React, { useState } from 'react';
import { buscarTimesPorNome, buscarJogadoras } from '../services/api';

const SearchComponent = ({ searchType = 'times', onResults, compact = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [filtros, setFiltros] = useState({
    aprovada: undefined // para busca de jogadoras
  });

  const handleSearch = async (page = 1) => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    try {
      let data;
      
      if (searchType === 'times') {
        data = await buscarTimesPorNome(searchTerm, page);
      } else if (searchType === 'jogadoras') {
        data = await buscarJogadoras(searchTerm, filtros.aprovada, page);
      }
      
      setResults(data.times || data.jogadoras || []);
      setCurrentPage(data.currentPage || page);
      setTotalPages(data.totalPages || 1);
      setTotal(data.total || (data.times?.length || data.jogadoras?.length || 0));
      
      if (onResults) onResults(data);
      
    } catch (error) {
      console.error('Erro na busca:', error);
      setResults([]);
      setCurrentPage(1);
      setTotalPages(1);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      handleSearch(newPage);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setCurrentPage(1);
      handleSearch(1);
    }
  };

  const handleNewSearch = () => {
    setCurrentPage(1);
    handleSearch(1);
  };

  const containerClass = compact 
    ? "w-full max-w-2xl mx-auto mb-8" 
    : "max-w-4xl mx-auto p-5";

  const inputContainerClass = compact
    ? "flex gap-2 mb-4 flex-wrap"
    : "flex gap-3 mb-5 flex-wrap";

  return (
    <div className={containerClass}>
      <div className={inputContainerClass}>
        <input
          type="text"
          placeholder={`Buscar ${searchType === 'times' ? 'times' : 'jogadoras'}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 min-w-[200px] px-4 py-3 border-2 border-gray-200 rounded-lg text-base 
                   focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 
                   transition-colors duration-300"
        />
        
        {searchType === 'jogadoras' && (
          <select
            value={filtros.aprovada || ''}
            onChange={(e) => setFiltros({...filtros, aprovada: e.target.value || undefined})}
            className="px-4 py-3 border-2 border-gray-200 rounded-lg text-base bg-white cursor-pointer
                     focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          >
            <option value="">Todas</option>
            <option value="true">Aprovadas</option>
            <option value="false">Não Aprovadas</option>
          </select>
        )}
        
        <button 
          onClick={handleNewSearch} 
          disabled={loading || !searchTerm.trim()}
          className="px-6 py-3 bg-gradient-purple text-white border-none rounded-lg text-base cursor-pointer 
                   transition-all duration-300 hover:opacity-90 disabled:bg-gray-400 
                   disabled:cursor-not-allowed"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-800 text-xl font-semibold">
              Resultados ({total > 0 ? `${total} encontrados` : results.length})
            </h3>
            {totalPages > 1 && (
              <div className="text-sm text-gray-600">
                Página {currentPage} de {totalPages}
              </div>
            )}
          </div>
          
          <div className="grid gap-4 max-h-96 overflow-y-auto">
            {results.map((item, index) => (
              <div 
                key={item._id || index} 
                className="p-4 border border-gray-200 rounded-lg bg-white transition-all duration-200 
                         hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                {searchType === 'times' ? (
                  <div>
                    <h4 className="m-0 mb-2 text-gray-800 text-lg font-medium">{item.nome}</h4>
                    <p className="my-1 text-gray-600 text-sm">Código: {item.codigoUnico}</p>
                    {item.grupo && <p className="my-1 text-purple-600 text-sm font-medium">Grupo: {item.grupo}</p>}
                  </div>
                ) : (
                  <div>
                    <h4 className="m-0 mb-2 text-gray-800 text-lg font-medium">{item.nome}</h4>
                    <p className="my-1 text-gray-600 text-sm">
                      Status: <span className={item.aprovada ? 'text-green-600 font-medium' : 'text-orange-600 font-medium'}>
                        {item.aprovada ? 'Aprovada' : 'Pendente'}
                      </span>
                    </p>
                    {item.time && <p className="my-1 text-purple-600 text-sm font-medium">Time: {item.time}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Controles de paginação */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anterior
              </button>
              
              {/* Números das páginas */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    disabled={loading}
                    className={`px-3 py-2 border rounded-md ${
                      currentPage === pageNum
                        ? 'bg-purple-500 text-white border-purple-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    } disabled:cursor-not-allowed`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || loading}
                className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Próxima
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;