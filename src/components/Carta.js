import { useState } from "react/cjs/react.development"

export default function Carta(props) {
    let [classeCarta, setClasseCarta] = useState(props.status)
    let [classeVerso, setClasseVerso] = useState("verso escondido")
    let [classeFace, setClasseFace] = useState("face")
    let [classeReacoes, setClasseReacoes] = useState("reacoes")
    let [classePassar, setClassePassar] = useState("passar escondido")
    function virarCarta() {
        setClasseFace("face escondido")
        setClasseVerso("verso")
    }
    function aprendi(){
        setClasseCarta("carta aprendi")
        setClasseReacoes("reacoes escondido")
        setClassePassar("passar")
    }
    function esqueci(){
        setClasseCarta("carta esqueci")
        setClasseReacoes("reacoes escondido")
        setClassePassar("passar")
    }
    function esforco(){
        setClasseCarta("carta esforco")
        setClasseReacoes("reacoes escondido")
        setClassePassar("passar")
    }
    function zap(){
        setClasseCarta("carta zap")
        setClasseReacoes("reacoes escondido")
    }

    return (
        <div class={classeCarta}>
            <div class={classeFace}>
                <div class="contador">{props.index}/{props.tamanho}</div>
                <div class="pergunta">{props.pergunta}</div>
                <div class="passar">
                    <button onClick={virarCarta}><img src="./assets/turn.png"/></button>
                </div>
            </div>
            <div class={classeVerso}>
                <div class="contador">
                    <p class="perguntinha">{props.pergunta}</p>
                    <p>{props.index}/{props.tamanho}</p>
                </div>
                <div class="resposta">{props.resposta}</div>
                <div class={classeReacoes}>
                    <div class="aprendi" onClick={aprendi}>Aprendi agora</div>
                    <div class="esqueci" onClick={esqueci}>Não lembrei</div>
                    <div class="esforco" onClick={esforco}>Lembrei com esforço</div>
                    <div class="zap" onClick={zap}>Zap!</div>
                </div>
                <div class={classePassar}>
                    <button onClick={props.passar}><img src="./assets/turn.png"/></button>
                </div>
            </div>
        </div>
    )
}