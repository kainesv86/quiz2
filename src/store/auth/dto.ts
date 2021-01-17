export interface UserLoginDto {
        username: string;
        password: string;
}

export interface UserRegisterDto {
        username: string;
        password: string;
        fullName: string;
        confirmPassword: string;
}
export interface UserInfoDto {
        username: string;
        fullName: string;
        email: string;
        isPremium: boolean;
        role: string;
}

export interface ChangeUserDto {
        fullName: string;
        email: string;
}
