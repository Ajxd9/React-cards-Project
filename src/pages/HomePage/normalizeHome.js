const normalizeHome = (cards, userId) => {
    if (!cards) return null;
    const newCards = cards.map((card) => ({
      ...card,
      liked: card.likes.includes(userId),
    }));
    return newCards;
  };
  
  export default normalizeHome;