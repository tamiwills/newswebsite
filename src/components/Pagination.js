import React, { useState } from 'react';

const Pagination = ({postsPerPage, totalPost, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPost/postsPerPage); i++){
        pageNumbers.push(i);
    }

    const [activePage, setActivePage] = useState(1);

    const handlePageClick = (num) => {
        setActivePage(num);
    }

  return (
    <div>
        <nav>
            <ul className='flex box-border'>
                {pageNumbers.map((num) => (
                    <li key={num} className={`border p-2 ${activePage === num ? "bg-black text-white" : ""}`}>
                        <a href='!#' onClick={() => {
                            handlePageClick(num);
                            paginate(num);
                        }}>
                            {num}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    </div>
  )
}

export default Pagination