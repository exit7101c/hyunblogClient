import React from 'react';
import '../common/css/style.css';
const Profile = () => {
    return (
        <div className="profile-container">
            <img className="profile-image"
                 src="https://images.christiantoday.co.kr/data/images/full/327531/image.png?w=654"
                 alt="Profile" />
            <div className="profile-info">
                <p>사용자</p>
                <p>프로필</p>
                <p>정보123</p>
            </div>
        </div>
    );
};

export default Profile;