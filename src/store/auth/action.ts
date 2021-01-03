import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../service/http";
import { userActions, UserInfo } from ".";

// import {} from "./"
import { UserLoginDto, UserRegisterDto } from "./dto";

export const loginUser = createAsyncThunk<{}, UserLoginDto, {}>("LoginUser", async (input, thunkApi) => {
        const { dispatch } = thunkApi;
        try {
                await http.post("http://localhost:4000/api/auth/login", input);
                const res = await http.get<UserInfo>("http://localhost:4000/api/user");
                dispatch(userActions.updateUserInfo(res.data));
                console.log(res);
        } catch (err) {
                console.log("Gãy");
        }
});
