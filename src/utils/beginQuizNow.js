export let results = [];
export const beginQuizNow = (words) => {
  let result = [];
  let allTranslations = [];
  for (let i = 0; i < 10 && i < words.length; i++) {
    let r = Math.floor(Math.random() * (words.length - i)) + i;
    let word = words[r];
    words[r] = words[i];
    words[i] = word;
    allTranslations.push(word.translation);
    result.push(word);
    results = result.map((current) => {
      return {
        question: current.word,
        correct_answer: current.translation,
        id: current.id,
      };
    });
    results.map((arr) => {
      arr.incorrect_answers = allTranslations.filter(
        (i) => i != arr.correct_answer
      );
      for (let i = 0; i < 6; i++) {
        arr.incorrect_answers.splice(
          Math.floor(Math.random() * arr.incorrect_answers.length),
          1
        );
      }
    });
  }
};
