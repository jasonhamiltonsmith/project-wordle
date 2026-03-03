import React from 'react';

export function GuessInput({handleSubmit, isDisabled}) {

    const [word, setWord] = React.useState('');

    function validateAndSetWord(nextWord) {
        if (nextWord.length > 5) {
            nextWord = word.slice(0, 5);
        }
        nextWord = nextWord.toUpperCase();

        setWord(nextWord);
    }

    function onSubmit() {
        if (word.length === 5) {
            handleSubmit(word);
            setWord('');
        }
    }

    return (
    <form className="guess-input-wrapper" onSubmit={(ev) => { ev.preventDefault(); onSubmit();} } >
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" 
            disabled={isDisabled}
            value={word}
            onChange={(ev) => validateAndSetWord(ev.target.value)} />

    </form>
    )
}
