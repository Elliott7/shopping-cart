import Card from "./Card/Card";
import styles from "./carousel.module.css";

function Carousel(props) {
  return (
    <div className={styles.carousel}>
      {props.data.map((card) => {
        return <Card key={card.id} card={card} filter={props.filter} />;
      })}
    </div>
  );
}

export default Carousel;
