import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CashRegisterModel = runtime.Types.Result.DefaultSelection<Prisma.$CashRegisterPayload>;
export type AggregateCashRegister = {
    _count: CashRegisterCountAggregateOutputType | null;
    _avg: CashRegisterAvgAggregateOutputType | null;
    _sum: CashRegisterSumAggregateOutputType | null;
    _min: CashRegisterMinAggregateOutputType | null;
    _max: CashRegisterMaxAggregateOutputType | null;
};
export type CashRegisterAvgAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    openingAmount: runtime.Decimal | null;
    closingAmount: runtime.Decimal | null;
    theoreticalAmount: runtime.Decimal | null;
    difference: runtime.Decimal | null;
};
export type CashRegisterSumAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    openingAmount: runtime.Decimal | null;
    closingAmount: runtime.Decimal | null;
    theoreticalAmount: runtime.Decimal | null;
    difference: runtime.Decimal | null;
};
export type CashRegisterMinAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    date: Date | null;
    openingAmount: runtime.Decimal | null;
    closingAmount: runtime.Decimal | null;
    theoreticalAmount: runtime.Decimal | null;
    difference: runtime.Decimal | null;
    status: $Enums.CashRegisterStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CashRegisterMaxAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    date: Date | null;
    openingAmount: runtime.Decimal | null;
    closingAmount: runtime.Decimal | null;
    theoreticalAmount: runtime.Decimal | null;
    difference: runtime.Decimal | null;
    status: $Enums.CashRegisterStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CashRegisterCountAggregateOutputType = {
    id: number;
    shopId: number;
    userId: number;
    date: number;
    openingAmount: number;
    closingAmount: number;
    theoreticalAmount: number;
    difference: number;
    status: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CashRegisterAvgAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    openingAmount?: true;
    closingAmount?: true;
    theoreticalAmount?: true;
    difference?: true;
};
export type CashRegisterSumAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    openingAmount?: true;
    closingAmount?: true;
    theoreticalAmount?: true;
    difference?: true;
};
export type CashRegisterMinAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    date?: true;
    openingAmount?: true;
    closingAmount?: true;
    theoreticalAmount?: true;
    difference?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CashRegisterMaxAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    date?: true;
    openingAmount?: true;
    closingAmount?: true;
    theoreticalAmount?: true;
    difference?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CashRegisterCountAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    date?: true;
    openingAmount?: true;
    closingAmount?: true;
    theoreticalAmount?: true;
    difference?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CashRegisterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashRegisterWhereInput;
    orderBy?: Prisma.CashRegisterOrderByWithRelationInput | Prisma.CashRegisterOrderByWithRelationInput[];
    cursor?: Prisma.CashRegisterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CashRegisterCountAggregateInputType;
    _avg?: CashRegisterAvgAggregateInputType;
    _sum?: CashRegisterSumAggregateInputType;
    _min?: CashRegisterMinAggregateInputType;
    _max?: CashRegisterMaxAggregateInputType;
};
export type GetCashRegisterAggregateType<T extends CashRegisterAggregateArgs> = {
    [P in keyof T & keyof AggregateCashRegister]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCashRegister[P]> : Prisma.GetScalarType<T[P], AggregateCashRegister[P]>;
};
export type CashRegisterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashRegisterWhereInput;
    orderBy?: Prisma.CashRegisterOrderByWithAggregationInput | Prisma.CashRegisterOrderByWithAggregationInput[];
    by: Prisma.CashRegisterScalarFieldEnum[] | Prisma.CashRegisterScalarFieldEnum;
    having?: Prisma.CashRegisterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CashRegisterCountAggregateInputType | true;
    _avg?: CashRegisterAvgAggregateInputType;
    _sum?: CashRegisterSumAggregateInputType;
    _min?: CashRegisterMinAggregateInputType;
    _max?: CashRegisterMaxAggregateInputType;
};
export type CashRegisterGroupByOutputType = {
    id: number;
    shopId: number;
    userId: number;
    date: Date;
    openingAmount: runtime.Decimal;
    closingAmount: runtime.Decimal | null;
    theoreticalAmount: runtime.Decimal | null;
    difference: runtime.Decimal | null;
    status: $Enums.CashRegisterStatus;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CashRegisterCountAggregateOutputType | null;
    _avg: CashRegisterAvgAggregateOutputType | null;
    _sum: CashRegisterSumAggregateOutputType | null;
    _min: CashRegisterMinAggregateOutputType | null;
    _max: CashRegisterMaxAggregateOutputType | null;
};
export type GetCashRegisterGroupByPayload<T extends CashRegisterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CashRegisterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CashRegisterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CashRegisterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CashRegisterGroupByOutputType[P]>;
}>>;
export type CashRegisterWhereInput = {
    AND?: Prisma.CashRegisterWhereInput | Prisma.CashRegisterWhereInput[];
    OR?: Prisma.CashRegisterWhereInput[];
    NOT?: Prisma.CashRegisterWhereInput | Prisma.CashRegisterWhereInput[];
    id?: Prisma.IntFilter<"CashRegister"> | number;
    shopId?: Prisma.IntFilter<"CashRegister"> | number;
    userId?: Prisma.IntFilter<"CashRegister"> | number;
    date?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    openingAmount?: Prisma.DecimalFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.DecimalNullableFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.DecimalNullableFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.DecimalNullableFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFilter<"CashRegister"> | $Enums.CashRegisterStatus;
    notes?: Prisma.StringNullableFilter<"CashRegister"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CashRegisterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    openingAmount?: Prisma.SortOrder;
    closingAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    theoreticalAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    difference?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    shop?: Prisma.ShopOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CashRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    shopId_date?: Prisma.CashRegisterShopIdDateCompoundUniqueInput;
    AND?: Prisma.CashRegisterWhereInput | Prisma.CashRegisterWhereInput[];
    OR?: Prisma.CashRegisterWhereInput[];
    NOT?: Prisma.CashRegisterWhereInput | Prisma.CashRegisterWhereInput[];
    shopId?: Prisma.IntFilter<"CashRegister"> | number;
    userId?: Prisma.IntFilter<"CashRegister"> | number;
    date?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    openingAmount?: Prisma.DecimalFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.DecimalNullableFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.DecimalNullableFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.DecimalNullableFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFilter<"CashRegister"> | $Enums.CashRegisterStatus;
    notes?: Prisma.StringNullableFilter<"CashRegister"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "shopId_date">;
export type CashRegisterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    openingAmount?: Prisma.SortOrder;
    closingAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    theoreticalAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    difference?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CashRegisterCountOrderByAggregateInput;
    _avg?: Prisma.CashRegisterAvgOrderByAggregateInput;
    _max?: Prisma.CashRegisterMaxOrderByAggregateInput;
    _min?: Prisma.CashRegisterMinOrderByAggregateInput;
    _sum?: Prisma.CashRegisterSumOrderByAggregateInput;
};
export type CashRegisterScalarWhereWithAggregatesInput = {
    AND?: Prisma.CashRegisterScalarWhereWithAggregatesInput | Prisma.CashRegisterScalarWhereWithAggregatesInput[];
    OR?: Prisma.CashRegisterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CashRegisterScalarWhereWithAggregatesInput | Prisma.CashRegisterScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CashRegister"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"CashRegister"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"CashRegister"> | number;
    date?: Prisma.DateTimeWithAggregatesFilter<"CashRegister"> | Date | string;
    openingAmount?: Prisma.DecimalWithAggregatesFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.DecimalNullableWithAggregatesFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.DecimalNullableWithAggregatesFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.DecimalNullableWithAggregatesFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusWithAggregatesFilter<"CashRegister"> | $Enums.CashRegisterStatus;
    notes?: Prisma.StringNullableWithAggregatesFilter<"CashRegister"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CashRegister"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CashRegister"> | Date | string;
};
export type CashRegisterCreateInput = {
    date: Date | string;
    openingAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CashRegisterStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCashRegistersInput;
    user: Prisma.UserCreateNestedOneWithoutCashRegistersInput;
};
export type CashRegisterUncheckedCreateInput = {
    id?: number;
    shopId: number;
    userId: number;
    date: Date | string;
    openingAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CashRegisterStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CashRegisterUpdateInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCashRegistersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCashRegistersNestedInput;
};
export type CashRegisterUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashRegisterCreateManyInput = {
    id?: number;
    shopId: number;
    userId: number;
    date: Date | string;
    openingAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CashRegisterStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CashRegisterUpdateManyMutationInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashRegisterUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashRegisterListRelationFilter = {
    every?: Prisma.CashRegisterWhereInput;
    some?: Prisma.CashRegisterWhereInput;
    none?: Prisma.CashRegisterWhereInput;
};
export type CashRegisterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CashRegisterShopIdDateCompoundUniqueInput = {
    shopId: number;
    date: Date | string;
};
export type CashRegisterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    openingAmount?: Prisma.SortOrder;
    closingAmount?: Prisma.SortOrder;
    theoreticalAmount?: Prisma.SortOrder;
    difference?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CashRegisterAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    openingAmount?: Prisma.SortOrder;
    closingAmount?: Prisma.SortOrder;
    theoreticalAmount?: Prisma.SortOrder;
    difference?: Prisma.SortOrder;
};
export type CashRegisterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    openingAmount?: Prisma.SortOrder;
    closingAmount?: Prisma.SortOrder;
    theoreticalAmount?: Prisma.SortOrder;
    difference?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CashRegisterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    openingAmount?: Prisma.SortOrder;
    closingAmount?: Prisma.SortOrder;
    theoreticalAmount?: Prisma.SortOrder;
    difference?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CashRegisterSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    openingAmount?: Prisma.SortOrder;
    closingAmount?: Prisma.SortOrder;
    theoreticalAmount?: Prisma.SortOrder;
    difference?: Prisma.SortOrder;
};
export type CashRegisterCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutUserInput, Prisma.CashRegisterUncheckedCreateWithoutUserInput> | Prisma.CashRegisterCreateWithoutUserInput[] | Prisma.CashRegisterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutUserInput | Prisma.CashRegisterCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CashRegisterCreateManyUserInputEnvelope;
    connect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
};
export type CashRegisterUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutUserInput, Prisma.CashRegisterUncheckedCreateWithoutUserInput> | Prisma.CashRegisterCreateWithoutUserInput[] | Prisma.CashRegisterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutUserInput | Prisma.CashRegisterCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CashRegisterCreateManyUserInputEnvelope;
    connect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
};
export type CashRegisterUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutUserInput, Prisma.CashRegisterUncheckedCreateWithoutUserInput> | Prisma.CashRegisterCreateWithoutUserInput[] | Prisma.CashRegisterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutUserInput | Prisma.CashRegisterCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CashRegisterUpsertWithWhereUniqueWithoutUserInput | Prisma.CashRegisterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CashRegisterCreateManyUserInputEnvelope;
    set?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    disconnect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    delete?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    connect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    update?: Prisma.CashRegisterUpdateWithWhereUniqueWithoutUserInput | Prisma.CashRegisterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CashRegisterUpdateManyWithWhereWithoutUserInput | Prisma.CashRegisterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CashRegisterScalarWhereInput | Prisma.CashRegisterScalarWhereInput[];
};
export type CashRegisterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutUserInput, Prisma.CashRegisterUncheckedCreateWithoutUserInput> | Prisma.CashRegisterCreateWithoutUserInput[] | Prisma.CashRegisterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutUserInput | Prisma.CashRegisterCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CashRegisterUpsertWithWhereUniqueWithoutUserInput | Prisma.CashRegisterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CashRegisterCreateManyUserInputEnvelope;
    set?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    disconnect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    delete?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    connect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    update?: Prisma.CashRegisterUpdateWithWhereUniqueWithoutUserInput | Prisma.CashRegisterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CashRegisterUpdateManyWithWhereWithoutUserInput | Prisma.CashRegisterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CashRegisterScalarWhereInput | Prisma.CashRegisterScalarWhereInput[];
};
export type CashRegisterCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutShopInput, Prisma.CashRegisterUncheckedCreateWithoutShopInput> | Prisma.CashRegisterCreateWithoutShopInput[] | Prisma.CashRegisterUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutShopInput | Prisma.CashRegisterCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.CashRegisterCreateManyShopInputEnvelope;
    connect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
};
export type CashRegisterUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutShopInput, Prisma.CashRegisterUncheckedCreateWithoutShopInput> | Prisma.CashRegisterCreateWithoutShopInput[] | Prisma.CashRegisterUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutShopInput | Prisma.CashRegisterCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.CashRegisterCreateManyShopInputEnvelope;
    connect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
};
export type CashRegisterUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutShopInput, Prisma.CashRegisterUncheckedCreateWithoutShopInput> | Prisma.CashRegisterCreateWithoutShopInput[] | Prisma.CashRegisterUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutShopInput | Prisma.CashRegisterCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.CashRegisterUpsertWithWhereUniqueWithoutShopInput | Prisma.CashRegisterUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.CashRegisterCreateManyShopInputEnvelope;
    set?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    disconnect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    delete?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    connect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    update?: Prisma.CashRegisterUpdateWithWhereUniqueWithoutShopInput | Prisma.CashRegisterUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.CashRegisterUpdateManyWithWhereWithoutShopInput | Prisma.CashRegisterUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.CashRegisterScalarWhereInput | Prisma.CashRegisterScalarWhereInput[];
};
export type CashRegisterUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutShopInput, Prisma.CashRegisterUncheckedCreateWithoutShopInput> | Prisma.CashRegisterCreateWithoutShopInput[] | Prisma.CashRegisterUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutShopInput | Prisma.CashRegisterCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.CashRegisterUpsertWithWhereUniqueWithoutShopInput | Prisma.CashRegisterUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.CashRegisterCreateManyShopInputEnvelope;
    set?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    disconnect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    delete?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    connect?: Prisma.CashRegisterWhereUniqueInput | Prisma.CashRegisterWhereUniqueInput[];
    update?: Prisma.CashRegisterUpdateWithWhereUniqueWithoutShopInput | Prisma.CashRegisterUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.CashRegisterUpdateManyWithWhereWithoutShopInput | Prisma.CashRegisterUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.CashRegisterScalarWhereInput | Prisma.CashRegisterScalarWhereInput[];
};
export type EnumCashRegisterStatusFieldUpdateOperationsInput = {
    set?: $Enums.CashRegisterStatus;
};
export type CashRegisterCreateWithoutUserInput = {
    date: Date | string;
    openingAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CashRegisterStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCashRegistersInput;
};
export type CashRegisterUncheckedCreateWithoutUserInput = {
    id?: number;
    shopId: number;
    date: Date | string;
    openingAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CashRegisterStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CashRegisterCreateOrConnectWithoutUserInput = {
    where: Prisma.CashRegisterWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashRegisterCreateWithoutUserInput, Prisma.CashRegisterUncheckedCreateWithoutUserInput>;
};
export type CashRegisterCreateManyUserInputEnvelope = {
    data: Prisma.CashRegisterCreateManyUserInput | Prisma.CashRegisterCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CashRegisterUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CashRegisterWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashRegisterUpdateWithoutUserInput, Prisma.CashRegisterUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CashRegisterCreateWithoutUserInput, Prisma.CashRegisterUncheckedCreateWithoutUserInput>;
};
export type CashRegisterUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CashRegisterWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashRegisterUpdateWithoutUserInput, Prisma.CashRegisterUncheckedUpdateWithoutUserInput>;
};
export type CashRegisterUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CashRegisterScalarWhereInput;
    data: Prisma.XOR<Prisma.CashRegisterUpdateManyMutationInput, Prisma.CashRegisterUncheckedUpdateManyWithoutUserInput>;
};
export type CashRegisterScalarWhereInput = {
    AND?: Prisma.CashRegisterScalarWhereInput | Prisma.CashRegisterScalarWhereInput[];
    OR?: Prisma.CashRegisterScalarWhereInput[];
    NOT?: Prisma.CashRegisterScalarWhereInput | Prisma.CashRegisterScalarWhereInput[];
    id?: Prisma.IntFilter<"CashRegister"> | number;
    shopId?: Prisma.IntFilter<"CashRegister"> | number;
    userId?: Prisma.IntFilter<"CashRegister"> | number;
    date?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    openingAmount?: Prisma.DecimalFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.DecimalNullableFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.DecimalNullableFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.DecimalNullableFilter<"CashRegister"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFilter<"CashRegister"> | $Enums.CashRegisterStatus;
    notes?: Prisma.StringNullableFilter<"CashRegister"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
};
export type CashRegisterCreateWithoutShopInput = {
    date: Date | string;
    openingAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CashRegisterStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCashRegistersInput;
};
export type CashRegisterUncheckedCreateWithoutShopInput = {
    id?: number;
    userId: number;
    date: Date | string;
    openingAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CashRegisterStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CashRegisterCreateOrConnectWithoutShopInput = {
    where: Prisma.CashRegisterWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashRegisterCreateWithoutShopInput, Prisma.CashRegisterUncheckedCreateWithoutShopInput>;
};
export type CashRegisterCreateManyShopInputEnvelope = {
    data: Prisma.CashRegisterCreateManyShopInput | Prisma.CashRegisterCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type CashRegisterUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.CashRegisterWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashRegisterUpdateWithoutShopInput, Prisma.CashRegisterUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.CashRegisterCreateWithoutShopInput, Prisma.CashRegisterUncheckedCreateWithoutShopInput>;
};
export type CashRegisterUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.CashRegisterWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashRegisterUpdateWithoutShopInput, Prisma.CashRegisterUncheckedUpdateWithoutShopInput>;
};
export type CashRegisterUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.CashRegisterScalarWhereInput;
    data: Prisma.XOR<Prisma.CashRegisterUpdateManyMutationInput, Prisma.CashRegisterUncheckedUpdateManyWithoutShopInput>;
};
export type CashRegisterCreateManyUserInput = {
    id?: number;
    shopId: number;
    date: Date | string;
    openingAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CashRegisterStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CashRegisterUpdateWithoutUserInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCashRegistersNestedInput;
};
export type CashRegisterUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashRegisterUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashRegisterCreateManyShopInput = {
    id?: number;
    userId: number;
    date: Date | string;
    openingAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CashRegisterStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CashRegisterUpdateWithoutShopInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCashRegistersNestedInput;
};
export type CashRegisterUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashRegisterUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    closingAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theoreticalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCashRegisterStatusFieldUpdateOperationsInput | $Enums.CashRegisterStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CashRegisterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    date?: boolean;
    openingAmount?: boolean;
    closingAmount?: boolean;
    theoreticalAmount?: boolean;
    difference?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashRegister"]>;
export type CashRegisterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    date?: boolean;
    openingAmount?: boolean;
    closingAmount?: boolean;
    theoreticalAmount?: boolean;
    difference?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashRegister"]>;
export type CashRegisterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    date?: boolean;
    openingAmount?: boolean;
    closingAmount?: boolean;
    theoreticalAmount?: boolean;
    difference?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashRegister"]>;
export type CashRegisterSelectScalar = {
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    date?: boolean;
    openingAmount?: boolean;
    closingAmount?: boolean;
    theoreticalAmount?: boolean;
    difference?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CashRegisterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shopId" | "userId" | "date" | "openingAmount" | "closingAmount" | "theoreticalAmount" | "difference" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["cashRegister"]>;
export type CashRegisterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CashRegisterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CashRegisterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CashRegisterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CashRegister";
    objects: {
        shop: Prisma.$ShopPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shopId: number;
        userId: number;
        date: Date;
        openingAmount: runtime.Decimal;
        closingAmount: runtime.Decimal | null;
        theoreticalAmount: runtime.Decimal | null;
        difference: runtime.Decimal | null;
        status: $Enums.CashRegisterStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cashRegister"]>;
    composites: {};
};
export type CashRegisterGetPayload<S extends boolean | null | undefined | CashRegisterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload, S>;
export type CashRegisterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CashRegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CashRegisterCountAggregateInputType | true;
};
export interface CashRegisterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CashRegister'];
        meta: {
            name: 'CashRegister';
        };
    };
    findUnique<T extends CashRegisterFindUniqueArgs>(args: Prisma.SelectSubset<T, CashRegisterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CashRegisterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CashRegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CashRegisterFindFirstArgs>(args?: Prisma.SelectSubset<T, CashRegisterFindFirstArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CashRegisterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CashRegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CashRegisterFindManyArgs>(args?: Prisma.SelectSubset<T, CashRegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CashRegisterCreateArgs>(args: Prisma.SelectSubset<T, CashRegisterCreateArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CashRegisterCreateManyArgs>(args?: Prisma.SelectSubset<T, CashRegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CashRegisterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CashRegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CashRegisterDeleteArgs>(args: Prisma.SelectSubset<T, CashRegisterDeleteArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CashRegisterUpdateArgs>(args: Prisma.SelectSubset<T, CashRegisterUpdateArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CashRegisterDeleteManyArgs>(args?: Prisma.SelectSubset<T, CashRegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CashRegisterUpdateManyArgs>(args: Prisma.SelectSubset<T, CashRegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CashRegisterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CashRegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CashRegisterUpsertArgs>(args: Prisma.SelectSubset<T, CashRegisterUpsertArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CashRegisterCountArgs>(args?: Prisma.Subset<T, CashRegisterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CashRegisterCountAggregateOutputType> : number>;
    aggregate<T extends CashRegisterAggregateArgs>(args: Prisma.Subset<T, CashRegisterAggregateArgs>): Prisma.PrismaPromise<GetCashRegisterAggregateType<T>>;
    groupBy<T extends CashRegisterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CashRegisterGroupByArgs['orderBy'];
    } : {
        orderBy?: CashRegisterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CashRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CashRegisterFieldRefs;
}
export interface Prisma__CashRegisterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shop<T extends Prisma.ShopDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopClient<runtime.Types.Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CashRegisterFieldRefs {
    readonly id: Prisma.FieldRef<"CashRegister", 'Int'>;
    readonly shopId: Prisma.FieldRef<"CashRegister", 'Int'>;
    readonly userId: Prisma.FieldRef<"CashRegister", 'Int'>;
    readonly date: Prisma.FieldRef<"CashRegister", 'DateTime'>;
    readonly openingAmount: Prisma.FieldRef<"CashRegister", 'Decimal'>;
    readonly closingAmount: Prisma.FieldRef<"CashRegister", 'Decimal'>;
    readonly theoreticalAmount: Prisma.FieldRef<"CashRegister", 'Decimal'>;
    readonly difference: Prisma.FieldRef<"CashRegister", 'Decimal'>;
    readonly status: Prisma.FieldRef<"CashRegister", 'CashRegisterStatus'>;
    readonly notes: Prisma.FieldRef<"CashRegister", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CashRegister", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CashRegister", 'DateTime'>;
}
export type CashRegisterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashRegisterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashRegisterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashRegisterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashRegisterCreateInput, Prisma.CashRegisterUncheckedCreateInput>;
};
export type CashRegisterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CashRegisterCreateManyInput | Prisma.CashRegisterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CashRegisterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    data: Prisma.CashRegisterCreateManyInput | Prisma.CashRegisterCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CashRegisterIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CashRegisterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashRegisterUpdateInput, Prisma.CashRegisterUncheckedUpdateInput>;
    where: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CashRegisterUpdateManyMutationInput, Prisma.CashRegisterUncheckedUpdateManyInput>;
    where?: Prisma.CashRegisterWhereInput;
    limit?: number;
};
export type CashRegisterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashRegisterUpdateManyMutationInput, Prisma.CashRegisterUncheckedUpdateManyInput>;
    where?: Prisma.CashRegisterWhereInput;
    limit?: number;
    include?: Prisma.CashRegisterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CashRegisterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where: Prisma.CashRegisterWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashRegisterCreateInput, Prisma.CashRegisterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CashRegisterUpdateInput, Prisma.CashRegisterUncheckedUpdateInput>;
};
export type CashRegisterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashRegisterWhereInput;
    limit?: number;
};
export type CashRegisterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
};
