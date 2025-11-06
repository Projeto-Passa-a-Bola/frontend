import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importado navigate e Link
import { UserPlus, User, Mail, Lock } from 'lucide-react'; // Ícones para melhorar a estética

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate(); // Inicializado useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      setErro('As senhas não coincidem!');
      return;
    }

    // Limpa erro anterior antes de tentar o registro
    setErro(''); 

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // O corpo da requisição foi ajustado para refletir a concatenação e os campos de senha
        body: JSON.stringify({
          name: name + ' ' + lastName, // Concatena nome e sobrenome
          email: email,
          senha: senha,
          confirmasenha: confirmaSenha 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Em vez de alert(), definimos uma mensagem de sucesso ou navegamos
        // Aqui, navegamos diretamente após o sucesso
        navigate("/login"); 
      } else {
        setErro(data.message || "Erro ao registrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErro("Erro de conexão com o servidor.");
    }
  };
  
  return (
    // Layout Responsivo: flex-col em mobile, flex-row em lg:
    <div className='flex flex-col lg:flex-row bg-gradient-to-br from-purple-600 via-purple-400 to-blue-400 min-h-screen overflow-x-hidden'>
      
      {/* SEÇÃO 1: Formulário de Cadastro (Sempre visível, ocupa 100% da largura em mobile) */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2 p-4 sm:p-8">
        
        {/* Card do Formulário: Usando a mesma estilização do Login */}
        <div className="relative flex flex-col p-6 sm:p-10 md:p-12 justify-center items-center bg-zinc-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900/50 w-full max-w-md">
          
          <div className="mb-6">
            <UserPlus className="w-10 h-10 text-purple-600 mx-auto mb-2" />
            <h2 className="text-3xl font-extrabold text-center text-gray-900">
              Cadastre-se
            </h2>
          </div>
          
          <form onSubmit={handleRegister} className="w-full">
            
            {/* Campo Nome e Sobrenome (Agrupados em 2 colunas a partir de sm) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              
              <div className="relative">
                <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="nome">
                  <User className="w-4 h-4 mr-2 text-purple-500"/> Nome
                </label>
                <input
                  className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="relative">
                <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="sobrenome">
                  <User className="w-4 h-4 mr-2 text-purple-500"/> Sobrenome
                </label>
                <input
                  className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                  id="sobrenome"
                  type="text"
                  placeholder="Seu sobrenome"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            {/* Campo E-mail */}
            <div className="mb-5 relative">
              <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="email">
                <Mail className="w-4 h-4 mr-2 text-purple-500"/> E-mail
              </label>
              <input
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            {/* Campo Senha */}
            <div className="mb-5 relative">
              <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="senha">
                <Lock className="w-4 h-4 mr-2 text-purple-500"/> Senha
              </label>
              <input
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="senha"
                type="password"
                placeholder="Crie uma senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            
            {/* Campo Confirma Senha */}
            <div className="mb-6 relative">
              <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="confirmaSenha">
                <Lock className="w-4 h-4 mr-2 text-purple-500"/> Confirme a Senha
              </label>
              <input
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="confirmaSenha"
                type="password"
                placeholder="Confirme sua senha"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                required
              />
            </div>
            
            {erro && <p className="text-red-600 font-medium text-sm mb-4 bg-red-100 p-2 rounded-lg border border-red-300">{erro}</p>}
            
            <div className="flex items-center justify-between">
              <button
                className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                type="submit"
              >
                Registrar
              </button>
            </div>
          </form>
          
          <p className="mt-6 text-center text-gray-600 text-sm">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-800 font-bold transition duration-150">
              Faça Login
            </Link>
          </p>
          
        </div>
      </div>
      
      {/* SEÇÃO 2: Imagem/Vídeo (Oculta em mobile, visível em lg:) */}
      <div id='direita' className='hidden lg:flex lg:w-1/2 items-center justify-center p-8 relative overflow-hidden'>
        <img 
          src="/cadastroImg.png" 
          alt="Jogadoras de Futebol comemorando o cadastro" 
          className='w-full h-full object-cover rounded-3xl shadow-2xl shadow-purple-900/50 transform scale-105'
          // Placeholder caso a imagem não carregue (ajuste o caminho se necessário)
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/6b21a8/ffffff?text=Passa+a+Bola+Cadastro" }}
        />
        <div className="absolute inset-0 bg-purple-900/20 rounded-3xl"></div> {/* Overlay sutil */}
      </div>
      
    </div>
  );
}

export default Register;