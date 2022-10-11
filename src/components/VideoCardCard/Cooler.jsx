import React from "react";
import styles from "./videoCardCard.module.scss";

const Cooler = ({ item }) => {
  return (
    <div>
      <div>
        <div className={styles.videoCardCard}>
          <div className={styles.image}>
            <img src={item.image} alt="" />
          </div>
          <div className={styles.content_item}>
            <div>Объем</div>
            <span className={styles.color}>
              <div>{`${item.power}`}</div>
            </span>
          </div>

          <div className={styles.content_item}>
            <div>Цена</div>
            <span className={styles.color}>
              <div>{`${item.price}$`}</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooler;
