import React, { useReducer, useState, useEffect } from 'react';
import { scenarios } from './data/scenarios';
import './App.css';

interface GameState {
  lives: number;
  score: number;
  currentScenarioIndex: number;
  feedback: string;
  isGameOver: boolean;
  shake: boolean;
}

type Action =
  | { type: 'SUBMIT_ANSWER'; isCorrect: boolean; feedback: string }
  | { type: 'RESTART' }
  | { type: 'CLEAR_SHAKE' };

const initialState: GameState = {
  lives: 3,
  score: 0,
  currentScenarioIndex: 0,
  feedback: '',
  isGameOver: false,
  shake: false,
};

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'SUBMIT_ANSWER':
      if (action.isCorrect) {
        return {
          ...state,
          score: state.score + 1,
          currentScenarioIndex: (state.currentScenarioIndex + 1) % scenarios.length,
          feedback: '',
          shake: false,
        };
      } else {
        const newLives = state.lives - 1;
        return {
          ...state,
          lives: newLives,
          feedback: action.feedback,
          isGameOver: newLives <= 0,
          shake: true,
        };
      }
    case 'RESTART':
      return initialState;
    case 'CLEAR_SHAKE':
      return { ...state, shake: false };
    default:
      return state;
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');
  const currentScenario = scenarios[state.currentScenarioIndex];

  useEffect(() => {
    if (state.shake) {
      const timer = setTimeout(() => dispatch({ type: 'CLEAR_SHAKE' }), 200);
      return () => clearTimeout(timer);
    }
  }, [state.shake]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const isCorrect = inputValue.trim().toLowerCase() === currentScenario.correctTense.toLowerCase();
    dispatch({
      type: 'SUBMIT_ANSWER',
      isCorrect,
      feedback: isCorrect ? '' : currentScenario.failMessage,
    });
    setInputValue('');
  };

  if (state.isGameOver) {
    return (
      <div className="game-container game-over">
        <h2>YOU ARE DEAD</h2>
        <p>You survived {state.score} encounters.</p>
        <p className="feedback fail">{state.feedback}</p>
        <button className="restart-button" onClick={() => dispatch({ type: 'RESTART' })}>
          TRY AGAIN
        </button>
      </div>
    );
  }

  return (
    <div className={`game-container ${state.shake ? 'shake' : ''}`}>
      <div className="status-header">
        <span className="lives">Lives: {state.lives}</span>
        <span className="score">Score: {state.score}</span>
      </div>
      
      <div className="narrative-area">
        {currentScenario.imageUrl && (
          <img 
            src={currentScenario.imageUrl} 
            alt="Scenario background" 
            className="scenario-image" 
          />
        )}
        <div className="status-text">{currentScenario.status}</div>
        <div className="action-prompt">
          {currentScenario.actionPrompt} ({currentScenario.baseVerb})
        </div>
      </div>

      <form className="action-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="action-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your action..."
          autoFocus
        />
        {state.feedback && <div className="feedback fail">{state.feedback}</div>}
      </form>
    </div>
  );
};

export default App;
