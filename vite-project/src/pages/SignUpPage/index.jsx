import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [state, setState] = useState({
        value: { nickname: "", email:"", password: ""},
        error: { nickname: "", email:"", password: ""},
    });

    const navigate = useNavigate()

    const handleChange = (event) => {
        setState({
            ...state,
            value: {
                ...state.value,
                [event.target.name] : event.target.value
            }
        })
    }

    const handleReset = (event) => {
        setState({
            value: { nickname: "", email:"", password: ""},
            error: { nickname: "", email:"", password: ""},
        })
    }

    const handleSubmit = async () => {
        const errors = {
            nickname: /^\w+$/.test(state.value.nickname) ? '' : '영문, 숫자만 입력하세요.',
            email: /^\S+@\S+\.\S+$/.test(state.value.email) ? '' : '유효한 이메일 주소를 입력하세요.',
            password: /^.{3,6}$/.test(state.value.password) ? '' : '3자 이상 6자 이하로 입력하세요.',
        }
    
        setState({
            ...state,
            error: errors
        })

        if (!errors.nickname && !errors.email && !errors.password) {

            const isSuccess = await signUp(state.value)

            if (isSuccess) {
                console.log("회원가입 성공");
                navigate("/login")
            } else {
                console.log("회원가입 중 오류 발생");
                alert("회원가입중 오류가 발생했습니다. 나중에 다시 시도해 주세요.")
            }
        }
    }

    const signUp = async (userInfo) => {
        console.log("회원가입중");

        try{
            const response = await fetch("/api/signup", {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            if (response.status === 201) {
                const result = await response.json();
                console.log("회원가입 성공", result)
                return true;
            } else {
                console.log("회원가입 실패");
                return false;
            }
        } catch (error) {
            console.error("회원가입 중 오류 발생:", error);
            return false;
        }
    }

    return (
        <>
            <h1>회원가입 페이지</h1>
            <div>
                <label>닉네임:</label>
                <input type="text" name='nickname' value={state.value.nickname} onChange={handleChange}/>
                <span>{state.error.nickname}</span>
            </div>
            <div>
                <label>이메일:</label>
                <input type="text" name='email' value={state.value.email} onChange={handleChange}/>
                <span>{state.error.email}</span>
            </div>
            <div>
                <label>비밀번호:</label>
                <input type="password" name='password' value={state.value.password} onChange={handleChange}/>
                <span>{state.error.password}</span>
            </div>
            <button onClick={handleReset}>초기화</button>
            <button onClick={handleSubmit}>회원가입</button>
            
        </>
    );
};

export default SignUpPage;