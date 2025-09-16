function Footer() {
  return (
    <>
      <div id="footer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 md:p-12 lg:p-16 bg-purple-300 text-gray-700 gap-8 lg:gap-10">
        {/* Coluna 1: Passa a Bola e Links de Redes Sociais */}
        <div id="p1" className="flex flex-col gap-4">
          <h1 className="font-bold text-purple-600 uppercase text-xl">Passa a Bola</h1>
          <p>Ferramentas profissionais de qualidade superior para todos os seus projetos.</p>
          <div id="links" className="flex flex-wrap gap-4">
            <a href="https://x.com/passaabola" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.youtube.com/@passabola" target="_blank" rel="noopener noreferrer">Youtube</a>
            <a href="https://www.instagram.com/passaabola" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@passabola" target="_blank" rel="noopener noreferrer">Tiktok</a>
          </div>
        </div>
        
        {/* Coluna 2: Produtos */}
        <div id="p2" className="flex flex-col gap-2">
          <h1 className="font-bold text-purple-600">Produtos</h1>
          <a href="#">Ferramentas Elétricas</a>
          <a href="#">Ferramentas a Bateria</a>
          <a href="#">Ferramentas Pneumáticas</a>
          <a href="#">Acessórios</a>
        </div>
        
        {/* Coluna 3: Suporte */}
        <div id="p3" className="flex flex-col gap-2">
          <h1 className="font-bold text-purple-600">Suporte</h1>
          <a href="#">Assistência Técnica</a>
          <a href="#">Manuais</a>
          <a href="#">Garantias</a>
          <a href="#">Contato</a>
        </div>
        
        {/* Coluna 4: Newsletter */}
        <div id="p4">
          <h1 className="font-bold text-purple-600">Newsletter</h1>
          <p>Receba novidades e ofertas especiais</p>
        </div>
      </div>
      
      {/* Rodapé inferior com informações de direitos autorais */}
      <div className="flex flex-col justify-center items-center bg-purple-300 text-gray-700 p-5">
        <hr className="w-full border-t border-gray-400 mb-4 max-w-lg" />
        <h2 className="text-center text-sm">
          © 2025 Passa a Bola. Todos os direitos reservados. | <a href="#" className="underline">Política de privacidade</a> | <a href="#" className="underline">Termos de uso</a>
        </h2>
      </div>
    </>
  );
}

export default Footer;