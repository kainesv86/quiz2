import { loginUser, registerUser, getUserInfo, changeUser } from "./action";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { UserInfoDto } from "./dto";

export interface AuthState extends UserInfoDto {
        isLogin: boolean;
}

export const initialState: AuthState = {
        isLogin: false,
        username: "",
        fullName: "",
        email: "",
        isPremium: false,
        role: "USER",
};

const auth = createSlice({
        name: "auth",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
                builder.addCase(changeUser.fulfilled, (state, { payload }) => {
                        const newState = { ...state, ...initialState };
                        newState.isLogin = true;
                        console.log(newState);
                        return newState;
                });
                builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
                        const newState = { ...state, ...payload };
                        newState.isLogin = true;
                        return newState;
                });
                builder.addCase(getUserInfo.rejected, (state, { payload }) => {
                        console.log(payload);
                        state.isLogin = false;
                });
                builder.addCase(loginUser.fulfilled, (state, { payload }) => {
                        state.isLogin = true;
                });
                builder.addCase(registerUser.fulfilled, (state, { payload }) => {
                        state.isLogin = true;
                });
        },
});

export const userActions = {
        ...auth.actions,
        loginUser,
        registerUser,
        getUserInfo,
        changeUser,
};
export const authReducer = auth.reducer;
export const authSelecter = (state: RootState) => state.auth;
