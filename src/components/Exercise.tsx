import React from 'react';

const Exercise: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className="App-exercise">
            {children}
        </div>
    );
}

export default Exercise;
