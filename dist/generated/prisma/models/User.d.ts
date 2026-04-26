import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    phone: string | null;
    email: string | null;
    passwordHash: string | null;
    pinHash: string | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    lastLoginIp: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    phone: string | null;
    email: string | null;
    passwordHash: string | null;
    pinHash: string | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    lastLoginIp: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    phone: number;
    email: number;
    passwordHash: number;
    pinHash: number;
    isActive: number;
    lastLoginAt: number;
    lastLoginIp: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    email?: true;
    passwordHash?: true;
    pinHash?: true;
    isActive?: true;
    lastLoginAt?: true;
    lastLoginIp?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    email?: true;
    passwordHash?: true;
    pinHash?: true;
    isActive?: true;
    lastLoginAt?: true;
    lastLoginIp?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    email?: true;
    passwordHash?: true;
    pinHash?: true;
    isActive?: true;
    lastLoginAt?: true;
    lastLoginIp?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    name: string;
    phone: string;
    email: string | null;
    passwordHash: string;
    pinHash: string | null;
    isActive: boolean;
    lastLoginAt: Date | null;
    lastLoginIp: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    name?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    pinHash?: Prisma.StringNullableFilter<"User"> | string | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lastLoginIp?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    shopUsers?: Prisma.ShopUserListRelationFilter;
    sales?: Prisma.SaleListRelationFilter;
    creditPayments?: Prisma.CreditPaymentListRelationFilter;
    cashRegisters?: Prisma.CashRegisterListRelationFilter;
    purchases?: Prisma.PurchaseListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
    stockMovements?: Prisma.StockMovementListRelationFilter;
    refreshTokens?: Prisma.RefreshTokenListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    pinHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLoginIp?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    shopUsers?: Prisma.ShopUserOrderByRelationAggregateInput;
    sales?: Prisma.SaleOrderByRelationAggregateInput;
    creditPayments?: Prisma.CreditPaymentOrderByRelationAggregateInput;
    cashRegisters?: Prisma.CashRegisterOrderByRelationAggregateInput;
    purchases?: Prisma.PurchaseOrderByRelationAggregateInput;
    expenses?: Prisma.ExpenseOrderByRelationAggregateInput;
    stockMovements?: Prisma.StockMovementOrderByRelationAggregateInput;
    refreshTokens?: Prisma.RefreshTokenOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    phone?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    pinHash?: Prisma.StringNullableFilter<"User"> | string | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lastLoginIp?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    shopUsers?: Prisma.ShopUserListRelationFilter;
    sales?: Prisma.SaleListRelationFilter;
    creditPayments?: Prisma.CreditPaymentListRelationFilter;
    cashRegisters?: Prisma.CashRegisterListRelationFilter;
    purchases?: Prisma.PurchaseListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
    stockMovements?: Prisma.StockMovementListRelationFilter;
    refreshTokens?: Prisma.RefreshTokenListRelationFilter;
}, "id" | "phone" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    pinHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLoginIp?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    pinHash?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    lastLoginIp?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserUncheckedCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUncheckedUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    pinHash?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    lastLoginIp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    pinHash?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    lastLoginIp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    pinHash?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    lastLoginIp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.UserUpsertWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.UserUpdateWithoutRefreshTokensInput>, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserCreateNestedOneWithoutShopUsersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShopUsersInput, Prisma.UserUncheckedCreateWithoutShopUsersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShopUsersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutShopUsersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShopUsersInput, Prisma.UserUncheckedCreateWithoutShopUsersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShopUsersInput;
    upsert?: Prisma.UserUpsertWithoutShopUsersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutShopUsersInput, Prisma.UserUpdateWithoutShopUsersInput>, Prisma.UserUncheckedUpdateWithoutShopUsersInput>;
};
export type UserCreateNestedOneWithoutStockMovementsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStockMovementsInput, Prisma.UserUncheckedCreateWithoutStockMovementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStockMovementsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutStockMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStockMovementsInput, Prisma.UserUncheckedCreateWithoutStockMovementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStockMovementsInput;
    upsert?: Prisma.UserUpsertWithoutStockMovementsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStockMovementsInput, Prisma.UserUpdateWithoutStockMovementsInput>, Prisma.UserUncheckedUpdateWithoutStockMovementsInput>;
};
export type UserCreateNestedOneWithoutSalesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSalesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSalesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSalesInput;
    upsert?: Prisma.UserUpsertWithoutSalesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSalesInput, Prisma.UserUpdateWithoutSalesInput>, Prisma.UserUncheckedUpdateWithoutSalesInput>;
};
export type UserCreateNestedOneWithoutCreditPaymentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreditPaymentsInput, Prisma.UserUncheckedCreateWithoutCreditPaymentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreditPaymentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCreditPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreditPaymentsInput, Prisma.UserUncheckedCreateWithoutCreditPaymentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreditPaymentsInput;
    upsert?: Prisma.UserUpsertWithoutCreditPaymentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreditPaymentsInput, Prisma.UserUpdateWithoutCreditPaymentsInput>, Prisma.UserUncheckedUpdateWithoutCreditPaymentsInput>;
};
export type UserCreateNestedOneWithoutCashRegistersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCashRegistersInput, Prisma.UserUncheckedCreateWithoutCashRegistersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCashRegistersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCashRegistersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCashRegistersInput, Prisma.UserUncheckedCreateWithoutCashRegistersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCashRegistersInput;
    upsert?: Prisma.UserUpsertWithoutCashRegistersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCashRegistersInput, Prisma.UserUpdateWithoutCashRegistersInput>, Prisma.UserUncheckedUpdateWithoutCashRegistersInput>;
};
export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPurchasesInput, Prisma.UserUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPurchasesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPurchasesInput, Prisma.UserUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPurchasesInput;
    upsert?: Prisma.UserUpsertWithoutPurchasesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPurchasesInput, Prisma.UserUpdateWithoutPurchasesInput>, Prisma.UserUncheckedUpdateWithoutPurchasesInput>;
};
export type UserCreateNestedOneWithoutExpensesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutExpensesInput, Prisma.UserUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutExpensesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutExpensesInput, Prisma.UserUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutExpensesInput;
    upsert?: Prisma.UserUpsertWithoutExpensesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutExpensesInput, Prisma.UserUpdateWithoutExpensesInput>, Prisma.UserUncheckedUpdateWithoutExpensesInput>;
};
export type UserCreateWithoutRefreshTokensInput = {
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserUncheckedCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
};
export type UserUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserUpdateWithoutRefreshTokensInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUncheckedUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutShopUsersInput = {
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutShopUsersInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutShopUsersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutShopUsersInput, Prisma.UserUncheckedCreateWithoutShopUsersInput>;
};
export type UserUpsertWithoutShopUsersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutShopUsersInput, Prisma.UserUncheckedUpdateWithoutShopUsersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutShopUsersInput, Prisma.UserUncheckedCreateWithoutShopUsersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutShopUsersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutShopUsersInput, Prisma.UserUncheckedUpdateWithoutShopUsersInput>;
};
export type UserUpdateWithoutShopUsersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutShopUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutStockMovementsInput = {
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutStockMovementsInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserUncheckedCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutStockMovementsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStockMovementsInput, Prisma.UserUncheckedCreateWithoutStockMovementsInput>;
};
export type UserUpsertWithoutStockMovementsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStockMovementsInput, Prisma.UserUncheckedUpdateWithoutStockMovementsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStockMovementsInput, Prisma.UserUncheckedCreateWithoutStockMovementsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStockMovementsInput, Prisma.UserUncheckedUpdateWithoutStockMovementsInput>;
};
export type UserUpdateWithoutStockMovementsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutStockMovementsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUncheckedUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSalesInput = {
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSalesInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserUncheckedCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSalesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
};
export type UserUpsertWithoutSalesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSalesInput, Prisma.UserUncheckedUpdateWithoutSalesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSalesInput, Prisma.UserUncheckedUpdateWithoutSalesInput>;
};
export type UserUpdateWithoutSalesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSalesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUncheckedUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCreditPaymentsInput = {
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCreditPaymentsInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserUncheckedCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCreditPaymentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreditPaymentsInput, Prisma.UserUncheckedCreateWithoutCreditPaymentsInput>;
};
export type UserUpsertWithoutCreditPaymentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreditPaymentsInput, Prisma.UserUncheckedUpdateWithoutCreditPaymentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreditPaymentsInput, Prisma.UserUncheckedCreateWithoutCreditPaymentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreditPaymentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreditPaymentsInput, Prisma.UserUncheckedUpdateWithoutCreditPaymentsInput>;
};
export type UserUpdateWithoutCreditPaymentsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCreditPaymentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUncheckedUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCashRegistersInput = {
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCashRegistersInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserUncheckedCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCashRegistersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCashRegistersInput, Prisma.UserUncheckedCreateWithoutCashRegistersInput>;
};
export type UserUpsertWithoutCashRegistersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCashRegistersInput, Prisma.UserUncheckedUpdateWithoutCashRegistersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCashRegistersInput, Prisma.UserUncheckedCreateWithoutCashRegistersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCashRegistersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCashRegistersInput, Prisma.UserUncheckedUpdateWithoutCashRegistersInput>;
};
export type UserUpdateWithoutCashRegistersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCashRegistersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUncheckedUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPurchasesInput = {
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserUncheckedCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterUncheckedCreateNestedManyWithoutUserInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPurchasesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPurchasesInput, Prisma.UserUncheckedCreateWithoutPurchasesInput>;
};
export type UserUpsertWithoutPurchasesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPurchasesInput, Prisma.UserUncheckedUpdateWithoutPurchasesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPurchasesInput, Prisma.UserUncheckedCreateWithoutPurchasesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPurchasesInput, Prisma.UserUncheckedUpdateWithoutPurchasesInput>;
};
export type UserUpdateWithoutPurchasesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUncheckedUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUncheckedUpdateManyWithoutUserNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutExpensesInput = {
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutExpensesInput = {
    id?: number;
    name: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    pinHash?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    lastLoginIp?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shopUsers?: Prisma.ShopUserUncheckedCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
    creditPayments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutUserInput;
    cashRegisters?: Prisma.CashRegisterUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutUserInput;
    stockMovements?: Prisma.StockMovementUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutExpensesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutExpensesInput, Prisma.UserUncheckedCreateWithoutExpensesInput>;
};
export type UserUpsertWithoutExpensesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutExpensesInput, Prisma.UserUncheckedUpdateWithoutExpensesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutExpensesInput, Prisma.UserUncheckedCreateWithoutExpensesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutExpensesInput, Prisma.UserUncheckedUpdateWithoutExpensesInput>;
};
export type UserUpdateWithoutExpensesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    pinHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shopUsers?: Prisma.ShopUserUncheckedUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
    creditPayments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutUserNestedInput;
    cashRegisters?: Prisma.CashRegisterUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutUserNestedInput;
    stockMovements?: Prisma.StockMovementUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    shopUsers: number;
    sales: number;
    creditPayments: number;
    cashRegisters: number;
    purchases: number;
    expenses: number;
    stockMovements: number;
    refreshTokens: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shopUsers?: boolean | UserCountOutputTypeCountShopUsersArgs;
    sales?: boolean | UserCountOutputTypeCountSalesArgs;
    creditPayments?: boolean | UserCountOutputTypeCountCreditPaymentsArgs;
    cashRegisters?: boolean | UserCountOutputTypeCountCashRegistersArgs;
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs;
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs;
    stockMovements?: boolean | UserCountOutputTypeCountStockMovementsArgs;
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountShopUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopUserWhereInput;
};
export type UserCountOutputTypeCountSalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
};
export type UserCountOutputTypeCountCreditPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditPaymentWhereInput;
};
export type UserCountOutputTypeCountCashRegistersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashRegisterWhereInput;
};
export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
};
export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
};
export type UserCountOutputTypeCountStockMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockMovementWhereInput;
};
export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefreshTokenWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    pinHash?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    lastLoginIp?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shopUsers?: boolean | Prisma.User$shopUsersArgs<ExtArgs>;
    sales?: boolean | Prisma.User$salesArgs<ExtArgs>;
    creditPayments?: boolean | Prisma.User$creditPaymentsArgs<ExtArgs>;
    cashRegisters?: boolean | Prisma.User$cashRegistersArgs<ExtArgs>;
    purchases?: boolean | Prisma.User$purchasesArgs<ExtArgs>;
    expenses?: boolean | Prisma.User$expensesArgs<ExtArgs>;
    stockMovements?: boolean | Prisma.User$stockMovementsArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    pinHash?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    lastLoginIp?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    pinHash?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    lastLoginIp?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    pinHash?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    lastLoginIp?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "phone" | "email" | "passwordHash" | "pinHash" | "isActive" | "lastLoginAt" | "lastLoginIp" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shopUsers?: boolean | Prisma.User$shopUsersArgs<ExtArgs>;
    sales?: boolean | Prisma.User$salesArgs<ExtArgs>;
    creditPayments?: boolean | Prisma.User$creditPaymentsArgs<ExtArgs>;
    cashRegisters?: boolean | Prisma.User$cashRegistersArgs<ExtArgs>;
    purchases?: boolean | Prisma.User$purchasesArgs<ExtArgs>;
    expenses?: boolean | Prisma.User$expensesArgs<ExtArgs>;
    stockMovements?: boolean | Prisma.User$stockMovementsArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        shopUsers: Prisma.$ShopUserPayload<ExtArgs>[];
        sales: Prisma.$SalePayload<ExtArgs>[];
        creditPayments: Prisma.$CreditPaymentPayload<ExtArgs>[];
        cashRegisters: Prisma.$CashRegisterPayload<ExtArgs>[];
        purchases: Prisma.$PurchasePayload<ExtArgs>[];
        expenses: Prisma.$ExpensePayload<ExtArgs>[];
        stockMovements: Prisma.$StockMovementPayload<ExtArgs>[];
        refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        phone: string;
        email: string | null;
        passwordHash: string;
        pinHash: string | null;
        isActive: boolean;
        lastLoginAt: Date | null;
        lastLoginIp: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shopUsers<T extends Prisma.User$shopUsersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$shopUsersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sales<T extends Prisma.User$salesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    creditPayments<T extends Prisma.User$creditPaymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$creditPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cashRegisters<T extends Prisma.User$cashRegistersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$cashRegistersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchases<T extends Prisma.User$purchasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    expenses<T extends Prisma.User$expensesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stockMovements<T extends Prisma.User$stockMovementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refreshTokens<T extends Prisma.User$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly pinHash: Prisma.FieldRef<"User", 'String'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly lastLoginIp: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$shopUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$salesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithRelationInput | Prisma.SaleOrderByWithRelationInput[];
    cursor?: Prisma.SaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleScalarFieldEnum | Prisma.SaleScalarFieldEnum[];
};
export type User$creditPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelect<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    include?: Prisma.CreditPaymentInclude<ExtArgs> | null;
    where?: Prisma.CreditPaymentWhereInput;
    orderBy?: Prisma.CreditPaymentOrderByWithRelationInput | Prisma.CreditPaymentOrderByWithRelationInput[];
    cursor?: Prisma.CreditPaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreditPaymentScalarFieldEnum | Prisma.CreditPaymentScalarFieldEnum[];
};
export type User$cashRegistersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where?: Prisma.CashRegisterWhereInput;
    orderBy?: Prisma.CashRegisterOrderByWithRelationInput | Prisma.CashRegisterOrderByWithRelationInput[];
    cursor?: Prisma.CashRegisterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashRegisterScalarFieldEnum | Prisma.CashRegisterScalarFieldEnum[];
};
export type User$purchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type User$expensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseScalarFieldEnum | Prisma.ExpenseScalarFieldEnum[];
};
export type User$stockMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockMovementSelect<ExtArgs> | null;
    omit?: Prisma.StockMovementOmit<ExtArgs> | null;
    include?: Prisma.StockMovementInclude<ExtArgs> | null;
    where?: Prisma.StockMovementWhereInput;
    orderBy?: Prisma.StockMovementOrderByWithRelationInput | Prisma.StockMovementOrderByWithRelationInput[];
    cursor?: Prisma.StockMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StockMovementScalarFieldEnum | Prisma.StockMovementScalarFieldEnum[];
};
export type User$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.RefreshTokenWhereInput;
    orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.RefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
