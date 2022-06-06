import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInventoryItems from "../../Hooks/useInventoryItems";
import './ManageInventory.css';

const ManageInventory = () => {
  const [items, setItems] = useInventoryItems();
  const navigate = useNavigate();

  const handleDelete = id => {
      const proceed = window.confirm('Are you sure to delete this item?');
      if(proceed){
          const url = `https://blooming-spire-88555.herokuapp.com/inventory/${id}`
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              const remaining = items.filter(item => item._id !== id);
              setItems(remaining);
              alert('Item deleted successfully');
          })
      }
  }
  
  return (
        <div>
            <h2 className="mt-5 text-center">All Inventory Items</h2>
            <Link to="/addItem" className="btn btn-success addBtn">Add New Item</Link>
            <div>
                {
                    items.map(item => <div key={item._id} className="container items mt-5 mb-5">
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
                            <button className="btn btn-warning ms-3" onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
  );
};

export default ManageInventory;
