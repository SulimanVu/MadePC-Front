import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGames } from '../../features/gameSlice';
import styles from "./GamePC.module.scss"
import { Link } from 'react-router-dom';


const GamePC = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

  

    useEffect(() => {
        dispatch(fetchGames())
    }, [dispatch])

    const gamePC = useSelector(state => state.game.games?.filter(item => item._id === id))
    console.log("kfkkkfdk", gamePC);
    
   
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
        </div>
    );
};

export default GamePC;