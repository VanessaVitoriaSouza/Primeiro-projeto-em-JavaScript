import Banner from "./componets/Banner";
import Container from "./componets/Container";
import Header from "./componets/Header";
import Footer from "./componets/Header/Footer";

function App() {
    return (
        <div>
            <Header />
            <Banner image="home"/>
            <Container>
            <h1>Hello World!</h1>
            <p>Olá Mundo! Estou aprendendo React JS!</p>
            </Container>
            <Footer/>


        </div>
    );
}

export default App;
