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
            src="https://edelws.ru/upload/uf/257/257e43b2c042ca36183177b337abd81d.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h4>ПК Powered by</h4>
          <p>
          Мощнейшие и надежные игровые ПК собранные на отборных комплектующих ASUS Republic of Gamers
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <img
            src="https://edelws.ru/upload/uf/ede/eded7f53be51145d4d8e1a41c2115a00.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h4>Графические станции</h4>
          <p>
          Компьютеры для графики и тяжелых инженерных расчетов, 3D программ
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
