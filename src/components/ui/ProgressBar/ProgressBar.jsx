import { useEffect, useRef, useState } from "react"

export default function ProgressBar(props) {

    const [progressNow, setprogressNow] = useState(0);

    const barRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            let x = 0
            if (entries[0].isIntersecting) {
                const interval = setInterval(() => {
                    if(x < props.perc){
                        setprogressNow(x += 1)
                    } else {
                        clearInterval(interval)
                    }
                }, 5)
            }
        })

        observer.observe(barRef.current)

        return () => {
            observer.unobserve(barRef.current)
        }
    }, [barRef])

    return (
        <div className="progress mt-2 mb-3">
            <div
                ref={barRef}
                role="progressbar"
                className={`progress-bar w-${props.perc} ${props.cor}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progressNow}
                style={{ width: `${progressNow}%` }}

            >{props.itemName} - {progressNow}%</div>
        </div>
    )
}