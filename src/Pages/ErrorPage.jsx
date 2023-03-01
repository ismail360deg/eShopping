import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '../assets/images/error-page.gif';

const ErrorPage = () => {
    return (
        <section className="flex align-items-center h-full sm:p-16 bg-gray-50 text-gray-800">
            <div className="container flex flex-col align-items-center justify-content-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img className='w-25' src={errorPage} alt="" />
                <p className="fw-bold fs-1 mb-5">Looks like our services are currently offline</p>
                <Link to='/' rel="noopener noreferrer" className=" px-8 py-3 fw-semibold buy__btn text-white">Back to homepage</Link>
            </div>
        </section>
    );
};

export default ErrorPage;