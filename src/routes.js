import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Home/Watch";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/Watch/:id" element={<Watch/>} ></Route>
                <Route path="*" element={<PageNotFound/>} ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;




// BrowserRouter é um nanavegador de rotas