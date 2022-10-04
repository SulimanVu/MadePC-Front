import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComp } from "../../features/compSlice";
import { fetchRequests } from "../../features/requestSlice";
import styles from "./admin.module.scss";
import st from "../../public/st.png";
import rub from "../../components/CardComp/images/rub.svg";
import cn from "classnames";
import { motion } from "framer-motion";

const Admin = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const requests = useSelector((state) => state.request.request);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  return (
    <div>
      <h1>Заявки на выполнение</h1>
      {requests.map((item, index) => {
        return (
          <div>
            <div className={styles.main} onClick={handleOpen}>
              <ul className={styles.user_info}>
                <li>ФИО пользователя: &nbsp;&nbsp;{item.name}</li>
                <li>Номер для связи: &nbsp;&nbsp;{item.number}</li>
                <li>E-mail: &nbsp;&nbsp;{item.email}</li>
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
                <ul className={styles.components}>
                  <li>ОЗУ: &nbsp;</li>
                  <li>Видеокарта: &nbsp;</li>
                  <li>SSD: &nbsp;</li>
                  <li>Процессор: &nbsp;</li>
                  <li>Корпус: &nbsp;</li>
                  <li>Куллер: &nbsp;</li>
                </ul>
              </motion.div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
