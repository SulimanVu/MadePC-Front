import React from 'react';
import styles from "./videoCardCard.module.scss"
const Corpus = ({item}) => {
    return (
        <div>
              <div>
            <div className={styles.videoCardCard}>
                <div className={styles.image}>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles.content_item}>
                    <div>Ширина</div>
                    <div>{`${item.width} см`}</div>
                </div>
               
                <div className={styles.content_item}>
                    <div>Цена</div>
                    <div>{`${item.price}$`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Высота</div>
                    <div>{`${item.height}`}</div>
                </div>
                <div className={styles.content_item}>
                    <div>Тип</div>
                    <div>{`${item.boardSize}`}</div>
                </div>
               
            </div>
        </div>
        </div>
    );
};

export default Corpus;  
            