import React from 'react';
import { FlashCard } from '../types/FlashCard';
import ImageDisplay from './ImageDisplay';
import ChoiceList from './ChoiceList';
import { Card as BootstrapCard } from 'react-bootstrap';

interface CardProps {
    card: FlashCard;
    onSelect: (choice: string) => void;
}

const Card: React.FC<CardProps> = ({ card, onSelect }) => {
    return (
        <BootstrapCard className="shadow-sm">
            <BootstrapCard.Body>
                <ImageDisplay imageUrl={card.imageUrl} />
                <ChoiceList choices={card.choices} onSelect={onSelect} />
            </BootstrapCard.Body>
        </BootstrapCard>
    );
};

export default Card;
