import NavBar from "../navbar/NavBar";
import styles from "./LeftMainCont.module.css"
import Hero from "./Hero/Hero";
import Carousel from "./Carousel/Carousel";

function LeftMainCont(props){
    return(
        <div className={props.className}>
            <header className={styles.header}>
                <figure className={styles.logo}>
                    <img src="/logo.png"  alt="Nike logo"/>
                </figure>
                <NavBar className={styles.headerChild} />
            </header>
            <Hero className={styles.hero}/>

            <Carousel />
        </div>
    )
}

export default LeftMainCont