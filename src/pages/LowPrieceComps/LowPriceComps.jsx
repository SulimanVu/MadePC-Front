import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardComp from '../../components/CardComp/CardComp';
import { fetchComp } from '../../features/compSlice';
import styles from '../LowPrieceComps/lowpricecomps.module.css';

const LowPriceComps = () => {
    const comps = useSelector((state) => state.comp.comp);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComp())
    }, [dispatch])

    return (
        <div className={styles.mainCompMap}>
            {comps.map((elem) => {
                return (
                    <div>
                        <CardComp computers={elem} />
                    </div>
                )
            })}
        </div>
    );
};

export default LowPriceComps;