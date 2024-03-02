import { useState, useEffect } from "react";
import {getProducts, getProductsById, getProductsByCategory} from "./asyncMock";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}){
    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();   

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        
        asyncFunc(categoryId)
            .then(response => {
                setProductos(response);
            })
            .catch(error => {
                console.error(error);
            })
        }, [categoryId]);

        return(
            <div>
                <h1>{greeting}</h1>
                <ItemList productos={productos}/>
            </div>
        );
}

export default ItemListContainer;