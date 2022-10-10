import React from "react";
import styles from "./comppage.module.scss";
import { Link } from "react-router-dom";
// import dom from "./images/domic2.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchComp } from "../../features/compSlice";
import { useParams } from "react-router-dom";
// import rub from "./images/rub.svg";
import Equipment from "../../components/Equipment/Equipment";
import { addToBasket } from "../../features/applicationSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const id1 = useSelector((state) => state.application.id)
  const token = useSelector((state) => state.application.token)
  useEffect(() => {
    dispatch(fetchComp());
  }, [dispatch]);

  const notify = () => toast("Вы не авторизованы!", {
    type: 'error'
  });

  const handleAdd = (computersId) => {
    if (!token) {
      notify()
    } else {
      dispatch(addToBasket({ computersId, id1 }))
    }
  }

  const comp = useSelector((state) => state.comp.comp);

  return (
    <div className={styles.main}>
      <div className={styles.comppage_header}>
        <Link to="/" className={styles.decor}>
          {/* <img className={styles.imageDom} src={dom} alt="img" /> */}
        </Link>
        <p>
          <span>•</span> Компьютеры EDELWEISS <span>•</span>
        </p>
        <p id={styles.p}> Недорогие игровые компьютеры</p>
      </div>

      {comp.map((item, index) => {
        if (item._id === id) {
          return (
            <div key={index}>
              <div className={styles.comppage_content}>
                <div className={styles.content_item}>
                  <div className={styles.comppage_text}>
                    <div>
                      <h2>{item.name}</h2>
                    </div>
                    <div>
                      <span>
                        EDELWEISS AXE -достойный бюджетный компьютер для игр.
                        GTX 1650 с приставкой SUPER обеспечит высоким
                        показателем FPS при запуске CS:GO, Dota 2, Fortnite,
                        League of Legends и д.р. Хороший помощник школьника и
                        студентам.
                      </span>
                    </div>
                    <div className={styles.btn}>
                      <div>
                        <button onClick={() => handleAdd(item._id)}>Купить</button>
                      </div>
                      <div>
                        {" "}
                        {/* <span>{item.price}</span> <img src={rub} alt="" /> */}
                      </div>
                    </div>
                  </div>

                  <div className={styles.comppage_img}>
                    <img
                      src={`http://localhost:3010/images/${item.image}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <Equipment item={item} />
            </div>
          );
        }
      })}
      <ToastContainer />
    </div>
  );
};

export default CompPage;
