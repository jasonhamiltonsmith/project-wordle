import React from 'react';

import {GuessResult} from './GuessResult'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils'
import { nullGuessResult } from '../../game-helpers'

export function GuessResultList({guesses, answer}) {
    return (
        <div className="guessResults" >
        {range(NUM_OF_GUESSES_ALLOWED).map((i) => (<GuessResult key={i} guessResult={guesses[i] ?? nullGuessResult}/>))}
        </div>
    )
}
