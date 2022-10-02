import React from 'react';
import styles from '../ModalBuy/modalbuy.module.scss'

const ModalBuy = ({ setModal }) => {
    return (
        <div className={styles.buyContActive}>
            <div className={styles.modalIn}>
                <div className={styles.result}>
                    <div className={styles.x}>
                        <h3 className={styles.h3}>Результат</h3>
                        <button className={styles.closeButton} onClick={() => setModal(false)}>╳</button>
                    </div>
                    <h4 className={styles.h4}>Товар успешно добавлен в корзину</h4>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.basket}>В КОРЗИНУ</button>
                    <button className={styles.close} onClick={() => setModal(false)}>ЗАКРЫТЬ ОКНО</button>
                </div>
            </div>
        </div>
    );
};

export default ModalBuy;