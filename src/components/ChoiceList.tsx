import React from 'react';
import { Button } from 'react-bootstrap';

interface ChoiceListProps {
    choices: string[];
    onSelect: (choice: string) => void;
}

const ChoiceList: React.FC<ChoiceListProps> = ({ choices, onSelect }) => {
    return (
        <div className="d-grid gap-2">
            {choices.map((choice, index) => (
                <Button
                    key={index}
                    variant="outline-primary"
                    size="lg"
                    onClick={() => onSelect(choice)}
                    className="text-start"
                >
                    {choice}
                </Button>
            ))}
        </div>
    );
};

export default ChoiceList;
