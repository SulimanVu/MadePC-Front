import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Request from "../../components/RequestCard/Request";
import { fetchComp } from "../../features/compSlice";
import { fetchRequests } from "../../features/requestSlice";
import styles from "./admin.module.scss";

const Admin = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.request.request);

  useEffect(() => {
    dispatch(fetchRequests());
    dispatch(fetchComp());
  }, [dispatch]);

  return (
    <div>
      <h1>Заявки на выполнение</h1>
      {requests.map((item, index) => {
        return (
          <div className={styles.cards}>
            <Request item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
