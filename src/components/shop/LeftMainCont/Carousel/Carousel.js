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
    <div className={styles.carouselCont}>
      <div className={styles.carousel} ref={carouselRef}>
        {props.data.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              order={props.order[card.id]}
              filter={props.filter}
              mobilePopUp={props.mobilePopUp}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
