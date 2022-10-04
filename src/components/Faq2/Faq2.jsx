import Accordion from "react-bootstrap/Accordion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../../features/questionSlice";
import styles from "../Faq2/Faq2.module.scss";

function BasicExample() {
  const question = useSelector((state) => state.questionSlice.question);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

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
            <div className={styles.Text}>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {item.nomer}. {item.vopros}
                  </Accordion.Header>
                  <Accordion.Body>{item.otvet}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BasicExample;
