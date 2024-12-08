interface buttonProps {
    imageUrl: string
}

export default function ProductCard(props: buttonProps) {
    const {imageUrl} = props;
    return (
        <div className="product-card">
            <img src={imageUrl} alt="" />
            <div>
                <p><span>Marca: </span> SAMSUNG</p>
                <p><span>Tamaño: </span> 45 pulgadas</p>
                <p><span>Resolución: </span> OLED</p>
                <p><span>Tecnología: </span> China</p>
            </div>
            <p><span>Precio: </span> Bs. 340</p>
            <button className="form-btn">Comprar</button>
        </div>
    )
}