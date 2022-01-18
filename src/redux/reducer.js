import { TOGGLE_FAVOURITE } from "./actions";

const initialData = {
  favourites: [],
};

const nameReducer = (state = initialData, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      let nameDt = action.payload;
      let nameFromFavourite = state.favourites.find(
        (favName) => nameDt.id === favName.id
      );
      return {
        ...state,
        favourites: nameFromFavourite
          ? [
              ...state.favourites.filter(
                (nameDt) => nameDt.id !== nameFromFavourite.id
              ),
            ]
          : [...state.favourites, action.payload],
      };
    default:
      return state;
  }
};
export default nameReducer;
