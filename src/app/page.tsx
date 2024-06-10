import { anton, montserrat } from "@/fonts"

/* COMPONENTS */
import Header from "@/partials/Header"
import AnimatedDiv from "@/partials/AnimatedDiv"
import { IoIosPhonePortrait } from "react-icons/io"
import { HiOutlineComputerDesktop } from "react-icons/hi2"

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
                <h1 className="font-bold text-3xl">Economize Dinheiro!</h1>
                <p className="text-slate-500 text-xl text-center w-[60vw]">Nosso serviço irá cobrar apenas pelos recursos que utilizar, nada de pagar mensalidades mesmo quando não está usando o produto!</p>
                <ul className="flex items-stretch w-full justify-evenly mt-10 gap-10">
                    <li className="h-full text-center flex flex-col items-center justify-center">
                        <div className="bg-leaf p-2 rounded-full w-32 h-32 flex items-center justify-center">
                            <IoIosPhonePortrait className="w-32 h-32 text-white"/>
                        </div>
                        <h2 className={`${anton.className} text-leaf text-2xl`}>EasyInv Mobile</h2>
                        <p className={`w-[30vw] text-slate-700 mt-5 ${montserrat.className}`}>Facilite sua vida lendo as placas de seu patrimônio utilizando o aplicativo mobile! Você também pode vincular as planilhas que cria com projetos na nuvem e monitorar tudo em tempo-real!</p>
                    </li>
                    <li className="text-center flex flex-col items-center justify-center">
                        <div className="bg-leaf p-2 rounded-full w-32 h-32 flex items-center justify-center">
                            <HiOutlineComputerDesktop className="w-24 h-24 text-white"/>
                        </div>
                        <h2 className={`${anton.className} text-leaf text-2xl`}>EasyInv Web</h2>
                        <p className={`w-[30vw] text-slate-700 mt-5 ${montserrat.className}`}>Crie projetos hospedados na nuvem, onde você poderá ver informações úteis sobre seu inventário e sobre os itens que você cadastrar, além de poder vincular com as planilhas que você cria pelo seu celular</p>
                    </li>
                </ul>
            </article>
            <article>
                Seção que pergunta se o usuário gostaria de apoiar o projeto
            </article>
            <article>
                Seção onde mostra a equipe
            </article>
        </main>
    </div>
}
