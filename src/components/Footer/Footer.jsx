import React from 'react';
import styles from "./footer.module.scss"


const Footer = () => {
    return (
        <div className={styles.footer_container}> 
            <div className={styles.footer_wrapper}>
                
                <div className={styles.block_partners}>
                <p className={styles.text_partners}>Наши партнеры</p>
                    <img src="https://edelws.ru/upload/uf/3c2/3c28ddf1e910fe3e061998941dc6d063.svg" alt="asus"  className={styles.img_asus}/>
                    <img src="https://edelws.ru/upload/uf/462/462ce9801310ccefb151e0706542087a.svg" alt="msi"  className={styles.img_msi}/>
                    <img src="https://edelws.ru/upload/uf/e3c/e3c514fa76c9cd099dbd9e90032990cf.svg" alt="nzxt" className={styles.img_nzxt} />
                    <img src="https://edelws.ru/upload/uf/dc2/dc28bcacc7a63c2801ffdcfdbf7e6921.svg" alt="nvidia"  className={styles.img_nvidia}/>
                    <img src="https://edelws.ru/upload/uf/11f/11f3544d7e69edf0fb786d7802e1fa3c.svg" alt="corsra" className={styles.img_corsar} />
                </div>
                <div className={styles.block_streat}>
                    <p className={styles.streat}>г. Грозный улица Трошева дом 7, 5 этаж, офис 8</p>
                    <span>Обработка и прием заказов по телефону:</span>
                    <p className={styles.number}>8 (800) 234 99 19</p>
                    <span>Пн-Пт: 11:00 - 20:00</span>
                    <br />
                    <span>Сб-Вс: 12:00 - 18:00</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;