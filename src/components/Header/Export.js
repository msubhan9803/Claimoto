import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function ExportComponent({ }) {


    const _download = () => {

    }






    return (
        <React.Fragment>

            <li>
                <div className="short-by text-center">
                    <select onChange={_download} name="sort_name" className="nice-select">
                        <option disabled value={""}>Downlaod</option>
                        <option value={1} >
                            CSV
                        </option>
                        <option value={2} >
                            Excle
                        </option>

                    </select>
                </div>
            </li>
        </React.Fragment>
    )
}

export default ExportComponent;
