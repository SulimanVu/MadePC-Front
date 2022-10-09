import React, { useEffect, useState } from 'react';
import styles from '../ItemBasket/itembasket.module.scss';
import rub from '../CardComp/images/rub.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromBasket, fetchUsers, countPlus, countMinus } from '../../features/applicationSlice';
import { fetchComp } from '../../features/compSlice';
import { useSpring, animated } from 'react-spring';
import { MagnifyingGlass } from 'react-loader-spinner'

const ItemBasket = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.application.users)
    const comps = useSelector((state) => state.comp.comp)
    const id = useSelector((state) => state.application.id)
    const loading = useSelector((state) => state.comp.loader)
    const [disabled, setDisabled] = useState(false)

    const result = comps.map((element) => {
        return element._id
    })

    const data = user.find((element) => {
        if (element._id === id) {
            return element
        }
    })

    const res = data?.basket;

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchComp())
    }, [dispatch])

    const handleDelete = (result1) => {
        dispatch(deleteFromBasket({ result1, id }))
    }

    const handlePlus = (count, itemId, price) => {
        dispatch(countPlus({ itemId, id, price }))
    }

    const handleMinus = (count, itemId) => {
        if (count > 1) {
            dispatch(countMinus({ itemId, id }))
        }
        else if (count === 1) {
            setDisabled(true)
        }
    }

    const Number = ({ n }) => {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 },
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
    }

    if (loading) {
        return (
            <div className={styles.load}>
                <MagnifyingGlass
                    visible={true}
                    height="150"
                    width="150"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#c0efff'
                    color='#e15b64'
                />
                <p>Идет загрузка...</p>
            </div>
        )
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
                                <p><Number n={item.price} /></p>
                                <img className={styles.imgRub} src={rub} alt='img' />
                            </div>
                            <div className={styles.plusMinus}>
                                <button onClick={() => handleMinus(item.count, item._id)} disabled={disabled}>-</button>
                                <p>{item.count}</p>
                                <button onClick={() => handlePlus(item.count, item._id, item.price)}>+</button>
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