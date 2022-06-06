import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventoryItems from '../../../Hooks/useInventoryItems';
import './Inventory.css';

const Inventory = () => {
    const [items, setItems] = useInventoryItems();
    const navigate = useNavigate();

    // const navigateToInventoryDetail = id => {
    //     navigate(`inventory/${id}`);
    // }

    return (
        <div>
             <h2 className="mt-5 text-center">Inventory Items</h2>
                <div>
                    {
                        items.slice(0,6).map(item => <div key={item._id} className="container items mt-5 mb-5">
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="">
                            <h3 className="text-info">{item.name}</h3>
                                <p>{item.description}</p>
                                <p><b>Price:</b> ${item.price}</p>
                                <p><b>Quantity:</b> {item.quantity}</p>
                                <p><b>Supplier:</b> {item.supplier}</p>
                                <Link to={`/inventory/${item._id}`} className="btn btn-info">
                                    Update
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
                <Link to="manageInventory">
                    <button className="btn btn-success mb-5 inventoryBtn">Manage Inventory</button>
                </Link>
        </div>
    );
};

export default Inventory;