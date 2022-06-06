import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';


const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [restockQuantity, setRestockQuantity] = useState(product?.quantity);
    const [prodQuantity, setProdQuantity] = useState(product?.quantity);
    

    useEffect(() => {
        const url = `https://blooming-spire-88555.herokuapp.com/inventory/${productId}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [productId, restockQuantity, prodQuantity])


    const handleReStockItem = event => {
        event.preventDefault();
        const oldQuantity = parseInt(product.quantity);
        const newQuantity = parseInt(event.target.quantity.value);
        const updatedQuantity = (oldQuantity + newQuantity);

        const url = `https://blooming-spire-88555.herokuapp.com/inventory/${productId}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({updatedQuantity})
        })
        .then(res => res.json())
        .then(data => {
            setRestockQuantity(updatedQuantity);
            console.log(data);
            event.target.reset();
        })

    }

    const handleDeliver = event => {
        const {quantity} = product;
        console.log(quantity);
        event.preventDefault();
        const oldQuantity = parseInt(product.quantity);
        console.log(oldQuantity);
        const newQuantity = oldQuantity - 1;
        console.log(newQuantity)
    
        const url = `https://blooming-spire-88555.herokuapp.com/inventory/deliver/${productId}`
        fetch(url, {
          method: 'put',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({newQuantity}),
        })
          .then((res) => res.json())
          .then((data) => {
              setProdQuantity(newQuantity);
              console.log(data);
          })
      };

    return (
        <div>
            <h2 className="text-center mt-3">Update Inventory Item</h2>
           <div className="container detail mt-5 mb-5">
                <div className="w-100 info p-2">
                    <h3 className="text-info">{product.name}</h3>
                    <p><b>ID:</b> {product._id}</p>
                    <p>{product.description}</p>
                    <p><b>Price:</b> ${product.price}</p>
                    <p><b>Quantity:</b> {product.quantity}</p>
                    <p><b>Supplier:</b> {product.supplier}</p>
                    <button onClick={handleDeliver} className="btn btn-outline-warning mb-3">Delivered</button>
                    <form onSubmit={handleReStockItem}>
                        <input className="me-3" type="text" name="quantity" />
                        <input className="btn btn-outline-success" type="submit" value="ReStock" />
                    </form>
                </div>
                <div className="my-auto mx-auto">
                    <img src={product.img} />
                </div>
           </div>
        </div>
    );
};

export default ProductDetail;