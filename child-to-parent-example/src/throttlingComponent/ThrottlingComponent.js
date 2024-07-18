import React, { useState, useCallback } from 'react';
import _ from 'lodash';

const ThrottledInput = () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);

    // Throttle the search function
    const throttledSearch = useCallback(
        _.throttle((query) => {
            // Simulate an API call
            console.log('Searching for:', query);
            setResults([`Result for ${query}`]);
        }, 1000),
        []
    );

    const handleChange = (e) => {
        const query = e.target.value;
        setValue(query);
        throttledSearch(query);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} placeholder="Search..." />
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default ThrottledInput;
