import Image from "next/image"
import { anton } from "@/fonts"

export default function Header() {
    return <header className="p-5 flex items-center justify-between">
        <div className={`${anton.className} flex items-center justify-center gap-2 ml-10`}>
            <Image src={'/images/easy-inv-logo.svg'} alt="Imagem da easyinv em um celular" width={55} height={55} />
            <h1 className="text-leaf text-4xl block">EasyInv</h1>
        </div>
        <menu className="flex items-center justify-center gap-x-5 mr-10">
            <li className="text-gray-400 font-bold hover:cursor-pointer hover:text-gray-600 hover:scale-110 text-xl transition-all"><a href="#product">Produto</a></li>
            <li className="text-gray-400 font-bold hover:cursor-pointer hover:text-gray-600 hover:scale-110  text-xl transition-all">Como Funciona</li>
            <li className="text-gray-400 font-bold hover:cursor-pointer hover:text-gray-600 hover:scale-110  text-xl transition-all">Apoie</li>
            <li className="text-gray-400 font-bold hover:cursor-pointer hover:text-gray-600 hover:scale-110  text-xl transition-all">Time</li>
        </menu>
    </header>
}
