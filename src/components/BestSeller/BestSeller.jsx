import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComp } from "../../features/compSlice";
import CardComp from "../CardComp/CardComp";
import ModalBuy from "../ModalBuy/ModalBuy";
import styles from "./bestseller.module.scss";

const BestSeller = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const cards = useSelector((state) =>
    state.comp.comp.filter((item, index) => {
      return index < 4;
    })
  );
  useEffect(() => {
    dispatch(fetchComp());
  }, [dispatch]);
  return (
    <div>
      {modal ? <ModalBuy setModal={setModal} /> : null}
      <h2 className={styles.text}>
        Хит продаж <button>смотреть все</button>
      </h2>
      <div className={styles.cards}>
        {cards.map((item) => {
          return <CardComp computers={item} setModal={setModal} />;
        })}
      </div>
    </div>
  );
};

export default BestSeller;
