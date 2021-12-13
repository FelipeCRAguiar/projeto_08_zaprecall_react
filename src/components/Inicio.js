export default function Inicio(props) {
    return (
        <div class={props.classes}>
            <div>
                <img src="./assets/logo.png" />
            </div>
            <div>
                <button onClick={props.mudarStatus}>Praticar React <img src="./assets/next.png"/></button>
            </div>
        </div>
    )
}