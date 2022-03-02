import React from 'react';

function PaginationFromUI({ recordsCount, pageIndex, recordsPerPage, handler }) {
    const pagesCount = Math.ceil(recordsCount / recordsPerPage);
    console.log("pagination array: ", [...Array(pagesCount)])

    return (
        <div className="ltn__pagination-area text-center">
            {recordsCount > 0 ?
                <div className="ltn__pagination">
                    <ul>
                        {pageIndex !== 0 &&
                            <li>
                                <a role="button" onClick={() => handler(pageIndex - 1)}>
                                    <i className="fas fa-chevron-left" />
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
                                    <i className="fas fa-chevron-right" />
                                </a>
                            </li>
                        }

                    </ul>
                </div>
                : ""}
        </div>)
}

export default PaginationFromUI;