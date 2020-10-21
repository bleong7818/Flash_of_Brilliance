export const fetchDecks = () => {
    return $.ajax ({
        url: "/api/decks",
        method: "GET"
    })
    
}

export const fetchDeck = (deckId) => {
    return $.ajax ({
        url: `/api/deck/${deckId}`,
        method: "GET"
    })
};

export const createDeck = (deck) => {
    return $.ajax ({
        url: `/api/decks/`,
        method: 'POST',
        data: { deck }
    })
};

export const updateDeck = (deck) => {
    return $.ajax ({
        url: `/api/deck/${deck.id}`,
        method: "PATCH",
        data: { deck }
    })
};

export const deleteDeck = (deckId) => {
    return $.ajax ({
        url: `/api/deck/${deckId}`,
        method: "DELETE"
    })
};