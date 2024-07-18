import React, { useState, useCallback } from 'react';
import _ from 'lodash';

const DebouncedInput = () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);

    // Debounce the search function
    const debouncedSearch = useCallback(
        _.debounce((query) => {
            // Simulate an API call
            console.log('Searching for:', query);
            setResults([`Result for ${query}`]);
        }, 1000),
        []
    );

    const handleChange = (e) => {
        const query = e.target.value;
        setValue(query);
        debouncedSearch(query);
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

export default DebouncedInput;
