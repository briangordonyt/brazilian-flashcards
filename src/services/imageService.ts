const PLACEHOLDER_IMAGES = [
    { word: 'cachorro', url: 'https://via.placeholder.com/300x300?text=Dog' },
    { word: 'gato', url: 'https://via.placeholder.com/300x300?text=Cat' },
    { word: 'pássaro', url: 'https://via.placeholder.com/300x300?text=Bird' },
    { word: 'peixe', url: 'https://via.placeholder.com/300x300?text=Fish' },
];

class ImageService {
    async getNextImage(): Promise<{ word: string; url: string }> {
        const randomIndex = Math.floor(Math.random() * PLACEHOLDER_IMAGES.length);
        return PLACEHOLDER_IMAGES[randomIndex];
    }
}

export const imageService = new ImageService();
