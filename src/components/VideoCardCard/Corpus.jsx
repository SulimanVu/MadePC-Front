import React from "react";
import styles from "./videoCardCard.module.scss";
const Corpus = ({ item }) => {
  return (
    <div>
      <div>
        <div className={styles.videoCardCard}>
          <div className={styles.image}>
            <img src={`http://localhost:3010/images/${item.image}`} alt="" />
          </div>
          <div className={styles.content_item}>
            <div>Ширина</div>
            <span className={styles.color}>
              <div>{`${item.width} см`}</div>
            </span>
          </div>

          <div className={styles.content_item}>
            <div>Цена</div>
            <span className={styles.color}>
              <div>{`${item.price}$`}</div>
            </span>
          </div>
          <div className={styles.content_item}>
            <div>Высота</div>
            <span className={styles.color}>
              <div>{`${item.height}`}</div>
            </span>
          </div>
          <div className={styles.content_item}>
            <div>Тип</div>
            <span className={styles.color}>
              <div>{`${item.boardSize}`}</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corpus;
