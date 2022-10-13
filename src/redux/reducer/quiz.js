import { BEGIN_QUIZ, CHANGE_SCORE } from "../actionsTypes";

const initialState = {
  questions: [],
  score: 0,
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_QUIZ: {
      return {
        ...state,
        questions: action.paiload,
      };
    }
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default quiz;
