export declare class RegisterDto {
    name: string;
    phone: string;
    email?: string;
    password: string;
    shopName: string;
}
export declare class LoginDto {
    phone: string;
    password: string;
}
export declare class SetPinDto {
    pin: string;
}
export declare class VerifyPinDto {
    pin: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
