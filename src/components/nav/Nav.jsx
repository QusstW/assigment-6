import React from "react";
import s from "./styles.module.css";

const Nav = () => {
  return (
    <header>
      <div className={s.container}>
        <div className={s.hamburger}>
          <div className={s.hamburger_layer}></div>
        </div>
        <div className={s.logo}>Company Dashboard</div>
        <nav>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Dashboard</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Purchase</span>
            </li>
          </ul>
        </nav>
        <div className={s.client}>
          <span>George Orwell</span>
          <img
            src="https://media.discordapp.net/attachments/910435909567148042/910519368826376222/avatar.png?width=405&height=585"
            alt="f"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
