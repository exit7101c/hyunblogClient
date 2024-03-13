import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories data here
        axios.get('http://localhost:8080/hb/category/main')  // Adjust the API endpoint accordingly
            .then(response => {
                setCategories(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <header className="header">
            {categories.map((category,index) => (
                <React.Fragment key={category.categoryId}>
                    <Link to={category.url === '/' ? '/' : '/board'}>{category.categoryName}</Link>
                    {index !== categories.length - 1 && <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
                </React.Fragment>
            ))}
        </header>
    );
};

export default Header;