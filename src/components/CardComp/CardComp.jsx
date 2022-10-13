import React from "react";
import Progress from "../Progress/Progress";
import { Link } from "react-router-dom";
import styles from "../CardComp/cardcomp.module.scss";
import rub from "./images/rub.svg";
import videocard from "./images/videocard.svg";
import ram from "./images/ram.svg";
import proc from "./images/proc.svg";
import ssd from "./images/ssd.svg";
import corpus from "./images/corpus.svg";
import fan from "./images/fan.svg";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../features/applicationSlice";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverUrl } from '../../serverUrl.js';
const CardComp = ({ computers, setModal, index }) => {
  const dispatch = useDispatch();
  const id1 = useSelector((state) => state.application.id);
  const token = useSelector((state) => state.application.token);

  const notify = () =>
    toast("Вы не авторизованы!", {
      type: "error",
    });

  const handleAdd = (computersId) => {
    if (!token) {
      setModal(false);
      notify();
    } else {
      dispatch(addToBasket({ computersId, id1 }));
      setModal(true);
    }
  };

  return (
    <>
      <div className={styles.mainOfMain} key={index}>
        <div>
          <div className={styles.imageMain}>
            <img
              className={styles.imageCart}
              src={`${serverUrl}/images/${computers.image}`}
              alt="image"
            />
          </div>
          <div className={styles.cardMain}>
            <div className={styles.mainName}>
              <p className={styles.aboutName}>{computers.name}</p>
              <p className={styles.aboutName}>
                {computers.price}{" "}
                <img alt="#" className={styles.rub} src={rub} />
              </p>
            </div>
            <div className={styles.Circular}>
              <Progress value={90} />
            </div>
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.buy}
              onClick={() => handleAdd(computers._id)}
            >
              Купить
            </button>
            <Link to={`${computers._id}`}>
              <button className={styles.about}>Подробнее</button>
            </Link>
          </div>
          <div className={styles.desc}>
            <p>
              {" "}
              EDELWEISS CYBORG - бюджетный компьютер для игр. На нем с легкостью
              и достаточно высоким показателем FPS можно запускать такие игры
              как: CS:GO, Dota 2, Fortnite, League of Legends и д.р. Прекрасный
              вариант для начинающих геймеров.
            </p>
          </div>
          <div className={styles.component}>
            <img alt="#" className={styles.imageCard1} src={videocard} />
            <div className={styles.name}>
              <h6 className={styles.aboutName1}>Видео-карта</h6>
              <p className={styles.aboutName1}>{computers.videocard.name}</p>
            </div>
          </div>
          <div className={styles.component}>
            <img alt="#" className={styles.imageCard1} src={proc} />
            <div className={styles.name}>
              <h6 className={styles.aboutName1}>Процессор</h6>
              <p className={styles.aboutName1}>{computers.processor.name}</p>
            </div>
          </div>
          <div className={styles.component}>
            <img alt="#" className={styles.imageCard1} src={ram} />
            <div className={styles.name}>
              <h6 className={styles.aboutName1}>Оперативка</h6>
              <p className={styles.aboutName1}>{computers.ram.title}</p>
            </div>
          </div>
          <div className={styles.component}>
            <img alt="#" className={styles.imageCard1} src={corpus} />
            <div className={styles.name}>
              <h6 className={styles.aboutName1}>Корпус</h6>
              <p className={styles.aboutName1}>{computers.corpus.name}</p>
            </div>
          </div>
          <div className={styles.component}>
            <img alt="#" className={styles.imageCard1} src={ssd} />
            <div className={styles.name}>
              <h6 className={styles.aboutName1}>SSD</h6>
              <p className={styles.aboutName1}>{computers.ssd.name}</p>
            </div>
          </div>
          <div className={styles.component}>
            <img alt="#" className={styles.imageCard1} src={fan} />
            <div className={styles.name}>
              <h6 className={styles.aboutName1}>Охлаждение</h6>
              <p className={styles.aboutName1}>{computers.cooler.name}</p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

CardComp.propTypes = {
  computers: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    videocard: PropTypes.object.isRequired,
    processor: PropTypes.object.isRequired,
    ram: PropTypes.object.isRequired,
    corpus: PropTypes.object.isRequired,
    ssd: PropTypes.object.isRequired,
    cooler: PropTypes.object.isRequired,
  }).isRequired,
  setModal: PropTypes.func.isRequired,
};

export default CardComp;
