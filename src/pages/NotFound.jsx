import React from 'react'
import { Link } from 'react-router'

function NotFound() {
    return (
        <>
            <div className='notfound'>
                <div className='container tw-bold text-center my-5'>
                    <h1>Something went wrong</h1>
                    <Link to="/">
                        <button className='btn btn-dark my-5'>Back to Homepage</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound;