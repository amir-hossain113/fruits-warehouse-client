import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    console.log(user);
    const onSubmit = data => {
        const productData = {...data, email: user.email, price: Number(data.price), quantity: Number(data.quantity)}
        console.log(data.price);
        console.log(productData)
        const url = `https://blooming-spire-88555.herokuapp.com/inventory`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };

    return (
        <div className="w-50 mx-auto mb-5 mt-5 addItemField">
            <h2 className="mt-3 mb-3 text-center">Please add a new item</h2>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" placeholder="Name" type="text" {...register("name", {required: true, maxLength: 20})} />
                <textarea className="mb-2" placeholder="Description" {...register("description")}></textarea>
                <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
                <input className="mb-2" placeholder="Quantity" type="number" {...register("quantity")} />
                <input className="mb-2" placeholder="Supplier Name" type="text" {...register("supplier")} />
                <input className="mb-2" placeholder="Photo URL" type="text" {...register("img")} />
                <input className="btn btn-success" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;