



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Pagination({ recordsCount, pageIndex, recordsPerPage, handler }) {

    const pagesCount = Math.ceil(recordsCount / recordsPerPage);


    return (
        <div className="ltn__pagination-area text-center">
            {recordsCount > 0 ?
                <div className="ltn__pagination">
                    <ul>
                        {pageIndex !== 1 &&
                            <li>
                                <a role="button" onClick={() => handler(pageIndex - 1)}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </a>
                            </li>
                        }
                        {[...Array(pagesCount)].map((elementInArray, index) => (
                            <li key={index} className={pageIndex === index + 1 && "active"}>
                                <a onClick={() => handler(index + 1)} role="button">{index + 1}</a>
                            </li>
                        )
                        )}
                        {pageIndex !== pagesCount &&
                            <li>
                                <a role="button" onClick={() => handler(pageIndex + 1)}>
                                    <FontAwesomeIcon icon={faChevronRight} />

                                </a>
                            </li>
                        }

                    </ul>
                </div>
                : ""}
        </div>)
}

export default Pagination;