import React from 'react';


export function VisualKeyboardKey({character, state}) {
    return (
        <span className={"visualKeyboardKey " + state}>
            {character}
        </span>
    )
}

