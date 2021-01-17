import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../service/http";

import { UserLoginDto, UserRegisterDto, UserInfoDto, ChangeUserDto } from "./dto";

export interface ApiResponse<T> {
        data: T;
        message?: string;
        details?: {
                [key: string]: string;
        };
}

export const loginUser = createAsyncThunk<boolean, UserLoginDto, { rejectValue: string }>("loginUser", async (input, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
                await http.post("/auth/login", input);

                return true;
        } catch (err) {
                return rejectWithValue("Error");
        }
});

export const resetUser = createAsyncThunk<UserInfoDto, void, { rejectValue: string }>("UserInfo", async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
                const res = await http.get<ApiResponse<UserInfoDto>>("/user");
                return res.data.data;
        } catch (err) {
                return rejectWithValue("Error");
        }
});
export const getUserInfo = createAsyncThunk<UserInfoDto, void, { rejectValue: string }>("UserInfo", async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
                const res = await http.get<ApiResponse<UserInfoDto>>("/user");
                console.log(res);
                return res.data.data;
        } catch (err) {
                return rejectWithValue("Error");
        }
});

export const registerUser = createAsyncThunk<void, UserRegisterDto, { rejectValue: string }>("registerUSer", async (input, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
                await http.post<ApiResponse<UserRegisterDto>>("/auth/register", input);
                return;
        } catch (err) {
                console.log(err);
                return rejectWithValue("Error");
        }
});

export const changeUser = createAsyncThunk<void, ChangeUserDto, { rejectValue: string }>("changeUser", async (input, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;
        try {
                await http.put<ApiResponse<ChangeUserDto>>("/user", input);
                dispatch(getUserInfo());
                return;
        } catch (err) {
                return rejectWithValue("Error");
        }
});
