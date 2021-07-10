import {useState, useEffect} from 'react';


const Body = (props) => {
    const {title} = props;
    const [count, setCount] = useState(0);
    const [autoCount, setAutoCount] = useState(false);
    const [timeoutId, setTimeoutId] = useState()
    
    const handleIncreaseCount = (event) => {
        event.preventDefault();
        setCount(count + 11)
    }

    const runCount = () => {
        setCount(count + 1)
        setAutoCount(true)
    }

    const stopCount = () => {
        setAutoCount(false)
        clearTimeout(timeoutId)
    }

    useEffect(() => {
        setTimeoutId(setTimeout(() => {
            if (autoCount) {
                setAutoCount(false)
                runCount()
            }
        }, 500))

    }, [autoCount])

    return (
        <>
            <h2>{title}</h2>
            <p>{count}</p>
            <button onClick={handleIncreaseCount}>
                Increase Count
            </button>
            <br/>
            <button onClick={runCount}>
                AutoCount
            </button>
            <button onClick={stopCount}>
                Stop
            </button>
        </>
    )
}

export default Body;