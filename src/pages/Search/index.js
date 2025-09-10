import Header from "../../componets/Header";
import styles from "./Search.module.css";
import Footer from "../../componets/Header/Footer";
import Container from "../../componets/Container";

function Search() {
    return(
        <>
            <Header/>
            <Container>
            <section className={styles.Search}>
                <h2>Pesquisar</h2>
                <input type="search"/>
            </section>
            
            </Container>
            <Footer/>
        </>

);

}


export default Search;