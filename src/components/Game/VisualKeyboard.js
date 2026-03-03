
import React from 'react';
import {VisualKeyboardKey} from './VisualKeyboardKey'

const LETTER_ROWS = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M']
]

function collapseGuesses(guesses) {
    const res = {}
    for (const g of guesses) {
        for (const newL of g) {
            const existing = res[newL.letter];
            if (!existing) {
                res[newL.letter] = newL.status;
            } else if (existing === 'misplaced' || existing === 'incorrect') {
                res[newL.letter] = newL.status;
            }
        }
    }
    console.log(JSON.stringify(res));
    return res;
}

export function VisualKeyboard({guessesSoFar}) {
    const collapsed = collapseGuesses(guessesSoFar);
    return (
        <div className="visualKeyboardWrapper">
            {LETTER_ROWS.map((row, i) => (
                <div key={i} className='visualKeyboardRow' >
                {row.map((char) => (
                    <VisualKeyboardKey key={char} character={char} state={collapsed[char] ?? 'unused'} />
                ))}
                </div>
            ))}
        </div>
    )
}
