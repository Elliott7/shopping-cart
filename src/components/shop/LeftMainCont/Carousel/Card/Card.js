import styles from "./Card.module.css";

function Card(props) {
  const { bgc, imageSource, name, price, colors, id } = props.card;
  const clickHandler = (e) => {
    console.log(e.target.id);
    props.filter(e.target.id);
  };
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: `${bgc}`, order: `${props.order}` }}
      onClick={clickHandler}
      id={`C${id}`}
    >
      <div id={id} className={styles.img}>
        <img
          src={imageSource}
          alt={`Shoes - ${name}`}
          className={styles.pic}
          id={id}
        />
      </div>
      <div className={styles.cont} id={id}>
        <div id={id} className={styles.title}>
          {name}
        </div>
        <div id={id} className={styles.colors}>
          {colors} colors
        </div>
        <div id={id} className={styles.price}>
          {price}
        </div>
      </div>
    </div>
  );
}

export default Card;
