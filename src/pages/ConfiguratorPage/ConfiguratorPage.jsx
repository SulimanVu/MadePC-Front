import React from "react";
import styles from "./configuratorPage.module.scss";
import proc from "./images/proc.svg";
import fan from "./images/fan.svg";
import ram from "./images/ram.svg";
import rub from "./images/rub.svg";
import DropDown from "../../components/DropDown/DropDown";
const ConfiguratorPage = () => {
  const components = [
    {
      title: "Процессор",
      image: proc,
    },
    {
        title: "Охлаждение",
        image: fan,
      },
      {
        title: "Материнская плата",
        image: proc,
      },
      {
        title: "Оперативная память",
        image: ram,
      },
      {
        title: "Процессор",
        image: proc,
      },
      {
        title: "Видеокарта",
        image: proc,
      },
  
  ];

  return (
    <div>
      <div className={styles.configurator_block}>
        <div className={styles.configurator_left}>
          {components.map((item) => {
            return (
              <div className={styles.configurator_components_left}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.configurator_center}>
        {components.map((item) => {
            return (
              <div  className={styles.configurator_components_center}>
                <div>{item.title}</div>
                <div><DropDown/></div>
                <div>
                  <img src={item.image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ConfiguratorPage;
