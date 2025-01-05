import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../reducer/authReducer';

const AuthHeader = () => {
    const userInfo = useSelector(state => state.userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = async () => {
        try {
            const response = await fetch("/api/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (response.ok) {
                dispatch({type: LOGOUT})
                navigate("/")
            }
        } catch (error) {
            console.error("로그아웃 실패", error)
        }
    }

    return (
        <>
            {userInfo.isLogin ?
                <div style={{display: "flex",  justifyContent: "flex-end", padding:"5px 20px"}}>
                    <a onClick={logout}>로그아웃</a>
                </div>
                :
                <div style={{display: "flex",  justifyContent: "flex-end", padding:"5px 20px"}}>
                    <Link to='/login' >로그인</Link>
                    &nbsp;  |  &nbsp;  
                    <Link to='/signup'>회원가입</Link>
                </div>
            }
        </>
    );
};

export default AuthHeader;