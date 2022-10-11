import React from "react";
import styles from "./videoCardCard.module.scss";

const Proc = ({ item }) => {
  return (
    <div>
      <div>
        <div className={styles.videoCardCard}>
          <div className={styles.image}>
            <img src={item.image} alt="" />
          </div>
          <div className={styles.content_item}>
            <div>Сокет</div>
            <span className={styles.color}>
              <div>{`${item.socket}`}</div>
            </span>
          </div>
          <div className={styles.content_item}>
            <div>Ядро</div>
            <span className={styles.color}>
              <div>{`${item.core}`}</div>
            </span>
          </div>
          <div className={styles.content_item}>
            <div>Цена</div>
            <span className={styles.color}>
              <div>{`${item.price}$`}</div>
            </span>
          </div>
          <div className={styles.content_item}>
            <div>Частота</div>
            <span className={styles.color}>
              <div>{`${item.price} Ггц`}</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proc;
