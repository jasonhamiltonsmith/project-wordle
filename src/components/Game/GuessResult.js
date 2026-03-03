import React from 'react';

export function GuessResult({guessResult}) {
    return (
        <p className="guess">
            {guessResult.map((c, i) => (
                <span key={i} className={"cell " + c.status}>{c.letter}</span>
            ))}
        </p>
    )
}
