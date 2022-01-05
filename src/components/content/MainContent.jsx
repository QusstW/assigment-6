import React from "react"
import Table from "./table/Table"
import Card from "./card/Card"
import s from "./styles.module.css"

const MainContent = () => {
    return(
        <div className={s.main_content}>
            <Table />
            <Card />
            <Card />
        </div>
    )
}

export default MainContent