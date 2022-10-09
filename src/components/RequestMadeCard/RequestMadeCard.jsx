import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../RequestCard/request.module.scss";
import st from "../../public/st.png";
import rub from "../CardComp/images/rub.svg";
import cn from "classnames";
import { motion } from "framer-motion";
import { deleteMadeRequest } from "../../features/requestMadeSlice";
import { fetchmadePC } from "../../features/madePCSlice";

const Request = ({ item, index }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const madePC = useSelector((state) => state.madePC.madePC);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleDelete = () => {
    dispatch(deleteMadeRequest(item._id));
  };
  // useEffect(() => {
  //   dispatch(fetchmadePC());
  // });
  return (
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
          {item.comp[0].price} <img src={rub} alt="" />
        </div>
        <button onClick={() => handleDelete()}>Принять заказ</button>
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
          {madePC.map((comp, ind) => {
            console.log(comp);
            console.log(item.comp);
            if (comp._id === item.comp[0]._id) {
              return (
                <ul className={styles.components} key={ind}>
                  <li>
                    Материнская плата: &nbsp;
                    <span>
                      {comp.math?.name}&nbsp;&nbsp;&nbsp;
                      <span className={styles.comp_price}>
                        {comp.math?.price}
                      </span>
                      {comp.math === undefined ? (
                        "Комплектующее не было добавлено"
                      ) : (
                        <sub>р</sub>
                      )}
                    </span>
                  </li>
                  <li>
                    ОЗУ: &nbsp;
                    <span>
                      {comp.ram?.title}&nbsp;&nbsp;&nbsp;
                      <span className={styles.comp_price}>
                        {comp.ram?.price}
                      </span>
                      {comp.ram === undefined ? (
                        "Комплектующее не было добавлено"
                      ) : (
                        <sub>р</sub>
                      )}
                    </span>
                  </li>
                  <li>
                    Видеокарта: &nbsp;
                    <span>
                      {comp.videocard?.name}&nbsp;&nbsp;&nbsp;
                      <span className={styles.comp_price}>
                        {comp.videocard?.price}
                      </span>
                      {comp.videocard === undefined ? (
                        "Комплектующее не было добавлено"
                      ) : (
                        <sub>р</sub>
                      )}
                    </span>
                  </li>
                  <li>
                    SSD: &nbsp;
                    <span>
                      {comp.ssd?.name}&nbsp;&nbsp;&nbsp;
                      <span className={styles.comp_price}>
                        {comp.ssd?.price}
                      </span>
                      {comp.ssd === undefined ? (
                        "Комплектующее не было добавлено"
                      ) : (
                        <sub>р</sub>
                      )}
                    </span>
                  </li>
                  <li>
                    Процессор: &nbsp;
                    <span>
                      {comp.processor?.name}&nbsp;&nbsp;&nbsp;
                      <span className={styles.comp_price}>
                        {comp.processor?.price}
                      </span>
                      {comp.processor === undefined ? (
                        "Комплектующее не было добавлено"
                      ) : (
                        <sub>р</sub>
                      )}
                    </span>
                  </li>
                  <li>
                    Корпус: &nbsp;
                    <span>
                      {comp.corpus?.name}&nbsp;&nbsp;&nbsp;
                      <span className={styles.comp_price}>
                        {comp.corpus?.price}
                      </span>
                      {comp.corpus === undefined ? (
                        "Комплектующее не было добавлено"
                      ) : (
                        <sub>р</sub>
                      )}
                    </span>
                  </li>
                  <li>
                    Куллер: &nbsp;
                    <span>
                      {comp.cooler?.name}&nbsp;&nbsp;&nbsp;
                      <span className={styles.comp_price}>
                        {comp.cooler?.price}
                      </span>
                      {comp.cooler === undefined ? (
                        "Комплектующее не было добавлено"
                      ) : (
                        <sub>р</sub>
                      )}
                    </span>
                  </li>
                </ul>
              );
            }
          })}
        </motion.div>
      ) : null}
    </div>
  );
};

export default Request;
