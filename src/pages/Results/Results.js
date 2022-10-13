import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../../redux/actions";
import style from "../AddWord/AddWord.module.css";

const Results = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state.quiz);

  const handleBackToDictionary = () => {
    disptach(handleScoreChange(0));
    navigate("/");
  };

  return (
    <div>
      <h1>Final Score {score * 10}%</h1>
      <button onClick={handleBackToDictionary} className={style.button}>
        Back to the dictionary!
      </button>
    </div>
  );
};

export default Results;
