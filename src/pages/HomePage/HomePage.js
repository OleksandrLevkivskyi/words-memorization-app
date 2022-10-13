import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./HomePage.module.css";
import { beginQuiz } from "../../redux/actions";
import { beginQuizNow, results } from "../../utils/beginQuizNow";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const [...words] = useSelector((state) => state.dictionary.words);

  useEffect(() => {
    beginQuizNow(words);
    dispatch(beginQuiz(results));
  }, [dispatch, words]);

  return (
    <div className={style.container}>
      <h1>Online Dictionary</h1>
      <div className={style.button_container}>
        <NavLink to="/add">Add word</NavLink>
        {words.length < 10 ? (
          <p>Add 10 words and repeat it</p>
        ) : (
          <NavLink to="/repeat">Repeat words</NavLink>
        )}
      </div>
      <ol className={style.rectangle}>
        {words.length ? (
          words.map((item) => (
            <li key={item.id}>
              <b>{item.word}</b> - {item.translation}
            </li>
          ))
        ) : (
          <div>No words in the dictionary.</div>
        )}
      </ol>
    </div>
  );
};

export default HomePage;
