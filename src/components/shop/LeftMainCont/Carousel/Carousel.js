import Card from "./Card/Card";
import styles from "./carousel.module.css";

const testCards = [
  {
    name: "Nike Air Force",
    price: "£130.00",
    bgc: "#f5ddc9",
    imageSource: "/images/nike-air-force.png",
    colors: 3,
  },
  {
    name: "Air Force 1 High",
    price: "£130.00",
    bgc: "#c93849",
    imageSource: "/images/nike-air-force-1-high.png",
    colors: 3,
  },
  {
    name: "Nike Span 2 ",
    price: "£130.00",
    bgc: "#959ebd",
    imageSource: "/images/nike-span-2.png",
    colors: 3,
  },
  {
    name: "Air Max 90",
    price: "£130.00",
    bgc: "#b6e2f8",
    imageSource: "/images/air-max-90.png",
    colors: 3,
  },
  {
    name: "Air Max 270",
    price: "£130.00",
    bgc: "#78787c",
    imageSource: "/images/air-max-270.png",
    colors: 3,
  },
  {
    name: "Air Max Excee",
    price: "£130.00",
    bgc: "#000000",
    imageSource: "/images/air-max-excee-.png",
    colors: 3,
  },
];

function Carousel(props) {
  return (
    <div className={styles.carousel}>
      {testCards.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
}

export default Carousel;
