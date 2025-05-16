import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600">404</h1>
            <p className="mt-4 text-lg text-gray-700">Page Not Found</p>
            <a href="/" className="mt-6 text-blue-500 hover:underline">
                Go back to Home
            </a>
        </div>
    );
}

export default NotFoundPage;

