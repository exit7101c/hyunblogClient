import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HiHome, HiOutlineViewBoards, HiOutlineLogin } from "react-icons/hi";
import { url } from '../common/com'
const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories data here
        axios.get(`${url}/hb/category/main`)  // Adjust the API endpoint accordingly
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <header className="header">
            {categories.map((category, index) => (
                <React.Fragment key={category.categoryId}>
                    <Link to=
                        {
                            category.url === '/' ? '/' :
                            category.url === '/board' ? '/board' : "/login"
                        }
                    >
                        {
                            category.url === '/' ? <HiHome /> :
                            category.url === '/board' ? <HiOutlineViewBoards /> : <HiOutlineLogin />
                        }
                    </Link>
                    {index !== categories.length - 1 && <span>&nbsp;·&nbsp;</span>}
                </React.Fragment>
            ))}
        </header>
    );
};

export default Header;