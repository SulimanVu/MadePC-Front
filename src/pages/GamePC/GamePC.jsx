import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGames } from '../../features/gameSlice';
import styles from "./GamePC.module.scss"
import { Link } from 'react-router-dom';
import CardComp from '../../components/CardComp/CardComp';
import { fetchComp } from '../../features/compSlice';
import processorSlice from '../../features/processorSlice';
import { addToBasket } from '../../features/applicationSlice';


const GamePC = () => {
    const id1 = useSelector((state) => state.application.id)
    const [text, setText] = useState(false)

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGames())
        dispatch(fetchComp())
        window.scrollTo(0,0)
    }, [dispatch])

    const gamePC = useSelector(state => state.game.games.filter(item => item._id === id))
    const pc = useSelector(state => state.comp.comp)
    const comp = gamePC.map(el => el.comp)
    const computers = useSelector((state) => state.comp.comp.map((elem) => {
        return elem._id
    }))
    console.log(computers, '789987');
    const price = comp.flatMap(item => item.map(item => item.price));
    const max = Math.max(...price);
    const min = Math.min(...price);
    const a = pc.find(item => item.price === min);
    const b = pc.find(item => item.price === max);

    const handleBuy = (computersId) => {
        dispatch(addToBasket({ id1, computersId }))
    }

    return (
        <>
            <div className={styles.detalic}>
                <div className={styles.breadcrumps}>
                    <div className={styles.breadcrumps_inner}>
                        <div className={styles.breadcrumps_wrapper}>
                            <img src="https://cdn-icons-png.flaticon.com/512/747/747589.png" alt="Home_icon" className={styles.home_icon} />
                            <Link to="/game" className={styles.breadcrumps_link}>   •   Компьютеры под игру, геймерские ПК оптимизированные под проекты AAA</Link>
                            <p className={styles.breadcrumps_text}> •   Компьютеры для  {gamePC.map(el => el.name)}</p>
                        </div>

                    </div>
                </div>

                <div className={styles.title_page}>
                    <picture>
                        <img src={gamePC.map(el => el.imageBackground)} alt="" className={styles.title_page_img} />
                    </picture>
                </div>
                <div className={styles.ditalic_inner}>
                    <div className={styles.ditalic_title}>
                        <div className={styles.ditalic_start}>
                            <h1 className={styles.ditalic_h1}>Компьютеры для <br />  {gamePC.map(el => el.name)}</h1>
                            <p className={styles.detalic_text}>Игра требовательна к характеристикам ПК Проект является кроссплатформенным, а это значит, что выйдет она как на игровых консолях, так и на ПК. Но для того что бы насладится максимально высоким показателем FPS и самой красивой картинкой, железо должно быть соответствующее.</p>

                            <div className={styles.detalic_controll}>
                                <button className={styles.detalic_btn} onClick={() => handleBuy(b?._id)}>Купить</button>
                                <div className={styles.detalic_controll_price_box}>
                                    <p className={styles.detalic_control_price}>
                                        <span>{text ? a?.price : b?.price}</span>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3573/3573878.png" alt="" className={styles.detalic_control_price_img} />
                                    </p>
                                    <div className={styles.detalic_control_price_credit}>
                                        <span>от {Math.round(b?.price / 10)}руб. в месяц</span>
                                    </div>
                                </div>


                            </div>

                            <div className={styles.detalic_controll_btn_box}>
                                <Link to="/configurator" className={styles.btn_configur}>Изменить конфигурацию</Link>
                                <Link to="/configurator" className={styles.btn_configur}>Помощь специалиста</Link>
                                <Link to="/configurator" className={styles.btn_configur}>Страница товара</Link>
                            </div>
                        </div>

                        <div className={styles.ditalic_slider}>
                            <img src={gamePC.map(el => el.gamePCImg)} alt="" className={styles.detalic_slid_img} />
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.detalic_equipment}>
                <div className={styles.detalic_wrapper}>
                    <button className={text ? styles.detalic_equipment_btn2 : styles.detalic_equipment_btn1} onClick={() => setText(false)}>Рекомендованная комплектация</button>
                    <button className={text ? styles.detalic_equipment_btn1 : styles.detalic_equipment_btn2} onClick={() => setText(true)}>Минимальная</button>

                    {text ? <ul className={styles.detalic_list}>
                        <li className={styles.detalic_item}>
                            <span>Процессор</span>
                            <img srcset="https://edelws.ru/local/templates/main/img/icon/cpu.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/cpu.svg" alt="значёк центрального процессора ( cpu )" />
                            <p>{b?.processor.name}</p>
                        </li>

                        <li className={styles.detalic_item}>
                            <span>Охлаждение</span>
                            <img srcset="https://edelws.ru/local/templates/main/img/icon/fan.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/fan.svg" alt="значёк система охлаждения (cooler )" />
                            <p>{b?.cooler.name}</p>
                        </li>

                        <li className={styles.detalic_item}>
                            <span>Оперативная память</span>
                            <img srcset="https://edelws.ru/local/templates/main/img/icon/ram.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/ram.svg" alt="значёк оперативной памяти ( ram )" />
                            <p>{b?.ram.name}</p>
                        </li>

                        <li className={styles.detalic_item}>
                            <span>Диск SSD</span>
                            <img srcset="https://edelws.ru/local/templates/main/img/icon/ssd.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/ssd.svg" alt="значёк твердотельного диска ( ssd )" />
                            <p>{b?.ssd.name}</p>
                        </li>

                        <li className={styles.detalic_item}>
                            <span>Корпус</span>
                            <img srcset="https://edelws.ru/local/templates/main/img/icon/case.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/case.svg" alt="иконка системного блока ( case )" />
                            <p>{b?.corpus.name}</p>
                        </li>

                        <li className={styles.detalic_item}>
                            <span>Видео-карта</span>
                            <img srcset="https://edelws.ru/local/templates/main/img/icon/vga.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/vga.svg" alt="значёк видеокарты ( gpu )" />
                            <p>{b?.videocard.name}</p>
                        </li>

                        <li className={styles.detalic_item}>
                            <span>Система</span>
                            <img srcset="https://edelws.ru/local/templates/main/img/icon/os.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/os.svg" alt="значёк операционной системы ( os )" />
                            <p>Windows 10 Pro</p>
                        </li>
                    </ul>

                        :

                        <ul className={styles.detalic_list_min}>
                            <li className={styles.detalic_item_min}>
                                <span>Процессор</span>
                                <img srcset="https://edelws.ru/local/templates/main/img/icon/cpu.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/cpu.svg" alt="значёк центрального процессора ( cpu )" />
                                <p>{a?.processor.name}</p>
                            </li>

                            <li className={styles.detalic_item}>
                                <span>Охлаждение</span>
                                <img srcset="https://edelws.ru/local/templates/main/img/icon/fan.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/fan.svg" alt="значёк система охлаждения (cooler )" />
                                <p>{a?.cooler.name}</p>
                            </li>

                            <li className={styles.detalic_item}>
                                <span>Оперативная память</span>
                                <img srcset="https://edelws.ru/local/templates/main/img/icon/ram.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/ram.svg" alt="значёк оперативной памяти ( ram )" />
                                <p>{a?.ram.name}</p>
                            </li>

                            <li className={styles.detalic_item}>
                                <span>Диск SSD</span>
                                <img srcset="https://edelws.ru/local/templates/main/img/icon/ssd.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/ssd.svg" alt="значёк твердотельного диска ( ssd )" />
                                <p>{a?.ssd.name}</p>
                            </li>

                            <li className={styles.detalic_item}>
                                <span>Корпус</span>
                                <img srcset="https://edelws.ru/local/templates/main/img/icon/case.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/case.svg" alt="иконка системного блока ( case )" />
                                <p>{a?.corpus.name}</p>
                            </li>

                            <li className={styles.detalic_item}>
                                <span>Видео-карта</span>
                                <img srcset="https://edelws.ru/local/templates/main/img/icon/vga.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/vga.svg" alt="значёк видеокарты ( gpu )" />
                                <p>{a?.videocard.name}</p>
                            </li>

                            <li className={styles.detalic_item}>
                                <span>Система</span>
                                <img srcset="https://edelws.ru/local/templates/main/img/icon/os.svg" class="waitlazzyload lazyloaded" src="/local/templates/main/img/icon/os.svg" alt="значёк операционной системы ( os )" />
                                <p>Windows 10 Pro</p>
                            </li>
                        </ul>}
                </div>
            </div>
        </>
    );
};

export default GamePC;