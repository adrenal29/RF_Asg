import React from 'react'

const ProgressBar = ({ currentValue, maxValue }) => {
    const percentage = (currentValue / maxValue) * 100;

    return (
        <div className="progress-bar-container">
            <div className="progress-bar bg-gray-300 h-2  relative">
                <div className="progress-blue bg-blue-500 h-full" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
    }
export default ProgressBar