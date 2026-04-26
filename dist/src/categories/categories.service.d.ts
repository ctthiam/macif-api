import { PrismaService } from '../prisma/prisma.service';
export declare class CategoryDto {
    name: string;
    icon?: string;
    color?: string;
}
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(shopId: number): import("@prisma/client").Prisma.PrismaPromise<({
        _count: {
            products: number;
        };
    } & {
        id: number;
        name: string;
        createdAt: Date;
        shopId: number;
        icon: string | null;
        color: string | null;
    })[]>;
    create(shopId: number, dto: CategoryDto): import("@prisma/client").Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        createdAt: Date;
        shopId: number;
        icon: string | null;
        color: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(shopId: number, id: number, dto: CategoryDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        shopId: number;
        icon: string | null;
        color: string | null;
    }>;
    remove(shopId: number, id: number): Promise<void>;
    private assertExists;
}
