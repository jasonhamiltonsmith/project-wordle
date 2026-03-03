import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

import {GuessInput} from './GuessInput'
import {GuessResultList} from './GuessResultList'
import {Banner} from './Banner'
import {VisualKeyboard} from './VisualKeyboard'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
    const [guessResults, setGuessResults] = React.useState([]);
    const [gameState, setGameState] = React.useState('inProgress');

    function handleSubmit(word) {
        for (const g of guessResults) {
            if (g === word) {
                return;
            }
        }
        const guessResult = checkGuess(word, answer);
        const newGuessResults = [...guessResults, guessResult];
        setGuessResults(newGuessResults);
        console.log('Submitted ' + word)
        console.log(newGuessResults)
        if (answer === word) {
            setGameState('win')
        } else if ( newGuessResults.length >= 6) {
            setGameState('loss')
        }
    }
  return (
    <>
        <GuessResultList guesses={guessResults} answer={answer} />
        <GuessInput handleSubmit={handleSubmit} isDisabled={gameState !== "inProgress"} />
        <VisualKeyboard guessesSoFar={guessResults} />
        {gameState === 'win' && (
            <Banner theme="happy">
                <p>
                    <strong>Congratulations!</strong> Got it in
                    <br />
                    <strong>{guessResults.length} {guessResults.length > 1 ? 'guesses' : 'guess'}</strong>.
                </p>
            </Banner>
        )}
        {gameState === 'loss' && (
            <Banner theme="sad">
                 <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </Banner>
        )}
    </>
    );
}

export default Game;
