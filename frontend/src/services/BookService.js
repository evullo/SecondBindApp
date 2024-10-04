export const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8000/inventory');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      return [];
    }
};
  