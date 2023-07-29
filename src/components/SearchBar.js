import { useState } from "react";

const SearchBar = ({ filterProducts  }) => {
    const [search, setSearch] = useState('');
    const [inStock, setInStock] = useState(false);
    const handleQueryChange = e => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        filterProducts(inputValue);
    };
    const handleInStockChange = e => {
        const isChecked = e.target.checked;
        setInStock(isChecked);
        filterProducts(search , isChecked);
    };

    return (
        <form className="productSearch">
            <input type="text" placeholder="Search..." value={search}onChange={(event)=> handleQueryChange(event)} />
            <input type="checkbox" id="inStock" name="inStock" checked={inStock} onChange={(event)=>handleInStockChange(event)}/>
            <label htmlFor="inStock">In Stock</label>
        </form>
    );
};

export default SearchBar;