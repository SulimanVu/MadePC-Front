import React, { useState } from "react";
import styles from "./dropDown.module.scss";
import st from "../../public/st.png"
import cn from "classnames"

const DropDown = ({ arr }) => {
  const [open, setOpen] = useState(false);
  const [defaul, setDefault] = useState("Не выбрано");

  const handleOpen = (e) => {
    console.log(e.target.outerText);
    setOpen(!open);

  };
  const select = (e) => {
    setDefault(e.target.outerText);
  };
  return (
    <div className={styles.drop_down}>
      <div className={open ? styles.drop : cn(styles.drop, styles.drop_active)} onClick={(e) => handleOpen(e)}>
        {defaul}
        <img src={st} alt="#" />
      </div>
      {/* {open
        ? arr.map((item, index) => {
            <div key={index} tabIndex={'0'} onClick={() => select(e)}>
              {item.name}
            </div>;
          })
        : null} */}

      {!open ? (
        <>
          <div className="child" tabIndex={'0'} onClick={(e) => select(e)}>
            qwerty
          </div>
          <div className="child" tabIndex={'0'} onClick={(e) => select(e)}>
            yuire
          </div>
          <div className="child" tabIndex={'0'}  onClick={(e) => select(e)}>
            xcbvxc
          </div>
          <div className="child" tabIndex={'0'}  onClick={(e) => select(e)}>
            hbhjbhj
          </div>
          <div className="child" tabIndex={'0'}  onClick={(e) => select(e)}>
            hvhjv
          </div>
          <div className="child" tabIndex={'0'}  onClick={(e) => select(e)}>
            ououhoh
          </div>
          <div className="child" tabIndex={'0'}  onClick={(e) => select(e)}>
            yccufyug
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DropDown;
