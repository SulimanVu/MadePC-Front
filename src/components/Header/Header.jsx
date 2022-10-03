import React from "react";
import styles from "./header.module.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import cn from "classnames";

const Header = () => {
  const pathName = useLocation();
  const path = pathName.pathname;

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
          <li className={styles.item}>О нас ⁞</li>
          <ul className={styles.nested_list}>
            <li className={styles.nested_item}>
              <img
                src="https://www.svgrepo.com/show/410423/right.svg"
                alt="img"
                className={styles.img}
              />
              <Link to="/about/faq" className={path ==="/about/faq" ? cn(styles.nested_link, styles.active): styles.nested_link}>
                FAQ
              </Link>
            </li>
            <li className={styles.nested_item}>
              <img
                src="https://www.svgrepo.com/show/410423/right.svg"
                alt="img"
                className={styles.img}
              />
              <Link to="/about/company" className={path ==="/about/company" ? cn(styles.nested_link, styles.active): styles.nested_link}>
                О Компании
              </Link>
            </li>
            <li className={styles.nested_item}>
              <img
                src="https://www.svgrepo.com/show/410423/right.svg"
                alt="img"
                className={styles.img}
              />
              <Link to="/about/comments" className={path ==="/about/comments" ? cn(styles.nested_link, styles.active): styles.nested_link}>
                Отзывы
              </Link>
            </li>
          </ul>
          <li className={styles.item}>Клиентам ⁞</li>
          <ul className={styles.nested_list2}>
            <li className={styles.nested_item2}>
              <img
                src="https://www.svgrepo.com/show/410423/right.svg"
                alt="img"
                className={styles.img}
              />
              <Link to="in.com" className={styles.nested_link2}>
                тех. поддержка
              </Link>
            </li>
            <li className={styles.nested_item2}>
              <img
                src="https://www.svgrepo.com/show/410423/right.svg"
                alt="img"
                className={styles.img}
              />
              <Link to="in.com" className={styles.nested_link2}>
                доставка и оплата
              </Link>
            </li>
            <li className={styles.nested_item2}>
              <img
                src="https://www.svgrepo.com/show/410423/right.svg"
                alt="img"
                className={styles.img}
              />
              <Link to="in.com" className={styles.nested_link2}>
                гарантия
              </Link>
            </li>
          </ul>
          <li className={styles.item}>Контакты</li>
        </ul>
      </div>
      
    </div>
    <div>
        <Nav/>
      </div>
      <Outlet/>
    </div>
    
  );
};

export default Header;
