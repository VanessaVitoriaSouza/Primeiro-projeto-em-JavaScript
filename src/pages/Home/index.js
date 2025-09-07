import Banner from "../../componets/Banner";
import Card from "../../componets/Card";
import Container from "../../componets/Container";
import Header from "../../componets/Header";
import Footer from "../../componets/Header/Footer";
import Category, {categories, filterCategory} from "../../componets/Category";


function Home() {
    return (
        <div>
            <Header />
            <Banner image="home" />
            <Container>

                { categories.map((category, index) =>
                <Category category={category} >
                    {filterCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
                    </Category> 
                 )}
               
        
           
            </Container>
            <Footer />
        </div>
    );
}

export default Home;
