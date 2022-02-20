



import React from 'react'
function Pagination({ recordsCount, pageIndex, recordsPerPage, handler }) {
    const pagesCount = Math.ceil(recordsCount / recordsPerPage);


    return (
        <div className="ltn__pagination-area text-center">
            <div className="ltn__pagination">
                <ul>
                    {pageIndex !== 1 &&
                        <li>
                            <a role="button" onClick={()=> handler(pageIndex - 1)}>
                                <i className="fas fa-chevron-left" />
                            </a>
                        </li>
                    }
                    {[...Array(pagesCount)].map((elementInArray, index) => (
                        <li className={pageIndex === index + 1 && "active"}>
                            <a onClick={()=> handler(index + 1)} role="button">{index + 1}</a>
                        </li>
                    )
                    )}
                    {pageIndex !== pagesCount &&
                        <li>
                            <a role="button" onClick={()=> handler(pageIndex + 1)}>
                                <i className="fas fa-chevron-right" />
                            </a>
                        </li>
                    }

                </ul>
            </div>
        </div>)
}

export default Pagination;