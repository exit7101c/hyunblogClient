import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
            .then(response => {
                setData(response.data);
                console.log(setData)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            {/* 사용할 데이터를 여기에 렌더링 */}
        </div>
    );
};

export default App;
