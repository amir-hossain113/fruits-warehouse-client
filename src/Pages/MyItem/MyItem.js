import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useInventoryItems from '../../Hooks/useInventoryItems';
import './MyItem.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [email, useEmail] = useState(user?.email);
    const [prod, setProd] = useState([]);
    // const [items, setItems] = useInventoryItems();

    useEffect(() => {
        const url = `https://blooming-spire-88555.herokuapp.com/inventory/myItem/${email}`
        fetch(url, {
            method: 'get',
            headers: {
                'content-type' : 'application/json'
            },
            
        })
        .then(res => res.json())
        .then(data => {
            setProd(data);
        })
    }, [user])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this item?');
        if(proceed){
            const url = `https://blooming-spire-88555.herokuapp.com/inventory/myItem/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = prod.filter(item => item._id !== id);
                setProd(remaining);
                alert('Item deleted successfully');
            })
        }
    }

    return (
        <div>
            <h2 className="text-center mt-4 mb-2">My Items</h2>
            {
                prod.map(item => <div className="container mt-5 mb-5">
                    <div className="myItem">
                        <div className=" p-4 divOne me-5">
                            <h4>ID: {item._id}</h4>
                            <h3 className="text-info">Name: {item.name}</h3>
                            <h5>Description:</h5>
                            <p>{item.description}</p>
                        </div>
                        <div className="itemImg ms-5 p-4 divTwo">
                            <p><b>Price:</b> ${item.price}</p>
                            <p><b>Quantity:</b> {item.quantity}</p>
                            <p><b>Supplier:</b> {item.supplier}</p>
                            <img src={item.img} alt="" />
                            <br />
                            <button className="btn btn-warning ms-3 mt-3 mx-0" onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
                    </div>
                </div>)
            } 
        </div>
    );
};

export default MyItem;