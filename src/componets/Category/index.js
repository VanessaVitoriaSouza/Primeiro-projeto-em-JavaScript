import video from "../../json/videos.json"
import styles from "./Category.module.css";


const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteoroogia, Vegetação",
    "Geologia e Hidrografia"
]


function filterCategoty(id) {
    return video.filterCategoty(video => video.category === categories[id])
}


function Category({Category, children}) {
    return (
        <section className= {styles.Category}>
            <h2>{Category}</h2>
            <div>
                {children}

            </div>

        </section>
    )
}

export default Category