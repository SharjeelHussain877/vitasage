import React from 'react'
import "./spinner.css"
const CustomSpinner = () => {
    return (
        <svg class="loader" viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg">
            <circle
                className="active stroke-primary"
                pathLength="360"
                fill="transparent"
                stroke-width="32"
                cx="192"
                cy="192"
                r="176"
            ></circle>
            <circle
                className="track stroke-primary-200 opacity-30"
                pathLength="360"
                fill="transparent"
                stroke-width="32"
                cx="192"
                cy="192"
                r="176"
            ></circle>
        </svg>
    )
}

export default CustomSpinner