import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryType = ({ categoryType, onCategoryChange }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // 카테고리를 불러오는 API 호출
        axios.get(`/hb/category/${categoryType}`)
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, [categoryType]);

    const handleCategoryChange = (selectedCategory) => {
        // 선택한 카테고리를 부모 컴포넌트로 전달
        onCategoryChange(selectedCategory);
    };

    return (
        <div className="category">
            {categories.map(category => (
                <button key={category.id} onClick={() => handleCategoryChange(category)}>
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryType;