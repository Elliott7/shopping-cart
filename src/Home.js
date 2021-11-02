import styles from "./home.module.css"
import NavBar from "./components/shop/navbar/NavBar";


function Home(){
    return(
        <div className={styles.homepage}>
            <div className={styles.bgc}> </div>
            <NavBar className={styles.navbar} />
            <figure className={styles.logo}>
                <img src="/logo.png"  alt="Nike logo"/>
            </figure>

            <p className={styles.cta}>Let's shop</p>
        </div>
    )
}

export default Home