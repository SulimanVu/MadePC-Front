import React from 'react';
import styles from '../Order/order.module.scss';
import req from '../Order/images/req.svg';

const Order = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3>Оформление заказа</h3>
                <br />
                <h4>Личные данные</h4>
            </div>
            <div className={styles.input1}>
                <span>Ваше полное имя</span>
                <input />
            </div>
            <div className={styles.input1}>
                <span>Телефон</span>
                <input />
            </div>
            <div className={styles.input1}>
                <span>E-mail</span>
                <input />
            </div>
            <div className={styles.error}>
                <img src={req} />
                <p> &nbsp; &nbsp;Поля обязательны для заполнения</p>
            </div>
            <div className={styles.orderTo}>
                <h2>Комментарий к заказу</h2>
                <input />
                <div className={styles.buttons}>
                    <button>Оформить заказ</button>
                    <div className={styles.wrap}><p>После оформления с вами свяжется оператор для уточнения деталей</p></div>  
                </div>
            </div>
        </div>
    );
};

export default Order;