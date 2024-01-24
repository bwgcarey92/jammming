import React, { useState, useCallback } from "react";
import Spotify from "../../utilities/Spotify";
import './SearchBar.css'



const SearchBar = (props) => {
    
    const [term, setTerm] = useState("");

    const handleInputChange = useCallback((e) => {
        setTerm(e.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className="Search-Bar-Container">
            <input 
                placeholder="Enter a song, artist, or album"
                onChange={handleInputChange} 
            />
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    );
};



export default SearchBar;
