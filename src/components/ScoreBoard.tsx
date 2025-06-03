import React from 'react';
import { Alert } from 'react-bootstrap';

interface ScoreBoardProps {
    score: number;
    total: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, total }) => {
    return (
        <Alert variant="info" className="text-center mb-4">
            <h4 className="mb-0">Score: {score} / {total}</h4>
        </Alert>
    );
};

export default ScoreBoard;
