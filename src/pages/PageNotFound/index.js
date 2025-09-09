import erro404 from './erro404.png';
import styles from "./PageNotFound.module.css";
import Header from "../../componets/Header";
import Footer from "../../componets/Header/Footer";



function PageNotFound() {
    return (
        <>
        <Header/>
        <section className={styles.container}>
            <h2>Ops! Página não localizada! </h2>
            <img src={erro404} alt="Logo de Página nao localizada"/>
        </section>
        < Footer/>
        </>
    );
}

export default PageNotFound;