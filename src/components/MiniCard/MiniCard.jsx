import React from "react";
import styles from "./miniCard.module.scss";

const MiniCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img
            src="https://edelws.ru/upload/uf/ca6/ca627abf8bf32f4aee116a1924166f19.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h4>Компьютеры с СВО</h4>
          <p>
            Мощнейшие игровые станции с жидкостным охлаждением процессора и
            видеокарты.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <img
            src="https://edelws.ru/upload/uf/ca6/ca627abf8bf32f4aee116a1924166f19.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h4>Компьютеры с СВО</h4>
          <p>
            Мощнейшие игровые станции с жидкостным охлаждением процессора и
            видеокарты.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <img
            src="https://edelws.ru/upload/uf/ca6/ca627abf8bf32f4aee116a1924166f19.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h4>Компьютеры с СВО</h4>
          <p>
            Мощнейшие игровые станции с жидкостным охлаждением процессора и
            видеокарты.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
