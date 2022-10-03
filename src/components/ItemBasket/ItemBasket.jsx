import React from 'react';
import styles from '../ItemBasket/itembasket.module.scss';
import proc from './images/proc2.png';
import rub from '../CardComp/images/rub.svg';

const ItemBasket = () => {
    return (
        <div className={styles.itemMain}>
            <div className={styles.Basket}>
                <img className={styles.imgBasket} src={proc} alt="img" />
                <p>EDELWEISS CYBORG</p>
            </div>
            <div className={styles.container}>
                <div className={styles.imgPrice}>
                <p>57800</p>
                <img className={styles.imgRub} src={rub} alt='img' />
                </div>
                {/* <p>57800</p>
                <img className={styles.imgRub} src={rub} alt='img' /> */}
                <div className={styles.plusMinus}>
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                </div>
                <button className={styles.delete}>
                    ╳
                </button>
            </div>
        </div>
    );
};

export default ItemBasket;