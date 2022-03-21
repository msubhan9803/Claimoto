import React from 'react'


function SortComponent({ sort_name, sort_options, handleChange }) {


    return (
        <React.Fragment>
            <li>
                <div className="short-by text-center">
                    <select onChange={handleChange} name="sort_name" value={sort_name} className="nice-select">
                        <option disabled value={""}>Sort By</option>
                        {sort_options.map((op) => (
                            <option key={op.value} value={op.value}>{op.label}</option>

                        ))}
                    </select>
                </div>
            </li>
        </React.Fragment>
    )
}

export default SortComponent;
