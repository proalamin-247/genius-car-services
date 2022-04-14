// import React from 'react';
import React, { useState, useEffect } from 'react';


export default function Footer() {
    const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear())
    useEffect(() => {
        getYear();
    }, [])
    return (
        <div className='text-center mt-5 mb-2'>
            &copy; {date} Genius Car Services. All rights reserved.
        </div>
    );
}