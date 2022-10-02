import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardComp from '../../components/CardComp/CardComp';
import { fetchComp } from '../../features/compSlice';
import styles from '../LowPrieceComps/lowpricecomps.module.scss';
import star from './images/star.svg';
import chair from './images/nedorpc.jpg';
import dom from './images/domic2.png'
import ModalBuy from '../../components/ModalBuy/ModalBuy';

const LowPriceComps = () => {
    const [modal, setModal] = useState(false)
    const comps = useSelector((state) => state.comp.comp);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComp())
    }, [dispatch])

    return (
        <>
            {modal ? <ModalBuy setModal={setModal} /> : null}
            <div className={styles.mainOfMain}>
                <div className={styles.mainHeader}>
                    <Link to='/' className={styles.decor}><img className={styles.imageDom} src={dom} alt='img' /></Link>
                    <p><span>•</span> Компьютеры EDELWEISS <span>•</span></p>
                    <p id={styles.p}> Недорогие игровые компьютеры</p>
                </div>
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
                                <img className={styles.star} src={star} alt='img'></img>
                                <p>Бюджетные системные блоки, низкая цена - разумный расход средств</p>
                            </div>
                            <div className={styles.CardMain1}>
                                <img className={styles.star} src={star} alt='img'></img>
                                <p>Современный дизайн и качественная сборка, справедливая стоимость</p>
                            </div>
                            <div className={styles.CardMain1}>
                                <img className={styles.star} src={star} alt='img'></img>
                                <p>Возможность купить дёшево компьютер - универсальное решение для дома и офиса</p>
                            </div>
                            <div className={styles.imageBattle}>
                                <img alt='img' className={styles.imageBattle1} src='https://edelws.ru/upload/uf/160/16089c7cc012093015c7d464c7e9a8a6.png' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mainCompMap}>
                    {comps.map((elem) => {
                        return (
                            <div>
                                <CardComp computers={elem} setModal={setModal} />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.textImg}>
                    <div className={styles.textMain}>
                        <h3 className={styles.titlePC}>ПК недорого - это реально и доступно</h3>
                        <br />
                        <p>Средняя стоимость хорошего домашнего ПК стартует от 70 000 ₽. Как быть в случае, если потратить такую сумму нет возможности, а пройти последние тайтлы хочется? Выход – купить недорогой компьютер по цене 30 000 рублей или чуть выше.</p>
                        <br />
                        <p>Мы предлагаем доступные системные блоки только из новых комплектующих. Это обеспечивает продолжительную стабильную работу компьютера. Каждая сборка сбалансирована. К процессору подобрана производительная видеокарта из бюджетного ценового сегмента.</p>
                        <br />
                        <p>Благодаря этому машина сможет запустить любую новую игру с настройками выше среднего, доставит радость своей практичностью и рациональным расходованием средств.</p>
                        <br />
                        <h3 className={styles.titlePC}>Продажа бюджетных компьютеров для дома и офиса</h3>
                        <br />
                        <p>В EDELWEISS можно купить приличную станцию по вполне доступной цене. Каждая сборка продумана специалистами и дает возможность глубоко погружаться в виртуальный мир. Даже самый бюджетный вариант EDELWEISS CYBORG обещает новичкам комфортное участие в Dota 2, Fortnite, League of Legends, CS:GO и других популярных проектах.</p>
                        <br />
                        <p>Исходя из этого, вы можете купить дёшево системный блок и полноценно работать за своим новым компьютером или сделать из него недорогое игровое решение с возможностью дальнейшей модернизации. Такая покупка обойдется совсем недорого и доставит радость своей универсальностью.</p>
                    </div>
                    <div className={styles.imageMain}>
                        <img className={styles.imageUno} src={chair} alt='img' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LowPriceComps;