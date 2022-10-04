import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComp } from "../../features/compSlice";
import { fetchRequests } from "../../features/requestSlice";
import styles from "./admin.module.scss";
import st from "../../public/st.png";
import rub from "../../components/CardComp/images/rub.svg";
import cn from "classnames";

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
              <div className={styles.user_info}>
                <div>ФИО пользователя: &nbsp;&nbsp;{item.name}</div>
                <div>Номер для связи: &nbsp;&nbsp;{item.number}</div>
                <div>E-mail: &nbsp;&nbsp;{item.email}</div>
              </div>
              <div className={styles.price}>
                {item.comp.price} <img src={rub} alt="" />
              </div>
                  <button> Принять заказ</button>
              <div
                className={
                  open ? styles.spred : cn(styles.spred, styles.spred_active)
                }
                onClick={(e) => handleOpen(e)}
              >
                <span>Расскрыть</span>
                <img src={st} alt="#" />
              </div>
            </div>
            <div className={styles.title}>
              {open ? <div>{item.comp.ram}</div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
