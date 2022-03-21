import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function SearchComponent({ search_options, search_text, search_option, handleChange }) {

    return (
        <React.Fragment>

            <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                <form action="#" _lpchecked={1}>
                    <input
                        type="text"
                        placeholder="Search ..."
                        onChange={handleChange}
                        name="search_text"
                        className=""
                        value={search_text}
                    />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <select name="search_option" value={search_option} onChange={handleChange} className='select search-options'>
                        <option  value={""}>Search By</option>
                        {search_options.map((op) => (
                            <option key={op.value} value={op.value}>{op.label}</option>

                        ))}
                    </select>
                </form>

            </div>


        </React.Fragment>
    )
}

export default SearchComponent;
