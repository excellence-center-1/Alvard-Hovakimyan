import React, { useState, useEffect } from 'react';
import './GamePage.css'
const GamePage = () => {
  const words = ['mango', 'price', 'torrent', 'kamo', 'zaven', 'excellent' ]; // Array of words
  const [puzzle, setPuzzle] = useState('');
  const [guess, setGuess] = useState('');
  const [revealed, setRevealed] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Select a random word from the array
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    // Initialize the puzzle and revealed state
    setPuzzle(randomWord);
    setRevealed(new Array(randomWord.length).fill('_'));
  }, []);

  const handleGuess = (e) => {
    e.preventDefault();
    const letter = guess.trim().toLowerCase();

    if (letter.length !== 1) {
      setMessage('Please enter a single letter.');
    } else {
      const puzzleLowerCase = puzzle.toLowerCase();
      const updatedRevealed = [...revealed];

      for (let i = 0; i < puzzle.length; i++) {
        if (puzzleLowerCase[i] === letter) {
          updatedRevealed[i] = puzzle[i];
        }
      }

      setRevealed(updatedRevealed);
      setGuess('');
      setMessage('');
    }
  };

  return (
    <div className='big'>
      <h1>Field of Dreams</h1>
      <p>Guess the letter in the word:</p>
      <p>{revealed.join(' ')}</p>
      <form onSubmit={handleGuess}>
        <label htmlFor="guess">Enter a letter: </label>
        <input
          type="text"
          id="guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={1}
        />
        <button type="submit">Go</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GamePage;
