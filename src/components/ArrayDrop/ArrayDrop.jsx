import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../DropDown/DropDown";
import { fetchBoard } from "../../features/motherBoardSlice";
import { fetchCooler } from "../../features/coolerSlice";
import { getCorpus } from "../../features/corpusSlice";
import { fetchHDD } from "../../features/HDDSlice";
import { fetchpowerUnits } from "../../features/powerUnit";
import { fetchProcessors } from "../../features/processorSlice";
import { fetchRAM } from "../../features/RAMSlice";
import { getSSD } from "../../features/ssdSlice";
import { fetchvideoCards } from "../../features/videoCardSlice";
import styles from "./arrayDrop.module.scss";

const ArrayDrop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCooler());
    dispatch(fetchBoard());
    dispatch(getCorpus());
    dispatch(fetchHDD());
    dispatch(fetchpowerUnits());
    dispatch(fetchProcessors());
    dispatch(fetchRAM());
    dispatch(getSSD());
    dispatch(fetchvideoCards());
  }, [dispatch]);

  const board = useSelector((state) => state.motherBoard.board);
  const cooler = useSelector((state) => state.cooler.cooler);
  const corpus = useSelector((state) => state.corpus.corpus);
  const hdd = useSelector((state) => state.hdd.hdd);
  const power = useSelector((state) => state.power.powerUnits);
  const processor = useSelector((state) => state.processor.processor);
  const ram = useSelector((state) => state.ram.ram);
  const ssd = useSelector((state) => state.ssd.ssd);
  const video = useSelector((state) => state.video.videoCards);

  return (
    <div className={styles.main}>
      <div>
        <h1>Материнская плата</h1>
        <DropDown arr={board} />
      </div>
      <br />
      <div>
        <h1>Кулер</h1>
        <DropDown arr={cooler} />
      </div>
      <br />
      <div>
        <h1>Корпус</h1>
        <DropDown arr={corpus} />
      </div>
      <br />
      <div>
        <h1>Жесткий диск</h1>
        <DropDown arr={hdd} />
      </div>
      <br />
      <div>
        <h1>Блок питания</h1>
        <DropDown arr={power} />
      </div>
      <br />
      <div>
        <h1>Процессор</h1>
        <DropDown arr={processor} />
      </div>
      <br />
      <div>
        <h1>Оперативная память</h1>
        <DropDown arr={ram} />
      </div>
      <br />
      <div>
        <h1>SSD</h1>
        <DropDown arr={ssd} />
      </div>
      <br />
      <div>
        <h1>Видеокарта</h1>
        <DropDown arr={video} />
      </div>
      <br />
    </div>
  );
};

export default ArrayDrop;
