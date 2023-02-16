import React from "react";
import styles from "./header.module.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import cn from "classnames";
import { useSelector } from "react-redux";
import img from "../../public/logo2.png"

const Header = () => {
  const pathName = useLocation();
  const path = pathName.pathname;
  const token = useSelector((state) => state.application.token);
  const id = useSelector((state) => state.application.id);

  const handleExit = () => {
    window.location.reload();
    localStorage.clear();
  };

  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.nav_block}>
          <Link to="/">
            <img
              className={styles.logo}
              src={img}
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
            <li className={styles.item}>
              О нас ⁞
              <ul className={styles.nested_list}>
                <li className={styles.nested_item}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link
                    to="/about/faq"
                    className={cn(
                      styles.nested_link,
                      path === "/about/faq" && styles.link_active
                    )}
                  >
                    FAQ
                  </Link>
                </li>
                <li className={styles.nested_item}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link
                    to="/about/company"
                    className={cn(
                      styles.nested_link,
                      path === "/about/company" && styles.link_active
                    )}
                  >
                    О Компании
                  </Link>
                </li>
                <li className={styles.nested_item}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link
                    to="/about/comments"
                    className={cn(
                      styles.nested_link,
                      path === "/about/comments" && styles.link_active
                    )}
                  >
                    Отзывы
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              Клиентам ⁞
              <ul className={styles.nested_list2}>
                <li className={styles.nested_item2}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link
                    to="in.com"
                    className={cn(styles.nested_link, path === "/about/faq")}
                  >
                    тех. поддержка
                  </Link>
                </li>
                <li className={styles.nested_item2}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link
                    to="in.com"
                    className={cn(styles.nested_link, path === "/about/faq")}
                  >
                    доставка и оплата
                  </Link>
                </li>
                <li className={styles.nested_item2}>
                  <img
                    src="https://www.svgrepo.com/show/410423/right.svg"
                    alt="img"
                    className={styles.img}
                  />
                  <Link
                    to="in.com"
                    className={cn(styles.nested_link, path === "/about/faq")}
                  >
                    гарантия
                  </Link>
                </li>
              </ul>
            </li>

            <li className={styles.item}>
              {" "}
              <Link to="/contacts">Контакты</Link>
            </li>
            {token ? (
              <>
                <li className={styles.item} onClick={handleExit}>
                  <Link className={styles.signIn}>Выход</Link>
                </li>
                {id === "6343d9d80c67a948fc99cecf" && (
                  <li className={styles.item}>
                    <Link to="/admin" className={styles.signIn}>
                      Админ
                    </Link>
                  </li>
                )}
              </>
            ) : (
              <li className={styles.item}>
                <Link to="/signin" className={styles.signIn}>
                  Регистрация/Авторизация
                </Link>
              </li>
            )}
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
