import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function SortComponent({ sort_name, sort_options }) {


    const _handleChange = () => {

    }






    return (
        <React.Fragment>
            <li>
                <div className="short-by text-center">
                    <select onChange={_handleChange} name="sort_name" value={sort_name} className="nice-select">
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
