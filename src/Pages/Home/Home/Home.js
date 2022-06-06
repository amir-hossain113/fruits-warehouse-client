import React from 'react';
import FruitsGallery from '../../FruitsGallery/FruitsGallery';
import ManageInventory from '../../ManageInventory/ManageInventory';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <FruitsGallery></FruitsGallery>
        </div>
    );
};

export default Home;