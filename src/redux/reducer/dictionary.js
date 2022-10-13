import { ADD_WORD } from "../actionsTypes";

const initialState = {
  words: [],
};

const dictionary = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD: {
      const { id, word, translation } = action.payload;
      return {
        words: [...state.words, { word, translation, id }],
      };
    }

    default: {
      return state;
    }
  }
};

export default dictionary;
