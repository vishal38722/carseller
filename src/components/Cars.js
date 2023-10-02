import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CarCard from './CarCard';
import carData from '../Data.json';

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
        <div className='row'>
            {displayedCars.map((car, index) => {
                return (
                    <div key={index} className="col-lg-4">
                        <CarCard url={car.url} brand={car.brand} model={car.model} capacity={car.capacity} releaseYear={car.releaseYear} fuel={car.fuel} mileage={car.mileage} rent={car.rent} type={car.type} />
                    </div>
                )
            })}
            <div>
                <div
                    style={{ position: "fixed", bottom: "0px", left: "50%", transform: "translateX(-50%)" }}
                    className="container my-4 d-flex justify-content-center"
                >
                    <button onClick={handlePreviousPage}>&larr; Previous</button>
                    <div>
                        {generatePageNumbers().map((pageNum) => (
                            <button key={pageNum} onClick={() => setCurrentPage(pageNum)} className={pageNum === currentPage ? "active" : ""}>{pageNum}</button>
                        ))}
                    </div>
                    <button onClick={handleNextPage}>Next &rarr;</button>
                </div>
            </div>
        </div>
    )
}

export default Cars;
