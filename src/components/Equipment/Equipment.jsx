import React from "react";
import styles from "./equipment.module.scss";
import { useState } from "react";
import proc from "./images/proc.svg";
import fan from "./images/fan.svg";
import ram from "./images/ram.svg";
import videocard from "./images/videocard.svg"
import ssd from "./images/ssd.svg"
import corpus from "./images/corpus.svg"
import VideoCardCard from "../VideoCardCard/VideoCardCard";
import Proc from "../VideoCardCard/Proc"
import Ssd from "../VideoCardCard/Ssd"
import Cooler from "../VideoCardCard/Cooler"
import Ram from "../VideoCardCard/Ram"

import Corpus from "../VideoCardCard/Corpus"


const Equipment = ({item}) => {
  const [choise,setChoise] = useState("")
  
  return (
    <div className={styles.equipment_block}>
      <div className={styles.title}>
        <h2>Комплектация</h2>
      </div>
      <div className={styles.content_body}>
      <div className={styles.content}>
        <div>
          <div className={styles.content_item}>

            <div className={styles.content_item_title}>
              <div>Видеокарта</div>
              <div>
                <img src={videocard} alt="" />
              </div>
            </div>
            <div className={styles.content_item_inner}>
                <div onClick={()=> setChoise(<VideoCardCard item={item.videocard}/>) }>{item.videocard.name}</div>
                <div><box-icon name='error-alt' type='solid' color='#756d6d' ></box-icon></div>

            </div>
          </div>
          <div className={styles.content_item}>
            <div className={styles.content_item_title}>
              <div>SSD</div>
              <div>
                <img src={ssd} alt="" />
              </div>
            </div>
            <div className={styles.content_item_inner}>
                <div onClick={()=> setChoise(<Ssd item={item.ssd}/>) }  >{item.ssd.name}</div>
                <div><box-icon name='error-alt' type='solid' color='#756d6d' ></box-icon></div>

            </div>
          </div>
          <div className={styles.content_item}>
            <div className={styles.content_item_title}>
              <div>Процессор</div>
              <div>
                <img src={ssd} alt="" />
              </div>
            </div>
            <div className={styles.content_item_inner}>
                <div onClick={()=> setChoise(<Proc item={item.processor}/>) }  >{item.processor.name}</div>
                <div><box-icon name='error-alt' type='solid' color='#756d6d' ></box-icon></div>

            </div>
          </div>
          <div className={styles.content_item}>
            <div className={styles.content_item_title}>
              <div>Охлаждение</div>
              <div>
                <img src={fan} alt="" />
              </div>
            </div>
            <div className={styles.content_item_inner}>
                <div onClick={()=> setChoise(<Cooler item={item.cooler}/>) }>{item.cooler.name}</div>
                <div><box-icon name='error-alt' type='solid' color='#756d6d' ></box-icon></div>

            </div>
          </div>
          <div className={styles.content_item}>
            <div className={styles.content_item_title}>
              <div>Оперативная память</div>
              <div>
                <img src={ram} alt="" />
              </div>
            </div>
            <div className={styles.content_item_inner}>
                <div onClick={()=> setChoise(<Ram item={item.ram}/>) }>{item.ram.title}</div>
                <div><box-icon name='error-alt' type='solid' color='#756d6d' ></box-icon></div>

            </div>
          </div>
          <div className={styles.content_item}>
            <div className={styles.content_item_title}>
              <div>Корпус</div>
              <div>
                <img src={corpus} alt="" />
              </div>
            </div>
            <div className={styles.content_item_inner}>
                <div onClick={()=> setChoise(<Corpus item={item.corpus}/>) }>{item.corpus.name}</div>
                <div><box-icon name='error-alt' type='solid' color='#756d6d' ></box-icon></div>

            </div>
          </div>

        
        </div>
      </div>

      <div className={styles.content_info}>
          {choise}
      </div>
      </div>
    </div>
  );
};

export default Equipment;
