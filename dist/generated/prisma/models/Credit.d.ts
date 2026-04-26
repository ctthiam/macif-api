import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CreditModel = runtime.Types.Result.DefaultSelection<Prisma.$CreditPayload>;
export type AggregateCredit = {
    _count: CreditCountAggregateOutputType | null;
    _avg: CreditAvgAggregateOutputType | null;
    _sum: CreditSumAggregateOutputType | null;
    _min: CreditMinAggregateOutputType | null;
    _max: CreditMaxAggregateOutputType | null;
};
export type CreditAvgAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    saleId: number | null;
    amountTotal: runtime.Decimal | null;
    amountPaid: runtime.Decimal | null;
    amountRemaining: runtime.Decimal | null;
};
export type CreditSumAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    saleId: number | null;
    amountTotal: runtime.Decimal | null;
    amountPaid: runtime.Decimal | null;
    amountRemaining: runtime.Decimal | null;
};
export type CreditMinAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    saleId: number | null;
    amountTotal: runtime.Decimal | null;
    amountPaid: runtime.Decimal | null;
    amountRemaining: runtime.Decimal | null;
    dueDate: Date | null;
    status: $Enums.CreditStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CreditMaxAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    saleId: number | null;
    amountTotal: runtime.Decimal | null;
    amountPaid: runtime.Decimal | null;
    amountRemaining: runtime.Decimal | null;
    dueDate: Date | null;
    status: $Enums.CreditStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CreditCountAggregateOutputType = {
    id: number;
    shopId: number;
    customerId: number;
    saleId: number;
    amountTotal: number;
    amountPaid: number;
    amountRemaining: number;
    dueDate: number;
    status: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CreditAvgAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    amountTotal?: true;
    amountPaid?: true;
    amountRemaining?: true;
};
export type CreditSumAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    amountTotal?: true;
    amountPaid?: true;
    amountRemaining?: true;
};
export type CreditMinAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    amountTotal?: true;
    amountPaid?: true;
    amountRemaining?: true;
    dueDate?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CreditMaxAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    amountTotal?: true;
    amountPaid?: true;
    amountRemaining?: true;
    dueDate?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CreditCountAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    amountTotal?: true;
    amountPaid?: true;
    amountRemaining?: true;
    dueDate?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CreditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditWhereInput;
    orderBy?: Prisma.CreditOrderByWithRelationInput | Prisma.CreditOrderByWithRelationInput[];
    cursor?: Prisma.CreditWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CreditCountAggregateInputType;
    _avg?: CreditAvgAggregateInputType;
    _sum?: CreditSumAggregateInputType;
    _min?: CreditMinAggregateInputType;
    _max?: CreditMaxAggregateInputType;
};
export type GetCreditAggregateType<T extends CreditAggregateArgs> = {
    [P in keyof T & keyof AggregateCredit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCredit[P]> : Prisma.GetScalarType<T[P], AggregateCredit[P]>;
};
export type CreditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditWhereInput;
    orderBy?: Prisma.CreditOrderByWithAggregationInput | Prisma.CreditOrderByWithAggregationInput[];
    by: Prisma.CreditScalarFieldEnum[] | Prisma.CreditScalarFieldEnum;
    having?: Prisma.CreditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CreditCountAggregateInputType | true;
    _avg?: CreditAvgAggregateInputType;
    _sum?: CreditSumAggregateInputType;
    _min?: CreditMinAggregateInputType;
    _max?: CreditMaxAggregateInputType;
};
export type CreditGroupByOutputType = {
    id: number;
    shopId: number;
    customerId: number;
    saleId: number | null;
    amountTotal: runtime.Decimal;
    amountPaid: runtime.Decimal;
    amountRemaining: runtime.Decimal;
    dueDate: Date | null;
    status: $Enums.CreditStatus;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CreditCountAggregateOutputType | null;
    _avg: CreditAvgAggregateOutputType | null;
    _sum: CreditSumAggregateOutputType | null;
    _min: CreditMinAggregateOutputType | null;
    _max: CreditMaxAggregateOutputType | null;
};
export type GetCreditGroupByPayload<T extends CreditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CreditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CreditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CreditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CreditGroupByOutputType[P]>;
}>>;
export type CreditWhereInput = {
    AND?: Prisma.CreditWhereInput | Prisma.CreditWhereInput[];
    OR?: Prisma.CreditWhereInput[];
    NOT?: Prisma.CreditWhereInput | Prisma.CreditWhereInput[];
    id?: Prisma.IntFilter<"Credit"> | number;
    shopId?: Prisma.IntFilter<"Credit"> | number;
    customerId?: Prisma.IntFilter<"Credit"> | number;
    saleId?: Prisma.IntNullableFilter<"Credit"> | number | null;
    amountTotal?: Prisma.DecimalFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Credit"> | Date | string | null;
    status?: Prisma.EnumCreditStatusFilter<"Credit"> | $Enums.CreditStatus;
    notes?: Prisma.StringNullableFilter<"Credit"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Credit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Credit"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    sale?: Prisma.XOR<Prisma.SaleNullableScalarRelationFilter, Prisma.SaleWhereInput> | null;
    payments?: Prisma.CreditPaymentListRelationFilter;
};
export type CreditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amountTotal?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountRemaining?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    shop?: Prisma.ShopOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    sale?: Prisma.SaleOrderByWithRelationInput;
    payments?: Prisma.CreditPaymentOrderByRelationAggregateInput;
};
export type CreditWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CreditWhereInput | Prisma.CreditWhereInput[];
    OR?: Prisma.CreditWhereInput[];
    NOT?: Prisma.CreditWhereInput | Prisma.CreditWhereInput[];
    shopId?: Prisma.IntFilter<"Credit"> | number;
    customerId?: Prisma.IntFilter<"Credit"> | number;
    saleId?: Prisma.IntNullableFilter<"Credit"> | number | null;
    amountTotal?: Prisma.DecimalFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Credit"> | Date | string | null;
    status?: Prisma.EnumCreditStatusFilter<"Credit"> | $Enums.CreditStatus;
    notes?: Prisma.StringNullableFilter<"Credit"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Credit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Credit"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    sale?: Prisma.XOR<Prisma.SaleNullableScalarRelationFilter, Prisma.SaleWhereInput> | null;
    payments?: Prisma.CreditPaymentListRelationFilter;
}, "id">;
export type CreditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amountTotal?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountRemaining?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CreditCountOrderByAggregateInput;
    _avg?: Prisma.CreditAvgOrderByAggregateInput;
    _max?: Prisma.CreditMaxOrderByAggregateInput;
    _min?: Prisma.CreditMinOrderByAggregateInput;
    _sum?: Prisma.CreditSumOrderByAggregateInput;
};
export type CreditScalarWhereWithAggregatesInput = {
    AND?: Prisma.CreditScalarWhereWithAggregatesInput | Prisma.CreditScalarWhereWithAggregatesInput[];
    OR?: Prisma.CreditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CreditScalarWhereWithAggregatesInput | Prisma.CreditScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Credit"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"Credit"> | number;
    customerId?: Prisma.IntWithAggregatesFilter<"Credit"> | number;
    saleId?: Prisma.IntNullableWithAggregatesFilter<"Credit"> | number | null;
    amountTotal?: Prisma.DecimalWithAggregatesFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalWithAggregatesFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalWithAggregatesFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Credit"> | Date | string | null;
    status?: Prisma.EnumCreditStatusWithAggregatesFilter<"Credit"> | $Enums.CreditStatus;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Credit"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Credit"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Credit"> | Date | string;
};
export type CreditCreateInput = {
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCreditsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutCreditsInput;
    sale?: Prisma.SaleCreateNestedOneWithoutCreditsInput;
    payments?: Prisma.CreditPaymentCreateNestedManyWithoutCreditInput;
};
export type CreditUncheckedCreateInput = {
    id?: number;
    shopId: number;
    customerId: number;
    saleId?: number | null;
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutCreditInput;
};
export type CreditUpdateInput = {
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCreditsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCreditsNestedInput;
    sale?: Prisma.SaleUpdateOneWithoutCreditsNestedInput;
    payments?: Prisma.CreditPaymentUpdateManyWithoutCreditNestedInput;
};
export type CreditUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutCreditNestedInput;
};
export type CreditCreateManyInput = {
    id?: number;
    shopId: number;
    customerId: number;
    saleId?: number | null;
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreditUpdateManyMutationInput = {
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditListRelationFilter = {
    every?: Prisma.CreditWhereInput;
    some?: Prisma.CreditWhereInput;
    none?: Prisma.CreditWhereInput;
};
export type CreditOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CreditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    amountTotal?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountRemaining?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CreditAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    amountTotal?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountRemaining?: Prisma.SortOrder;
};
export type CreditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    amountTotal?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountRemaining?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CreditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    amountTotal?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountRemaining?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CreditSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    amountTotal?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountRemaining?: Prisma.SortOrder;
};
export type CreditScalarRelationFilter = {
    is?: Prisma.CreditWhereInput;
    isNot?: Prisma.CreditWhereInput;
};
export type CreditCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutShopInput, Prisma.CreditUncheckedCreateWithoutShopInput> | Prisma.CreditCreateWithoutShopInput[] | Prisma.CreditUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutShopInput | Prisma.CreditCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.CreditCreateManyShopInputEnvelope;
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
};
export type CreditUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutShopInput, Prisma.CreditUncheckedCreateWithoutShopInput> | Prisma.CreditCreateWithoutShopInput[] | Prisma.CreditUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutShopInput | Prisma.CreditCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.CreditCreateManyShopInputEnvelope;
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
};
export type CreditUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutShopInput, Prisma.CreditUncheckedCreateWithoutShopInput> | Prisma.CreditCreateWithoutShopInput[] | Prisma.CreditUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutShopInput | Prisma.CreditCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.CreditUpsertWithWhereUniqueWithoutShopInput | Prisma.CreditUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.CreditCreateManyShopInputEnvelope;
    set?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    disconnect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    delete?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    update?: Prisma.CreditUpdateWithWhereUniqueWithoutShopInput | Prisma.CreditUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.CreditUpdateManyWithWhereWithoutShopInput | Prisma.CreditUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.CreditScalarWhereInput | Prisma.CreditScalarWhereInput[];
};
export type CreditUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutShopInput, Prisma.CreditUncheckedCreateWithoutShopInput> | Prisma.CreditCreateWithoutShopInput[] | Prisma.CreditUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutShopInput | Prisma.CreditCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.CreditUpsertWithWhereUniqueWithoutShopInput | Prisma.CreditUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.CreditCreateManyShopInputEnvelope;
    set?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    disconnect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    delete?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    update?: Prisma.CreditUpdateWithWhereUniqueWithoutShopInput | Prisma.CreditUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.CreditUpdateManyWithWhereWithoutShopInput | Prisma.CreditUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.CreditScalarWhereInput | Prisma.CreditScalarWhereInput[];
};
export type CreditCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutCustomerInput, Prisma.CreditUncheckedCreateWithoutCustomerInput> | Prisma.CreditCreateWithoutCustomerInput[] | Prisma.CreditUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutCustomerInput | Prisma.CreditCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CreditCreateManyCustomerInputEnvelope;
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
};
export type CreditUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutCustomerInput, Prisma.CreditUncheckedCreateWithoutCustomerInput> | Prisma.CreditCreateWithoutCustomerInput[] | Prisma.CreditUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutCustomerInput | Prisma.CreditCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CreditCreateManyCustomerInputEnvelope;
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
};
export type CreditUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutCustomerInput, Prisma.CreditUncheckedCreateWithoutCustomerInput> | Prisma.CreditCreateWithoutCustomerInput[] | Prisma.CreditUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutCustomerInput | Prisma.CreditCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CreditUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CreditUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CreditCreateManyCustomerInputEnvelope;
    set?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    disconnect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    delete?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    update?: Prisma.CreditUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CreditUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CreditUpdateManyWithWhereWithoutCustomerInput | Prisma.CreditUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CreditScalarWhereInput | Prisma.CreditScalarWhereInput[];
};
export type CreditUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutCustomerInput, Prisma.CreditUncheckedCreateWithoutCustomerInput> | Prisma.CreditCreateWithoutCustomerInput[] | Prisma.CreditUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutCustomerInput | Prisma.CreditCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CreditUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CreditUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CreditCreateManyCustomerInputEnvelope;
    set?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    disconnect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    delete?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    update?: Prisma.CreditUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CreditUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CreditUpdateManyWithWhereWithoutCustomerInput | Prisma.CreditUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CreditScalarWhereInput | Prisma.CreditScalarWhereInput[];
};
export type CreditCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutSaleInput, Prisma.CreditUncheckedCreateWithoutSaleInput> | Prisma.CreditCreateWithoutSaleInput[] | Prisma.CreditUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutSaleInput | Prisma.CreditCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.CreditCreateManySaleInputEnvelope;
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
};
export type CreditUncheckedCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutSaleInput, Prisma.CreditUncheckedCreateWithoutSaleInput> | Prisma.CreditCreateWithoutSaleInput[] | Prisma.CreditUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutSaleInput | Prisma.CreditCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.CreditCreateManySaleInputEnvelope;
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
};
export type CreditUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutSaleInput, Prisma.CreditUncheckedCreateWithoutSaleInput> | Prisma.CreditCreateWithoutSaleInput[] | Prisma.CreditUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutSaleInput | Prisma.CreditCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.CreditUpsertWithWhereUniqueWithoutSaleInput | Prisma.CreditUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.CreditCreateManySaleInputEnvelope;
    set?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    disconnect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    delete?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    update?: Prisma.CreditUpdateWithWhereUniqueWithoutSaleInput | Prisma.CreditUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.CreditUpdateManyWithWhereWithoutSaleInput | Prisma.CreditUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.CreditScalarWhereInput | Prisma.CreditScalarWhereInput[];
};
export type CreditUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutSaleInput, Prisma.CreditUncheckedCreateWithoutSaleInput> | Prisma.CreditCreateWithoutSaleInput[] | Prisma.CreditUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutSaleInput | Prisma.CreditCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.CreditUpsertWithWhereUniqueWithoutSaleInput | Prisma.CreditUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.CreditCreateManySaleInputEnvelope;
    set?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    disconnect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    delete?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    connect?: Prisma.CreditWhereUniqueInput | Prisma.CreditWhereUniqueInput[];
    update?: Prisma.CreditUpdateWithWhereUniqueWithoutSaleInput | Prisma.CreditUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.CreditUpdateManyWithWhereWithoutSaleInput | Prisma.CreditUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.CreditScalarWhereInput | Prisma.CreditScalarWhereInput[];
};
export type EnumCreditStatusFieldUpdateOperationsInput = {
    set?: $Enums.CreditStatus;
};
export type CreditCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutPaymentsInput, Prisma.CreditUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.CreditWhereUniqueInput;
};
export type CreditUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.CreditCreateWithoutPaymentsInput, Prisma.CreditUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.CreditCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.CreditUpsertWithoutPaymentsInput;
    connect?: Prisma.CreditWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CreditUpdateToOneWithWhereWithoutPaymentsInput, Prisma.CreditUpdateWithoutPaymentsInput>, Prisma.CreditUncheckedUpdateWithoutPaymentsInput>;
};
export type CreditCreateWithoutShopInput = {
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutCreditsInput;
    sale?: Prisma.SaleCreateNestedOneWithoutCreditsInput;
    payments?: Prisma.CreditPaymentCreateNestedManyWithoutCreditInput;
};
export type CreditUncheckedCreateWithoutShopInput = {
    id?: number;
    customerId: number;
    saleId?: number | null;
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutCreditInput;
};
export type CreditCreateOrConnectWithoutShopInput = {
    where: Prisma.CreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditCreateWithoutShopInput, Prisma.CreditUncheckedCreateWithoutShopInput>;
};
export type CreditCreateManyShopInputEnvelope = {
    data: Prisma.CreditCreateManyShopInput | Prisma.CreditCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type CreditUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.CreditWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreditUpdateWithoutShopInput, Prisma.CreditUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.CreditCreateWithoutShopInput, Prisma.CreditUncheckedCreateWithoutShopInput>;
};
export type CreditUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.CreditWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreditUpdateWithoutShopInput, Prisma.CreditUncheckedUpdateWithoutShopInput>;
};
export type CreditUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.CreditScalarWhereInput;
    data: Prisma.XOR<Prisma.CreditUpdateManyMutationInput, Prisma.CreditUncheckedUpdateManyWithoutShopInput>;
};
export type CreditScalarWhereInput = {
    AND?: Prisma.CreditScalarWhereInput | Prisma.CreditScalarWhereInput[];
    OR?: Prisma.CreditScalarWhereInput[];
    NOT?: Prisma.CreditScalarWhereInput | Prisma.CreditScalarWhereInput[];
    id?: Prisma.IntFilter<"Credit"> | number;
    shopId?: Prisma.IntFilter<"Credit"> | number;
    customerId?: Prisma.IntFilter<"Credit"> | number;
    saleId?: Prisma.IntNullableFilter<"Credit"> | number | null;
    amountTotal?: Prisma.DecimalFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFilter<"Credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Credit"> | Date | string | null;
    status?: Prisma.EnumCreditStatusFilter<"Credit"> | $Enums.CreditStatus;
    notes?: Prisma.StringNullableFilter<"Credit"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Credit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Credit"> | Date | string;
};
export type CreditCreateWithoutCustomerInput = {
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCreditsInput;
    sale?: Prisma.SaleCreateNestedOneWithoutCreditsInput;
    payments?: Prisma.CreditPaymentCreateNestedManyWithoutCreditInput;
};
export type CreditUncheckedCreateWithoutCustomerInput = {
    id?: number;
    shopId: number;
    saleId?: number | null;
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutCreditInput;
};
export type CreditCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditCreateWithoutCustomerInput, Prisma.CreditUncheckedCreateWithoutCustomerInput>;
};
export type CreditCreateManyCustomerInputEnvelope = {
    data: Prisma.CreditCreateManyCustomerInput | Prisma.CreditCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type CreditUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CreditWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreditUpdateWithoutCustomerInput, Prisma.CreditUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CreditCreateWithoutCustomerInput, Prisma.CreditUncheckedCreateWithoutCustomerInput>;
};
export type CreditUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CreditWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreditUpdateWithoutCustomerInput, Prisma.CreditUncheckedUpdateWithoutCustomerInput>;
};
export type CreditUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.CreditScalarWhereInput;
    data: Prisma.XOR<Prisma.CreditUpdateManyMutationInput, Prisma.CreditUncheckedUpdateManyWithoutCustomerInput>;
};
export type CreditCreateWithoutSaleInput = {
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCreditsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutCreditsInput;
    payments?: Prisma.CreditPaymentCreateNestedManyWithoutCreditInput;
};
export type CreditUncheckedCreateWithoutSaleInput = {
    id?: number;
    shopId: number;
    customerId: number;
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.CreditPaymentUncheckedCreateNestedManyWithoutCreditInput;
};
export type CreditCreateOrConnectWithoutSaleInput = {
    where: Prisma.CreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditCreateWithoutSaleInput, Prisma.CreditUncheckedCreateWithoutSaleInput>;
};
export type CreditCreateManySaleInputEnvelope = {
    data: Prisma.CreditCreateManySaleInput | Prisma.CreditCreateManySaleInput[];
    skipDuplicates?: boolean;
};
export type CreditUpsertWithWhereUniqueWithoutSaleInput = {
    where: Prisma.CreditWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreditUpdateWithoutSaleInput, Prisma.CreditUncheckedUpdateWithoutSaleInput>;
    create: Prisma.XOR<Prisma.CreditCreateWithoutSaleInput, Prisma.CreditUncheckedCreateWithoutSaleInput>;
};
export type CreditUpdateWithWhereUniqueWithoutSaleInput = {
    where: Prisma.CreditWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreditUpdateWithoutSaleInput, Prisma.CreditUncheckedUpdateWithoutSaleInput>;
};
export type CreditUpdateManyWithWhereWithoutSaleInput = {
    where: Prisma.CreditScalarWhereInput;
    data: Prisma.XOR<Prisma.CreditUpdateManyMutationInput, Prisma.CreditUncheckedUpdateManyWithoutSaleInput>;
};
export type CreditCreateWithoutPaymentsInput = {
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCreditsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutCreditsInput;
    sale?: Prisma.SaleCreateNestedOneWithoutCreditsInput;
};
export type CreditUncheckedCreateWithoutPaymentsInput = {
    id?: number;
    shopId: number;
    customerId: number;
    saleId?: number | null;
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreditCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.CreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditCreateWithoutPaymentsInput, Prisma.CreditUncheckedCreateWithoutPaymentsInput>;
};
export type CreditUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.CreditUpdateWithoutPaymentsInput, Prisma.CreditUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.CreditCreateWithoutPaymentsInput, Prisma.CreditUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.CreditWhereInput;
};
export type CreditUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.CreditWhereInput;
    data: Prisma.XOR<Prisma.CreditUpdateWithoutPaymentsInput, Prisma.CreditUncheckedUpdateWithoutPaymentsInput>;
};
export type CreditUpdateWithoutPaymentsInput = {
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCreditsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCreditsNestedInput;
    sale?: Prisma.SaleUpdateOneWithoutCreditsNestedInput;
};
export type CreditUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditCreateManyShopInput = {
    id?: number;
    customerId: number;
    saleId?: number | null;
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreditUpdateWithoutShopInput = {
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCreditsNestedInput;
    sale?: Prisma.SaleUpdateOneWithoutCreditsNestedInput;
    payments?: Prisma.CreditPaymentUpdateManyWithoutCreditNestedInput;
};
export type CreditUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutCreditNestedInput;
};
export type CreditUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditCreateManyCustomerInput = {
    id?: number;
    shopId: number;
    saleId?: number | null;
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreditUpdateWithoutCustomerInput = {
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCreditsNestedInput;
    sale?: Prisma.SaleUpdateOneWithoutCreditsNestedInput;
    payments?: Prisma.CreditPaymentUpdateManyWithoutCreditNestedInput;
};
export type CreditUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutCreditNestedInput;
};
export type CreditUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditCreateManySaleInput = {
    id?: number;
    shopId: number;
    customerId: number;
    amountTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.CreditStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreditUpdateWithoutSaleInput = {
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCreditsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCreditsNestedInput;
    payments?: Prisma.CreditPaymentUpdateManyWithoutCreditNestedInput;
};
export type CreditUncheckedUpdateWithoutSaleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.CreditPaymentUncheckedUpdateManyWithoutCreditNestedInput;
};
export type CreditUncheckedUpdateManyWithoutSaleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    amountTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountRemaining?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCreditStatusFieldUpdateOperationsInput | $Enums.CreditStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditCountOutputType = {
    payments: number;
};
export type CreditCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | CreditCountOutputTypeCountPaymentsArgs;
};
export type CreditCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditCountOutputTypeSelect<ExtArgs> | null;
};
export type CreditCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditPaymentWhereInput;
};
export type CreditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    saleId?: boolean;
    amountTotal?: boolean;
    amountPaid?: boolean;
    amountRemaining?: boolean;
    dueDate?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Credit$saleArgs<ExtArgs>;
    payments?: boolean | Prisma.Credit$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.CreditCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["credit"]>;
export type CreditSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    saleId?: boolean;
    amountTotal?: boolean;
    amountPaid?: boolean;
    amountRemaining?: boolean;
    dueDate?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Credit$saleArgs<ExtArgs>;
}, ExtArgs["result"]["credit"]>;
export type CreditSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    saleId?: boolean;
    amountTotal?: boolean;
    amountPaid?: boolean;
    amountRemaining?: boolean;
    dueDate?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Credit$saleArgs<ExtArgs>;
}, ExtArgs["result"]["credit"]>;
export type CreditSelectScalar = {
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    saleId?: boolean;
    amountTotal?: boolean;
    amountPaid?: boolean;
    amountRemaining?: boolean;
    dueDate?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CreditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shopId" | "customerId" | "saleId" | "amountTotal" | "amountPaid" | "amountRemaining" | "dueDate" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["credit"]>;
export type CreditInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Credit$saleArgs<ExtArgs>;
    payments?: boolean | Prisma.Credit$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.CreditCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CreditIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Credit$saleArgs<ExtArgs>;
};
export type CreditIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Credit$saleArgs<ExtArgs>;
};
export type $CreditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Credit";
    objects: {
        shop: Prisma.$ShopPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs>;
        sale: Prisma.$SalePayload<ExtArgs> | null;
        payments: Prisma.$CreditPaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shopId: number;
        customerId: number;
        saleId: number | null;
        amountTotal: runtime.Decimal;
        amountPaid: runtime.Decimal;
        amountRemaining: runtime.Decimal;
        dueDate: Date | null;
        status: $Enums.CreditStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["credit"]>;
    composites: {};
};
export type CreditGetPayload<S extends boolean | null | undefined | CreditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CreditPayload, S>;
export type CreditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CreditCountAggregateInputType | true;
};
export interface CreditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Credit'];
        meta: {
            name: 'Credit';
        };
    };
    findUnique<T extends CreditFindUniqueArgs>(args: Prisma.SelectSubset<T, CreditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CreditClient<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CreditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreditClient<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CreditFindFirstArgs>(args?: Prisma.SelectSubset<T, CreditFindFirstArgs<ExtArgs>>): Prisma.Prisma__CreditClient<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CreditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CreditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreditClient<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CreditFindManyArgs>(args?: Prisma.SelectSubset<T, CreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CreditCreateArgs>(args: Prisma.SelectSubset<T, CreditCreateArgs<ExtArgs>>): Prisma.Prisma__CreditClient<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CreditCreateManyArgs>(args?: Prisma.SelectSubset<T, CreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CreditCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CreditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CreditDeleteArgs>(args: Prisma.SelectSubset<T, CreditDeleteArgs<ExtArgs>>): Prisma.Prisma__CreditClient<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CreditUpdateArgs>(args: Prisma.SelectSubset<T, CreditUpdateArgs<ExtArgs>>): Prisma.Prisma__CreditClient<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CreditDeleteManyArgs>(args?: Prisma.SelectSubset<T, CreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CreditUpdateManyArgs>(args: Prisma.SelectSubset<T, CreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CreditUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CreditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CreditUpsertArgs>(args: Prisma.SelectSubset<T, CreditUpsertArgs<ExtArgs>>): Prisma.Prisma__CreditClient<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CreditCountArgs>(args?: Prisma.Subset<T, CreditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CreditCountAggregateOutputType> : number>;
    aggregate<T extends CreditAggregateArgs>(args: Prisma.Subset<T, CreditAggregateArgs>): Prisma.PrismaPromise<GetCreditAggregateType<T>>;
    groupBy<T extends CreditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CreditGroupByArgs['orderBy'];
    } : {
        orderBy?: CreditGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CreditFieldRefs;
}
export interface Prisma__CreditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shop<T extends Prisma.ShopDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopClient<runtime.Types.Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sale<T extends Prisma.Credit$saleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Credit$saleArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.Credit$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Credit$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CreditFieldRefs {
    readonly id: Prisma.FieldRef<"Credit", 'Int'>;
    readonly shopId: Prisma.FieldRef<"Credit", 'Int'>;
    readonly customerId: Prisma.FieldRef<"Credit", 'Int'>;
    readonly saleId: Prisma.FieldRef<"Credit", 'Int'>;
    readonly amountTotal: Prisma.FieldRef<"Credit", 'Decimal'>;
    readonly amountPaid: Prisma.FieldRef<"Credit", 'Decimal'>;
    readonly amountRemaining: Prisma.FieldRef<"Credit", 'Decimal'>;
    readonly dueDate: Prisma.FieldRef<"Credit", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Credit", 'CreditStatus'>;
    readonly notes: Prisma.FieldRef<"Credit", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Credit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Credit", 'DateTime'>;
}
export type CreditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
    where: Prisma.CreditWhereUniqueInput;
};
export type CreditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
    where: Prisma.CreditWhereUniqueInput;
};
export type CreditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
    where?: Prisma.CreditWhereInput;
    orderBy?: Prisma.CreditOrderByWithRelationInput | Prisma.CreditOrderByWithRelationInput[];
    cursor?: Prisma.CreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreditScalarFieldEnum | Prisma.CreditScalarFieldEnum[];
};
export type CreditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
    where?: Prisma.CreditWhereInput;
    orderBy?: Prisma.CreditOrderByWithRelationInput | Prisma.CreditOrderByWithRelationInput[];
    cursor?: Prisma.CreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreditScalarFieldEnum | Prisma.CreditScalarFieldEnum[];
};
export type CreditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
    where?: Prisma.CreditWhereInput;
    orderBy?: Prisma.CreditOrderByWithRelationInput | Prisma.CreditOrderByWithRelationInput[];
    cursor?: Prisma.CreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreditScalarFieldEnum | Prisma.CreditScalarFieldEnum[];
};
export type CreditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreditCreateInput, Prisma.CreditUncheckedCreateInput>;
};
export type CreditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CreditCreateManyInput | Prisma.CreditCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CreditCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    data: Prisma.CreditCreateManyInput | Prisma.CreditCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CreditIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CreditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreditUpdateInput, Prisma.CreditUncheckedUpdateInput>;
    where: Prisma.CreditWhereUniqueInput;
};
export type CreditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CreditUpdateManyMutationInput, Prisma.CreditUncheckedUpdateManyInput>;
    where?: Prisma.CreditWhereInput;
    limit?: number;
};
export type CreditUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreditUpdateManyMutationInput, Prisma.CreditUncheckedUpdateManyInput>;
    where?: Prisma.CreditWhereInput;
    limit?: number;
    include?: Prisma.CreditIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CreditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
    where: Prisma.CreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditCreateInput, Prisma.CreditUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CreditUpdateInput, Prisma.CreditUncheckedUpdateInput>;
};
export type CreditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
    where: Prisma.CreditWhereUniqueInput;
};
export type CreditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditWhereInput;
    limit?: number;
};
export type Credit$saleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where?: Prisma.SaleWhereInput;
};
export type Credit$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditSelect<ExtArgs> | null;
    omit?: Prisma.CreditOmit<ExtArgs> | null;
    include?: Prisma.CreditInclude<ExtArgs> | null;
};
