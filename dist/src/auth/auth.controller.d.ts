import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, SetPinDto, VerifyPinDto, ChangePasswordDto } from './dto/auth.dto';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    register(dto: RegisterDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    login(dto: LoginDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    setPin(user: any, dto: SetPinDto): Promise<{
        message: string;
    }>;
    verifyPin(user: any, dto: VerifyPinDto): Promise<{
        valid: boolean;
    }>;
    refresh(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(user: any, res: Response): Promise<Response<any, Record<string, any>>>;
    changePassword(user: any, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    me(user: any): Promise<any>;
    private setTokenCookies;
}
