import React from "react";
import styles from "./configuratorPage.module.scss";
import proc from "./images/proc.svg";
import fan from "./images/fan.svg";
import ram from "./images/ram.svg";
import rub from "./images/rub.svg";
import mask from "./images/configurator-mask.svg"
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
                <div className={styles.configurator_components_item_title}>{item.title}</div>
                <div className={styles.configurator_components_item_list}><DropDown/></div>
                <div className={styles.configurator_components_item_icon}>
                  <img src={item.image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.configurator_rigth}>
            <div className={styles.configurator_input}>
                <input type="text" placeholder="Поиск конфигурации по номеру" />
            </div>
            <div className={styles.configurator_comp}>
            <img src={mask} alt="" />
            
            <div className={styles.configurator_price}>
              <div><span>0</span></div>
              <div><img src={rub} alt="" /></div>
            </div>
            <div className={styles.configurator_btn}>
                <button>Купить</button>
            </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ConfiguratorPage;
