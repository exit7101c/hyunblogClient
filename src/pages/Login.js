import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from '../common/com'
const Login = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크

    const navigate = useNavigate();
    const handleLogin = async (event) => {
        // 로그인 처리 로직을 구현합니다.
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 100));

        const response = await fetch(
            `${url}/hb/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: userId,
                    password: password,
                }),
            }
        );
        const result = await response.json();

        if (response.status === 200) {
            setLoginCheck(false);
            // Store token in local storage
            sessionStorage.setItem("token", result.token);
            sessionStorage.setItem("userId", result.userId); // 여기서 userid를 저장합니다.
            console.log("로그인성공, 로그인아이디:" + result.userId);
            console.log(result)
            navigate("/"); // 로그인 성공시 홈으로 이동
        } else {
            setLoginCheck(true);
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <input type="text"
                               id="userId"
                               value={userId}
                               onChange={(e) => setUserId(e.target.value)}
                               placeholder="아이디" />
                    </div>
                    <div className="input-container">
                        <input type="password"
                               id="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder="비밀번호" />
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </form>
                <div className="extra-links">
                    <span>비밀번호를 잊으셨나요?</span>
                    <span> · </span>
                    <span>회원가입</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
