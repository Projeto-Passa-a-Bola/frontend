// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe para redirecionar
import { Link } from 'react-router-dom'; // Se ainda não tiver importado

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
      navigate('/');
    } else {
      setErro(data.msg || 'E-mail ou senha incorretos.');
    }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-purple-500 hover:text-purple-700 font-bold">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;