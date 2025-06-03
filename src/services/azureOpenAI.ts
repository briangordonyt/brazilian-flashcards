import { OpenAIClient } from '@azure/openai';
import { AzureKeyCredential } from '@azure/core-auth';
import { AZURE_OPENAI_CONFIG } from '../config/azure-config';

class AzureOpenAIService {
    private client: OpenAIClient;

    constructor() {
        this.client = new OpenAIClient(
            AZURE_OPENAI_CONFIG.endpoint,
            new AzureKeyCredential(AZURE_OPENAI_CONFIG.key)
        );
    }

    async generateChoices(correctAnswer: string): Promise<string[]> {
        try {
            const response = await this.client.getChatCompletions(
                AZURE_OPENAI_CONFIG.deploymentName,
                [
                    {
                        role: "system",
                        content: "You are a helpful assistant that generates Portuguese vocabulary words. Only respond with comma-separated words, nothing else."
                    },
                    {
                        role: "user",
                        content: `Generate 3 incorrect Portuguese words that are different from "${correctAnswer}" but are in the same category (e.g., if it's an animal, generate other animals).`
                    }
                ],
                {
                    temperature: 0.7,
                    maxTokens: 50
                }
            );

            if (response.choices.length > 0 && response.choices[0].message?.content) {
                const incorrectChoices = response.choices[0].message.content.trim().split(',').map((word: string) => word.trim());
                const allChoices = [...incorrectChoices, correctAnswer];
                return this.shuffleArray(allChoices);
            }

            return [];
        } catch (error) {
            console.error('Error generating choices:', error);
            return [];
        }
    }

    private shuffleArray<T>(array: T[]): T[] {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
}

export const azureOpenAIService = new AzureOpenAIService();
