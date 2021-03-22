import React from 'react';
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
    return (
        <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={2000}
        />
    );
};

export default LoaderSpinner;