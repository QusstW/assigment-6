import React from "react";
import s from "./styles.module.css"

const Tabs = () => {
  return (
    <div className={s.tabs}>
      <div className={s.container}>
        <div className={s.tabs_item}>
          <span>Active tab</span>
        </div>
        <div className={s.tabs_item}>
          <span>Inactive tab</span>
        </div>
        <div className={s.tabs_item}>
          <span>Inactive tab</span>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
