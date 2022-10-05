import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./request.module.scss";
import st from "../../public/st.png";
import rub from "../CardComp/images/rub.svg";
import cn from "classnames";
import { motion } from "framer-motion";

const Request = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  const ArrComp = useSelector((state) => state.comp.comp);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div key={index}>
        <div className={styles.main}>
          <ul className={styles.user_info}>
            <li>
              ФИО пользователя: &nbsp;&nbsp;
              <span className={styles.s}>{item.name}</span>
            </li>
            <li>
              Номер для связи: &nbsp;&nbsp;<span>{item.number}</span>
            </li>
            <li>
              E-mail: &nbsp;&nbsp;<span>{item.email}</span>
            </li>
          </ul>
          <div className={styles.price}>
            {item.comp.price} <img src={rub} alt="" />
          </div>
          <button>Принять заказ</button>
          <div
            className={
              !open ? styles.spred : cn(styles.spred, styles.spred_active)
            }
            onClick={(e) => handleOpen(e)}
          >
            <span>{open ? "Закрыть" : "Расскрыть"}</span>
            <img src={st} alt="#" />
          </div>
        </div>
        {open ? (
          <motion.div
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.comp}
          >
            {ArrComp.map((comp, index) => {
              if (comp._id === item.comp._id) {
                return (
                  <ul className={styles.components} key={index}>
                    <li>
                      ОЗУ: &nbsp;
                      <span>
                        {comp.ram.title}&nbsp;&nbsp;&nbsp;
                        <span className={styles.comp_price}>
                          {comp.ram.price}
                        </span>
                        <sub>р</sub>
                      </span>
                    </li>
                    <li>
                      Видеокарта: &nbsp;
                      <span>
                        {comp.videocard.name}&nbsp;&nbsp;&nbsp;
                        <span className={styles.comp_price}>
                          {comp.videocard.price}
                        </span>
                        <sub>р</sub>
                      </span>
                    </li>
                    <li>
                      SSD: &nbsp;
                      <span>
                        {comp.ssd.name}&nbsp;&nbsp;&nbsp;
                        <span className={styles.comp_price}>
                          {comp.ssd.price}
                        </span>
                        <sub>р</sub>
                      </span>
                    </li>
                    <li>
                      Процессор: &nbsp;
                      <span>
                        {comp.processor.name}&nbsp;&nbsp;&nbsp;
                        <span className={styles.comp_price}>
                          {comp.processor.price}
                        </span>
                        <sub>р</sub>
                      </span>
                    </li>
                    <li>
                      Корпус: &nbsp;
                      <span>
                        {comp.corpus.name}&nbsp;&nbsp;&nbsp;
                        <span className={styles.comp_price}>
                          {comp.corpus.price}
                        </span>
                        <sub>р</sub>
                      </span>
                    </li>
                    <li>
                      Куллер: &nbsp;
                      <span>
                        {comp.cooler.name}&nbsp;&nbsp;&nbsp;
                        <span className={styles.comp_price}>
                          {comp.cooler.price}
                        </span>
                        <sub>р</sub>
                      </span>
                    </li>
                  </ul>
                );
              }
            })}
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default Request;
