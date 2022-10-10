import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../Faq/faq.module.scss";

const Faq = ({ item, index }) => {
  const [secret, setSecret] = useState(false);

  const handleClick = () => {
    setSecret(!secret);
  };
  console.log(item);
  return (
    <div className={styles.bodys} key={index}>
      <div className={styles.Text} onClick={handleClick}>
        <div
          className={styles.Numbers}
          style={{ color: secret ? "#a7e200" : "#fff" }}
        >
          {item.nomer}. {item.vopros}
          <button>{secret ? "-" : "+"}</button>
        </div>
        {secret ? <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.Secret}
          // style={{ display: secret ? "block" : "none" }}
        >
          {item.otvet}
        </motion.div> : null}
      </div>
    </div>
  );
};

export default Faq;
