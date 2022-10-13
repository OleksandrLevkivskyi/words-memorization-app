import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleScoreChange } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import style from "../AddWord/AddWord.module.css";
import s from "../HomePage/HomePage.module.css";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const RepeatWords = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state.quiz);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const { quiz } = useSelector((state) => state);
  const question = quiz.questions[questionIndex];

  useEffect(() => {
    if (quiz?.questions.length) {
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [quiz, questionIndex]);

  const handleClickAnswer = (e) => {
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < quiz.questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  return (
    <div className={s.container}>
      <h1>Question {questionIndex + 1}</h1>
      <p>
        <b>"{quiz.questions[questionIndex].question}"</b> is translated as the:
      </p>
      {options.map((data, id) => (
        <div key={id}>
          <button onClick={handleClickAnswer} className={style.button}>
            {data}
          </button>
        </div>
      ))}
      <div>
        <b>Score</b>: {score} / {quiz.questions.length}
      </div>
    </div>
  );
};

export default RepeatWords;
