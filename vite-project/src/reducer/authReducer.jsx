export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

const initialState = {
    isLogin: false,
    nickname:"",
    email:"",
    password:"",seddssssssssssss
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
                nickname: action.payload.nickname,
                email: action.payload.email,
                password: action.payload.password,
            }
        case LOGOUT:
            return {
                ...state,
                isLogin: false,
                nickname:"",
                email:"",
                password:"",
            }
        default:
            return state
    }
};

export default authReducer;