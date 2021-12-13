export default function Final(props) {
    return (
        <div>
            <div class="sucesso escondido">
                <nav><img src="./assets/logo-mini.png"/></nav>
                <div class="mensagem">
                    <p class="status">PARABÉNS! <img src="./assets/party.png"/></p>
                    <p class="substatus">Você não esqueceu de nenhum flashcard!</p>
                </div>
            </div>
            <div class="fracasso escondido">
                <nav><img src="./assets/logo-mini.png"/></nav>
                <div class="mensagem">
                    <p class="status">Putz..  <img src="./assets/sad.png"/></p>
                    <p class="substatus">Você esqueceu alguns flashcards..<br/>Não desanime! Na próxima você consegue!</p>
                </div>
            </div>
        </div>
    )
}