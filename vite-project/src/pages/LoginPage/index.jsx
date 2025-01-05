import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../reducer/authReducer';

const LoginPage = () => {
    // 사용자 입력 값을 관리하는 상태
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // 입력 값의 유효성 검사를 위한 에러 메시지 상태
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    
    // 입력 필드가 사용자의 포커스를 받았거나 잃었는지 추적하는 상태
    const [touched, setTouched] = useState({
        email: false,
        password: false,
    });
    
    // 입력 값을 검증하는 함수
    const validate = (values) => {
        const errors = {
          email: "",
          password: ""
        };
    
        // 이메일 필드가 비어있으면 에러 메시지 설정
        if (!values.email) {
          errors.email = "이메일을 입력하세요.";
        }

        // 비밀번호 필드가 비어있으면 에러 메시지 설정
        if (!values.password) {
          errors.password = "비밀번호를 입력하세요.";
        }

        return errors; // 에러 메시지를 반환
    };
    
    // 입력 필드 값이 변경될 때 호출
    const handleChange = (event) => {
        setValues({
          ...values, // 기존 값 유지
          [event.target.name]: event.target.value // 변경된 필드의 값 업데이트
        });
        console.log(values);
    };
    
    // 입력 필드가 포커스를 잃었을 때 호출
    const handleBlur = (event) => {
        setTouched({
          ...touched, // 기존 값 유지
          [event.target.name]: true // 해당 필드의 `touched` 상태를 true로 설정
        });
    };
    
    // 폼 제출 시 호출
    const handleSubmit = async (event) => {
        event.preventDefault(); // 폼 기본 동작(페이지 리로드) 방지
    
        // 모든 필드를 `touched` 상태로 설정
        const nextTouched = {
          email: true,
          password: true
        };
        setTouched(nextTouched);
    
        // 입력 값을 검증하고 에러 메시지 업데이트
        const errors = validate(values);
        setErrors(errors);

        // 에러가 있는 경우 제출을 중단
        if (Object.values(errors).some(Boolean)) return;

        const isSuccess = await login(values)
        if (isSuccess) {
            console.log("로그인 성공");
            dispatch({type: LOGIN, payload: isSuccess})
            navigate("/")
        } else {
            console.log("로그인 실패");
            alert("로그인 실패");
            setValues({
                email: "",
                password: ""
            })
        }
    };

    const login = async (userInfo) => {
        console.log("로그인중");
        try {
            const response = await fetch("/api/login", {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            if (response.status === 200) {
                const result = await response.json();
                console.log("로그인 성공", result)
                return result;
            } else {
                console.log("로그인 실패");
                return false;
            }
        } catch (error) {
            console.log("로그인 중 오류 발생", error)
            return false;
        }
    }
    
    // `values` 상태가 변경될 때마다 에러 메시지를 업데이트
    useEffect(() => {
        setErrors(validate(values));
    }, [values]);
    
    return (
        <>
            <h1>로그인 페이지</h1>
            <form noValidate onSubmit={handleSubmit}>
                <div>
                    {/* 이메일 입력 필드 */}
                    <input 
                        type="text" 
                        name='email' 
                        placeholder="Email" 
                        autoFocus 
                        value={values.email} 
                        onChange={handleChange}
                        onBlur={handleBlur} // 블러 이벤트 핸들러
                    />
                    {/* 이메일 입력 필드에 에러가 있을 경우 메시지 표시 */}
                    {touched.email && errors.email && (<span>{errors.email}</span>)}
                </div>
                <div>
                    {/* 비밀번호 입력 필드 */}
                    <input 
                        type="password"
                        name='password' 
                        placeholder="Password" 
                        value={values.password} 
                        onChange={handleChange}
                        onBlur={handleBlur} // 블러 이벤트 핸들러
                    />
                    {/* 비밀번호 입력 필드에 에러가 있을 경우 메시지 표시 */}
                    {touched.password && errors.password && (<span>{errors.password}</span>)}
                </div>
                {/* 로그인 버튼 */}
                <button>Login</button>
            </form>
        </>
    );
};

export default LoginPage;
