import { useState } from "react";
import styles from "../Faq/faq.module.scss";

const Faq = () => {
  const [secret, setSecret] = useState(false);

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
        <h1 className={styles.Title}>Вопросы по доставке</h1>
        <div className={styles.Text} onClick={handleClick}>
          <p
            className={styles.Numbers}
            style={{ color: secret ? "#a7e200" : "#fff" }}
          >
            1. Сколько ждать доставку если я живу в другом городе?
            <button>{secret ? "-" : "+"}</button>
          </p>
          <p
            className={styles.Secret}
            style={{ display: secret ? "block" : "none" }}
          >
            Зависит от расстояния и транспортной доступности. В среднем на
            доставку по РФ уходит около 7 рабочих дней.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
