import React from 'react';
import styles from "./videoCardCard.module.scss"


const VideoCardCard = ({item}) => {
    return (
        <div>
            <div className={styles.videoCardCard}>
                <div className={styles.image}>
                    <img src={`http://localhost:3010/images/${item.image}`} alt="" />
                </div>
                <div className={styles.content_item}>
                    <div>Объем видеопамяти</div>
                    <div>{`${item.volumeStorage}GB`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Тип видеопамяти</div>
                    <div>{`${item.typeStorage}`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Цена</div>
                    <div>{`${item.price}$`}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoCardCard;