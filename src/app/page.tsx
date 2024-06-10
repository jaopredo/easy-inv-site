import { anton, montserrat } from "@/fonts"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { IoIosPhonePortrait } from "react-icons/io"
import { HiOutlineComputerDesktop } from "react-icons/hi2"

/* COMPONENTS */
import Header from "@/partials/Header"
import AnimatedDiv from "@/partials/AnimatedDiv"
import UserForm from "@/partials/UserForm"

export default function Home() {
    return <div>
        <Header/>
        <main className="flex items-stretch justify-center flex-col">
            <article className="flex items-center justify-evenly">
                <div className="flex flex-col items-center justify-center gap-4 max-w-[39vw]">
                    <h1 className="text-4xl font-bold text-slate-700 mb-3">Manuseie o seu patrimônio e pague apenas o que você precisa!</h1>
                    <h2 className="text-xl text-slate-400">Por que gastar todo mês se você pode pagar apenas pelo que usa?</h2>
                </div>
                <div
                    className="bg-[url(/images/Mobile-apps-cuate.svg)] bg-no-repeat bg-center w-[38vw] h-[38vw] bg-contain"
                >
                </div>
            </article>
            <article id="product" className="flex flex-col items-center justify-center gap-4 bg-zinc-50 p-4 pt-12 pb-12">
                <section className="flex items-center justify-evenly w-full">
                    <div
                        className="bg-[url(/images/Mobile-note-list-amico.svg)] bg-no-repeat bg-center w-[38vw] h-[38vw] bg-contain"
                    >
                    </div>
                    <AnimatedDiv id="how-it-works-text-1" className="w-[50vw]">
                        <h1 className="text-4xl font-bold text-slate-700 mb-3">Gerencie seu patrimônio pelo celular!</h1>
                        <h2 className="text-xl text-slate-400 mb-2">Chega de anotar as plaquinas na mão, com o nosso aplicativo você pode ler e gerenciar todos os itens muito mais fácil!</h2>
                        <h2 className="text-xl text-slate-400">Pague apenas pelos recursos que você necessita!</h2>
                    </AnimatedDiv>
                </section>
                <section className="flex items-center justify-evenly w-full">
                    <div
                        className="bg-[url(/images/Data-extraction-amico.svg)] bg-no-repeat bg-center w-[38vw] h-[38vw] bg-contain"
                    >
                    </div>
                    <AnimatedDiv id="how-it-works-text-2" className="w-[50vw]">
                        <h1 className="text-4xl font-bold text-slate-700 mb-3">Monitore em tempo-real pela aplicação web!</h1>
                        <h2 className="text-xl text-slate-400 mb-2">Veja informações em tempo-real sobre os itens do inventário</h2>
                        <h2 className="text-xl text-slate-400">Gere plaquinhas automaticamente com os serviços fornecidos pela aplicação web!</h2>
                    </AnimatedDiv>
                </section>
            </article>
            <article id="how-it-works" className="p-10 flex flex-col items-center justify-center gap-5">
                <h1 className="font-bold text-3xl text-slate-800">Economize Dinheiro!</h1>
                <p className="text-slate-500 text-xl text-center w-[60vw]">Nosso serviço irá cobrar apenas pelos recursos que utilizar, nada de pagar mensalidades mesmo quando não está usando o produto!</p>
                <ul className="flex flex-col items-stretch w-full justify-evenly mt-10 gap-10">
                    <li className="h-full flex items-stretch justify-evenly gap-5 w-full">
                        <div className="bg-[url(/images/easy-inv-cellphone.svg)] bg-no-repeat bg-center bg-contain w-[34vw] h-72"></div>
                        <div className="flex flex-col justify-center">
                            <h2 className={`${anton.className} text-leaf text-4xl`}>EasyInv Mobile</h2>
                            <p className={`w-[30vw] text-slate-700 mt-5 ${montserrat.className}`}>Facilite sua vida lendo as placas de seu patrimônio utilizando o aplicativo mobile! Você também pode vincular as planilhas que cria com projetos na nuvem e monitorar tudo em tempo-real!</p>
                        </div>
                    </li>
                    <li className="h-full flex flex-row-reverse items-stretch justify-evenly gap-5 w-full">
                        <div className="bg-[url(/images/easy-inv-computer.svg)] bg-no-repeat bg-center bg-cover w-[40vw] h-72"></div>
                        <div className="flex flex-col justify-center">
                            <h2 className={`${anton.className} text-leaf text-4xl`}>EasyInv Web</h2>
                            <p className={`w-[30vw] text-slate-700 mt-5 ${montserrat.className}`}>Crie projetos hospedados na nuvem, onde você poderá ver informações úteis sobre seu inventário e sobre os itens que você cadastrar, além de poder vincular com as planilhas que você cria pelo seu celular</p>
                        </div>
                    </li>
                </ul>
            </article>
            <article id="support" className="grid grid-cols-2 grid-rows-1 p-10 gap-10 bg-leaf-dark">
                <section className="flex flex-col justify-center col-span-1 text-white">
                    <h1 className="text-3xl font-bold">Em Desenvolvimento</h1>
                    <p className={`mt-3 text-justify ${montserrat.className}`}>Esse projeto aida está em desenvolvimento, se você se interessou, considere se inscrever para ter um acesso antecipado e testar as versões iniciais! Basta preencher as informações do formulário na direita</p>
                    <p className={`mt-3 text-justify ${montserrat.className}`}></p>
                </section>
                <section className="col-span-1">
                    <UserForm/>
                </section>
            </article>
            <article id="teams" className="p-10 flex items-center justify-center">
                <div>
                    <h1 className="text-3xl font-bold mb-5 text-slate-800">Sobre o Time</h1>
                    <p className={`${montserrat.className} text-slate-500`}>Veja um pouco sobre o time que está trabalhando nesse projeto!</p>
                </div>
                <ul className="flex items-center justify-center gap-10 w-[60vw]">
                    <li className="p-4 rounded-lg flex items-stretch justify-center gap-8">
                        <div className="bg-[url(/images/jp-dev.JPG)] bg-cover bg-center rounded-md bg-no-repeat w-full h-64"></div>
                        <div className={`${montserrat.className} flex flex-col justify-between h-full`}>
                            <hgroup>
                                <h2 className="text-lg font-bold mt-3 text-slate-800">João Pedro Jerônimo</h2>
                                <h3 className="text-slate-800 text-sm">CEO / Developer</h3>
                            </hgroup>
                            <p className="w-[80%] mt-5 text-slate-800">
                                Experiência no ramo de desenvolvimento WEB, já trabalhou com Vue.JS, React, PHP, e NodeJS
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
                </ul>
            </article>
        </main>
        <footer className={`bg-gray-100 p-8 flex items-center justify-center ${montserrat.className}`}>
            <p>Copyright&copy; 2024. Todos os direitos reservados a João Pedro Jerônimo</p>
        </footer>
    </div>
}
