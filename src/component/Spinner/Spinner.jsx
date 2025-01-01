import React from "react";

import "./style.scss";

const Spinner = () => {
    const letters = "Tech Master".split("");

    return (
        <div className="loading-page">
            <h1 className="loading-text">
                {letters.map((letter, index) => (
                    <span key={index} style={{"--i": index}}>
            {letter}
          </span>
                ))}
            </h1>
        </div>
    );
};


export default Spinner;
