import React, { useState }from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        searchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    };

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    };

    return (
        <form className="search">
            <input value={searchValue} onChange={handleChange} type="text" />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}

export default Search;
