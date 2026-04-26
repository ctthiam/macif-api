import { CategoriesService, CategoryDto } from './categories.service';
export declare class CategoriesController {
    private categories;
    constructor(categories: CategoriesService);
    findAll(user: any): import("@prisma/client").Prisma.PrismaPromise<({
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
    create(user: any, dto: CategoryDto): import("@prisma/client").Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        createdAt: Date;
        shopId: number;
        icon: string | null;
        color: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(user: any, id: number, dto: CategoryDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        shopId: number;
        icon: string | null;
        color: string | null;
    }>;
    remove(user: any, id: number): Promise<void>;
}
