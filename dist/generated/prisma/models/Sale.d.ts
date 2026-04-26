import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SaleModel = runtime.Types.Result.DefaultSelection<Prisma.$SalePayload>;
export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null;
    _avg: SaleAvgAggregateOutputType | null;
    _sum: SaleSumAggregateOutputType | null;
    _min: SaleMinAggregateOutputType | null;
    _max: SaleMaxAggregateOutputType | null;
};
export type SaleAvgAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    userId: number | null;
    totalAmount: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    netAmount: runtime.Decimal | null;
    paidAmount: runtime.Decimal | null;
    creditAmount: runtime.Decimal | null;
};
export type SaleSumAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    userId: number | null;
    totalAmount: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    netAmount: runtime.Decimal | null;
    paidAmount: runtime.Decimal | null;
    creditAmount: runtime.Decimal | null;
};
export type SaleMinAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    userId: number | null;
    reference: string | null;
    totalAmount: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    netAmount: runtime.Decimal | null;
    paymentMethod: $Enums.PaymentMethod | null;
    paidAmount: runtime.Decimal | null;
    creditAmount: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date | null;
};
export type SaleMaxAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    userId: number | null;
    reference: string | null;
    totalAmount: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    netAmount: runtime.Decimal | null;
    paymentMethod: $Enums.PaymentMethod | null;
    paidAmount: runtime.Decimal | null;
    creditAmount: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date | null;
};
export type SaleCountAggregateOutputType = {
    id: number;
    shopId: number;
    customerId: number;
    userId: number;
    reference: number;
    totalAmount: number;
    discount: number;
    netAmount: number;
    paymentMethod: number;
    paidAmount: number;
    creditAmount: number;
    notes: number;
    createdAt: number;
    _all: number;
};
export type SaleAvgAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    userId?: true;
    totalAmount?: true;
    discount?: true;
    netAmount?: true;
    paidAmount?: true;
    creditAmount?: true;
};
export type SaleSumAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    userId?: true;
    totalAmount?: true;
    discount?: true;
    netAmount?: true;
    paidAmount?: true;
    creditAmount?: true;
};
export type SaleMinAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    userId?: true;
    reference?: true;
    totalAmount?: true;
    discount?: true;
    netAmount?: true;
    paymentMethod?: true;
    paidAmount?: true;
    creditAmount?: true;
    notes?: true;
    createdAt?: true;
};
export type SaleMaxAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    userId?: true;
    reference?: true;
    totalAmount?: true;
    discount?: true;
    netAmount?: true;
    paymentMethod?: true;
    paidAmount?: true;
    creditAmount?: true;
    notes?: true;
    createdAt?: true;
};
export type SaleCountAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    userId?: true;
    reference?: true;
    totalAmount?: true;
    discount?: true;
    netAmount?: true;
    paymentMethod?: true;
    paidAmount?: true;
    creditAmount?: true;
    notes?: true;
    createdAt?: true;
    _all?: true;
};
export type SaleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithRelationInput | Prisma.SaleOrderByWithRelationInput[];
    cursor?: Prisma.SaleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SaleCountAggregateInputType;
    _avg?: SaleAvgAggregateInputType;
    _sum?: SaleSumAggregateInputType;
    _min?: SaleMinAggregateInputType;
    _max?: SaleMaxAggregateInputType;
};
export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
    [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSale[P]> : Prisma.GetScalarType<T[P], AggregateSale[P]>;
};
export type SaleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithAggregationInput | Prisma.SaleOrderByWithAggregationInput[];
    by: Prisma.SaleScalarFieldEnum[] | Prisma.SaleScalarFieldEnum;
    having?: Prisma.SaleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SaleCountAggregateInputType | true;
    _avg?: SaleAvgAggregateInputType;
    _sum?: SaleSumAggregateInputType;
    _min?: SaleMinAggregateInputType;
    _max?: SaleMaxAggregateInputType;
};
export type SaleGroupByOutputType = {
    id: number;
    shopId: number;
    customerId: number | null;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal;
    discount: runtime.Decimal;
    netAmount: runtime.Decimal;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal;
    creditAmount: runtime.Decimal;
    notes: string | null;
    createdAt: Date;
    _count: SaleCountAggregateOutputType | null;
    _avg: SaleAvgAggregateOutputType | null;
    _sum: SaleSumAggregateOutputType | null;
    _min: SaleMinAggregateOutputType | null;
    _max: SaleMaxAggregateOutputType | null;
};
export type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SaleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SaleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SaleGroupByOutputType[P]>;
}>>;
export type SaleWhereInput = {
    AND?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    OR?: Prisma.SaleWhereInput[];
    NOT?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    id?: Prisma.IntFilter<"Sale"> | number;
    shopId?: Prisma.IntFilter<"Sale"> | number;
    customerId?: Prisma.IntNullableFilter<"Sale"> | number | null;
    userId?: Prisma.IntFilter<"Sale"> | number;
    reference?: Prisma.StringFilter<"Sale"> | string;
    totalAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Sale"> | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Sale"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    items?: Prisma.SaleItemListRelationFilter;
    credits?: Prisma.CreditListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
};
export type SaleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    creditAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shop?: Prisma.ShopOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    items?: Prisma.SaleItemOrderByRelationAggregateInput;
    credits?: Prisma.CreditOrderByRelationAggregateInput;
    invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
};
export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    reference?: string;
    AND?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    OR?: Prisma.SaleWhereInput[];
    NOT?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    shopId?: Prisma.IntFilter<"Sale"> | number;
    customerId?: Prisma.IntNullableFilter<"Sale"> | number | null;
    userId?: Prisma.IntFilter<"Sale"> | number;
    totalAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Sale"> | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Sale"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    items?: Prisma.SaleItemListRelationFilter;
    credits?: Prisma.CreditListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
}, "id" | "reference">;
export type SaleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    creditAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SaleCountOrderByAggregateInput;
    _avg?: Prisma.SaleAvgOrderByAggregateInput;
    _max?: Prisma.SaleMaxOrderByAggregateInput;
    _min?: Prisma.SaleMinOrderByAggregateInput;
    _sum?: Prisma.SaleSumOrderByAggregateInput;
};
export type SaleScalarWhereWithAggregatesInput = {
    AND?: Prisma.SaleScalarWhereWithAggregatesInput | Prisma.SaleScalarWhereWithAggregatesInput[];
    OR?: Prisma.SaleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SaleScalarWhereWithAggregatesInput | Prisma.SaleScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Sale"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"Sale"> | number;
    customerId?: Prisma.IntNullableWithAggregatesFilter<"Sale"> | number | null;
    userId?: Prisma.IntWithAggregatesFilter<"Sale"> | number;
    reference?: Prisma.StringWithAggregatesFilter<"Sale"> | string;
    totalAmount?: Prisma.DecimalWithAggregatesFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalWithAggregatesFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalWithAggregatesFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodWithAggregatesFilter<"Sale"> | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalWithAggregatesFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalWithAggregatesFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Sale"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Sale"> | Date | string;
};
export type SaleCreateInput = {
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutSalesInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutSalesInput;
    user: Prisma.UserCreateNestedOneWithoutSalesInput;
    items?: Prisma.SaleItemCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    items?: Prisma.SaleItemUncheckedCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleUpdateInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutSalesNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSalesNestedInput;
    items?: Prisma.SaleItemUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUncheckedUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateManyInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type SaleUpdateManyMutationInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleListRelationFilter = {
    every?: Prisma.SaleWhereInput;
    some?: Prisma.SaleWhereInput;
    none?: Prisma.SaleWhereInput;
};
export type SaleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SaleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    creditAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SaleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    creditAmount?: Prisma.SortOrder;
};
export type SaleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    creditAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SaleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    creditAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SaleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    netAmount?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    creditAmount?: Prisma.SortOrder;
};
export type SaleScalarRelationFilter = {
    is?: Prisma.SaleWhereInput;
    isNot?: Prisma.SaleWhereInput;
};
export type SaleNullableScalarRelationFilter = {
    is?: Prisma.SaleWhereInput | null;
    isNot?: Prisma.SaleWhereInput | null;
};
export type SaleCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput> | Prisma.SaleCreateWithoutUserInput[] | Prisma.SaleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutUserInput | Prisma.SaleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SaleCreateManyUserInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput> | Prisma.SaleCreateWithoutUserInput[] | Prisma.SaleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutUserInput | Prisma.SaleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SaleCreateManyUserInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput> | Prisma.SaleCreateWithoutUserInput[] | Prisma.SaleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutUserInput | Prisma.SaleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutUserInput | Prisma.SaleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SaleCreateManyUserInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutUserInput | Prisma.SaleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutUserInput | Prisma.SaleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput> | Prisma.SaleCreateWithoutUserInput[] | Prisma.SaleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutUserInput | Prisma.SaleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutUserInput | Prisma.SaleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SaleCreateManyUserInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutUserInput | Prisma.SaleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutUserInput | Prisma.SaleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutShopInput, Prisma.SaleUncheckedCreateWithoutShopInput> | Prisma.SaleCreateWithoutShopInput[] | Prisma.SaleUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutShopInput | Prisma.SaleCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.SaleCreateManyShopInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutShopInput, Prisma.SaleUncheckedCreateWithoutShopInput> | Prisma.SaleCreateWithoutShopInput[] | Prisma.SaleUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutShopInput | Prisma.SaleCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.SaleCreateManyShopInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutShopInput, Prisma.SaleUncheckedCreateWithoutShopInput> | Prisma.SaleCreateWithoutShopInput[] | Prisma.SaleUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutShopInput | Prisma.SaleCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutShopInput | Prisma.SaleUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.SaleCreateManyShopInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutShopInput | Prisma.SaleUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutShopInput | Prisma.SaleUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutShopInput, Prisma.SaleUncheckedCreateWithoutShopInput> | Prisma.SaleCreateWithoutShopInput[] | Prisma.SaleUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutShopInput | Prisma.SaleCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutShopInput | Prisma.SaleUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.SaleCreateManyShopInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutShopInput | Prisma.SaleUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutShopInput | Prisma.SaleUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCustomerInput, Prisma.SaleUncheckedCreateWithoutCustomerInput> | Prisma.SaleCreateWithoutCustomerInput[] | Prisma.SaleUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCustomerInput | Prisma.SaleCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.SaleCreateManyCustomerInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCustomerInput, Prisma.SaleUncheckedCreateWithoutCustomerInput> | Prisma.SaleCreateWithoutCustomerInput[] | Prisma.SaleUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCustomerInput | Prisma.SaleCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.SaleCreateManyCustomerInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCustomerInput, Prisma.SaleUncheckedCreateWithoutCustomerInput> | Prisma.SaleCreateWithoutCustomerInput[] | Prisma.SaleUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCustomerInput | Prisma.SaleCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutCustomerInput | Prisma.SaleUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.SaleCreateManyCustomerInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutCustomerInput | Prisma.SaleUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutCustomerInput | Prisma.SaleUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCustomerInput, Prisma.SaleUncheckedCreateWithoutCustomerInput> | Prisma.SaleCreateWithoutCustomerInput[] | Prisma.SaleUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCustomerInput | Prisma.SaleCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutCustomerInput | Prisma.SaleUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.SaleCreateManyCustomerInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutCustomerInput | Prisma.SaleUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutCustomerInput | Prisma.SaleUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod;
};
export type SaleCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutItemsInput;
    connect?: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.SaleUpsertWithoutItemsInput;
    connect?: Prisma.SaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleUpdateToOneWithWhereWithoutItemsInput, Prisma.SaleUpdateWithoutItemsInput>, Prisma.SaleUncheckedUpdateWithoutItemsInput>;
};
export type SaleCreateNestedOneWithoutCreditsInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCreditsInput, Prisma.SaleUncheckedCreateWithoutCreditsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCreditsInput;
    connect?: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateOneWithoutCreditsNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCreditsInput, Prisma.SaleUncheckedCreateWithoutCreditsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCreditsInput;
    upsert?: Prisma.SaleUpsertWithoutCreditsInput;
    disconnect?: Prisma.SaleWhereInput | boolean;
    delete?: Prisma.SaleWhereInput | boolean;
    connect?: Prisma.SaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleUpdateToOneWithWhereWithoutCreditsInput, Prisma.SaleUpdateWithoutCreditsInput>, Prisma.SaleUncheckedUpdateWithoutCreditsInput>;
};
export type SaleCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutInvoicesInput, Prisma.SaleUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateOneWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutInvoicesInput, Prisma.SaleUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.SaleUpsertWithoutInvoicesInput;
    disconnect?: Prisma.SaleWhereInput | boolean;
    delete?: Prisma.SaleWhereInput | boolean;
    connect?: Prisma.SaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleUpdateToOneWithWhereWithoutInvoicesInput, Prisma.SaleUpdateWithoutInvoicesInput>, Prisma.SaleUncheckedUpdateWithoutInvoicesInput>;
};
export type SaleCreateWithoutUserInput = {
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutSalesInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutSalesInput;
    items?: Prisma.SaleItemCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateWithoutUserInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    items?: Prisma.SaleItemUncheckedCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutUserInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput>;
};
export type SaleCreateManyUserInputEnvelope = {
    data: Prisma.SaleCreateManyUserInput | Prisma.SaleCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SaleUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SaleWhereUniqueInput;
    update: Prisma.XOR<Prisma.SaleUpdateWithoutUserInput, Prisma.SaleUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput>;
};
export type SaleUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SaleWhereUniqueInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutUserInput, Prisma.SaleUncheckedUpdateWithoutUserInput>;
};
export type SaleUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SaleScalarWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyWithoutUserInput>;
};
export type SaleScalarWhereInput = {
    AND?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
    OR?: Prisma.SaleScalarWhereInput[];
    NOT?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
    id?: Prisma.IntFilter<"Sale"> | number;
    shopId?: Prisma.IntFilter<"Sale"> | number;
    customerId?: Prisma.IntNullableFilter<"Sale"> | number | null;
    userId?: Prisma.IntFilter<"Sale"> | number;
    reference?: Prisma.StringFilter<"Sale"> | string;
    totalAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Sale"> | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Sale"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
};
export type SaleCreateWithoutShopInput = {
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutSalesInput;
    user: Prisma.UserCreateNestedOneWithoutSalesInput;
    items?: Prisma.SaleItemCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateWithoutShopInput = {
    id?: number;
    customerId?: number | null;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    items?: Prisma.SaleItemUncheckedCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutShopInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutShopInput, Prisma.SaleUncheckedCreateWithoutShopInput>;
};
export type SaleCreateManyShopInputEnvelope = {
    data: Prisma.SaleCreateManyShopInput | Prisma.SaleCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type SaleUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.SaleWhereUniqueInput;
    update: Prisma.XOR<Prisma.SaleUpdateWithoutShopInput, Prisma.SaleUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutShopInput, Prisma.SaleUncheckedCreateWithoutShopInput>;
};
export type SaleUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.SaleWhereUniqueInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutShopInput, Prisma.SaleUncheckedUpdateWithoutShopInput>;
};
export type SaleUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.SaleScalarWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyWithoutShopInput>;
};
export type SaleCreateWithoutCustomerInput = {
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutSalesInput;
    user: Prisma.UserCreateNestedOneWithoutSalesInput;
    items?: Prisma.SaleItemCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateWithoutCustomerInput = {
    id?: number;
    shopId: number;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    items?: Prisma.SaleItemUncheckedCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutCustomerInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutCustomerInput, Prisma.SaleUncheckedCreateWithoutCustomerInput>;
};
export type SaleCreateManyCustomerInputEnvelope = {
    data: Prisma.SaleCreateManyCustomerInput | Prisma.SaleCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type SaleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.SaleWhereUniqueInput;
    update: Prisma.XOR<Prisma.SaleUpdateWithoutCustomerInput, Prisma.SaleUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutCustomerInput, Prisma.SaleUncheckedCreateWithoutCustomerInput>;
};
export type SaleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.SaleWhereUniqueInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutCustomerInput, Prisma.SaleUncheckedUpdateWithoutCustomerInput>;
};
export type SaleUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.SaleScalarWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyWithoutCustomerInput>;
};
export type SaleCreateWithoutItemsInput = {
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutSalesInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutSalesInput;
    user: Prisma.UserCreateNestedOneWithoutSalesInput;
    credits?: Prisma.CreditCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateWithoutItemsInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutItemsInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
};
export type SaleUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.SaleUpdateWithoutItemsInput, Prisma.SaleUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
    where?: Prisma.SaleWhereInput;
};
export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.SaleWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutItemsInput, Prisma.SaleUncheckedUpdateWithoutItemsInput>;
};
export type SaleUpdateWithoutItemsInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutSalesNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSalesNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateWithoutCreditsInput = {
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutSalesInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutSalesInput;
    user: Prisma.UserCreateNestedOneWithoutSalesInput;
    items?: Prisma.SaleItemCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateWithoutCreditsInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    items?: Prisma.SaleItemUncheckedCreateNestedManyWithoutSaleInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutCreditsInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutCreditsInput, Prisma.SaleUncheckedCreateWithoutCreditsInput>;
};
export type SaleUpsertWithoutCreditsInput = {
    update: Prisma.XOR<Prisma.SaleUpdateWithoutCreditsInput, Prisma.SaleUncheckedUpdateWithoutCreditsInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutCreditsInput, Prisma.SaleUncheckedCreateWithoutCreditsInput>;
    where?: Prisma.SaleWhereInput;
};
export type SaleUpdateToOneWithWhereWithoutCreditsInput = {
    where?: Prisma.SaleWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutCreditsInput, Prisma.SaleUncheckedUpdateWithoutCreditsInput>;
};
export type SaleUpdateWithoutCreditsInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutSalesNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSalesNestedInput;
    items?: Prisma.SaleItemUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateWithoutCreditsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUncheckedUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateWithoutInvoicesInput = {
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutSalesInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutSalesInput;
    user: Prisma.UserCreateNestedOneWithoutSalesInput;
    items?: Prisma.SaleItemCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateWithoutInvoicesInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    items?: Prisma.SaleItemUncheckedCreateNestedManyWithoutSaleInput;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutInvoicesInput, Prisma.SaleUncheckedCreateWithoutInvoicesInput>;
};
export type SaleUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.SaleUpdateWithoutInvoicesInput, Prisma.SaleUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutInvoicesInput, Prisma.SaleUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.SaleWhereInput;
};
export type SaleUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.SaleWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutInvoicesInput, Prisma.SaleUncheckedUpdateWithoutInvoicesInput>;
};
export type SaleUpdateWithoutInvoicesInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutSalesNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSalesNestedInput;
    items?: Prisma.SaleItemUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUncheckedUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateManyUserInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type SaleUpdateWithoutUserInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutSalesNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutSalesNestedInput;
    items?: Prisma.SaleItemUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUncheckedUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleCreateManyShopInput = {
    id?: number;
    customerId?: number | null;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type SaleUpdateWithoutShopInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSalesNestedInput;
    items?: Prisma.SaleItemUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUncheckedUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleCreateManyCustomerInput = {
    id?: number;
    shopId: number;
    userId: number;
    reference: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    paidAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
};
export type SaleUpdateWithoutCustomerInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSalesNestedInput;
    items?: Prisma.SaleItemUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUncheckedUpdateManyWithoutSaleNestedInput;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutSaleNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleCountOutputType = {
    items: number;
    credits: number;
    invoices: number;
};
export type SaleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | SaleCountOutputTypeCountItemsArgs;
    credits?: boolean | SaleCountOutputTypeCountCreditsArgs;
    invoices?: boolean | SaleCountOutputTypeCountInvoicesArgs;
};
export type SaleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleCountOutputTypeSelect<ExtArgs> | null;
};
export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleItemWhereInput;
};
export type SaleCountOutputTypeCountCreditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditWhereInput;
};
export type SaleCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type SaleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    userId?: boolean;
    reference?: boolean;
    totalAmount?: boolean;
    discount?: boolean;
    netAmount?: boolean;
    paymentMethod?: boolean;
    paidAmount?: boolean;
    creditAmount?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Sale$customerArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Sale$itemsArgs<ExtArgs>;
    credits?: boolean | Prisma.Sale$creditsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Sale$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.SaleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sale"]>;
export type SaleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    userId?: boolean;
    reference?: boolean;
    totalAmount?: boolean;
    discount?: boolean;
    netAmount?: boolean;
    paymentMethod?: boolean;
    paidAmount?: boolean;
    creditAmount?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Sale$customerArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sale"]>;
export type SaleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    userId?: boolean;
    reference?: boolean;
    totalAmount?: boolean;
    discount?: boolean;
    netAmount?: boolean;
    paymentMethod?: boolean;
    paidAmount?: boolean;
    creditAmount?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Sale$customerArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sale"]>;
export type SaleSelectScalar = {
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    userId?: boolean;
    reference?: boolean;
    totalAmount?: boolean;
    discount?: boolean;
    netAmount?: boolean;
    paymentMethod?: boolean;
    paidAmount?: boolean;
    creditAmount?: boolean;
    notes?: boolean;
    createdAt?: boolean;
};
export type SaleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shopId" | "customerId" | "userId" | "reference" | "totalAmount" | "discount" | "netAmount" | "paymentMethod" | "paidAmount" | "creditAmount" | "notes" | "createdAt", ExtArgs["result"]["sale"]>;
export type SaleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Sale$customerArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Sale$itemsArgs<ExtArgs>;
    credits?: boolean | Prisma.Sale$creditsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Sale$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.SaleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SaleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Sale$customerArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SaleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Sale$customerArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SalePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Sale";
    objects: {
        shop: Prisma.$ShopPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs>;
        items: Prisma.$SaleItemPayload<ExtArgs>[];
        credits: Prisma.$CreditPayload<ExtArgs>[];
        invoices: Prisma.$InvoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shopId: number;
        customerId: number | null;
        userId: number;
        reference: string;
        totalAmount: runtime.Decimal;
        discount: runtime.Decimal;
        netAmount: runtime.Decimal;
        paymentMethod: $Enums.PaymentMethod;
        paidAmount: runtime.Decimal;
        creditAmount: runtime.Decimal;
        notes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["sale"]>;
    composites: {};
};
export type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalePayload, S>;
export type SaleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SaleCountAggregateInputType | true;
};
export interface SaleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Sale'];
        meta: {
            name: 'Sale';
        };
    };
    findUnique<T extends SaleFindUniqueArgs>(args: Prisma.SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SaleFindFirstArgs>(args?: Prisma.SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SaleFindManyArgs>(args?: Prisma.SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SaleCreateArgs>(args: Prisma.SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SaleCreateManyArgs>(args?: Prisma.SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SaleDeleteArgs>(args: Prisma.SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SaleUpdateArgs>(args: Prisma.SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SaleDeleteManyArgs>(args?: Prisma.SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SaleUpdateManyArgs>(args: Prisma.SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SaleUpsertArgs>(args: Prisma.SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SaleCountArgs>(args?: Prisma.Subset<T, SaleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SaleCountAggregateOutputType> : number>;
    aggregate<T extends SaleAggregateArgs>(args: Prisma.Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>;
    groupBy<T extends SaleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SaleGroupByArgs['orderBy'];
    } : {
        orderBy?: SaleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SaleFieldRefs;
}
export interface Prisma__SaleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shop<T extends Prisma.ShopDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopClient<runtime.Types.Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.Sale$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Sale$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    credits<T extends Prisma.Sale$creditsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$creditsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.Sale$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SaleFieldRefs {
    readonly id: Prisma.FieldRef<"Sale", 'Int'>;
    readonly shopId: Prisma.FieldRef<"Sale", 'Int'>;
    readonly customerId: Prisma.FieldRef<"Sale", 'Int'>;
    readonly userId: Prisma.FieldRef<"Sale", 'Int'>;
    readonly reference: Prisma.FieldRef<"Sale", 'String'>;
    readonly totalAmount: Prisma.FieldRef<"Sale", 'Decimal'>;
    readonly discount: Prisma.FieldRef<"Sale", 'Decimal'>;
    readonly netAmount: Prisma.FieldRef<"Sale", 'Decimal'>;
    readonly paymentMethod: Prisma.FieldRef<"Sale", 'PaymentMethod'>;
    readonly paidAmount: Prisma.FieldRef<"Sale", 'Decimal'>;
    readonly creditAmount: Prisma.FieldRef<"Sale", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"Sale", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Sale", 'DateTime'>;
}
export type SaleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SaleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SaleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SaleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleCreateInput, Prisma.SaleUncheckedCreateInput>;
};
export type SaleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SaleCreateManyInput | Prisma.SaleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SaleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    data: Prisma.SaleCreateManyInput | Prisma.SaleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SaleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SaleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleUpdateInput, Prisma.SaleUncheckedUpdateInput>;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyInput>;
    where?: Prisma.SaleWhereInput;
    limit?: number;
};
export type SaleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyInput>;
    where?: Prisma.SaleWhereInput;
    limit?: number;
    include?: Prisma.SaleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SaleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateInput, Prisma.SaleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SaleUpdateInput, Prisma.SaleUncheckedUpdateInput>;
};
export type SaleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
    limit?: number;
};
export type Sale$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type Sale$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
    where?: Prisma.SaleItemWhereInput;
    orderBy?: Prisma.SaleItemOrderByWithRelationInput | Prisma.SaleItemOrderByWithRelationInput[];
    cursor?: Prisma.SaleItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleItemScalarFieldEnum | Prisma.SaleItemScalarFieldEnum[];
};
export type Sale$creditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Sale$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type SaleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
};
