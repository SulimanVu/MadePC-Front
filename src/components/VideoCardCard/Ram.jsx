import React from 'react';
import styles from "./videoCardCard.module.scss"

const Ram = ({item}) => {
    return (
        <div>
             <div>
            <div className={styles.videoCardCard}>
                <div className={styles.image}>
                    <img src={item.img} alt="" />
                </div>
                <div className={styles.content_item}>
                    <div>Объем</div>
                    <div>{`${item.memoryCapacity}`}</div>
                </div>
               
                <div className={styles.content_item}>
                    <div>Цена</div>
                    <div>{`${item.price}$`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Частота</div>
                    <div>{`${item.clockFrequency}`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Тип</div>
                    <div>{`${item.memoryType}`}</div>
                </div>
               
            </div>
        </div>
        </div>
    );
};

export default Ram;