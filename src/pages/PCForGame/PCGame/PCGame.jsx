import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGame } from '../../../features/gameSlice';

const PCGame = () => {

    const dispatch = useDispatch()

    const {id} = useParams()


    // useEffect(() => {
    //     dispatch(fetchGame())
    // }, {dispatch})

    const game = useSelector(state => state.game.game.filter(el => id === el._id))
    
    console.log(game);


    return (
        <div>
            {game.map(el => el.comp.map(el => el.name))}
        </div>
    );
};

export default PCGame;