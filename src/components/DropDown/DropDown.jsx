import React, { useState } from "react";
import styles from "./dropDown.module.scss";
import st from "../../public/st.png";
import cn from "classnames";

const DropDown = ({ arr }) => {
  const [open, setOpen] = useState(true);
  const [defaul, setDefault] = useState("Не выбрано");

  const handleOpen = (e) => {
    console.log(e.target.outerText);
    setOpen(!open);
  };
  const handleSelect = (e) => {
    setDefault(e.target.outerText);
  };

  return (
    <div className={styles.drop_down}>
      <div
        className={open ? styles.drop : cn(styles.drop, styles.drop_active)}
        onClick={(e) => handleOpen(e)}
      >
        {defaul}
        <img src={st} alt="#" />
      </div>
      {/* <div className={styles.parent}>
        {open
          ? arr.map((item, index) => {
              <div
                key={index}
                className={styles.child}
                tabIndex={"0"}
                onClick={(e) => handleSelect(e)}
              >
                {item.name}
              </div>;
            })
          : null}
      </div> */}

      <div className={styles.parent}>
        {!open ? (
          <>
            <div
              className={styles.child}
              tabIndex={"0"}
              onClick={(e) => handleSelect(e)}
            >
              qwerty
            </div>
            <div
              className={styles.child}
              tabIndex={"0"}
              onClick={(e) => handleSelect(e)}
            >
              yuire
            </div>
            <div
              className={styles.child}
              tabIndex={"0"}
              onClick={(e) => handleSelect(e)}
            >
              xcbvxc
            </div>
            <div
              className={styles.child}
              tabIndex={"0"}
              onClick={(e) => handleSelect(e)}
            >
              hbhjbhj
            </div>
            <div
              className={styles.child}
              tabIndex={"0"}
              onClick={(e) => handleSelect(e)}
            >
              hvhjv
            </div>
            <div
              className={styles.child}
              tabIndex={"0"}
              onClick={(e) => handleSelect(e)}
            >
              ououhoh
            </div>
            <div
              className={styles.child}
              tabIndex={"0"}
              onClick={(e) => handleSelect(e)}
            >
              yccufyug
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default DropDown;
