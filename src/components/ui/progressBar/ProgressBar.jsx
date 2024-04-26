export default function ProgressBar(props) {
    return (
        <div className="progress mt-2 mb-3">
            <div
                role="progressbar"
                className={`progress-bar w-${props.perc} ${props.cor}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={props.perc}
                style={{ width: `${props.perc}%` }}

            >{props.itemName} - {props.perc}%</div>
        </div>
    )
}