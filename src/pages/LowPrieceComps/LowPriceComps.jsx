import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardComp from '../../components/CardComp/CardComp';
import { fetchComp } from '../../features/compSlice';
import styles from '../LowPrieceComps/lowpricecomps.module.css';
import star from './images/star.svg';

const LowPriceComps = () => {
    const comps = useSelector((state) => state.comp.comp);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComp())
    }, [dispatch])

    return (
        <div className={styles.mainOfMain}>
            <div className={styles.mainImageCard}>
                <div className={styles.mainImageCard1}>
                    <h1 className={styles.title}>
                        Недорогие игровые компьютеры
                        <br />
                        <p className={styles.info}>
                            ПК для начинающих геймеров с ограниченным бюджетом. Компьютеры оптимизированы для игр, учёбы и работы. Достаточная производительность по низкой цене. Готовые системные блоки с фирменной гарантией производителя. Качественно и рационально.
                        </p>
                    </h1>
                </div>
            </div>
            <div className={styles.catalog}>
                <div className={styles.catalogChild}>
                    <div className={styles.catalogName}>
                        <p className={styles.h}>
                            Оптимальная серия - доступные игровые ПК
                        </p>
                    </div>
                    <div className={styles.cardMain}>
                        <div className={styles.CardMain1}>
                            <img className={styles.star} src={star}></img>
                            <p>Бюджетные системные блоки, низкая цена - разумный расход средств</p>
                        </div>
                        <div className={styles.CardMain1}>
                            <img className={styles.star} src={star}></img>
                            <p>Современный дизайн и качественная сборка, справедливая стоимость</p>
                        </div>
                        <div className={styles.CardMain1}>
                            <img className={styles.star} src={star}></img>
                            <p>Возможность купить дёшево компьютер - универсальное решение для дома и офиса</p>
                        </div>
                        <div className={styles.imageBattle}>
                            <img className={styles.imageBattle1} src='https://edelws.ru/upload/uf/160/16089c7cc012093015c7d464c7e9a8a6.png' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mainCompMap}>
                {comps.map((elem) => {
                    return (
                        <div>
                            <CardComp computers={elem} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default LowPriceComps;