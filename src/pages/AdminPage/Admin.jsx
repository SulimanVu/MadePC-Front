import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Request from "../../components/RequestCard/Request";
import RequestMadeCard from "../../components/RequestMadeCard/RequestMadeCard";
import { fetchComp } from "../../features/compSlice";
import { fetchmadePC } from "../../features/madePCSlice";
import { fetchMadeRequests } from "../../features/requestMadeSlice";
import { fetchRequests } from "../../features/requestSlice";
import styles from "./admin.module.scss";

const Admin = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.request.request);
  const requestsMade = useSelector((state) => state.requestMade.madeRequest);

  useEffect(() => {
    dispatch(fetchRequests());
    dispatch(fetchMadeRequests())
    dispatch(fetchComp());
    dispatch(fetchmadePC())
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <h1>Заявки на выполнение</h1>
      <h2>Компьютеры со Склада</h2>
      {requests?.map((item, index) => {
        return (
          <div className={styles.cards} key={index}>
            <Request item={item} index={index} />
          </div>
        );
      })}
      <h2>Компьютеры к Сборке</h2>
      {requestsMade?.map((item, index) => {
        return (
          <div className={styles.cards} key={index}>
            <RequestMadeCard item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
