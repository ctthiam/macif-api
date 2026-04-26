import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShopUserModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopUserPayload>;
export type AggregateShopUser = {
    _count: ShopUserCountAggregateOutputType | null;
    _avg: ShopUserAvgAggregateOutputType | null;
    _sum: ShopUserSumAggregateOutputType | null;
    _min: ShopUserMinAggregateOutputType | null;
    _max: ShopUserMaxAggregateOutputType | null;
};
export type ShopUserAvgAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
};
export type ShopUserSumAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
};
export type ShopUserMinAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
};
export type ShopUserMaxAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
};
export type ShopUserCountAggregateOutputType = {
    id: number;
    shopId: number;
    userId: number;
    role: number;
    createdAt: number;
    _all: number;
};
export type ShopUserAvgAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
};
export type ShopUserSumAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
};
export type ShopUserMinAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
};
export type ShopUserMaxAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
};
export type ShopUserCountAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
    _all?: true;
};
export type ShopUserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopUserWhereInput;
    orderBy?: Prisma.ShopUserOrderByWithRelationInput | Prisma.ShopUserOrderByWithRelationInput[];
    cursor?: Prisma.ShopUserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShopUserCountAggregateInputType;
    _avg?: ShopUserAvgAggregateInputType;
    _sum?: ShopUserSumAggregateInputType;
    _min?: ShopUserMinAggregateInputType;
    _max?: ShopUserMaxAggregateInputType;
};
export type GetShopUserAggregateType<T extends ShopUserAggregateArgs> = {
    [P in keyof T & keyof AggregateShopUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopUser[P]> : Prisma.GetScalarType<T[P], AggregateShopUser[P]>;
};
export type ShopUserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopUserWhereInput;
    orderBy?: Prisma.ShopUserOrderByWithAggregationInput | Prisma.ShopUserOrderByWithAggregationInput[];
    by: Prisma.ShopUserScalarFieldEnum[] | Prisma.ShopUserScalarFieldEnum;
    having?: Prisma.ShopUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopUserCountAggregateInputType | true;
    _avg?: ShopUserAvgAggregateInputType;
    _sum?: ShopUserSumAggregateInputType;
    _min?: ShopUserMinAggregateInputType;
    _max?: ShopUserMaxAggregateInputType;
};
export type ShopUserGroupByOutputType = {
    id: number;
    shopId: number;
    userId: number;
    role: $Enums.UserRole;
    createdAt: Date;
    _count: ShopUserCountAggregateOutputType | null;
    _avg: ShopUserAvgAggregateOutputType | null;
    _sum: ShopUserSumAggregateOutputType | null;
    _min: ShopUserMinAggregateOutputType | null;
    _max: ShopUserMaxAggregateOutputType | null;
};
export type GetShopUserGroupByPayload<T extends ShopUserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopUserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopUserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopUserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopUserGroupByOutputType[P]>;
}>>;
export type ShopUserWhereInput = {
    AND?: Prisma.ShopUserWhereInput | Prisma.ShopUserWhereInput[];
    OR?: Prisma.ShopUserWhereInput[];
    NOT?: Prisma.ShopUserWhereInput | Prisma.ShopUserWhereInput[];
    id?: Prisma.IntFilter<"ShopUser"> | number;
    shopId?: Prisma.IntFilter<"ShopUser"> | number;
    userId?: Prisma.IntFilter<"ShopUser"> | number;
    role?: Prisma.EnumUserRoleFilter<"ShopUser"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"ShopUser"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ShopUserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shop?: Prisma.ShopOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ShopUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    shopId_userId?: Prisma.ShopUserShopIdUserIdCompoundUniqueInput;
    AND?: Prisma.ShopUserWhereInput | Prisma.ShopUserWhereInput[];
    OR?: Prisma.ShopUserWhereInput[];
    NOT?: Prisma.ShopUserWhereInput | Prisma.ShopUserWhereInput[];
    shopId?: Prisma.IntFilter<"ShopUser"> | number;
    userId?: Prisma.IntFilter<"ShopUser"> | number;
    role?: Prisma.EnumUserRoleFilter<"ShopUser"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"ShopUser"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "shopId_userId">;
export type ShopUserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShopUserCountOrderByAggregateInput;
    _avg?: Prisma.ShopUserAvgOrderByAggregateInput;
    _max?: Prisma.ShopUserMaxOrderByAggregateInput;
    _min?: Prisma.ShopUserMinOrderByAggregateInput;
    _sum?: Prisma.ShopUserSumOrderByAggregateInput;
};
export type ShopUserScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopUserScalarWhereWithAggregatesInput | Prisma.ShopUserScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopUserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopUserScalarWhereWithAggregatesInput | Prisma.ShopUserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ShopUser"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"ShopUser"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"ShopUser"> | number;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"ShopUser"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopUser"> | Date | string;
};
export type ShopUserCreateInput = {
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutShopUsersInput;
    user: Prisma.UserCreateNestedOneWithoutShopUsersInput;
};
export type ShopUserUncheckedCreateInput = {
    id?: number;
    shopId: number;
    userId: number;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
};
export type ShopUserUpdateInput = {
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutShopUsersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutShopUsersNestedInput;
};
export type ShopUserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopUserCreateManyInput = {
    id?: number;
    shopId: number;
    userId: number;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
};
export type ShopUserUpdateManyMutationInput = {
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopUserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopUserListRelationFilter = {
    every?: Prisma.ShopUserWhereInput;
    some?: Prisma.ShopUserWhereInput;
    none?: Prisma.ShopUserWhereInput;
};
export type ShopUserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopUserShopIdUserIdCompoundUniqueInput = {
    shopId: number;
    userId: number;
};
export type ShopUserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopUserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ShopUserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopUserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopUserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ShopUserCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutUserInput, Prisma.ShopUserUncheckedCreateWithoutUserInput> | Prisma.ShopUserCreateWithoutUserInput[] | Prisma.ShopUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutUserInput | Prisma.ShopUserCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ShopUserCreateManyUserInputEnvelope;
    connect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
};
export type ShopUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutUserInput, Prisma.ShopUserUncheckedCreateWithoutUserInput> | Prisma.ShopUserCreateWithoutUserInput[] | Prisma.ShopUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutUserInput | Prisma.ShopUserCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ShopUserCreateManyUserInputEnvelope;
    connect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
};
export type ShopUserUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutUserInput, Prisma.ShopUserUncheckedCreateWithoutUserInput> | Prisma.ShopUserCreateWithoutUserInput[] | Prisma.ShopUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutUserInput | Prisma.ShopUserCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ShopUserUpsertWithWhereUniqueWithoutUserInput | Prisma.ShopUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ShopUserCreateManyUserInputEnvelope;
    set?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    disconnect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    delete?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    connect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    update?: Prisma.ShopUserUpdateWithWhereUniqueWithoutUserInput | Prisma.ShopUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ShopUserUpdateManyWithWhereWithoutUserInput | Prisma.ShopUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ShopUserScalarWhereInput | Prisma.ShopUserScalarWhereInput[];
};
export type ShopUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutUserInput, Prisma.ShopUserUncheckedCreateWithoutUserInput> | Prisma.ShopUserCreateWithoutUserInput[] | Prisma.ShopUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutUserInput | Prisma.ShopUserCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ShopUserUpsertWithWhereUniqueWithoutUserInput | Prisma.ShopUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ShopUserCreateManyUserInputEnvelope;
    set?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    disconnect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    delete?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    connect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    update?: Prisma.ShopUserUpdateWithWhereUniqueWithoutUserInput | Prisma.ShopUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ShopUserUpdateManyWithWhereWithoutUserInput | Prisma.ShopUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ShopUserScalarWhereInput | Prisma.ShopUserScalarWhereInput[];
};
export type ShopUserCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutShopInput, Prisma.ShopUserUncheckedCreateWithoutShopInput> | Prisma.ShopUserCreateWithoutShopInput[] | Prisma.ShopUserUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutShopInput | Prisma.ShopUserCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.ShopUserCreateManyShopInputEnvelope;
    connect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
};
export type ShopUserUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutShopInput, Prisma.ShopUserUncheckedCreateWithoutShopInput> | Prisma.ShopUserCreateWithoutShopInput[] | Prisma.ShopUserUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutShopInput | Prisma.ShopUserCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.ShopUserCreateManyShopInputEnvelope;
    connect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
};
export type ShopUserUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutShopInput, Prisma.ShopUserUncheckedCreateWithoutShopInput> | Prisma.ShopUserCreateWithoutShopInput[] | Prisma.ShopUserUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutShopInput | Prisma.ShopUserCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.ShopUserUpsertWithWhereUniqueWithoutShopInput | Prisma.ShopUserUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.ShopUserCreateManyShopInputEnvelope;
    set?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    disconnect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    delete?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    connect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    update?: Prisma.ShopUserUpdateWithWhereUniqueWithoutShopInput | Prisma.ShopUserUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.ShopUserUpdateManyWithWhereWithoutShopInput | Prisma.ShopUserUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.ShopUserScalarWhereInput | Prisma.ShopUserScalarWhereInput[];
};
export type ShopUserUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutShopInput, Prisma.ShopUserUncheckedCreateWithoutShopInput> | Prisma.ShopUserCreateWithoutShopInput[] | Prisma.ShopUserUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutShopInput | Prisma.ShopUserCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.ShopUserUpsertWithWhereUniqueWithoutShopInput | Prisma.ShopUserUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.ShopUserCreateManyShopInputEnvelope;
    set?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    disconnect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    delete?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    connect?: Prisma.ShopUserWhereUniqueInput | Prisma.ShopUserWhereUniqueInput[];
    update?: Prisma.ShopUserUpdateWithWhereUniqueWithoutShopInput | Prisma.ShopUserUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.ShopUserUpdateManyWithWhereWithoutShopInput | Prisma.ShopUserUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.ShopUserScalarWhereInput | Prisma.ShopUserScalarWhereInput[];
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type ShopUserCreateWithoutUserInput = {
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutShopUsersInput;
};
export type ShopUserUncheckedCreateWithoutUserInput = {
    id?: number;
    shopId: number;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
};
export type ShopUserCreateOrConnectWithoutUserInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutUserInput, Prisma.ShopUserUncheckedCreateWithoutUserInput>;
};
export type ShopUserCreateManyUserInputEnvelope = {
    data: Prisma.ShopUserCreateManyUserInput | Prisma.ShopUserCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ShopUserUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutUserInput, Prisma.ShopUserUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutUserInput, Prisma.ShopUserUncheckedCreateWithoutUserInput>;
};
export type ShopUserUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutUserInput, Prisma.ShopUserUncheckedUpdateWithoutUserInput>;
};
export type ShopUserUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ShopUserScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateManyMutationInput, Prisma.ShopUserUncheckedUpdateManyWithoutUserInput>;
};
export type ShopUserScalarWhereInput = {
    AND?: Prisma.ShopUserScalarWhereInput | Prisma.ShopUserScalarWhereInput[];
    OR?: Prisma.ShopUserScalarWhereInput[];
    NOT?: Prisma.ShopUserScalarWhereInput | Prisma.ShopUserScalarWhereInput[];
    id?: Prisma.IntFilter<"ShopUser"> | number;
    shopId?: Prisma.IntFilter<"ShopUser"> | number;
    userId?: Prisma.IntFilter<"ShopUser"> | number;
    role?: Prisma.EnumUserRoleFilter<"ShopUser"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"ShopUser"> | Date | string;
};
export type ShopUserCreateWithoutShopInput = {
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutShopUsersInput;
};
export type ShopUserUncheckedCreateWithoutShopInput = {
    id?: number;
    userId: number;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
};
export type ShopUserCreateOrConnectWithoutShopInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutShopInput, Prisma.ShopUserUncheckedCreateWithoutShopInput>;
};
export type ShopUserCreateManyShopInputEnvelope = {
    data: Prisma.ShopUserCreateManyShopInput | Prisma.ShopUserCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type ShopUserUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutShopInput, Prisma.ShopUserUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutShopInput, Prisma.ShopUserUncheckedCreateWithoutShopInput>;
};
export type ShopUserUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutShopInput, Prisma.ShopUserUncheckedUpdateWithoutShopInput>;
};
export type ShopUserUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.ShopUserScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateManyMutationInput, Prisma.ShopUserUncheckedUpdateManyWithoutShopInput>;
};
export type ShopUserCreateManyUserInput = {
    id?: number;
    shopId: number;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
};
export type ShopUserUpdateWithoutUserInput = {
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutShopUsersNestedInput;
};
export type ShopUserUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopUserUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopUserCreateManyShopInput = {
    id?: number;
    userId: number;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
};
export type ShopUserUpdateWithoutShopInput = {
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutShopUsersNestedInput;
};
export type ShopUserUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopUserUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopUserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopUser"]>;
export type ShopUserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopUser"]>;
export type ShopUserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopUser"]>;
export type ShopUserSelectScalar = {
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
};
export type ShopUserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shopId" | "userId" | "role" | "createdAt", ExtArgs["result"]["shopUser"]>;
export type ShopUserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ShopUserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ShopUserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ShopUserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopUser";
    objects: {
        shop: Prisma.$ShopPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shopId: number;
        userId: number;
        role: $Enums.UserRole;
        createdAt: Date;
    }, ExtArgs["result"]["shopUser"]>;
    composites: {};
};
export type ShopUserGetPayload<S extends boolean | null | undefined | ShopUserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopUserPayload, S>;
export type ShopUserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopUserCountAggregateInputType | true;
};
export interface ShopUserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopUser'];
        meta: {
            name: 'ShopUser';
        };
    };
    findUnique<T extends ShopUserFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopUserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShopUserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShopUserFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopUserFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShopUserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopUserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShopUserFindManyArgs>(args?: Prisma.SelectSubset<T, ShopUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShopUserCreateArgs>(args: Prisma.SelectSubset<T, ShopUserCreateArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShopUserCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShopUserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShopUserDeleteArgs>(args: Prisma.SelectSubset<T, ShopUserDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShopUserUpdateArgs>(args: Prisma.SelectSubset<T, ShopUserUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShopUserDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShopUserUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShopUserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShopUserUpsertArgs>(args: Prisma.SelectSubset<T, ShopUserUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShopUserCountArgs>(args?: Prisma.Subset<T, ShopUserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopUserCountAggregateOutputType> : number>;
    aggregate<T extends ShopUserAggregateArgs>(args: Prisma.Subset<T, ShopUserAggregateArgs>): Prisma.PrismaPromise<GetShopUserAggregateType<T>>;
    groupBy<T extends ShopUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopUserGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopUserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShopUserFieldRefs;
}
export interface Prisma__ShopUserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shop<T extends Prisma.ShopDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopClient<runtime.Types.Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShopUserFieldRefs {
    readonly id: Prisma.FieldRef<"ShopUser", 'Int'>;
    readonly shopId: Prisma.FieldRef<"ShopUser", 'Int'>;
    readonly userId: Prisma.FieldRef<"ShopUser", 'Int'>;
    readonly role: Prisma.FieldRef<"ShopUser", 'UserRole'>;
    readonly createdAt: Prisma.FieldRef<"ShopUser", 'DateTime'>;
}
export type ShopUserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    where: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    where: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    where?: Prisma.ShopUserWhereInput;
    orderBy?: Prisma.ShopUserOrderByWithRelationInput | Prisma.ShopUserOrderByWithRelationInput[];
    cursor?: Prisma.ShopUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopUserScalarFieldEnum | Prisma.ShopUserScalarFieldEnum[];
};
export type ShopUserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    where?: Prisma.ShopUserWhereInput;
    orderBy?: Prisma.ShopUserOrderByWithRelationInput | Prisma.ShopUserOrderByWithRelationInput[];
    cursor?: Prisma.ShopUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopUserScalarFieldEnum | Prisma.ShopUserScalarFieldEnum[];
};
export type ShopUserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    where?: Prisma.ShopUserWhereInput;
    orderBy?: Prisma.ShopUserOrderByWithRelationInput | Prisma.ShopUserOrderByWithRelationInput[];
    cursor?: Prisma.ShopUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopUserScalarFieldEnum | Prisma.ShopUserScalarFieldEnum[];
};
export type ShopUserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShopUserCreateInput, Prisma.ShopUserUncheckedCreateInput>;
};
export type ShopUserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShopUserCreateManyInput | Prisma.ShopUserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShopUserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    data: Prisma.ShopUserCreateManyInput | Prisma.ShopUserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShopUserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShopUserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShopUserUpdateInput, Prisma.ShopUserUncheckedUpdateInput>;
    where: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShopUserUpdateManyMutationInput, Prisma.ShopUserUncheckedUpdateManyInput>;
    where?: Prisma.ShopUserWhereInput;
    limit?: number;
};
export type ShopUserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShopUserUpdateManyMutationInput, Prisma.ShopUserUncheckedUpdateManyInput>;
    where?: Prisma.ShopUserWhereInput;
    limit?: number;
    include?: Prisma.ShopUserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShopUserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateInput, Prisma.ShopUserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShopUserUpdateInput, Prisma.ShopUserUncheckedUpdateInput>;
};
export type ShopUserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    where: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopUserWhereInput;
    limit?: number;
};
export type ShopUserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
};
