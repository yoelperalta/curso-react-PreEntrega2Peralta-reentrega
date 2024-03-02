import { useState, useEffect } from "react";
import { getProductsById } from "./asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);
    const {itemId} = useParams();

    console.log(itemId);
    useEffect(() => {
        getProductsById(itemId)
            .then(response =>{
                setProducto(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [itemId]);  
    return(
        <section className="container">
            <div className="columns">
                    <ItemDetail className="column is-4" {...producto}/>
            </div>
        </section>
    );
}

export default ItemDetailContainer;