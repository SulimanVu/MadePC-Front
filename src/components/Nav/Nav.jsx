import React from "react";
import styles from "./nav.module.scss";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Nav = () => {
  return (
    <div className="container">
      <div className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>
            <Link to="/configurator">Конфигуратор ПК</Link>
          </li>
          <li>
            <Link to="/">Недорогие ПК</Link>
          </li>
          <li>
            <Link to="/">Игровые ПК</Link>
          </li>
          <li>
            <Link to="/">Мощнейшие ПК</Link>
          </li>
          <li>
            <Link to="/">ПК на базе AMD</Link>
          </li>
        </ul>
        <div className={styles.nav_input}>
        <div><box-icon name='search' color = "#a7e200"></box-icon></div>
        <div>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Nav;
