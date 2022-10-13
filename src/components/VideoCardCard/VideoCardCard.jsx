import React from "react";
import styles from "./videoCardCard.module.scss";
import { serverUrl } from '../../serverUrl.js';

const VideoCardCard = ({ item }) => {
  return (
    <div>
      <div className={styles.videoCardCard}>
        <div className={styles.image}>
          <img src={`${serverUrl}/images/${item.image}`} alt="" />
        </div>
        <div className={styles.content_block}>
          <div className={styles.content_item}>
            <div>Объем видеопамяти</div>
            <span className={styles.color}>
              <div>{`${item.volumeStorage}GB`}</div>
            </span>
          </div>
          <div className={styles.content_item}>
            <div>Тип видеопамяти</div>
            <span className={styles.color}>
              <div>{`${item.typeStorage}`}</div>
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

export default VideoCardCard;
