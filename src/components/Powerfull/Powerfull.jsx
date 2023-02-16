import styles from "../Powerfull/Powerfull.module.scss";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import CardComp from "../../components/CardComp/CardComp";
import { fetchComp } from "../../features/compSlice";

const Powerfull = () => {
  const comps = useSelector((state) => state.comp.comp);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComp());
  }, [dispatch]);

  return (
    <div className={styles.Powerfull}>
      <div className={styles.haed}>
        <div className={styles.title}>
          <h1>Сверхмощные компьютеры</h1>
          <span>
            Топовые ПК - самое совершенное и дорогое в мире железо.
            Оптимизированы под разрешение экрана 4K. Премиальные компьютеры для
            профессионалов, энтузиастов и создателей качественного цифрового
            контента.
          </span>
        </div>
      </div>
      <div className={styles.bodys}>
        <div className={styles.infos}>
          <div className={styles.infos2}>
            <div className={styles.titleInfs}>
              <span>Экстремальная серия - мощнейшие ПК</span>
            </div>
            <div className={styles.textInf}>
              <div className={styles.block}>
                <p>★</p>
                <span>
                  Высокопроизводительные системы для работы с максимально
                  возможной эффективностью
                </span>
              </div>
              <div className={styles.block}>
                <p>★</p>
                <span>
                  Бескомпромиссные решения для экстремалов с колоссальной
                  вычислительной скоростью
                </span>
              </div>
              <div className={styles.block}>
                <p>★</p>
                <span>
                  Топовые ПК для гейминга 4K+ с имбалансной конфигурацией и
                  фантастическим FPS
                </span>
              </div>
            </div>
          </div>
          <div className={styles.imgInf}>
            <img
              src="https://edelws.ru/upload/uf/93e/93e2f0a1053067ddbe3b640ea21c3668.png"
              alt="q"
            />
          </div>
        </div>
        <div className={styles.compMaps}>
          {comps.map((item) => {
            return (
              <div className={styles.card}>
                <CardComp computers={item} />
              </div>
            );
          })}
        </div>
        <div className={styles.end}>
          <div className={styles.blockEnd}>
            <div className={styles.first}>
              <h1>Титаны компьютерного мира</h1>
              <span>
                Современные игры, фото и графические редакторы требует от ЭВМ
                колоссального вычислительного ресурса. Серия экстремальных ПК в
                данном каталоге – это системные блоки которые обладает
                техническим заделом на несколько лет вперед.
                <br />
                <br />
                Подобные устройства способны решить даже самые невообразимые
                потребительские задачи сегодня и с таким же успехом будут решать
                их завтра. Если развитие компьютерной индустрии и не достигло
                наивысшей точки, то перешло на качественно новый уровень.
                <br />
                <br />
                Принципиальная позиция современного пользователя выглядит
                следующим образом. Мир быстро меняется, системные требования ко
                многим новинкам растут быстрее их выхода, поэтому для идеальной
                рабочей среды нужны высокопроизводительные компьютеры Hi End
                класса.
                <br />
                <br />
                Компания COMP 95 в своих ПК используем самые высокотехнологичные
                решения в мире IT. Мы постоянно следим за основными тенденциями
                мирового компьютерного рынка и предлагаем своим клиентам только
                лучшие образцы, на основе самых топовых компонентов и
                инновационных решений.
                <br />
                <br />
                Купить топовый ПК – это получить высочайшую производительность и
                слаженную работу всех узлов компьютера, систему способную решать
                сложнейшие задачи.
              </span>
            </div>
            <div className={styles.photo}>
              <img
                src="https://edelws.ru/local/templates/main/img/rtx3090-x.jpg"
                alt="q"
              />
            </div>
          </div>
          <div className={styles.blockEnd}>
            <div className={styles.photo}>
              <img
                src="https://edelws.ru/local/templates/main/img/asusg.jpg"
                alt="q"
              />
            </div>
            <div className={styles.first}>
              <h1>Процессоры и видеокарты - CPU и GPU</h1>
              <span>
                Порог вхождения для центрального процессора - тактовая частота в
                5000 МГц. Новое поколения микросхем от Intel Core i9-10900K и
                AMD RYZEN 5900 обладают уникальным быстродействием и высокой
                оптимизацией. С таким CPU запуск и работа в сложных инженерных
                программах будет максимально комфортной.
                <br />
                <br />
                Другим важнейшим компонентом суперкомпьютера является видеокарта
                GЕFORCE RTX 3090 24 Гб. В тандеме intel i9 или AMD Ryzen 9 эти
                графические адаптеры просто творят чудеса.
                <br />
                <br />
                Картинка становится реалистичной на все сто, появляется
                возможность без тормозов, очень плавно и качественно вести
                стримы параллельно играя в разрешении 4К+.
              </span>
            </div>
          </div>
          <div className={styles.blockEnd}>
            <div className={styles.first}>
              <h1>Продуманный интерьер премиальных ПК</h1>
              <span>
                Оперативная память стартует от 32 лучше 64 Гб, эффективная
                система охлаждения NZXT Kraken X73 Liquid Cooler, воздушка Be
                Quiet Dark Rock Pro 4 или Noctua NH-D15, а лучше кастомный набор
                СВО EKWB, материнские платы типа ASUS ROG GAMING или AORUS
                MASTER от GIGABYTE c чипсетом X299 / Z490, самые скоростные SSD
                диски, сертифицированные блоки питания класса gold и platinum
                прилагаются.
                <br />
                <br />
                Мы никогда не забываем и о внешнем виде системных блоков, ведь
                это топовые компьютеры в дорогом исполнении - монстры цифрового
                мира! Все они оригинальны, имеют современный и, чаще всего,
                «боевой» дизайн, который настраивает на победу.
                <br />
                <br />
                Купить дорогой эксклюзивный компьютер вам помогут специалисты
                компании COMP 95. В магазине есть достаточное количество
                крутейших ПК, однако мы прекрасно понимаем желание каждого
                геймера иметь в своем арсенале уникальный во всех отношениях
                суперкомпьютер. Поэтому каждый желающий может персонифицировать
                свою сборку воспользовавшись конфигуратором пк.
              </span>
            </div>
            <div className={styles.photo}>
              <img
                src="https://edelws.ru/local/templates/main/img/asuspwp.jpg"
                alt="q"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Powerfull;
