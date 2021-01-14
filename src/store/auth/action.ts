import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../service/http";
import { userActions, UserInfo } from ".";

import { UserLoginDto, UserRegisterDto } from "./dto";
import { store } from "..";

interface ApiResponse<T> {
        data: T;
        message?: string;
        details?: {
                [key: string]: string;
        };
}

export const loginUser = createAsyncThunk<{}, UserLoginDto, {}>("loginUser", async (input, thunkApi) => {
        const { dispatch } = thunkApi;
        try {
                console.log("Here");
                await http.post("/auth/login", input);
                const res = await http.get<ApiResponse<UserInfo>>("/user");
                dispatch(userActions.updateUserInfo(res.data.data));
        } catch (err) {
                console.log("Gãy");
        }
});

export const registerUser = createAsyncThunk<{}, UserRegisterDto, {}>("registerUSer", async (input, thunkApi) => {
        const { dispatch } = thunkApi;
        try {
                await http.post("/auth/register", input);
                const res = await http.get<UserInfo>("/user");
                dispatch(userActions.updateUserInfo(res.data));
                console.log(res);
        } catch (err) {
                console.log(input);
                console.log("Gãy");
        }
});
