import React from "react";
import styles from "./videoCardCard.module.scss";

const Ram = ({ item }) => {
  return (
    <div>
      <div>
        <div className={styles.videoCardCard}>
          <div className={styles.image}>
            <img src={item.img} alt="" />
          </div>
          <div className={styles.content_item}>
            <div>Объем</div>
            <span className={styles.color}>
              <div>{`${item.memoryCapacity}`}</div>
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
              <div>{`${item.clockFrequency}`}</div>
            </span>
          </div>
          <div className={styles.content_item}>
            <div>Тип</div>
            <span className={styles.color}>
              <div>{`${item.memoryType}`}</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ram;
