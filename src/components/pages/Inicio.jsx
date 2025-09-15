import video from "/videoInicio.mp4";

function Inicio(){
    return(
        <>               
            <div id="Hero" className="relative flex justify-start items-center p-50 px-60">
                {/* Contêiner do Vídeo de Fundo */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        src={video}
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>

                {/* Camada de Escurecimento (Overlay) */}
                <div className="absolute inset-0 z-0 bg-black opacity-50"></div> 
                {/* Você pode ajustar a opacidade (opacity-X) e a cor (bg-black/bg-gray-900) conforme preferir */}

                {/* Conteúdo por cima do vídeo e do overlay */}
                <div className="relative z-10 grid items-start w-150 gap-15">
                    <h1 className="text-6xl font-bold text-white">
                        Passa a <span className="text-purple-500">Bola</span>
                    </h1>
                    <p className="text-white text-2xl">
                        A plataforma profissional que conecta atletas, técnicos e organizações do futebol feminino. Transformando carreiras e elevando o esporte a um novo patamar.
                    </p>
                    <button className="p-5 w-50 h-10 items-center justify-center flex bg-linear-to-r from-purple-500 to-violet-500 cursor-pointer rounded-lg shadow-lg text-white hover:scale-105 transition font-bold">
                        Comece Agora →
                    </button>
                    <div id="Pesquisa" className="flex flex-row items-center justify-between">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <h1 className="text-4xl text-purple-500 font-bold">1.2K+</h1>
                            <p className="text-white font-semibold text-lg">Atletas Profissionais</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <h1 className="text-4xl text-purple-500 font-bold">150+</h1>
                            <p className="text-white font-semibold text-lg">Clubes Parceiros</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <h1 className="text-4xl text-purple-500 font-bold">50+</h1>
                            <p className="text-white font-semibold text-lg">Competições</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="resumo" className="bg-purple-500 flex">
                <div id="esquerdaResumo" className="flex flex-col flex-2 py-20 gap-20">
                    <div id="titulo" className="flex py-10 bg-amber-50 justify-center rounded-r-xl w-200">
                        <h1 className="text-purple-500 uppercase font-bold text-4xl">Resumo</h1>
                    </div>
                    <div className="px-20">
                        <div className="w-220 h-150 bg-amber-50 rounded-2xl flex p-10 items-center gap-5">
                            <img src="../public/resumoImg.png" alt="imagemExemplo" className="rounded-xl w-100 h-120 "/>
                            <p className="text-zinc-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed vulputate justo. Quisque ac metus venenatis, 
                                interdum sem sed, tristique purus. Pellentesque et iaculis nibh. Etiam turpis eros, vehicula quis condimentum nec, 
                                blandit a ante. Nunc id ligula vel mauris fermentum tristique. Ut tortor felis, pretium a ligula ac, porttitor iaculis lectus. 
                                Cras urna sapien, volutpat consectetur vulputate sit amet, ultricies non libero. Proin sagittis enim nulla, id suscipit dolor 
                                placerat ac. Proin purus quam, fringilla eu pharetra a, molestie id diam. Sed tortor dolor, malesuada id nulla ut, 
                                pellentesque commodo lorem. Vestibulum sit amet tortor vel ante finibus rutrum et egestas urna. Class aptent taciti 
                                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="direitaResumo" className="flex-1 px-40">
                    <div id="copa" className="flex flex-col bg-amber-50 justify-center items-center">
                        <div className="p-10 flex flex-col items-center gap-15">
                            <h1 className=" text-purple-500 text-4xl font-bold uppercase">Copa Passa a Bola</h1>
                            <img src="../public/copaTaca.png" alt="foto" className="w-100 h-100 rounded-xl"/>
                            <p className="text-zinc-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed vulputate justo. Quisque ac metus venenatis, 
                                interdum sem sed, tristique purus. Pellentesque et iaculis nibh. Etiam turpis eros, vehicula quis condimentum nec, 
                                blandit a ante. Nunc id ligula vel mauris fermentum tristique. Ut tortor felis, pretium a ligula ac, porttitor iaculis lectus. 
                                Cras urna sapien, volutpat consectetur vulputate sit amet, ultricies non libero. Proin sagittis enim nulla, id suscipit dolor 
                                placerat ac. Proin purus quam, fringilla eu pharetra a, molestie id diam. Sed tortor dolor, malesuada id nulla ut, 
                                pellentesque commodo lorem. Vestibulum sit amet tortor vel ante finibus rutrum et egestas urna. Class aptent taciti 
                                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio