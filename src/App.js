import "bulma/css/bulma.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";

function App (){
    const greeting = "Bienvenido a Chimehuin FlyShop";
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<h1>404 not found</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;