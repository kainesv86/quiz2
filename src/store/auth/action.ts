import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../service/http";

import { UserLoginDto, UserRegisterDto, UserInfoDto } from "./dto";

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
export const getUserInfo = createAsyncThunk<UserInfoDto, void, { rejectValue: string }>("UserInfo", async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
                const res = await http.get<ApiResponse<UserInfoDto>>("/user");

                return res.data.data;
        } catch (err) {
                return rejectWithValue("Error");
        }
});

export const registerUser = createAsyncThunk<{}, UserRegisterDto, {}>("registerUSer", async (input, thunkApi) => {
        const { dispatch } = thunkApi;
        try {
                // await http.post("/auth/register", input);
                // const res = await http.get<UserInfo>("/user");
                // dispatch(userActions.updateUserInfo(res.data));
                // console.log(res);
        } catch (err) {
                console.log(input);
                console.log("Gãy");
        }
});
