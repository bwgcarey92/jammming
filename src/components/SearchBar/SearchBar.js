import React, { useState } from "react";

const SearchBar = () => {
    
    const [search, setSearch] = useState("");

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        console.log('Searching', search);
    };

    return (
        <div className="Search-Bar-Container">
            <input 
            type="text" 
            placeholder="Search"
            value={search}
            onChange={handleInputChange} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};



export default SearchBar;
