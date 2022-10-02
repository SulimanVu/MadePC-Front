import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../../features/questionSlice";
import styles from "../Faq/faq.module.scss";

const Faq = () => {
  const [secret, setSecret] = useState(false);

  const question = useSelector((state) => state.questionSlice.question);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  const handleClick = () => {
    setSecret(!secret);
  };

  return (
    <div className={styles.bodys}>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.block}>
        <h1 className={styles.Title}>Часто задаваемые вопросы</h1>
        {question.map((item) => {
          return (
            <div className={styles.Text} onClick={handleClick}>
              <div
                className={styles.Numbers}
                style={{ color: secret ? "#a7e200" : "#fff" }}
              >
                {item.nomer}. {item.vopros}
                <button>{secret ? "-" : "+"}</button>
              </div>
              <div
                className={styles.Secret}
                style={{ display: secret ? "block" : "none" }}
              >
                {item.otvet}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
