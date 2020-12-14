export const fetchCards = () => {
    return $.ajax ({
        url: "/api/cards",
        method: "GET"
    });
};

export const fetchCard = (cardId) => {
    return $.ajax ({
        url: `/api/cards/${cardId}`,
        method: "GET"
    });
};

export const createCard = (card) => {
    return $.ajax ({
        url: "/api/cards",
        method: 'POST',
        data: { card }
    });
};

export const updateCard = (card) => {
    return $.ajax ({
        url: "/api/cards",
        method: 'PATCH',
        data: { card }
    });
};

export const deleteCard = (cardId) => {
    return $.ajax ({
        url: `/api/cards/${cardId}`,
        method: "DELETE"
    });
};