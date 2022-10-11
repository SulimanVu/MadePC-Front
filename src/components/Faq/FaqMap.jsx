import styles from "../Faq/faq.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../../features/questionSlice";
import Faq from "./Faq";
import { MagnifyingGlass } from "react-loader-spinner";

const FaqMap = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.questionSlice.question);
  const load = useSelector((state) => state.questionSlice.loadQuestion);

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  if (load) {
    return (
      <div className={styles.load}>
        <MagnifyingGlass
          visible={true}
          height="150"
          width="150"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
        <p>Идет загрузка...</p>
      </div>
    );
  }

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
