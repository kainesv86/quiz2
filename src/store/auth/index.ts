import { loginUser, registerUser, getUserInfo } from "./action";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { UserInfoDto } from "./dto";

export interface AuthState extends UserInfoDto {
        isLogin: boolean;
}

const initialState: AuthState = {
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
        reducers: {
                // updateUserInfo: (state, { payload }: PayloadAction<UserInfo>) => {
                //         console.log(payload);
                //         state.email = payload.email;
                //         state.fullName = payload.fullName;
                //         state.isPremium = payload.isPremium;
                //         state.role = payload.role;
                //         state.username = payload.username;
                // },
                // changeUserInfo: (state, { payload }: PayloadAction<UserInfo>) => {
                //         state.email = payload.email;
                //         state.fullName = payload.fullName;
                // },
        },
        extraReducers: (builder) => {
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
        },
});

export const userActions = {
        ...auth.actions,
        loginUser,
        registerUser,
        getUserInfo,
};
export const authReducer = auth.reducer;
export const authSelecter = (state: RootState) => state.auth;
