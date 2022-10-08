import React from 'react';
import styles from '../ModalBuy/modalbuy.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
                    <Link to='/basket' className={styles.decor}><button className={styles.basket}>В КОРЗИНУ</button></Link>
                    <button className={styles.close} onClick={() => setModal(false)}>ЗАКРЫТЬ ОКНО</button>
                </div>
            </div>
        </div>
    );
};

ModalBuy.prototypes = {
    setModal: PropTypes.func.isRequired
}

export default ModalBuy;