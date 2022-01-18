export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE"

export const toggleFavourite = (nameDt) => ({
    type: TOGGLE_FAVOURITE,
    payload: nameDt
})