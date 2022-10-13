import { useDispatch } from "react-redux";
import style from "./AddWord.module.css";
import { addWord } from "../../redux/actions";
import { useInput } from "../../hooks/useInput";
import { NavLink } from "react-router-dom";

const AddWords = () => {
  const dispatch = useDispatch();

  const word = useInput("", {
    isEmpty: true,
    isWord: true,
    maxLength: 45,
  });
  const translation = useInput("", {
    isEmpty: true,
    isWord: true,
    maxLength: 45,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWord(word, translation));
    translation.handleClear();
    word.handleClear();
  };

  return (
    <div className={style.add_container}>
      <div>
        <NavLink to="/">&laquo; Back</NavLink>
      </div>
      <form className={style.add} onSubmit={handleSubmit}>
        <h1>Add new word</h1>
        {word.isDirty && word.isEmpty && (
          <div style={{ color: "red" }}>This field is required</div>
        )}
        {word.isDirty && word.wordError && (
          <div style={{ color: "red" }}>Only alphabets are allow</div>
        )}
        {word.isDirty && word.maxLengthError && (
          <div style={{ color: "red" }}>
            Your word needs to be between 1 and 45 characters long
          </div>
        )}
        <input
          onChange={(e) => word.onChange(e)}
          onBlur={(e) => word.onBlur(e)}
          value={word.value}
          name="word"
          type="text"
          placeholder="Enter new word..."
          className={style.input}
        />
        {translation.isDirty && translation.isEmpty && (
          <div style={{ color: "red" }}>This field is required</div>
        )}
        {translation.isDirty && translation.wordError && (
          <div style={{ color: "red" }}>Only alphabets are allow</div>
        )}
        {translation.isDirty && translation.maxLengthError && (
          <div style={{ color: "red" }}>
            Your word needs to be between 1 and 45 characters long
          </div>
        )}
        <input
          onChange={(e) => translation.onChange(e)}
          onBlur={(e) => translation.onBlur(e)}
          value={translation.value}
          name="translation"
          type="text"
          placeholder="Enter translation..."
        />
        <button
          disabled={!word.inputValid || !translation.inputValid}
          type="submit"
          className={style.button}
        >
          Add to dictionary
        </button>
      </form>
    </div>
  );
};

export default AddWords;
