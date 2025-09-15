// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe para redirecionar
import { Link } from 'react-router-dom'; // Se ainda não tiver importado
import video from "../../../public/loginImg.png"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

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

    console.log('Resposta do backend:', data); // Adicione esta linha

    if (response.ok) {
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
    <div className='flex flex-row bg-gradient-to-br from-purple-500 to-blue-400 h-screen'>
    <div className="relative flex items-center justify-center flex-2">
      <div className="relative flex flex-col p-20 justify-center items-center bg-zinc-100 rounded-2xl shadow-md gap-10">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Conecte-se</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-100 px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              className="w-full px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}
          <div className="flex items-center justify-between"> 
              <button 
                
                className="w-full bg-linear-to-r from-purple-500 to-violet-500 cursor-pointer text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                type="submit"
              >
              <Link to="/HomeLogada"></Link>
                Entrar
              </button>
              
    
          </div>
        </form>
        <p className="mt-4 text-center text-gray-800 text-sm">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-purple-500 hover:text-purple-700 font-bold">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
    <div id='direita' className='flex flex-2 justify-end'>
        <img src="../../../public/loginImg.png" alt="" className=''/>
    </div>
    </div>  
  );
}

export default Login;