import { useEffect, useState } from "react"


const CountdownHook = (props) => {
    const [count, setCount] = useState(5)
    let { onTimeup } = props

    useEffect(() => {
        if (count === 0) {
            onTimeup()
            return
        }
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (
        <div>
            <div>CountdownHook</div>
            <div>{count}</div>
        </div>
    )
}

export default CountdownHook