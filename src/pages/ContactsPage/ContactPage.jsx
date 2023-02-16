import React from "react";
import { Link } from "react-router-dom";
import styles from "./contactPage.module.scss";
import dom from "./images/domic2.png";

const ContactPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Link to="/" className={styles.decor}>
          <img className={styles.imageDom} src={dom} alt="img" />
        </Link>
        <p>
          <span>•</span> Контакты
        </p>
      </div>
      <div className={styles.title}>
        <h2>Контакты интернет-магазин COMP 95</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.content_info}>
          <div className={styles.content_title}>
            <h3>Контактная информация</h3>
          </div>
          <div className={styles.content_adress}>
            <h4>Время работы магазина:</h4>
            <p>
              г. Москва, улица Новопоселковая дом 6 корпус 217, 5-ый этаж, офис
              521.
            </p>
          </div>
          <div className={styles.grafic}>
            <h4>График работы</h4>
            <div className={styles.grafic_item}>
              <div>Понедельник</div>
              <div>11.00 - 20.00</div>
            </div>
            <div className={styles.grafic_item}>
              <div>Вторник</div>
              <div>11.00 - 20.00</div>
            </div>
            <div className={styles.grafic_item}>
              <div>Среда</div>
              <div>11.00 - 20.00</div>
            </div>
            <div className={styles.grafic_item}>
              <div>Четверг</div>
              <div>11.00 - 20.00</div>
            </div>
            <div className={styles.grafic_item}>
              <div>Пятница</div>
              <div>11.00 - 20.00</div>
            </div>
            <div className={styles.grafic_item}>
              <div>Суббота</div>
              <div>11.00 - 20.00</div>
            </div>
            <div className={styles.grafic_item}>
              <div>Воскресенье</div>
              <div>11.00 - 20.00</div>
            </div>
          </div>
          <div className={styles.nomer}>
            <h3>Контактый телефон</h3>
            <p>+7 929 000 27 07</p>
          </div>
          <div className={styles.nomer}>
            <h3>Электронная почта</h3>
            <p>sssuliman@bk.ru</p>
          </div>
        </div>
        <div className={styles.map}>
          <h3>Местоположение</h3>
          <div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A33a23dd0e8be79c9546357fcd01781b5a36ebeee8f1d5ec778c03101ba8f66d2&amp;source=constructor"
              width="600"
              height="400"
              frameborder="0"
            ></iframe>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
