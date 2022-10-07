import React, { useEffect, useState } from "react";
import styles from "./dropDown.module.scss";
import st from "../../public/st.png";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { updatemadePC, savePrice } from "../../features/madePCSlice";
import { fetchUsers } from "../../features/applicationSlice";

const DropDown = ({ arr, index }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [def, setDefault] = useState("Не выбрано");
  const local = localStorage.getItem("id");
  const user = useSelector((state) =>
    state.application.users.find((item) => item._id === local)
  );
  const handleOpen = (e) => {
    setOpen(!open);
  };
  const handleSelect = (e, comp) => {
    setDefault(e.target.outerText);
    setOpen(!open);
    dispatch(savePrice(comp.price));
    if (index === 0) {
      dispatch(updatemadePC({ math: comp._id }));
    } else if (index === 1) {
      dispatch(updatemadePC({ cooler: comp._id }));
    } else if (index === 2) {
      dispatch(updatemadePC({ corpus: comp._id }));
    } else if (index === 3) {
      dispatch(updatemadePC({ hdd: comp._id }));
    } else if (index === 4) {
      dispatch(updatemadePC({ powerunits: comp._id }));
    } else if (index === 5) {
      dispatch(updatemadePC({ processor: comp._id }));
    } else if (index === 6) {
      dispatch(updatemadePC({ ram: comp._id }));
    } else if (index === 7) {
      dispatch(updatemadePC({ ssd: comp._id }));
    } else if (index === 8) {
      dispatch(updatemadePC({ videocard: comp._id }));
    }
  };

  return (
    <div className={styles.drop_down}>
      <div
        className={open ? styles.drop : cn(styles.drop, styles.drop_active)}
        onClick={(e) => handleOpen(e)}
      >
        {def}
        <img src={st} alt="#" />
      </div>
      <div className={styles.parent}>
        {open
          ? arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.child}
                  tabIndex={"0"}
                  onClick={(e) => handleSelect(e, item)}
                >
                  {item.name}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default DropDown;
