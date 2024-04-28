import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    // Função para ir para a página anterior
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    // Função para ir para a próxima página
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    // Gera os números de página a serem exibidos
    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    return (
        <div className="flex justify-center items-center mt-16">
            <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="mr-4 px-3 py-2 bg-[#38177A] text-gray-700 rounded-full focus:outline-none disabled:opacity-50"
            >
                <span><img src='assets/Artigos/_.png' /></span>
            </button>
            <div className="flex items-center px-2 space-x-2">
                {currentPage > 3 && <span className="mr-2"></span>}
                {getPageNumbers().map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={`px-3 py-1 bg-[#CBB3FA] text-gray-700 rounded-full focus:outline-none ${
                            pageNumber === currentPage ? 'font-bold' : ''
                        }`}
                    >
                        {pageNumber}
                    </button>
                ))}
                {currentPage < totalPages - 2 && <span className="ml-2"></span>}
            </div>
            <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="ml-4 px-3 py-2 bg-[#38177A] text-gray-700 rounded-full focus:outline-none disabled:opacity-50"
            >
                <span><img src='assets/Artigos/_ (1).png' /></span>
            </button>
        </div>
    );
};

export default Pagination;
