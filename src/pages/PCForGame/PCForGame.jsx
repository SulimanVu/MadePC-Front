import React, { useEffect, useState } from 'react';
import styles from "./PCForGame.module.scss"
import { Link } from 'react-router-dom';
import Text from './Text';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGame } from '../../features/gameSlice';



const PCForGame = () => {

    
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchGame())
    }, [])

    const game = useSelector(state => state.game.game)
   

    const[button, setButton] = useState(false)

    const handleClick = () => {
        setButton(!button)
    }


    return (
        <div className={styles.title_page}>
            <div className={styles.breadcrumps}>
                <div className={styles.inner}>
                    <div className={styles.breadcrumps_wrapper}>
                        <Link to="/" className={styles.breadcrumps_link}>
                            <img src="https://cdn-icons-png.flaticon.com/512/3237/3237418.png" alt="" className={styles.home_icon}/>
                        </Link>
                        <span className={styles.breadcrumps_text}>   Компьютеры под игру, геймерские ПК оптимизированные под проекты AAA</span>
                    </div>
                </div>
            </div> 
            <div className={styles.title_page_bg}>
                <picture>
                    <img src="https://edelws.ru/upload/uf/6fe/6fe156668e2a6d90702235455f62972d.png" alt="Картинка"/>
                </picture>
            </div>
            
            <div className={styles.title_page_inner}>
               <div className={styles.title_page_wrapp}>
                    <h1 className={styles.title_page_h1}>Компьютеры под игру</h1>
                    <p className={styles.title_page_text}> Выберите любимую игру, а мы предложим вам вариант сборки оптимизированный под конкретный проект AAA. Понимая особенности геймплея, разрешение монитора, требования игры. Вы получите качественную станцию с оптимальными характеристиками, учитывая ваши финасовые возможности.</p>
                   <Text  button={button}/>
                    <button className={styles.btn_type_1} onClick={handleClick}>{button ? "свернуть" : "Узнать больше"}</button>
               </div>
            </div>
            <div className={styles.features}>
                <div className={styles.features_inner}>
                    <div className={styles.features_wrapper}>
                        <h4 className={styles.features_title}>Настольные ПК для современных игровых приложений</h4>
                        <ul class={styles.features__list}>
                            <li class={styles.features__li}>
                                <i class={styles.features__star}></i>
                                 <p class={styles.features__text}>Продажа компьютеров для игр Pubg, CS:GO, Minecraft, Fortnite, GTA5 от EDELWEISS</p>
                             </li>
                            <li class={styles.features__li}>
                                <i class={styles.features__star}></i>
                                <p class={styles.features__text}>Подбор геймерского компьютера под параметры современных ресурсоёмких игр</p>
                            </li>
                            <li class={styles.features__li}>
                                <i class={styles.features__star}></i>
                                <p class={styles.features__text}>Мощные графические видеокарты, реализация максимального FPS, философия настоящего гейминга</p>
                            </li>
                        </ul>
                    <div className={styles.features_img_box}>
                        <picture>
                            <img src="https://edelws.ru/upload/uf/638/638758ed7980d5cbe7cce2ba1797403b.png" alt="" className={styles.features_img}/>
                        </picture>
                    </div>
                    </div>
                </div>
            </div>

            <div className={styles.games}>
                <div className={styles.games_inner}>
                    <div className={styles.games_wrapper}>
                      
                            {game.map(game =>  <Link to={`/game/${game._id}`} key='l' className={styles.image}><img src={game.image} alt="" /></Link>  )}
                        <Link to="/ ">fjjfjfjjfjfjfjfj</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCForGame;