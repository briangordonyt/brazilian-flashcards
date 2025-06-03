import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard';
import { useFlashCards } from './hooks/useFlashCards';

function App() {
  const { currentCard, score, total, loadNextCard, handleAnswer } = useFlashCards();

  useEffect(() => {
    loadNextCard();
  }, [loadNextCard]);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Portuguese Flash Cards</h1>
      <ScoreBoard score={score} total={total} />
      {currentCard && (
        <div className="d-flex justify-content-center">
          <div style={{ maxWidth: '500px', width: '100%' }}>
            <Card card={currentCard} onSelect={handleAnswer} />
          </div>
        </div>
      )}
    </Container>
  );
}

export default App;
