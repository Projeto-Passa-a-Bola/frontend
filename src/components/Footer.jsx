function Footer(){
    return(
        <>
        <div id="footer" className="grid p-10 lg:grid-cols-4 bg-purple-300 text-gray-700 gap-10">
                <div id="p1" className="flex px-2 flex-col gap-4">
                    <h1 className="font-bold text-purple-600 uppercase text-xl">Passa a bola</h1>
                    <p>Ferramentas profissionais de qualidade superior para todos os seus projetos.</p>
                    <div id="links" className="gap-4 flex">
                        <a href="https://x.com/passaabola">Twitter</a>
                        <a href="https://www.youtube.com/@passabola">Youtube</a>
                        <a href="https://www.instagram.com/passaabola">Instagram</a>
                        <a href="https://www.tiktok.com/@passabola">Tiktok</a>
                    </div>
                </div>
                <div id="p2" className=" flex flex-col gap-1">
                    <h1 className="font-bold text-purple-600">Produtos</h1>
                    <a href="">Ferramentas Elétricas</a>
                    <a href="">Ferramentas a Bateria</a>
                    <a href="">Ferramentas Pneumáticas</a>
                    <a href="">Acessórios</a>
                </div>
                <div id="p3" className="flex flex-col gap-1">
                    <h1 className="font-bold text-purple-600">Suporte</h1>
                    <a href="">Assitencia Técnica</a>
                    <a href="">Manuais</a>
                    <a href="">Garantias</a>
                    <a href="">Contato</a>
                </div>
                <div id="p4" className="">
                    <h1 className="font-bold text-purple-600">Newsletter</h1>
                    <p>Receba novidades e ofertas especiais</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-purple-300">
                <p className="border-b-1 w-430 text-gray-700"></p>
                <h2 className="text-gray-700 p-5">&copy; 2025 Passa a Bola. Todos os direitos reservados. | Politica de privacidade | Termos de uso</h2>
            </div>
        </>
    )
}

export default Footer