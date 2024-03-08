import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <a href="/">홈</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/board">게시판</a>
        </header>
    );
};

export default Header;