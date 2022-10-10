import React, { useEffect } from "react";
import styles from "./nav.module.scss";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/applicationSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Nav = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])
  const id = useSelector((state)=> state.application.id)

  const user = useSelector((state) => state.application.users.find((item) => item._id === id))
  

  return (
    
      <div className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>
            <Link to="/configurator">Конфигуратор ПК</Link>
          </li>
          <li>
            <Link to="/lowprice">Недорогие ПК</Link>
          </li>
          <li>
            <Link to="/game">Игровые ПК</Link>
          </li>
          <li>
            <Link to="/powerfull">Мощнейшие ПК</Link>
          </li>
          <li>
            <Link to="/">ПК на базе AMD</Link>
          </li>
        </ul>
        <div className={styles.nav_input}>
        <div><box-icon name='search' color = "#a7e200"></box-icon></div>
        <div>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={user?.basket.length} color="secondary">
              <Link className={styles.basket} to="/basket"><ShoppingCartIcon /></Link>
            </StyledBadge>
          </IconButton>
        </div>
      </div>
      </div>
     
    
  );
};

export default Nav;
