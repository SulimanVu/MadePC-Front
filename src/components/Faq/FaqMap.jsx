import styles from "../Faq/faq.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../../features/questionSlice";
import Faq from "./Faq";

const FaqMap = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.questionSlice.question);
  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.block}>
        <h1 className={styles.Title}>Часто задаваемые вопросы</h1>
        {question.map((item, index) => {
          return <Faq item={item} index={index} />;
        })}
      </div>
    </>
  );
};

export default FaqMap;
