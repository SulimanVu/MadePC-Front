import React, { useState } from "react";
import styles from "./dropDown.module.scss";
import st from "../../public/st.png";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { saveBoard } from "../../features/madePCSlice";

const DropDown = ({ arr }) => {
  // const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [def, setDefault] = useState("Не выбрано");

  const handleOpen = (e) => {
    setOpen(!open);
  };
  const handleSelect = (e, comp) => {
    setDefault(e.target.outerText);
    // dispatch(saveBoard(comp));
    setOpen(!open);
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
