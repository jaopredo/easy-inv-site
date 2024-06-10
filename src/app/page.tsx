import { IoIosPhonePortrait } from "react-icons/io"
import { FaComputer } from "react-icons/fa6"

/* COMPONENTS */
import Header from "@/partials/Header"

export default function Home() {
    return <div>
        <Header/>
        <main className="flex items-stretch justify-center flex-col">
            <article className="flex items-center justify-evenly">
                <div className="flex flex-col items-center justify-center gap-4 max-w-[39vw]">
                    <h1 className="text-4xl font-bold text-slate-700 mb-3">Manuseie o seu patrimônio e pague apenas o que você precisa!</h1>
                    <h2 className="text-xl text-slate-400">Para quê gastar todo mês por nada se você pode pagar apenas por o que você usa?</h2>
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
                    <div className="w-[50vw]">
                        <h1 className="text-4xl font-bold text-slate-700 mb-3">Gerencie seu patrimônio pelo celular!</h1>
                        <h2 className="text-xl text-slate-400 mb-2">Chega de anotar as plaquinas na mão, com o nosso aplicativo você pode ler e gerenciar todos os itens muito mais fácil!</h2>
                        <h2 className="text-xl text-slate-400">Pague apenas pelos recursos que você necessita!</h2>
                    </div>
                </section>
                <section className="flex items-center justify-evenly w-full">
                    <div
                        className="bg-[url(/images/Data-extraction-amico.svg)] bg-no-repeat bg-center w-[38vw] h-[38vw] bg-contain"
                    >
                    </div>
                    <div className="w-[50vw]">
                        <h1 className="text-4xl font-bold text-slate-700 mb-3">Monitore em tempo-real pela aplicação web!</h1>
                        <h2 className="text-xl text-slate-400 mb-2">Veja informações em tempo-real sobre os itens do inventário</h2>
                        <h2 className="text-xl text-slate-400">Gere plaquinhas automaticamente com os serviços fornecidos pela aplicação web!</h2>
                    </div>
                </section>
            </article>
            <article>
                Seção que explica sobre o modelo de negócios
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
