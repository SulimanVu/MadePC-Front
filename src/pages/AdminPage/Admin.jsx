import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComp from "../../components/CardComp/CardComp";
import { fetchmadePC } from "../../features/madePCSlice";
import Progress from "../../components/Progress/Progress";
import styles from "./admin.module.scss";
import rub from "../../components/CardComp/images/rub.svg";
import videocard from "../../components/CardComp/images/videocard.svg";
import ram from "../../components/CardComp/images/ram.svg";
import proc from "../../components/CardComp/images/proc.svg";
import ssd from "../../components/CardComp/images/ssd.svg";
import corpus from "../../components/CardComp/images/corpus.svg";
import fan from "../../components/CardComp/images/fan.svg";

const Admin = () => {
  const dispatch = useDispatch();
  const comp = useSelector((state) => state.madePC.madePC);
  useEffect(() => {
    dispatch(fetchmadePC());
  }, [dispatch]);

  return (
    <div>
      <h1>Заявки на выполнение</h1>
      {comp.map((item, index) => {
        return (
          <div>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
