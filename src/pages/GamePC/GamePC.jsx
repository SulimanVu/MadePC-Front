import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGames } from '../../features/gameSlice';
import styles from "./GamePC.module.scss"
import { Link } from 'react-router-dom';
import CardComp from '../../components/CardComp/CardComp';


const GamePC = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

  

    useEffect(() => {
        dispatch(fetchGames())
    }, [dispatch])

    const gamePC = useSelector(state => state.game.games?.filter(item => item._id === id))
    const comp = gamePC.map(el => el.comp)
    const price = comp.flatMap(item => item.map(item=>item.price))
    const w = Math.min(...price)
    console.log("kfkkkfdk", w);
    
   
    return (
        <div className={styles.detalic}>
            <div className={styles.breadcrumps}>
                <div className={styles.breadcrumps_inner}>
                    <div className={styles.breadcrumps_wrapper}>
                    <img src="https://cdn-icons-png.flaticon.com/512/747/747589.png" alt="Home_icon" className={styles.home_icon}/>
                    <Link to="/game" className={styles.breadcrumps_link}>   •   Компьютеры под игру, геймерские ПК оптимизированные под проекты AAA</Link>
                    <p className={styles.breadcrumps_text}> •   Компьютеры для  {gamePC.map(el => el.name)}</p>
                    </div>
                    
                </div>
            </div>

            <div className={styles.title_page}>
               <picture>
               <img src={gamePC.map(el=> el.imageBackground)} alt="" className={styles.title_page_img}/>
               </picture>
            </div>
            <div className={styles.ditalic_inner}>
                <div className={styles.ditalic_title}>
                    <div className={styles.ditalic_start}>
                        <h1 className={styles.ditalic_h1}>Компьютеры для <br />  {gamePC.map(el => el.name)}</h1>
                        <p className={styles.detalic_text}>Игра требовательна к характеристикам ПК Проект является кроссплатформенным, а это значит, что выйдет она как на игровых консолях, так и на ПК. Но для того что бы насладится максимально высоким показателем FPS и самой красивой картинкой, железо должно быть соответствующее.</p>
                    </div>

                    <div className={styles.ditalic_slider}>
                    <img src={gamePC.map(el=> el.gamePCImg)} alt="" className={styles.detalic_slider_img}/>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default GamePC;