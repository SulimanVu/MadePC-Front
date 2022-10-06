import React, { useState } from 'react';
import styles from '../Order/order.module.scss';
import req from '../Order/images/req.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../../features/requestSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const id = useSelector((state) => state.application.id)
    const users = useSelector((state) => state.application.users)

    const currentUser = users?.find((item) => item._id === id)

    const basket = currentUser?.basket.map((elem) => {
        return elem._id
    })

    // console.log(basket);

    const dispatch = useDispatch();

    const notify = () => toast("Заказ офрмлен!", {
        type: 'success'
    });

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const handleAdd = () => {
        dispatch(addRequest({ name, number, email, comment, basket }))
        setName('')
        setNumber('')
        setEmail('')
        setComment('')
        notify()
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3>Оформление заказа</h3>
                <br />
                <h4>Личные данные</h4>
            </div>
            <div className={styles.input1}>
                <span>Ваше полное имя</span>
                <input value={name} onChange={handleName} />
            </div>
            <div className={styles.input1}>
                <span>Телефон</span>
                <input value={number} onChange={handleNumber} />
            </div>
            <div className={styles.input1}>
                <span>E-mail</span>
                <input value={email} onChange={handleEmail} type="email" />
            </div>
            <div className={styles.error}>
                <img src={req} alt='img' />
                <p> &nbsp; &nbsp;Поля обязательны для заполнения</p>
            </div>
            <div className={styles.orderTo}>
                <h2>Комментарий к заказу</h2>
                <input value={comment} onChange={handleComment} />
                <div className={styles.buttons}>
                    <button onClick={handleAdd} disabled={!name || !number || !email || !comment}>Оформить заказ</button>
                    <div className={styles.wrap}><p>После оформления с вами свяжется оператор для уточнения деталей</p></div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Order;