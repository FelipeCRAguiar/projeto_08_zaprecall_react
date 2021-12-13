import Inicio from "./Inicio"
import Conteudo from "./Conteudo"
import Final from "./Final"
import { useState } from "react"

export default function App() {
    let [conteudoEscondido, setConteudoEscondido] = useState("escondido")
    let [classesInicio, setClassesInicio] = useState("inicio")
    function mudarStatusConteudo() {
        setClassesInicio("inicio escondido")
        setConteudoEscondido("")
    }
    return (
        <div>
            <Inicio mudarStatus={mudarStatusConteudo} classes={classesInicio}/>
            <Conteudo status={conteudoEscondido}/>
            <Final />
        </div>
    )
}