import React from 'react'
import { Link } from 'react-router'

function NotFound() {
    return (
        <>
            <div className='notfound'>
                <div className='container tw-bold text-center my-5'>
                    <img src="./images/not-found.png" alt="herborist-elf-inlaboratory" className="img-fluid py-3"></img>
                    <p className="py-5">Something went wrong: the page you are looking for does not exist.</p>
                    <Link to="/">
                        <button className='btn btn-dark'>Back to Homepage</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound;