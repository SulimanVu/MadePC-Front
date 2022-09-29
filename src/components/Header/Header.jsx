import React from 'react';
import styles from "./header.module.scss"



const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.nav_block}>
                <img src="https://edelws.ru/local/templates/main/img/logo.svg" alt="" />
                <img src="https://edelws.ru/local/templates/main/img/icon/phone.svg" alt="" className={styles.phone_img}/>
                <p className={styles.number}>8 (800) 234 99 19</p>
                <img src="https://cdn-icons-png.flaticon.com/512/535/535188.png" alt="" className={styles.img_location} />
                <p className={styles.placeMap}>Грозный</p>
            </div>
            <div className={styles.information_block}>
                <ul className={styles.list}>
                    <li className={styles.item}>Статьи</li>
                    <li className={styles.item}>О нас ⁞</li>
                    <ul className={styles.nested_list}>
                        <li className={styles.nested_item}>  <img src="https://www.svgrepo.com/show/410423/right.svg" alt="" className={styles.img} /> <a href="#" className={styles.nested_link}>FAQ</a> </li>
                        <li className={styles.nested_item}>  <img src="https://www.svgrepo.com/show/410423/right.svg" alt="" className={styles.img} /> <a href="#" className={styles.nested_link}> О Компании </a> </li>
                        <li className={styles.nested_item}>  <img src="https://www.svgrepo.com/show/410423/right.svg" alt="" className={styles.img} /> <a href="#" className={styles.nested_link}>Отзывы</a> </li>
                    </ul>
                    <li className={styles.item}>Клиентам ⁞</li>
                    <ul className={styles.nested_list2}>
                    <li className={styles.nested_item2}> <img src="https://www.svgrepo.com/show/410423/right.svg" alt="" className={styles.img} /> <a href="#" className={styles.nested_link2}>тех. поддержка</a> </li>
                        <li className={styles.nested_item2}>  <img src="https://www.svgrepo.com/show/410423/right.svg" alt="" className={styles.img} /> <a href="#" className={styles.nested_link2}> доставка и оплата </a> </li>
                        <li className={styles.nested_item2}>  <img src="https://www.svgrepo.com/show/410423/right.svg" alt="" className={styles.img} /> <a href="#" className={styles.nested_link2}>гарантия</a> </li>
                    </ul>
                    <li className={styles.item}>Контакты</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;