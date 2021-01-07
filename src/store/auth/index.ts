import { loginUser, registerUser } from "./action";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface UserInfo {
        username: string;
        fullName: string;
        email: string;
        isPremium: boolean;
        role: string;
}

const initialState: UserInfo = {
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
                updateUserInfo: (state, { payload }: PayloadAction<UserInfo>) => {
                        state.email = payload.email;
                        state.fullName = payload.fullName;
                        state.isPremium = payload.isPremium;
                        state.role = payload.role;
                        state.username = payload.username;
                },
                changeUserInfo: (state, { payload }: PayloadAction<UserInfo>) => {
                        state.email = payload.email;
                        state.fullName = payload.fullName;
                },
        },
});

export const userActions = {
        ...auth.actions,
        loginUser,
        registerUser,
};
export const authReducer = auth.reducer;
export const authSelecter = (state: RootState) => state.auth;
