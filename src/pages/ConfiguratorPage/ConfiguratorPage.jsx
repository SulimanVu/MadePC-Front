import React, { useEffect } from "react";
import styles from "./configuratorPage.module.scss";
import proc from "./images/proc.svg";
import fan from "./images/fan.svg";
import ram from "./images/ram.svg";
import rub from "./images/rub.svg";
import mask from "./images/configurator-mask.svg";
import ArrayDrop from "../../components/ArrayDrop/ArrayDrop";
import { useDispatch, useSelector } from "react-redux";
import { addMadeRequest } from "../../features/requestMadeSlice";
import { addToMadeBasket } from "../../features/applicationSlice";
import { fetchmadePC } from "../../features/madePCSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const ConfiguratorPage = () => {
  const corpusImg = useSelector((state)=> state.madePC.corpusImg)
  const proc1 = useSelector((state)=> state.madePC.proc)
  const cooler = useSelector((state)=> state.madePC.cooler)
  const ram1 = useSelector((state)=> state.madePC.ram)
  const power = useSelector((state)=> state.madePC.power)
  const ssd = useSelector((state)=> state.madePC.ssd)
  const hdd = useSelector((state)=> state.madePC.hdd)
  const videocard = useSelector((state)=> state.madePC.videocard)
  const mainBoard = useSelector((state)=> state.madePC.mainBoard)
  const components = [
    {
      title: `${proc1}`,
      image: proc,
    },
    {
      title: `${cooler}`,
      image: fan,
    },
    {
      title: `${mainBoard}`,
      image: proc,
    },
    {
      title: `${ram1}`,
      image: ram,
    },
    {
      title: `${power}`,
      image: ram,
    },
    {
      title: `${ssd}`,
      image: ram,
    },
    {
      title: `${hdd}`,
      image: ram,
    },
    {
      title: `${videocard}`,
      image: ram,
    },
  ];
  const notify = () =>
    toast("Вы не зарегистрировангы и не можете оставиь заявку", {
      type: "error",
    });

  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);
  const summa = useSelector((state) => state.madePC.savePrice);
  const id1 = useSelector((state) => state.application.id);
  const allPC = useSelector((state) => state.madePC.comp);
  
  const handleBuy = (e) => {
    if (token) {
      dispatch(addMadeRequest({ basket: allPC }));
      dispatch(addToMadeBasket({ computersMadeId: allPC, id1: id1 }));
    } else {
      notify();
    }
  };

  useEffect(() => {
    dispatch(fetchmadePC());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.configurator_block}>
        <div className={styles.configurator_left}>
          {components?.map((item, index) => {
            return (
              <div key={index} className={styles.configurator_components_left}>
                <div>
                  <img src={item.image} alt="#" />
                </div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.configurator_center}>
          <ArrayDrop />
        </div>
        <div className={styles.configurator_rigth}>
          <div className={styles.configurator_input}>
            <input type="text" placeholder="Поиск конфигурации по номеру" />
          </div>
          <div className={styles.configurator_comp}>
            <img src={ corpusImg ? `http://localhost:3010/images/${corpusImg}` : mask} alt="#" />

            <div className={styles.configurator_price}>
              <div>
                <span>{summa}</span>
              </div>
              <div>
                <img src={rub } alt="#" />
              </div>
            </div>
            <div className={styles.configurator_btn}>
              <button onClick={(e) => handleBuy(e)}>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ConfiguratorPage;
