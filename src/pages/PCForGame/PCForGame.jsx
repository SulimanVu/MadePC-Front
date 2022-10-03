
import React, { useEffect }  from 'react';
import styles from "./PCForGame.module.scss"
import { Link } from 'react-router-dom';
import Text from "./Text"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGames } from '../../features/gameSlice';
const PCForGame = () => {

const dispatch = useDispatch()

const[button, setButton] = useState(false)

const handleClick = () => {
    setButton(!button)
}

useEffect(()=> {
    dispatch(fetchGames())
}, [dispatch])


const game = useSelector(state => state.game.games )

    return (

        <div className={styles.title_page}>
            <div className={styles.breadcrumps}>
                <div className={styles.breadcrumps_inner}>
                    <div className={styles.breadcrumps_wripper}>
                        <Link to="/" ><img src="https://cdn-icons-png.flaticon.com/512/747/747589.png" alt="Home_icon" className={styles.home_icon}/></Link>
                        <span className={styles.breadcrumps_text}> •  Компьютеры под игру, геймерские ПК оптимизированные под проекты AAA</span>
                    </div>
                </div>
            </div>

            <div className={styles.title_page_bg}>
                <picture className={styles.picture}>
                    <img src="https://edelws.ru/upload/uf/6fe/6fe156668e2a6d90702235455f62972d.png" alt=""  className={styles.title_page_bg_img}/>
                </picture>
            </div>

            <div className={styles.title_page_inner}>
                <div className={styles.title_page_wrapper}>
                    <h1 className={styles.title_page_h1}>Компьютеры под игру</h1>
                    <p class={styles.title_page_text}>Выберите любимую игру, а мы предложим вам вариант сборки оптимизированный под конкретный проект AAA. Понимая особенности геймплея, разрешение монитора, требования игры. Вы получите качественную станцию с оптимальными характеристиками, учитывая ваши финасовые возможности.</p>
                    <Text  button={button}/>
                    <button className={styles.button} onClick={handleClick}>{button ? "Свернуть" : "Узнать больше"}</button>
                </div>
            </div>

            <div className={styles.features}>
                <div className={styles.features_inner}>
                    <div className={styles.features_wrapper}>
                    <h4 class={styles.features_title}>Настольные ПК для современных игровых приложений</h4>
                    <ul className={styles.features_list}>
                        <li className={styles.features_li}>
                            <img src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png" alt="" className={styles.star}/>
                            <p class={styles.features__text}>Продажа компьютеров для игр Pubg, CS:GO, Minecraft, Fortnite, GTA5 от EDELWEISS</p>
                        </li>

                        <li className={styles.features_li}>
                            <img src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png" alt="" className={styles.star}/>
                            <p class={styles.features__text}>Подбор геймерского компьютера под параметры современных ресурсоёмких игр</p>
                        </li>

                        <li className={styles.features_li}>
                            <img src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png" alt="" className={styles.star}/>
                            <p class={styles.features__text}>Мощные графические видеокарты, реализация максимального FPS, философия настоящего гейминга</p>
                        </li>
                    </ul>
                    <div className={styles.features_img_box}>
                        
                            <img src="https://edelws.ru/upload/uf/638/638758ed7980d5cbe7cce2ba1797403b.png" alt="" className={styles.features_img}/>
                      
                    </div>
                    </div>
                </div>
            </div>

            <div className={styles.games}>
                <ul className={styles.game_list}>
                    {game.map((el,index) => {
                        return(
                            <li className={styles.game_item}><Link to={`/game/${el._id}`} className={styles.link}><img src={el.image} alt="q" className={index === 0 || 1 ? styles.img_game: styles.img_logog}/>
                            <p>{el.name}</p>
                            </Link></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PCForGame;