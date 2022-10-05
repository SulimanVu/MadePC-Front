import React, { useEffect } from 'react';
import styles from '../ItemBasket/itembasket.module.scss';
import proc from './images/proc2.png';
import rub from '../CardComp/images/rub.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromBasket, fetchUsers, countPlus, countMinus } from '../../features/applicationSlice';
import { fetchComp } from '../../features/compSlice';

const ItemBasket = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.application.users)
    const comps = useSelector((state) => state.comp.comp)
    const id = useSelector((state) => state.application.id)

    const result = comps.map((element) => {
        return element._id
    })

    const data = user.find((element) => {
        if (element._id === id) {
            return element
        }
    })

    const res = data?.basket

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchComp())
    }, [dispatch])

    const handleDelete = (result1) => {
        dispatch(deleteFromBasket({ result1, id }))
    }

    const handlePlus = (count, itemId) => {
        dispatch(countPlus({ itemId, id }))
    }

    const handleMinus = (count, itemId) => {
        if (count > 1)
            dispatch(countMinus({ itemId, id }))
    }

    return (
        <>
            {res?.map((item) => {
                return (
                    <div className={styles.itemMain}>
                        <div className={styles.Basket}>
                            <img className={styles.imgBasket} src={`http://localhost:3010/images/${item.image}`} alt="img" />
                            <p>{item.name}</p>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.imgPrice}>
                                <p>{item.price}</p>
                                <img className={styles.imgRub} src={rub} alt='img' />
                            </div>
                            <div className={styles.plusMinus}>
                                <button onClick={() => handleMinus(item.count, item._id)}>-</button>
                                <p>{item.count}</p>
                                <button onClick={() => handlePlus(item.count, item._id)}>+</button>
                            </div>
                            <button className={styles.delete} onClick={() => handleDelete(item._id)}>
                                ╳
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default ItemBasket;