import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMadeBasket } from "../../features/applicationSlice";
import { updateOne } from "../../features/madePCSlice";
import { addMadeRequest } from "../../features/requestMadeSlice";
import { ToastContainer, toast } from "react-toastify";
import styles from "./modalBuy.module.scss";

const ModalMade = ({ setModal }) => {
  const dispatch = useDispatch();
  const notify = () =>
    toast("Вы не зарегистрировангы и не можете оставиь заявку", {
      type: "error",
    });

  const success = () =>
    toast("Сборка добавлена в корзину", {
      type: "success",
    });
  const token = useSelector((state) => state.application.token);
  const summa = useSelector((state) => state.madePC.savePrice);
  const id1 = useSelector((state) => state.application.id);
  const allPC = useSelector((state) => state.madePC.comp);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleBuy = (e) => {
    dispatch(updateOne({ id: allPC }));
    if (token) {
      dispatch(addMadeRequest({ basket: allPC, name, number, email }));
      dispatch(addToMadeBasket({ computersMadeId: allPC, id1: id1 }));
      success();
    } else {
      notify();
    }
  };

  return (
    <div className={styles.buyContActive}>
      <div className={styles.modalIn}>
        <div className={styles.result}>
          <div className={styles.x}>
            <h3 className={styles.h3}>Результат</h3>
            <button
              className={styles.closeButton}
              onClick={() => setModal(false)}
            >
              ╳
            </button>
          </div>
          <div className={styles.block_input}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              value={number}
              placeholder="number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.basket} onClick={(e) => handleBuy(e)}>
            В КОРЗИНУ
          </button>
          <button className={styles.close} onClick={() => setModal(false)}>
            ЗАКРЫТЬ ОКНО
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalMade;
