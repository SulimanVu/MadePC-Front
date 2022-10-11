import React from "react";
import styles from "./videoCardCard.module.scss";

const Ssd = ({ item }) => {
  return (
    <div>
      <div>
        <div className={styles.videoCardCard}>
          <div className={styles.image}>
            <img src={`http://localhost:3010/images/${item.image}`} alt="" />
          </div>
          <div className={styles.content_item}>
            <div>Объем</div>
            <span className={styles.color}>
              <div>{`${item.volumeStorage}GB`}</div>
            </span>
          </div>
          <div className={styles.content_item}>
            <div>Тип</div>
            <span className={styles.color}>
              <div>{`${item.type}`}</div>
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

export default Ssd;
