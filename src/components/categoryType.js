import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryType = ({ categoryType }) => {
    // 상태 초기화
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        // 데이터 로딩
        axios.get(`http://localhost:8080/hb/category/${categoryType}`)
            .then(function (response) {
                // 성공 핸들링
                console.log(response.data);
                setCategoryData(response.data);
            })
            .catch(function (error) {
                // 에러 핸들링
                console.log(error);
            })
            .finally(function () {
                // 항상 실행되는 영역
            });
    }, [categoryType]); // categoryType이 변경될 때마다 useEffect 다시 실행

    if (!categoryData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <HeaderComponent categoryData={categoryData} />
        </div>
    );
};

// Header 부분을 별도의 컴포넌트로 추출
const HeaderComponent = ({ categoryData }) => {

    return (
        <div>
            {categoryData.title}
        </div>
    );
};

export default CategoryType;