import React from 'react';
import styles from "./videoCardCard.module.scss"

const Ssd = ({item}) => {
    return (
        <div>
            <div>
            <div className={styles.videoCardCard}>
                <div className={styles.image}>
                    <img src={`http://localhost:3010/images/${item.image}`} alt="" />
                </div>
                <div className={styles.content_item}>
                    <div>Объем</div>
                    <div>{`${item.volumeStorage}GB`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Тип</div>
                    <div>{`${item.type}`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Цена</div>
                    <div>{`${item.price}$`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Частота</div>
                    <div>{`${item.price} Ггц`}</div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Ssd;