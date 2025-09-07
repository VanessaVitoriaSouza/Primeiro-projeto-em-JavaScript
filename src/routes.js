import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Home/Watch";

function AppRoutes() {
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/Watch" element={<Watch/>} ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;




// BrowserRouter é um nanavegador de rotas