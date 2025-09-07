import Container from "../../../componets/Container";
import Header from "../../../componets/Header";
import Footer from "../../../componets/Header/Footer";
import styles from "./Watch.module.css";


function Watch() {
    return (

        <>
            <Header/>
            <Container>
                <section className={styles.Watch}>
                     <h1>Assistir</h1>
                     <iframe width="854" height="480" src="https://www.youtube.com/embed/HB-oqf4Jiv0?si=3SmnP957-IgySAo2"
                      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer/>
        
        
        </>
       
        
    );
}

export default Watch;