import React from 'react'

function SearchBar() {
    return (
        <React.Fragment>
            <form _lpchecked={1}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search product..."
                    className=""
                />
                <button type="submit">
                    <i className="fas fa-search" />
                </button>
            </form>
        </React.Fragment>
    )
}

export default SearchBar