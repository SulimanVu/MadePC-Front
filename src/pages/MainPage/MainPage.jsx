import React from 'react';
import styles from './main.module.scss'
import Carousel from '../../components/Carousel/Carousel';
import MiniCard from '../../components/MiniCard/MiniCard';
import BestSeller from '../../components/BestSeller/BestSeller';

const MainPage = () => {
    return (
        <div>
            <Carousel />
            <h1>Производитель игровых ПК</h1>
            <MiniCard/>
            <BestSeller />
        </div>
    );
};

export default MainPage;