export default function Inicio(props) {
    return (
        <div class={props.classes}>
            <div>
                <img src="./assets/logo.png" />
            </div>
            <div>
                <button onClick={props.mudarStatus} data-identifier="start-zap-recall">Praticar React <img src="./assets/next.png"/></button>
            </div>
        </div>
    )
}