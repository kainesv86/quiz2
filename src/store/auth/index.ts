import { loginUser } from "./action";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface UserInfo {
        username: string;
        fullname: string;
        email: string;
        isPremium: boolean;
        role: string;
}

const initialState: UserInfo = {
        username: "",
        fullname: "",
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
                        state.fullname = payload.fullname;
                        state.isPremium = payload.isPremium;
                        state.role = payload.role;
                        state.username = payload.username;
                },
        },
});

export const userActions = {
        ...auth.actions,
        loginUser,
};
export const authReducer = auth.reducer;
export const authSelecter = (state: RootState) => state.auth;
