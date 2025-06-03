import { useState, useCallback } from 'react';
import { FlashCard } from '../types/FlashCard';
import { imageService } from '../services/imageService';
import { azureOpenAIService } from '../services/azureOpenAI';

export const useFlashCards = () => {
    const [currentCard, setCurrentCard] = useState<FlashCard | null>(null);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);

    const loadNextCard = useCallback(async () => {
        try {
            const { word, url } = await imageService.getNextImage();
            const choices = await azureOpenAIService.generateChoices(word);

            setCurrentCard({
                id: Date.now(),
                imageUrl: url,
                correctAnswer: word,
                choices: choices.length > 0 ? choices : [word], // Fallback if API fails
            });
        } catch (error) {
            console.error('Error loading next card:', error);
        }
    }, []);

    const handleAnswer = useCallback((selectedAnswer: string) => {
        if (!currentCard) return;

        const isCorrect = selectedAnswer === currentCard.correctAnswer;
        if (isCorrect) {
            setScore(prev => prev + 1);
        }
        setTotal(prev => prev + 1);

        // Load next card after a brief delay
        setTimeout(loadNextCard, 1000);
    }, [currentCard, loadNextCard]);

    return {
        currentCard,
        score,
        total,
        loadNextCard,
        handleAnswer,
    };
};
