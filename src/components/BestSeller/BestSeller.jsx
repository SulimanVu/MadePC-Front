import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComp } from "../../features/compSlice";
import CardComp from "../CardComp/CardComp";
import ModalBuy from "../ModalBuy/ModalBuy";
import styles from "./bestseller.module.scss";
import { Link } from "react-router-dom";

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
        Хит продаж{" "}
        <Link to="/lowprice">
          <button>смотреть все</button>
        </Link>
      </h2>
      <br />
      <div className={styles.cards}>
        {cards.map((item, index) => {
          return (
            <CardComp computers={item} setModal={setModal} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
