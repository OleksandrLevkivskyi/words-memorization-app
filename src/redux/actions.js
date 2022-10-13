import { ADD_WORD, BEGIN_QUIZ, CHANGE_SCORE } from "./actionsTypes";

let nextWordId = 0;
export const addWord = (word, translation) => ({
  type: ADD_WORD,
  payload: {
    id: ++nextWordId,
    word: word.value,
    translation: translation.value,
  },
});

export const beginQuiz = (questions) => ({
  type: BEGIN_QUIZ,
  paiload: questions,
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
