import ItemCount from "./ItemCount";

const ItemDetail = ({id, nombre, precio, img, category, descripcion, stock}) => {
    console.log(id);
    return(
    <article className="card">
        <picture className="card-image">
            <img className="image" width={200} height={200} src={img} alt={nombre}/>
        </picture>
        <section className="card-content">
            <div className="media-content">
                <p className="title">{nombre}</p>
                <p className="subtitle">Categoria: {category}</p>
                <p className="subtitle">Descripcion: {descripcion}</p>
                <p className="subtitle">Precio: {precio}</p>
            </div>
        </section>
        <footer>
            <ItemCount initial={1} stock={stock} onAdd={(cantidad) =>console.log('Cantidad agregada', cantidad)}></ItemCount>
        </footer>
    </article>);
}

export default ItemDetail;