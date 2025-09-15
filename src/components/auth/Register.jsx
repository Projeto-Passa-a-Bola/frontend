// src/components/Register.jsx

import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleRegister = async (e) => {
  e.preventDefault();

  if (senha !== confirmaSenha) {
    setErro('As senhas não coincidem!');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/api/auth/register', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Mude o corpo da requisição para corresponder aos nomes dos campos do seu backend
      body: JSON.stringify({
        name: nome + ' ' + sobrenome, // Concatena nome e sobrenome em um único campo
        email: email,
        senha: senha,
        confirmasenha: confirmaSenha // Adiciona o campo de confirmação de senha
      }),
    });

      const data = await response.json();

      if (response.ok) {
        // Verifica se a resposta foi bem-sucedida (status 200-299)
        alert("Registro bem-sucedido! Redirecionando para o login...");
        navigate("/login"); // Redireciona para a página de login
      } else {
        setErro(data.message || "Erro ao registrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErro("Erro de conexão com o servidor.");
    }
  };
  return (
    <div className='flex flex-row bg-gradient-to-br from-purple-500 to-blue-400 h-screen'>
    <div className="relative flex items-center justify-center flex-2 p-10">
      <div className="relative flex flex-col p-15 px-20 gap-10 bg-zinc-100 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">
          Cadastre-se
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="nome"
            >
              Nome
            </label>
            <input
              className="w-100 px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
              id="nome"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="sobrenome"
            >
              Sobrenome
            </label>
            <input
              className="w-100 px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
              id="sobrenome"
              type="text"
              placeholder="Seu sobrenome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
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
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="senha"
            >
              Senha
            </label>
            <input
              className="w-full px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
              id="senha"
              type="password"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="confirmaSenha"
            >
              Confirme a Senha
            </label>
            <input
              className="w-full px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
              id="confirmaSenha"
              type="password"
              placeholder="********"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              required
            />
          </div>
          {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-linear-to-r from-purple-500 to-violet-500 cursor-pointer text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
    <div id='direita' className='flex flex-2 justify-end'>
        <img src="../../../public/cadastroImg.png" alt="" className=''/>
    </div>
    </div>
  );
}

export default Register;
