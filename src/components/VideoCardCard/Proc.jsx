import React from 'react';
import styles from "./videoCardCard.module.scss"

const Proc = ({item}) => {
    return (
        <div>
            <div>
            <div className={styles.videoCardCard}>
                <div className={styles.image}>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles.content_item}>
                    <div>Сокет</div>
                    <div>{`${item.socket}`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Ядро</div>
                    <div>{`${item.core}`}</div>
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

export default Proc;