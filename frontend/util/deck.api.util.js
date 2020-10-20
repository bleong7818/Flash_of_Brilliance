export const fetchDeck = (deckId) => {
    return $.ajax ({
        url: `api/deck/${deckId}`,
        method: "GET",

    })
};

export const createDeck = (deck) => {
    return $.ajax ({
        url: `api/decks`,
        method: 'POST',
        data: { deck }
    })
};

export const updateDeck = (deckId) => {
    return $.ajax ({
        url: `api/deck/${deckId}`,
        method: "PATCH"
    })
};

export const deleteDeck = (deckId) => {
    return $.ajax ({
        url: `api/deck/${deckId}`,
        method: "DELETE"
    })
};