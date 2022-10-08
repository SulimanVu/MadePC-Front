import React, { useEffect } from 'react';
import styles from '../Basket/basket.module.scss';
import dom from '../LowPrieceComps/images/domic2.png';
import { Link } from 'react-router-dom';
import ItemBasket from '../../components/ItemBasket/ItemBasket';
import rub from '../../components/CardComp/images/rub.svg';
import Order from '../../components/Order/Order';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/applicationSlice';
import { fetchComp } from '../../features/compSlice';
import { useSpring, animated } from 'react-spring';

const Basket = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.application.id)
    const user = useSelector((state) => state.application.users.find((item) => item._id === id))

    const result = user?.basket.reduce((a, b) => a += b.price, 0)

    const Number = ({ n }) => {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 },
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
    }

    return (
        <div className={styles.mainBasket}>
            <div className={styles.nav}>
                <Link to='/' className={styles.decor}><img className={styles.imageDom} src={dom} alt='img' /></Link>
                <p><span>•</span> Корзина </p>
            </div>
            <div className={styles.mainImg}>
                <h1>Корзина</h1>
            </div>
            <div className={styles.mainOfMain}>
                <div className={styles.divasik}>
                    <div className={styles.wrapper}>
                        <h2>Корзина</h2>
                        <ItemBasket />
                    </div>
                    <div className={styles.total}>
                        <h2 className={styles.total1}>Общая стоимость</h2>
                        <p><Number n={result} /></p>
                        <img className={styles.imgRub} src={rub} alt='img' />
                    </div>
                </div>
                <div className={styles.bring}>
                    <Order />
                </div>
            </div>
        </div>
    );
};

export default Basket;