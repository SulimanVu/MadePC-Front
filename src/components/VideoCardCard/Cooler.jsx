import React from 'react';
import styles from "./videoCardCard.module.scss"

const Cooler = ({item}) => {
    return (
        <div>
             <div>
            <div className={styles.videoCardCard}>
                <div className={styles.image}>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles.content_item}>
                    <div>Объем</div>
                    <div>{`${item.power}`}</div>
                </div>
               
                <div className={styles.content_item}>
                    <div>Цена</div>
                    <div>{`${item.price}$`}</div>
                </div>
               
            </div>
        </div>
            
        </div>
    );
};

export default Cooler;