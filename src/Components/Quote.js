import React, { useState } from 'react';
import colors from '../utils/Colors'
import quotes from '../quote.json'

const getRandom = () => Math.floor(Math.random() * quotes.length);


const Quote = () => {

    const [quote, setQuote] = useState(quotes[getRandom()]);

    const changerCards = () => {
        const random = getRandom();
        setQuote(quotes[random]);
    };

    const color = colors[Math.floor(Math.random() * 8)];
    document.body.style = `background: ${color}`;
    

    return (
        <div className="card" style={{ color: color }}>
            <h3>Famous quotes</h3>
            <ul>
                <li>
                    <i className="fa-solid fa-envelope"><b>Quote: </b></i> {quote.quote}
                </li>
                <li>
                    <i className="fa-solid fa-envelope"><b>Author: </b></i> {quote.author}
                </li>
            </ul>
            <button onClick={changerCards}>On click<i className="fa-solid fa-shuffle"></i>
            </button>
        </div>
    );
};

export default Quote;