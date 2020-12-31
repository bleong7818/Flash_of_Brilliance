export const addDeck = (deckId) => {
    return $.ajax ({
        url: `api/decks/:deck_id/decks`,
        method: "POST"
    });
};

