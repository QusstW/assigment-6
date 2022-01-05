import React from "react"
import likes from "./assets/love.png"
import card from "./assets/card.jpg"
import s from "./styles.module.css"

const Card = () => {

    const [like, setLike] = React.useState(false)

    return(
        <div className={s.card}>
        <div className={like ? s.like_active : s.like} onClick={() => setLike((value) => !value)} >
            <img src={likes} alt="f" style={{margin: "3px 0 0 2px", width: "25px"}} />
        </div>
        <img src={card} alt="f" />
        <div style={{margin: "15px"}} >
           <div className={s.itle_data}>
            <div style={{fontWeight: "bold"}} >Title</div>
            <div>20.09.2020</div>
        </div>
        <div style={{fontSize: "10px", color: "gray"}} >subtitle</div>
        <div style={{marginTop: "15px", fontSize: "12px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...</div>
       <button className={s.button_card}>
        READ MORE
       </button>
        </div>
    </div>
    )
}

export default Card