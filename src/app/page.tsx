import { anton, montserrat } from "@/fonts"
import { FaInstagram, FaLinkedin, FaSyncAlt, FaCamera, FaRegFileExcel, FaQrcode, FaShieldAlt } from "react-icons/fa"
import { BsGraphUp } from "react-icons/bs"

/* COMPONENTS */
import Header from "@/partials/Header"
import AnimatedDiv from "@/partials/AnimatedDiv"
import UserForm from "@/partials/UserForm"

export default function Home() {
    return <div>
        <Header/>
        <main className="flex items-stretch justify-center flex-col">
            <article className="flex md:flex-row flex-col items-center justify-evenly">
                <div className="flex flex-col items-center justify-center gap-4 md:max-w-[39vw] max-w-[90vw]">
                    <h1 className="text-4xl font-bold text-slate-700 mb-3">Manuseie o seu patrimônio e pague apenas o que você precisa!</h1>
                    <h2 className="text-xl text-slate-400">Por que gastar todo mês se você pode pagar apenas pelo que usa?</h2>
                </div>
                <div
                    className="bg-[url(/images/Mobile-apps-cuate.svg)] bg-no-repeat bg-center md:w-[38vw] md:h-[38vw] w-[90vw] h-[90vw] bg-contain"
                >
                </div>
            </article>
            <article id="product" className="flex flex-col items-center justify-center gap-4 bg-zinc-50 p-4 pt-12 pb-12">
                <section className="flex md:flex-row flex-col-reverse items-center justify-evenly w-full">
                    <div
                        className="bg-[url(/images/Mobile-note-list-amico.svg)] bg-no-repeat bg-center md:w-[38vw] md:h-[38vw] w-[90vw] h-[90vw] bg-contain"
                    >
                    </div>
                    <AnimatedDiv id="how-it-works-text-1" className="md:w-[50vw] w-[90vw]">
                        <h1 className="text-4xl font-bold text-slate-700 mb-3">Gerencie seu patrimônio pelo celular!</h1>
                        <h2 className="text-xl text-slate-400 mb-2">Chega de anotar as plaquinas na mão, com o nosso aplicativo você pode ler e gerenciar todos os itens muito mais fácil!</h2>
                        <h2 className="text-xl text-slate-400">Pague apenas pelos recursos que você necessita!</h2>
                    </AnimatedDiv>
                </section>
                <section className="flex md:flex-row flex-col-reverse items-center justify-evenly w-full">
                    <div
                        className="bg-[url(/images/Data-extraction-amico.svg)] bg-no-repeat bg-center md:w-[38vw] md:h-[38vw] w-[90vw] h-[90vw] bg-contain"
                    >
                    </div>
                    <AnimatedDiv id="how-it-works-text-2" className="md:w-[50vw] w-[90vw]">
                        <h1 className="text-4xl font-bold text-slate-700 mb-3">Monitore em tempo-real pela aplicação web!</h1>
                        <h2 className="text-xl text-slate-400 mb-2">Veja informações em tempo-real sobre os itens do inventário</h2>
                        <h2 className="text-xl text-slate-400">Gere plaquinhas automaticamente com os serviços fornecidos pela aplicação web!</h2>
                    </AnimatedDiv>
                </section>
            </article>
            <article id="how-it-works" className="p-10 flex flex-col items-center justify-center gap-5">
                <h1 className="text-center font-bold text-3xl text-slate-800">Economize Dinheiro!</h1>
                <p className="text-slate-500 md:text-xl text-md text-center md:w-[60vw] w-[89vw]">Nosso serviço irá cobrar apenas pelos recursos que utilizar, nada de pagar mensalidades mesmo quando não está usando o produto!</p>
                <ul className="flex flex-col items-stretch w-full justify-evenly mt-10 md:gap-10">
                    <li className="h-full flex md:flex-row flex-col items-center justify-evenly md:gap-5 w-full">
                        <div className="bg-[url(/images/easy-inv-cellphone.svg)] bg-no-repeat bg-center bg-contain md:w-[34vw] md:h-72 w-[80vw] h-[90vw]"></div>
                        <div className="flex flex-col items-center md:items-start justify-center md:text-left text-center">
                            <h2 className={`${anton.className} text-leaf text-4xl text-center w-full`}>EasyInv Mobile</h2>
                            <ul className="flex flex-col items-center justify-center mt-5 gap-6">
                                <li className="flex gap-4 md:flex-row md:items-start md:justify-start flex-col items-center justify-center">
                                    <div className="flex items-center justify-center bg-leaf p-3 h-fit w-fit rounded-full"><FaCamera className="text-white w-8 h-8"/></div>
                                    <div className="text-center md:text-left">
                                        <h3 className={`text-leaf text-2xl ${anton.className}`}>LEITURA DINÂMICA</h3>
                                        <p className={`md:w-[30vw] block text-slate-700 ${montserrat.className}`}>Oferecerá uma leitura rápida dos códigos do patrimônio, seja QRCode, Código de Barras ou Placa com o Número digitado!</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 md:flex-row md:items-start md:justify-start flex-col items-center justify-center">
                                    <div className="flex items-center justify-center bg-leaf p-3 h-fit w-fit rounded-full"><FaRegFileExcel className="text-white w-8 h-8"/></div>
                                    <div className="text-center md:text-left">
                                        <h3 className={`text-leaf text-2xl ${anton.className}`}>PLANILHAS</h3>
                                        <p className={`md:w-[30vw] block text-slate-700 ${montserrat.className}`}>Criação dinâmica de planilhas, você vai dizer o que vai ter nelas e o aplicativo cuida do resto na hora de preencher!</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 md:flex-row md:items-start md:justify-start flex-col items-center justify-center">
                                    <div className="flex items-center justify-center bg-leaf p-3 h-fit w-fit rounded-full"><FaSyncAlt className="text-white w-8 h-8"/></div>
                                    <div className="text-center md:text-left">
                                        <h3 className={`text-leaf text-2xl ${anton.className}`}>SÍNCRONIZAÇÃO COM A NUVEM</h3>
                                        <p className={`md:w-[30vw] block text-slate-700 ${montserrat.className}`}>Os projetos criados no aplicativo podem ser vinculados com os projetos criados no sistema web! Além de acompanhar em tempo-real sempre que atualiza o projeto dentro do aplicativo!</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="h-full flex md:flex-row-reverse flex-col items-center justify-evenly md:gap-5 w-full">
                        <div className="bg-[url(/images/easy-inv-computer.svg)] bg-no-repeat bg-center md:bg-cover md:w-[40vw] md:h-72 w-[80vw] h-[80vw] bg-contain"></div>
                        <div className="flex flex-col items-center md:items-start justify-center md:text-left text-center">
                            <h2 className={`${anton.className} text-leaf text-4xl text-center w-full`}>EasyInv Web</h2>
                            <ul className="flex flex-col items-center justify-center mt-5 gap-6">
                                <li className="flex gap-4 md:flex-row-reverse md:items-start md:justify-start flex-col items-center justify-center md:text-right">
                                    <div className="flex items-center justify-center bg-leaf p-3 h-fit w-fit rounded-full"><BsGraphUp className="text-white w-8 h-8"/></div>
                                    <div>
                                        <h3 className={`text-leaf text-2xl ${anton.className}`}>CRIAÇÃO DE GRÁFICOS</h3>
                                        <p className={`md:w-[32vw] block text-slate-700 ${montserrat.className}`}>Criação fácil de gráficos e relatórios, com pouquíssimos cliques, além de informações valiosas que vão te ajudar a economizar uma grana!</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 md:flex-row-reverse md:items-start md:justify-start flex-col items-center justify-center md:text-right">
                                    <div className="flex items-center justify-center bg-leaf p-3 h-fit w-fit rounded-full"><FaQrcode className="text-white w-8 h-8"/></div>
                                    <div>
                                        <h3 className={`text-leaf text-2xl ${anton.className}`}>CRIAÇÃO DE CÓDIGOS</h3>
                                        <p className={`md:w-[30vw] block text-slate-700 ${montserrat.className}`}>Criação dinâmica de códigos para ajudar na fabricação das placas de patrimônio!</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 md:flex-row-reverse md:items-start md:justify-start flex-col items-center justify-center md:text-right">
                                    <div className="flex items-center justify-center bg-leaf p-3 h-fit w-fit rounded-full"><FaShieldAlt className="text-white w-8 h-8"/></div>
                                    <div>
                                        <h3 className={`text-leaf text-2xl ${anton.className}`}>TOTALMENTE SEGURO</h3>
                                        <p className={`md:w-[30vw] block text-slate-700 ${montserrat.className}`}>Todas as informações armazenadas nos servidores serão guardadas a 7 chaves para ninguém indesejado acessar seus dados!</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </article>
            <article id="support" className="md:grid md:grid-cols-2 md:grid-rows-1 p-10 gap-10 bg-leaf-dark">
                <section className="flex flex-col justify-center col-span-1 text-white">
                    <h1 className="md:text-3xl text-2xl font-bold">Em Desenvolvimento</h1>
                    <p className={`mt-3 text-justify ${montserrat.className}`}>Esse projeto aida está em desenvolvimento, se você se interessou, considere se inscrever para ter um acesso antecipado e testar as versões iniciais! Basta preencher as informações do formulário na direita</p>
                    <p className={`mt-3 text-justify ${montserrat.className}`}></p>
                </section>
                <section className="col-span-1">
                    <UserForm/>
                </section>
            </article>
            <article id="teams" className="md:p-10 flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center w-full p-10 md:p-0">
                    <h1 className="text-3xl font-bold mb-5 text-slate-800">Sobre o Time</h1>
                    <p className={`${montserrat.className} text-slate-500`}>Veja um pouco sobre o time que está trabalhando nesse projeto!</p>
                </div>
                <ul className="w-full flex flex-col md:items-center justify-center md:gap-10 md:w-[50vw]">
                    <li className="p-4 rounded-lg flex md:flex-row flex-col items-stretch justify-between gap-8 md:w-[80vw]">
                        <div className="bg-[url(/images/jp-dev.JPG)] bg-cover bg-center rounded-md bg-no-repeat w-full h-64 md:max-w-[260.1px]"></div>
                        <div className={`${montserrat.className} flex flex-col md:justify-between h-full`}>
                            <hgroup>
                                <h2 className="text-lg font-bold mt-3 text-slate-800">João Pedro Jerônimo</h2>
                                <h3 className="text-slate-800 text-sm">CTO / Founder</h3>
                            </hgroup>
                            <p className="w-fit mt-5 text-slate-800">
                                Experiência no ramo de desenvolvimento WEB, já trabalhou com Vue.JS, React, PHP, e NodeJS. Estudante de Ciência de Dados na FGV Rio de Janeiro
                            </p>
                            <ul className="flex items-center gap-2 mt-3 text-slate-800">
                                <li className="hover:text-leaf-dark transition-colors"><a target="_blank" href="https://www.instagram.com/joao.pedro.dev/">
                                    <FaInstagram className="w-8 h-8"/>
                                </a></li>
                                <li className="hover:text-leaf-dark transition-colors"><a target="_blank" href="www.linkedin.com/in/joão-pedro-jerônimo-300469263">
                                    <FaLinkedin className="w-8 h-8"/>
                                </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="p-4 rounded-lg flex md:flex-row flex-col items-stretch justify-between gap-8 md:w-[80vw]">
                        <div className="bg-[url(/images/luna-pereira.jpeg)] bg-cover bg-center rounded-md bg-no-repeat h-64 md:w-[500px]"></div>
                        <div className={`${montserrat.className} flex flex-col md:justify-between h-full`}>
                            <hgroup>
                                <h2 className="text-lg font-bold mt-3 text-slate-800">Luna Pereira</h2>
                                <h3 className="text-slate-800 text-sm">CEO / Cofounder</h3>
                            </hgroup>
                            <p className="w-fit mt-5 text-slate-800">
                                Estudante de Administração na FGV EBAPE. Presidente da FGValley (Liga de Empreendedorismo da FGV) e campeã da Competição de Empreendedorismo 2023 Armando Klabin
                            </p>
                            <ul className="flex items-center gap-2 mt-3 text-slate-800">
                                <li className="hover:text-leaf-dark transition-colors"><a target="_blank" href="https://www.instagram.com/luna.cp/">
                                    <FaInstagram className="w-8 h-8"/>
                                </a></li>
                                <li className="hover:text-leaf-dark transition-colors"><a target="_blank" href="https://www.linkedin.com/in/lunapereira/">
                                    <FaLinkedin className="w-8 h-8"/>
                                </a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </article>
        </main>
        <footer className={`bg-gray-100 p-8 flex items-center justify-center ${montserrat.className}`}>
            <p>Copyright&copy; 2024. Todos os direitos reservados a João Pedro Jerônimo</p>
        </footer>
    </div>
}
