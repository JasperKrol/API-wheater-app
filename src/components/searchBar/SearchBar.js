import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setLocationHandler }) {
    const [query, setQuery] = useState('');
    // const [inputValue, setInputValue] = useState("");

    function handleClick() {
        setLocationHandler(query);
    }

    function keyPressCheck(e) {
        if (e.key === "Enter") {
            setLocationHandler(query);
        }
    }

    // const uploadOnEnter = (e) => {
    //     if(e.key === "Enter") {
    //         const newItem = {itemName: inputValue}
    //         const newItems = [...items, newItem];
    //         setItems(newItems);
    //         setInputValue("");
    //     }
    // };

    return (
        <span className="searchbar">
      <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={keyPressCheck}
          placeholder="Zoek een stad in Nederland"
      />

      <button
          type="button"
          onClick={handleClick}
      >
        Zoek
      </button>
    </span>
    );
}

export default SearchBar;