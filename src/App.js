import Banner from "./componets/Banner";
import Container from "./componets/Container";
import Header from "./componets/Header";
import Footer from "./componets/Header/Footer";
import Card from "./componets/Card";
import videos from "./json/videos.json";
import Category from "./componets/Category";

const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteoroogia, Vegetação",
    "Geologia e Hidrografia"
]

function filterCategoty(id) {
    return videos.filter ( video => video.category === categories[id])
}


function App() {
    return (
        <div>
            <Header />
            <Banner image="favoritos"/>
            <Container>

            {<Category Category={"Geografia"}>
                {  filterCategoty(0).map((video)=> <Card id={video.id} key={video.id}/>)}
            </Category>}

            {<Category Category="Como fazer e usar">
                {  filterCategoty(1).map((video)=> <Card id={video.id} key={video.id}/>)}
            </Category>} 

            {<Category Category="Astronomia e Geografia">
                {  filterCategoty(2).map((video)=> <Card id={video.id} key={video.id}/>)}
            </Category>}

            {<Category Category="">
                {  filterCategoty(3).map((video)=> <Card id={video.id} key={video.id}/>)}
            </Category>}

            {<Category Category="Geologia e Hidrografia">
                {  filterCategoty(4).map((video)=> <Card id={video.id} key={video.id}/>)}
            </Category>} 
        
            </Container>
            <Footer/>
        </div>
    );
}

/* Pode-se utilizar uma outra forma na chamada das categorias, por exemplo:
 {<Category Category={cateries[0]}> e por ai vai,seguindo a ordem numerica, que sempre começa em 0 
                {  filterCategoty(0).map((video)=> <Card id={video.id} key={video.id}/>)}
            </Category>}
*/

export default App;

            {/*<h2>Geografia</h2>
            <section className="cards">
                {
                    videos.map((video)=>{
                    return <Card id={video.id} key={video.id}/>
                    })
                }
            </section>*/}
