import React, { useState } from 'react';
import CategoryType from './categoryType';

const Header = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (category) => {
        // 선택한 카테고리 처리 로직 추가
        console.log('Selected category:', category);
        setSelectedCategory(category);
    };

    return (
        <header className="header">
            <a href="/">홈</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/board">게시판</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <CategoryType categoryType="main" onCategoryChange={handleCategoryChange} />
        </header>
    );
};

export default Header;