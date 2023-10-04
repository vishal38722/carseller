// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const Pagination = () => {
//   return (
//     <div>

//       <div className="container my-4 d-flex justify-content-center pagination-container">
//         <button onClick={handlePreviousPage} className="pagination-button">
//           <FontAwesomeIcon icon={faArrowLeft} />

//         </button>
//         <div className="page-numbers">
//           {generatePageNumbers().map((pageNum) => (
//             <button key={pageNum} onClick={() => setCurrentPage(pageNum)} className={pageNum === currentPage ? "active" : "page-number"}>
//               {pageNum}
//             </button>
//           ))}
//         </div>
//         <button onClick={handleNextPage} className="pagination-button">

//           <FontAwesomeIcon icon={faArrowRight} />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Pagination
