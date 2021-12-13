import { useState } from "react/cjs/react.development"
import Carta from "./Carta"

export default function Conteudo(props) {
    let [carta1, setCarta1] = useState("carta")
    let [carta2, setCarta2] = useState("carta escondido")
    let [carta3, setCarta3] = useState("carta escondido")
    let [carta4, setCarta4] = useState("carta escondido")
    let [carta5, setCarta5] = useState("carta escondido")
    let [carta6, setCarta6] = useState("carta escondido")
    let [carta7, setCarta7] = useState("carta escondido")
    let [carta8, setCarta8] = useState("carta escondido")
    let index = 1
    let classes = "conteudo " + props.status
    const cartas = [
        {pergunta: "O que é JSX?",resposta: "Uma extensão de linguagem do JavaScript"},
        {pergunta: "O React é __",resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: "Componentes devem iniciar com __",resposta: "letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX",resposta: "expressões"},
        {pergunta: "O ReactDOM nos ajuda __",resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: "Usamos o npm para __",resposta: "gerenciar os pacotes necessários e suas dependências"},
        {pergunta: "Usamos props para __",resposta: "passar diferentes informações para componentes"},
        {pergunta: "Usamos estado (state) para __",resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]
    let listaCartas = []
    for (let i = 0; i<cartas.length; i++) {
        if (index === 1) {
            listaCartas.push(<Carta pergunta={cartas[i].pergunta} resposta={cartas[i].resposta} status={carta1} index={index} tamanho={cartas.length} passar={passar1}/>)
        }
        if (index === 2) {
            listaCartas.push(<Carta pergunta={cartas[i].pergunta} resposta={cartas[i].resposta} status={carta2} index={index} tamanho={cartas.length} passar={passar2}/>)
        }
        if (index === 3) {
            listaCartas.push(<Carta pergunta={cartas[i].pergunta} resposta={cartas[i].resposta} status={carta3} index={index} tamanho={cartas.length} passar={passar3}/>)
        }
        if (index === 4) {
            listaCartas.push(<Carta pergunta={cartas[i].pergunta} resposta={cartas[i].resposta} status={carta4} index={index} tamanho={cartas.length} passar={passar4}/>)
        }
        if (index === 5) {
            listaCartas.push(<Carta pergunta={cartas[i].pergunta} resposta={cartas[i].resposta} status={carta5} index={index} tamanho={cartas.length} passar={passar5}/>)
        }
        if (index === 6) {
            listaCartas.push(<Carta pergunta={cartas[i].pergunta} resposta={cartas[i].resposta} status={carta6} index={index} tamanho={cartas.length} passar={passar6}/>)
        }
        if (index === 7) {
            listaCartas.push(<Carta pergunta={cartas[i].pergunta} resposta={cartas[i].resposta} status={carta7} index={index} tamanho={cartas.length} passar={passar7}/>)
        }
        if (index === 8) {
            listaCartas.push(<Carta pergunta={cartas[i].pergunta} resposta={cartas[i].resposta} status={carta8} index={index} tamanho={cartas.length} passar={passar1}/>)
        }
        index += 1
    }
    function passar1(){
        setCarta1("carta escondido")
        setCarta2("carta")
    }
    function passar2(){
        setCarta2("carta escondido")
        setCarta3("carta")
    }
    function passar3(){
        setCarta3("carta escondido")
        setCarta4("carta")
    }
    function passar4(){
        setCarta4("carta escondido")
        setCarta5("carta")
    }
    function passar5(){
        setCarta5("carta escondido")
        setCarta6("carta")
    }
    function passar6(){
        setCarta6("carta escondido")
        setCarta7("carta")
    }
    function passar7(){
        setCarta7("carta escondido")
        setCarta8("carta")
    }
    return (
        <div class={classes}>
            <nav><img src="./assets/logo-mini.png"/></nav>
            {listaCartas}
      </div>
    )
}