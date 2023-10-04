// Cars.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CarCard from './CarCard';
import carData from '../Data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cars.css';

const Cars = ({ searchQuery }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const currentPageFromUrl = parseInt(new URLSearchParams(location.search).get('page')) || 1;

    const [currentPage, setCurrentPage] = useState(currentPageFromUrl);
    const pageSize = 6;

    useEffect(() => {
        navigate(`?page=${currentPage}`);
    }, [currentPage, navigate]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const filteredCars = carData.cars.filter(car =>
        car.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const displayedCars = filteredCars.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredCars.length / pageSize);

    const generatePageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.min(totalPages, 10); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    return (
        <div style={{ marginBottom: '40px' }}>
            <div className='row'>
                {displayedCars.map((car, index) => {
                    return (
                        <div key={index} className="col-lg-4">
                            <CarCard url={car.url} brand={car.brand} model={car.model} capacity={car.capacity} releaseYear={car.releaseYear} fuel={car.fuel} mileage={car.mileage} rent={car.rent} type={car.type} />
                        </div>
                    )
                })}
            </div>

            <div className="pagination-container">
                <button onClick={handlePreviousPage} className="pagination-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="page-numbers">
                    {generatePageNumbers().map((pageNum) => (
                        <button key={pageNum} onClick={() => setCurrentPage(pageNum)} className={pageNum === currentPage ? "active" : "page-number"}>
                            {pageNum}
                        </button>
                    ))}
                </div>
                <button onClick={handleNextPage} className="pagination-button">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default Cars;
