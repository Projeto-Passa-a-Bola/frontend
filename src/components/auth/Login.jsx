import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, User, Lock } from 'lucide-react'; // Ícones para melhorar a usabilidade

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  // NOTA: Mantenho a implementação do fetch, mas em um ambiente real
  // React com Firebase, usaríamos signInWithEmailAndPassword.
  // Como este é apenas um componente de UI, a lógica de login é mantida.
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      console.log('Resposta do backend:', data); 

      if (response.ok) {
        // CORREÇÃO: Usar um serviço de autenticação persistente (como Firebase)
        // em vez de localStorage, mas mantendo a estrutura original do código.
        localStorage.setItem('authToken', data.token); 
        navigate('/painel');
      } else {
        setErro(data.msg || 'E-mail ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setErro('Erro de conexão com o servidor.');
    }
  };

  return ( 
    // MUDANÇA 1: Padrão flex-col (mobile) e flex-row (lg:) para a divisão da tela.
    <div className='flex flex-col lg:flex-row bg-gradient-to-br from-purple-600 via-purple-400 to-blue-400 min-h-screen'>
      
      {/* SEÇÃO 1: Formulário de Login (sempre visível) */}
      {/* MUDANÇA 2: Centraliza o conteúdo (items-center) e garante que o formulário ocupe 100% da largura em mobile. */}
      {/* MUDANÇA 3: Em telas grandes (lg), ele ocupa metade da tela (w-full lg:w-1/2). */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2 p-4 sm:p-8">
        <div className="relative flex flex-col p-6 sm:p-10 md:p-16 lg:p-20 justify-center items-center bg-zinc-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900/50 w-full max-w-md">
          
          <div className="mb-6">
            <LogIn className="w-10 h-10 text-purple-600 mx-auto mb-2" />
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Conecte-se</h2>
          </div>
          
          <form onSubmit={handleLogin} className="w-full">
            
            <div className="mb-5 relative">
              <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="email">
                <User className="w-4 h-4 mr-2 text-purple-500"/> E-mail
              </label>
              <input
                // Ajuste de largura: w-full para preencher o contêiner.
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6 relative">
              <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="password">
                <Lock className="w-4 h-4 mr-2 text-purple-500"/> Senha
              </label>
              <input
                // Ajuste de largura: w-full para preencher o contêiner.
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {erro && <p className="text-red-600 font-medium text-sm mb-4 bg-red-100 p-2 rounded-lg border border-red-300">{erro}</p>}
            
            <div className="flex items-center justify-between"> 
              <button 
                className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                type="submit"
              >
                Entrar
              </button>
              {/* O Link para /HomeLogada estava dentro do button, o que é um erro de semântica. 
                  O botão deve ser do tipo submit e a navegação deve ocorrer no handleLogin. */}
            </div>
          </form>
          
          <p className="mt-6 text-center text-gray-600 text-sm">
            Não tem uma conta?{' '}
            <Link to="/register" className="text-purple-600 hover:text-purple-800 font-bold transition duration-150">
              Cadastre-se
            </Link>
          </p>
          
        </div>
      </div>
      
      {/* SEÇÃO 2: Imagem/Vídeo */}
      {/* MUDANÇA 4: Oculta a seção em telas pequenas (padrão) e a exibe a partir de lg. */}
      {/* MUDANÇA 5: Usa lg:w-1/2 para ocupar a outra metade da tela em desktop. */}
      <div id='direita' className='hidden lg:flex lg:w-1/2 items-center justify-center p-8 relative overflow-hidden'>
          {/* Ocultando a imagem com a classe 'hidden' para telas menores que LG (desktop) */}
          <img 
            src="/loginImg.png" 
            alt="Jogadoras de Futebol comemorando" 
            className='w-full h-full object-cover rounded-3xl shadow-2xl shadow-purple-900/50 transform scale-105'
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/6b21a8/ffffff?text=Passa+a+Bola" }}
          />
          <div className="absolute inset-0 bg-purple-900/20 rounded-3xl"></div> {/* Overlay sutil */}
      </div>
      
    </div> 
  );
}

export default Login;