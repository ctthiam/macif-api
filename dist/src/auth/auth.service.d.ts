import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto, SetPinDto, VerifyPinDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    register(dto: RegisterDto, ip: string): Promise<{
        user: any;
        shop: {
            id: number;
            name: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            ownerId: number;
            address: string | null;
            city: string | null;
            logoUrl: string | null;
            primaryColor: string;
            currency: string;
            plan: import("@prisma/client").$Enums.Plan;
            trialEndsAt: Date | null;
            planExpiresAt: Date | null;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    login(dto: LoginDto, ip: string): Promise<{
        user: any;
        shop: {
            id: number;
            name: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            ownerId: number;
            address: string | null;
            city: string | null;
            logoUrl: string | null;
            primaryColor: string;
            currency: string;
            plan: import("@prisma/client").$Enums.Plan;
            trialEndsAt: Date | null;
            planExpiresAt: Date | null;
        };
        hasPin: boolean;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    setPin(userId: number, dto: SetPinDto): Promise<{
        message: string;
    }>;
    verifyPin(userId: number, dto: VerifyPinDto): Promise<{
        valid: boolean;
    }>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: number): Promise<void>;
    getMe(userId: number): Promise<any>;
    private generateTokens;
    changePassword(userId: number, currentPassword: string, newPassword: string): Promise<{
        message: string;
    }>;
    private sanitizeUser;
}
