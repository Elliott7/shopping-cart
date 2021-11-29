import Card from "./Card/Card";
import styles from "./carousel.module.css";
import { carouselAnimation } from "../../../../animations";
import { useEffect, useRef } from "react";

function Carousel(props) {
  const carouselRef = useRef();
  useEffect(() => {
    carouselAnimation(carouselRef.current);
  }, []);
  return (
    <div className={styles.carousel} ref={carouselRef}>
      {props.data.map((card) => {
        return <Card key={card.id} card={card} filter={props.filter} />;
      })}
    </div>
  );
}

export default Carousel;
