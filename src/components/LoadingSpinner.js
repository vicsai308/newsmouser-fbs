import React from 'react'

const LoadingSpinner = () => {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border my-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
}

export default LoadingSpinner
