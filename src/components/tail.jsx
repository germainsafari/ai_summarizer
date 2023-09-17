import React, { useState } from 'react';

function Tail() {
    const [quote, setQuote] = useState("");

    const quotes = [
        "First, solve the problem. Then, write the code.",
        "Code is like humor. When you have to explain it, it’s bad.",
        "Don't rush the process, savor the journey of learning!",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Talk is cheap. Show me the code.",
    ];

    const displayRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }

    return (
        <>
            <div>tail</div>
            <p>
                I will remember that I did this at night.
                I am addicted to the code. I should learn everything.
            </p>
            <button onClick={displayRandomQuote}>Inspire Me!</button>
            {quote && <p>{quote}</p>}
        </>
    )
}

export default Tail;
