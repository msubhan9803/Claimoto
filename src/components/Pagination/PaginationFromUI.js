import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function PaginationFromUI({ recordsCount, pageIndex, recordsPerPage, handler }) {
    const pagesCount = Math.ceil(recordsCount / recordsPerPage);

    return (
        <div className="ltn__pagination-area text-center">
            {recordsCount > 0 ?
                <div className="ltn__pagination">
                    <ul>
                        {pageIndex !== 0 &&
                            <li>
                                <a role="button" onClick={() => handler(pageIndex - 1)}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                                </a>
                            </li>
                        }
                        {[...Array(pagesCount)].map((elementInArray, index) => (
                            <li key={index} className={pageIndex === index && "active"}>
                                <a onClick={() => handler(index)} role="button">{index + 1}</a>
                            </li>
                        )
                        )}
                        {pageIndex !== pagesCount - 1 &&
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

export default PaginationFromUI;