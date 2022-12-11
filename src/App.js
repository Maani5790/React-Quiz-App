import React, { useState } from "react";
import "./App.css";

function App() {
  
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of Pakistan?",
      options: [
        { id: 0, text: "Lahore", isCorrect: false },
        { id: 1, text: "Gujranwala", isCorrect: false },
        { id: 2, text: "Karachi", isCorrect: false },
        { id: 3, text: "Islambad", isCorrect: true },
        { id: 3, text: "Quetta", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of pakistan?",
      options: [
        { id: 0, text: "Holy Land", isCorrect: true },
        { id: 1, text: "Desert", isCorrect: false },
        { id: 2, text: "Land of five rivers", isCorrect: false },
        { id: 3, text: "Muslim land", isCorrect: false },
      ],
    },
    {
      text: " What was the major event of 1971??",
      options: [
        { id: 0, text: "Bangladesh broke away from pakistan", isCorrect: true },
        { id: 1, text: "Explosion of nuclear bomb", isCorrect: false },
        { id: 2, text: "independence day", isCorrect: false },
        { id: 3, text: "nawaz sharif become prime mininster", isCorrect: false },
      
      ],
    },
    {
      text: "What is the largest city in the Pakistan?",
      options: [
        { id: 0, text: "Rawalpindi", isCorrect: false },
        { id: 1, text: "Karachi", isCorrect: true },
        { id: 2, text: "Mianwali", isCorrect: false },
        { id: 3, text: "Bahawalpur", isCorrect: false },
        { id: 3, text: "Peshawar", isCorrect: false },
      ],
    },
    {
      text: "In which year did Pakistan win the Cricket World Cup??",
      options: [
        { id: 0, text: "1999", isCorrect: false },
        { id: 1, text: "1992", isCorrect: true },
        { id: 2, text: "2003", isCorrect: true },
        { id: 3, text: "2007", isCorrect: false },
        { id: 3, text: "2011", isCorrect: false },
      ],
    },
    {
      text: "What is national sports of pakistan?",
      options: [
        { id: 0, text: "football", isCorrect: false },
        { id: 1, text: "hockey", isCorrect: true },
        { id: 2, text: "badminton", isCorrect: true },
        { id: 3, text: "cricket", isCorrect: false },
      ],
    },
    {
      text: "What is national animal of pakistan?",
      options: [
        { id: 0, text: "tiger", isCorrect: false },
        { id: 1, text: "markhor", isCorrect: true },
        { id: 2, text: "lion", isCorrect: false },
        { id: 3, text: "zebra", isCorrect: false },
      ],
    },
  ];
  

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1> Quiz App</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;