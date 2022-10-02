import React, { useEffect, useState } from 'react';
import styles from '../CardComp/cardcomp.module.scss';
import rub from './images/rub.svg';
import videocard from './images/videocard.svg';
import ram from './images/ram.svg';
import proc from './images/proc.svg';
import ssd from './images/ssd.svg';
import corpus from './images/corpus.svg';
import fan from './images/fan.svg';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ModalBuy from '../ModalBuy/ModalBuy';

const CardComp = ({ computers, setModal }) => {

    const value = 120;

    return (
        <>
            <div className={styles.mainOfMain}>
                <div>
                    <div className={styles.imageMain}>
                        <img className={styles.imageCart} src={`http://localhost:3010/images/${computers.image}`} alt='image' />
                    </div>
                    <div className={styles.cardMain}>
                        <div className={styles.mainName}>
                            <p className={styles.aboutName}>{computers.name}</p>
                            <p className={styles.aboutName}>{computers.price} <img alt='#' className={styles.rub} src={rub} /></p>
                        </div>
                        <div className={styles.Circular}>
                            <CircularProgressbar
                                value={120}
                                text={`${value}
                        FPS`}
                                circleRatio={0.8}
                                styles={{
                                    trail: {
                                        strokeLinecap: 'butt',
                                        transform: 'rotate(-125deg)',
                                        transformOrigin: "center-center"
                                    },
                                    text: {
                                        fill: '#ddd'
                                    }
                                }}
                                strokeWidth={10}
                            />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.buy} onClick={() => setModal(true)}>Купить</button>
                        <button className={styles.about}>Подробнее</button>
                    </div>
                    <div className={styles.desc}>
                        <p> EDELWEISS CYBORG - бюджетный компьютер для игр. На нем с легкостью и достаточно высоким показателем FPS можно запускать такие игры как: CS:GO, Dota 2, Fortnite, League of Legends и д.р. Прекрасный вариант для начинающих геймеров.</p>
                    </div>
                    <div className={styles.component}>
                        <img alt='#' className={styles.imageCard1} src={videocard} />
                        <div className={styles.name}>
                            <h6 className={styles.aboutName1}>Видео-карта</h6>
                            <p className={styles.aboutName1}>{computers.videocard.name}</p>
                        </div>
                    </div>
                    <div className={styles.component}>
                        <img alt='#' className={styles.imageCard1} src={proc} />
                        <div className={styles.name}>
                            <h6 className={styles.aboutName1}>Процессор</h6>
                            <p className={styles.aboutName1}>{computers.processor.name}</p>
                        </div>
                    </div>
                    <div className={styles.component}>
                        <img alt='#' className={styles.imageCard1} src={ram} />
                        <div className={styles.name}>
                            <h6 className={styles.aboutName1}>Оперативка</h6>
                            <p className={styles.aboutName1}>{computers.ram.title}</p>
                        </div>
                    </div>
                    <div className={styles.component}>
                        <img alt='#' className={styles.imageCard1} src={corpus} />
                        <div className={styles.name}>
                            <h6 className={styles.aboutName1}>Корпус</h6>
                            <p className={styles.aboutName1}>{computers.corpus.name}</p>
                        </div>
                    </div>
                    <div className={styles.component}>
                        <img alt='#' className={styles.imageCard1} src={ssd} />
                        <div className={styles.name}>
                            <h6 className={styles.aboutName1}>SSD</h6>
                            <p className={styles.aboutName1}>{computers.ssd.name}</p>
                        </div>
                    </div>
                    <div className={styles.component}>
                        <img alt='#' className={styles.imageCard1} src={fan} />
                        <div className={styles.name}>
                            <h6 className={styles.aboutName1}>Охлаждение</h6>
                            <p className={styles.aboutName1}>{computers.cooler.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardComp;