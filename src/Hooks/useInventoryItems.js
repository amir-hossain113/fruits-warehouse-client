import React, { useEffect, useState } from 'react';

const useInventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://blooming-spire-88555.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    return [items, setItems];
};

export default useInventoryItems;