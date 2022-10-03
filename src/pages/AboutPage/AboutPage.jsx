import React from "react";
import styles from "../AboutPage/AboutPage.module.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import cn from "classnames";

const AboutPage = () => {
  const Mainpath = useLocation();
  const path = Mainpath.pathname;

  return (
    <div>
      <div className={styles.Header}>
        <div className={styles.Title}>
          <h1>Философия гейминга от EDELWEISS</h1>
        </div>
      </div>
      <div className={styles.Nave}>
        <Link
          to="company"
          className={cn(
            styles.link,
            path === "/about/company" && styles.active
          )}
        >
          <div className={styles.nav1}>
            <h1>О компании</h1>
          </div>
        </Link>
        <Link
          to="faq"
          className={cn(
            styles.link,
            path === "/about/faq" && styles.active)}
        >
          <div className={styles.nav1}>
            <h1>FAQ</h1>
          </div>
        </Link>
        <Link
          to="comments"
          className={cn(
            styles.link,
            path === "/about/comments" && styles.active
          )}
        >
          <div className={styles.nav1}>
            <h1>Отзывы</h1>
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutPage;
