import React, { useState, useCallback } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCounter = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    const decreaseCounter = useCallback(() => {
        setCount(prevCount => Math.max(prevCount - 1, 0));
    }, []);

    return (
        <div className="counter-container">
            <h1 className="counter-display">Counter: {count}</h1>
            <div className="counter-buttons">
                <button className="btn-increase" onClick={increaseCounter}>Increase</button>
                <button className="btn-decrease" onClick={decreaseCounter} disabled={count === 0}>
                    Decrease
                </button>
            </div>
        </div>
    );
};

export default Counter;