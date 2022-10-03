import React from "react";
import styles from "./comppage.module.scss";
import { Link } from "react-router-dom";
import dom from "./images/domic2.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchComp } from "../../features/compSlice";
import { useParams } from "react-router-dom";
import rub from "./images/rub.svg"

const CompPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComp());
  }, [dispatch]);

  const comp = useSelector((state) => state.comp.comp);
  return (
    <div className={styles.main}>
      <div className={styles.comppage_header}>
        <Link to="/" className={styles.decor}>
          <img className={styles.imageDom} src={dom} alt="img" />
        </Link>
        <p>
          <span>•</span> Компьютеры EDELWEISS <span>•</span>
        </p>
        <p id={styles.p}> Недорогие игровые компьютеры</p>
      </div>
      <div className={styles.comppage_content}>
        <div className={styles.content_item}>
        {comp.map((item) => {
          if (item._id === id) {
            return (
              <>
                <div className={styles.comppage_text}>
                    <div><h2>{item.name}</h2></div>
                    <div><span>EDELWEISS AXE -достойный бюджетный компьютер для игр. GTX 1650 с приставкой SUPER обеспечит высоким показателем FPS при запуске CS:GO, Dota 2, Fortnite, League of Legends и д.р. Хороший помощник школьника и студентам.</span></div>
                </div>
                <div>
                    <div><button>Купить</button></div>
                    <div>{item.price} <img src={rub} alt="" /></div>
                </div>
                <div className={styles.comppage_img}></div>
              </>
            );
          }
        })}
      </div>
    </div>
    </div>
  );
};

export default CompPage;
