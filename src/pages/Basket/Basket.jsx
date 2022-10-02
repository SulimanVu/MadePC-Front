import React from 'react';
import styles from '../Basket/basket.module.scss';
import dom from '../LowPrieceComps/images/domic2.png';
import { Link } from 'react-router-dom';

const Basket = () => {
    return (
        <div className={styles.mainBasket}>
            <div className={styles.nav}>
                <Link to='/' className={styles.decor}><img className={styles.imageDom} src={dom} alt='img' /></Link>
                <p><span>•</span> Корзина </p>
            </div>
            <div className={styles.mainImg}>
                <h1>Корзина</h1>
            </div>
        </div>
    );
};

export default Basket;