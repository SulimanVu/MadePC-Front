import React from "react";
import styles from "./header.module.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import cn from "classnames";
import { useSelector } from "react-redux";

const Header = () => {
  const pathName = useLocation();
  const path = pathName.pathname;
  const token = useSelector((state) => state.application.token);

  const handleExit = () => {
    window.location.reload()
    localStorage.clear()
  }

  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.nav_block}>
          <Link to="/">
            <img
              src="https://edelws.ru/local/templates/main/img/logo.svg"
              alt="logo"
            />
          </Link>
          <img
            src="https://edelws.ru/local/templates/main/img/icon/phone.svg"
            alt="img-phone"
            className={styles.phone_img}
          />
          <p className={styles.number}>8 (800) 234 99 19</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/535/535188.png"
            alt="location"
            className={styles.img_location}
          />
          <p className={styles.placeMap}>Грозный</p>
        </div>
        <div className={styles.information_block}>
          <ul className={styles.list}>
            <li className={styles.item}>Статьи</li>
            <li className={styles.item}>О нас ⁞
              <ul className={styles.nested_list}>
                <li className={styles.nested_item}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link to="/about/faq" className={styles.nested_link}>
                    FAQ
                  </Link>
                </li>
                <li className={styles.nested_item}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link to="/about/company" className={styles.nested_link}>
                    О Компании
                  </Link>
                </li>
                <li className={styles.nested_item}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link to="/about/comments" className={styles.nested_link}>
                    Отзывы
                  </Link>
                </li>
              </ul>
            </li>

            <li className={styles.item}>Клиентам ⁞
              <ul className={styles.nested_list2}>
                <li className={styles.nested_item2}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link to="in.com" className={styles.nested_link}>
                    тех. поддержка
                  </Link>
                </li>
                <li className={styles.nested_item2}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link to="in.com" className={styles.nested_link}>
                    доставка и оплата
                  </Link>
                </li>
                <li className={styles.nested_item2}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link to="in.com" className={styles.nested_link}>
                    гарантия
                  </Link>
                </li>
              </ul>
            </li>

            <li className={styles.item}>Контакты</li>
            {token
              ?
              <li className={styles.item} onClick={handleExit}><Link className={styles.signIn}>Выход</Link></li>
              :
              <li className={styles.item}><Link to="/signin" className={styles.signIn}>Регистрация/Авторизация</Link></li>}
            <li className={styles.item}><Link to="/admin" className={styles.signIn}>Админ</Link></li>
          </ul>


        </div>

      </div>
      <div>
        <Nav />
      </div>
      <Outlet />
    </div>

  );
};

export default Header;
