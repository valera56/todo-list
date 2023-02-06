import React from 'react'
import { useContext, useEffect } from "react";
import { todosContext } from '../contexts/TodosContext';

 function Plaginetion() {
  const { limit, totalCount, getPagination, page, setPage } =useContext(todosContext)

useEffect(() => {
  getPagination(page);
}, [page]);

const pageLength = Math.ceil(totalCount / limit);
return pageLength && [...Array(pageLength).keys()].map((el) => (
  <div className='plagin'>
    <button className={page === el + 1 ? "active" : ""} onClick={() => setPage(el + 1)}>{el + 1}</button>
  </div>
  
));

  
}

export default Plaginetion