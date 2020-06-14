import React, { useState } from 'react';
import '../styles/search.css';

const Search = ({ onSubmit }) => {

    const [input, setInput] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (input !== '') {
            onSubmit(input);
        }
    }

    return (

        <div className="search-box">
            <form className="subnav-search float-left col-4" onSubmit={onSubmitForm}>
                <input className="form-control subnav-search-input  auto-search-input "
                    placeholder="Enter the user name..."
                    type='text'
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }} />
            </form>
        </div>);

}

export default Search;