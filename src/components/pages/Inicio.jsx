import FormContact from "../ui/FormContact";
import video from "/videoInicio.mp4";

function Inicio() {
    return (
        // Adicione overflow-x-hidden para evitar a barra de rolagem horizontal na página inteira
        <div className="overflow-x-hidden">
            <div id="Hero" className="relative flex flex-col justify-center items-center p-8 md:p-16 lg:px-24 xl:px-40 min-h-screen">
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

                {/* Conteúdo por cima do vídeo e do overlay */}
                <div className="relative z-10 flex flex-col items-center text-center gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Passa a <span className="text-purple-500">Bola</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-2xl text-white">
                        A plataforma profissional que conecta atletas, técnicos e organizações do futebol feminino. Transformando carreiras e elevando o esporte a um novo patamar.
                    </p>
                    <button className="px-8 py-3 w-fit text-lg font-bold rounded-full text-white bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg hover:scale-105 transition-transform duration-300">
                        Comece Agora →
                    </button>

                    <div id="Pesquisa" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">1.2K+</h1>
                            <p className="text-sm md:text-base text-white font-semibold">Atletas Profissionais</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">150+</h1>
                            <p className="text-sm md:text-base text-white font-semibold">Clubes Parceiros</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">50+</h1>
                            <p className="text-sm md:text-base text-white font-semibold">Competições</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção de Resumo */}
            <div id="resumo" className="bg-purple-500 flex flex-col lg:flex-row p-8 lg:p-16 gap-8">

                {/* Esquerda do Resumo */}
                <div id="esquerdaResumo" className="flex flex-col gap-8 md:gap-16 lg:w-2/3">
                    <div className="py-6 px-12 bg-amber-50 rounded-r-3xl  w-fit">
                        <h1 className="text-purple-500 uppercase font-bold text-2xl md:text-4xl">Resumo</h1>
                    </div>

                    <div className="bg-amber-50 rounded-2xl flex flex-col md:flex-row p-6 items-center gap-6">
                        <img
                            src="../public/resumoImg.png"
                            alt="imagemExemplo"
                            className="rounded-xl w-full md:w-1/2 lg:w-1/3 h-auto object-cover"
                        />
                        <p className="text-zinc-700 text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed vulputate justo. Quisque ac metus venenatis, interdum sem sed, tristique purus. Pellentesque et iaculis nibh. Etiam turpis eros, vehicula quis condimentum nec, blandit a ante. Nunc id ligula vel mauris fermentum tristique. Ut tortor felis, pretium a ligula ac, porttitor iaculis lectus. Cras urna sapien, volutpat consectetur vulputate sit amet, ultricies non libero. Proin sagittis enim nulla, id suscipit dolor placerat ac. Proin purus quam, fringilla eu pharetra a, molestie id diam. Sed tortor dolor, malesuada id nulla ut, pellentesque commodo lorem. Vestibulum sit amet tortor vel ante finibus rutrum et egestas urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                </div>

                {/* Direita do Resumo - Copa */}
                <div id="direitaResumo" className="lg:w-1/3">
                    <div id="copa" className="flex flex-col bg-amber-50 justify-center items-center rounded-2xl p-6">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h1 className="text-purple-500 text-2xl md:text-3xl font-bold uppercase">Copa Passa a Bola</h1>
                            <img
                                src="../public/copaTaca.png"
                                alt="foto"
                                className="w-full h-auto max-w-xs rounded-xl"
                            />
                            <p className="text-zinc-700 text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed vulputate justo. Quisque ac metus venenatis, interdum sem sed, tristique purus. Pellentesque et iaculis nibh. Etiam turpis eros, vehicula quis condimentum nec, blandit a ante. Nunc id ligula vel mauris fermentum tristique. Ut tortor felis, pretium a ligula ac, porttitor iaculis lectus. Cras urna sapien, volutpat consectetur vulputate sit amet, ultricies non libero. Proin sagittis enim nulla, id suscipit dolor placerat ac. Proin purus quam, fringilla eu pharetra a, molestie id diam. Sed tortor dolor, malesuada id nulla ut, pellentesque commodo lorem. Vestibulum sit amet tortor vel ante finibus rutrum et egestas urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FormContact />
        </div>
    );
}

export default Inicio;