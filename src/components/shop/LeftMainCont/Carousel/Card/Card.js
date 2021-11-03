import styles from "./Card.module.css"

function Card(props){
    const {bgc, imageSource, name, price, colors} = props.card
    return(
        <div className={styles.card} style={{backgroundColor: `${bgc}`}}>

            <div className={styles.img}>
                <img src={imageSource} alt={`Shoes - ${name}`} className={styles.pic}/>
            </div>
            <div className={styles.cont}>
                <div className={styles.title}>{name}</div>
                <div className={styles.colors}>{colors} colors</div>
                <div className={styles.price}>{price}</div>
            </div>

        </div>
    )
}

export default Card