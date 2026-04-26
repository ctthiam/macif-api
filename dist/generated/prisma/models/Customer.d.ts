import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerPayload>;
export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type CustomerAvgAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    totalBought: runtime.Decimal | null;
    creditBalance: runtime.Decimal | null;
};
export type CustomerSumAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    totalBought: runtime.Decimal | null;
    creditBalance: runtime.Decimal | null;
};
export type CustomerMinAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    name: string | null;
    phone: string | null;
    type: $Enums.CustomerType | null;
    address: string | null;
    isVip: boolean | null;
    totalBought: runtime.Decimal | null;
    creditBalance: runtime.Decimal | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomerMaxAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    name: string | null;
    phone: string | null;
    type: $Enums.CustomerType | null;
    address: string | null;
    isVip: boolean | null;
    totalBought: runtime.Decimal | null;
    creditBalance: runtime.Decimal | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomerCountAggregateOutputType = {
    id: number;
    shopId: number;
    name: number;
    phone: number;
    type: number;
    address: number;
    isVip: number;
    totalBought: number;
    creditBalance: number;
    deletedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CustomerAvgAggregateInputType = {
    id?: true;
    shopId?: true;
    totalBought?: true;
    creditBalance?: true;
};
export type CustomerSumAggregateInputType = {
    id?: true;
    shopId?: true;
    totalBought?: true;
    creditBalance?: true;
};
export type CustomerMinAggregateInputType = {
    id?: true;
    shopId?: true;
    name?: true;
    phone?: true;
    type?: true;
    address?: true;
    isVip?: true;
    totalBought?: true;
    creditBalance?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomerMaxAggregateInputType = {
    id?: true;
    shopId?: true;
    name?: true;
    phone?: true;
    type?: true;
    address?: true;
    isVip?: true;
    totalBought?: true;
    creditBalance?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomerCountAggregateInputType = {
    id?: true;
    shopId?: true;
    name?: true;
    phone?: true;
    type?: true;
    address?: true;
    isVip?: true;
    totalBought?: true;
    creditBalance?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CustomerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerCountAggregateInputType;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer[P]> : Prisma.GetScalarType<T[P], AggregateCustomer[P]>;
};
export type CustomerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithAggregationInput | Prisma.CustomerOrderByWithAggregationInput[];
    by: Prisma.CustomerScalarFieldEnum[] | Prisma.CustomerScalarFieldEnum;
    having?: Prisma.CustomerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type CustomerGroupByOutputType = {
    id: number;
    shopId: number;
    name: string;
    phone: string | null;
    type: $Enums.CustomerType;
    address: string | null;
    isVip: boolean;
    totalBought: runtime.Decimal;
    creditBalance: runtime.Decimal;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]>;
}>>;
export type CustomerWhereInput = {
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    id?: Prisma.IntFilter<"Customer"> | number;
    shopId?: Prisma.IntFilter<"Customer"> | number;
    name?: Prisma.StringFilter<"Customer"> | string;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    type?: Prisma.EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType;
    address?: Prisma.StringNullableFilter<"Customer"> | string | null;
    isVip?: Prisma.BoolFilter<"Customer"> | boolean;
    totalBought?: Prisma.DecimalFilter<"Customer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFilter<"Customer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Customer"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    sales?: Prisma.SaleListRelationFilter;
    credits?: Prisma.CreditListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
};
export type CustomerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVip?: Prisma.SortOrder;
    totalBought?: Prisma.SortOrder;
    creditBalance?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    shop?: Prisma.ShopOrderByWithRelationInput;
    sales?: Prisma.SaleOrderByRelationAggregateInput;
    credits?: Prisma.CreditOrderByRelationAggregateInput;
    invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
};
export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    shopId?: Prisma.IntFilter<"Customer"> | number;
    name?: Prisma.StringFilter<"Customer"> | string;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    type?: Prisma.EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType;
    address?: Prisma.StringNullableFilter<"Customer"> | string | null;
    isVip?: Prisma.BoolFilter<"Customer"> | boolean;
    totalBought?: Prisma.DecimalFilter<"Customer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFilter<"Customer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Customer"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    sales?: Prisma.SaleListRelationFilter;
    credits?: Prisma.CreditListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
}, "id">;
export type CustomerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVip?: Prisma.SortOrder;
    totalBought?: Prisma.SortOrder;
    creditBalance?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerCountOrderByAggregateInput;
    _avg?: Prisma.CustomerAvgOrderByAggregateInput;
    _max?: Prisma.CustomerMaxOrderByAggregateInput;
    _min?: Prisma.CustomerMinOrderByAggregateInput;
    _sum?: Prisma.CustomerSumOrderByAggregateInput;
};
export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Customer"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"Customer"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    type?: Prisma.EnumCustomerTypeWithAggregatesFilter<"Customer"> | $Enums.CustomerType;
    address?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    isVip?: Prisma.BoolWithAggregatesFilter<"Customer"> | boolean;
    totalBought?: Prisma.DecimalWithAggregatesFilter<"Customer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalWithAggregatesFilter<"Customer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
};
export type CustomerCreateInput = {
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCustomersInput;
    sales?: Prisma.SaleCreateNestedManyWithoutCustomerInput;
    credits?: Prisma.CreditCreateNestedManyWithoutCustomerInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateInput = {
    id?: number;
    shopId: number;
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutCustomerInput;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutCustomerInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCustomersNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutCustomerNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutCustomerNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutCustomerNestedInput;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutCustomerNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateManyInput = {
    id?: number;
    shopId: number;
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerListRelationFilter = {
    every?: Prisma.CustomerWhereInput;
    some?: Prisma.CustomerWhereInput;
    none?: Prisma.CustomerWhereInput;
};
export type CustomerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVip?: Prisma.SortOrder;
    totalBought?: Prisma.SortOrder;
    creditBalance?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    totalBought?: Prisma.SortOrder;
    creditBalance?: Prisma.SortOrder;
};
export type CustomerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVip?: Prisma.SortOrder;
    totalBought?: Prisma.SortOrder;
    creditBalance?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVip?: Prisma.SortOrder;
    totalBought?: Prisma.SortOrder;
    creditBalance?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    totalBought?: Prisma.SortOrder;
    creditBalance?: Prisma.SortOrder;
};
export type CustomerNullableScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput | null;
    isNot?: Prisma.CustomerWhereInput | null;
};
export type CustomerScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput;
    isNot?: Prisma.CustomerWhereInput;
};
export type CustomerCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutShopInput, Prisma.CustomerUncheckedCreateWithoutShopInput> | Prisma.CustomerCreateWithoutShopInput[] | Prisma.CustomerUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutShopInput | Prisma.CustomerCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.CustomerCreateManyShopInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutShopInput, Prisma.CustomerUncheckedCreateWithoutShopInput> | Prisma.CustomerCreateWithoutShopInput[] | Prisma.CustomerUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutShopInput | Prisma.CustomerCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.CustomerCreateManyShopInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutShopInput, Prisma.CustomerUncheckedCreateWithoutShopInput> | Prisma.CustomerCreateWithoutShopInput[] | Prisma.CustomerUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutShopInput | Prisma.CustomerCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutShopInput | Prisma.CustomerUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.CustomerCreateManyShopInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutShopInput | Prisma.CustomerUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutShopInput | Prisma.CustomerUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type CustomerUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutShopInput, Prisma.CustomerUncheckedCreateWithoutShopInput> | Prisma.CustomerCreateWithoutShopInput[] | Prisma.CustomerUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutShopInput | Prisma.CustomerCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutShopInput | Prisma.CustomerUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.CustomerCreateManyShopInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutShopInput | Prisma.CustomerUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutShopInput | Prisma.CustomerUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type EnumCustomerTypeFieldUpdateOperationsInput = {
    set?: $Enums.CustomerType;
};
export type CustomerCreateNestedOneWithoutSalesInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutSalesInput, Prisma.CustomerUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutSalesInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneWithoutSalesNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutSalesInput, Prisma.CustomerUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutSalesInput;
    upsert?: Prisma.CustomerUpsertWithoutSalesInput;
    disconnect?: Prisma.CustomerWhereInput | boolean;
    delete?: Prisma.CustomerWhereInput | boolean;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutSalesInput, Prisma.CustomerUpdateWithoutSalesInput>, Prisma.CustomerUncheckedUpdateWithoutSalesInput>;
};
export type CustomerCreateNestedOneWithoutCreditsInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutCreditsInput, Prisma.CustomerUncheckedCreateWithoutCreditsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutCreditsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutCreditsNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutCreditsInput, Prisma.CustomerUncheckedCreateWithoutCreditsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutCreditsInput;
    upsert?: Prisma.CustomerUpsertWithoutCreditsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutCreditsInput, Prisma.CustomerUpdateWithoutCreditsInput>, Prisma.CustomerUncheckedUpdateWithoutCreditsInput>;
};
export type CustomerCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutInvoicesInput, Prisma.CustomerUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutInvoicesInput, Prisma.CustomerUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.CustomerUpsertWithoutInvoicesInput;
    disconnect?: Prisma.CustomerWhereInput | boolean;
    delete?: Prisma.CustomerWhereInput | boolean;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutInvoicesInput, Prisma.CustomerUpdateWithoutInvoicesInput>, Prisma.CustomerUncheckedUpdateWithoutInvoicesInput>;
};
export type CustomerCreateWithoutShopInput = {
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sales?: Prisma.SaleCreateNestedManyWithoutCustomerInput;
    credits?: Prisma.CreditCreateNestedManyWithoutCustomerInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutShopInput = {
    id?: number;
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutCustomerInput;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutCustomerInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutShopInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutShopInput, Prisma.CustomerUncheckedCreateWithoutShopInput>;
};
export type CustomerCreateManyShopInputEnvelope = {
    data: Prisma.CustomerCreateManyShopInput | Prisma.CustomerCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type CustomerUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.CustomerWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutShopInput, Prisma.CustomerUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutShopInput, Prisma.CustomerUncheckedCreateWithoutShopInput>;
};
export type CustomerUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.CustomerWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutShopInput, Prisma.CustomerUncheckedUpdateWithoutShopInput>;
};
export type CustomerUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.CustomerScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyWithoutShopInput>;
};
export type CustomerScalarWhereInput = {
    AND?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
    OR?: Prisma.CustomerScalarWhereInput[];
    NOT?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
    id?: Prisma.IntFilter<"Customer"> | number;
    shopId?: Prisma.IntFilter<"Customer"> | number;
    name?: Prisma.StringFilter<"Customer"> | string;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    type?: Prisma.EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType;
    address?: Prisma.StringNullableFilter<"Customer"> | string | null;
    isVip?: Prisma.BoolFilter<"Customer"> | boolean;
    totalBought?: Prisma.DecimalFilter<"Customer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFilter<"Customer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Customer"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
};
export type CustomerCreateWithoutSalesInput = {
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCustomersInput;
    credits?: Prisma.CreditCreateNestedManyWithoutCustomerInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutSalesInput = {
    id?: number;
    shopId: number;
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutCustomerInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutSalesInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutSalesInput, Prisma.CustomerUncheckedCreateWithoutSalesInput>;
};
export type CustomerUpsertWithoutSalesInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutSalesInput, Prisma.CustomerUncheckedUpdateWithoutSalesInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutSalesInput, Prisma.CustomerUncheckedCreateWithoutSalesInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutSalesInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutSalesInput, Prisma.CustomerUncheckedUpdateWithoutSalesInput>;
};
export type CustomerUpdateWithoutSalesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCustomersNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutCustomerNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutSalesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutCustomerNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutCreditsInput = {
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCustomersInput;
    sales?: Prisma.SaleCreateNestedManyWithoutCustomerInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutCreditsInput = {
    id?: number;
    shopId: number;
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutCustomerInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutCreditsInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutCreditsInput, Prisma.CustomerUncheckedCreateWithoutCreditsInput>;
};
export type CustomerUpsertWithoutCreditsInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutCreditsInput, Prisma.CustomerUncheckedUpdateWithoutCreditsInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutCreditsInput, Prisma.CustomerUncheckedCreateWithoutCreditsInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutCreditsInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutCreditsInput, Prisma.CustomerUncheckedUpdateWithoutCreditsInput>;
};
export type CustomerUpdateWithoutCreditsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCustomersNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutCustomerNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutCreditsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutCustomerNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutInvoicesInput = {
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutCustomersInput;
    sales?: Prisma.SaleCreateNestedManyWithoutCustomerInput;
    credits?: Prisma.CreditCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutInvoicesInput = {
    id?: number;
    shopId: number;
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutCustomerInput;
    credits?: Prisma.CreditUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutInvoicesInput, Prisma.CustomerUncheckedCreateWithoutInvoicesInput>;
};
export type CustomerUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutInvoicesInput, Prisma.CustomerUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutInvoicesInput, Prisma.CustomerUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutInvoicesInput, Prisma.CustomerUncheckedUpdateWithoutInvoicesInput>;
};
export type CustomerUpdateWithoutInvoicesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutCustomersNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutCustomerNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutCustomerNestedInput;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateManyShopInput = {
    id?: number;
    name: string;
    phone?: string | null;
    type?: $Enums.CustomerType;
    address?: string | null;
    isVip?: boolean;
    totalBought?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerUpdateWithoutShopInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: Prisma.SaleUpdateManyWithoutCustomerNestedInput;
    credits?: Prisma.CreditUpdateManyWithoutCustomerNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutCustomerNestedInput;
    credits?: Prisma.CreditUncheckedUpdateManyWithoutCustomerNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    totalBought?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creditBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerCountOutputType = {
    sales: number;
    credits: number;
    invoices: number;
};
export type CustomerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sales?: boolean | CustomerCountOutputTypeCountSalesArgs;
    credits?: boolean | CustomerCountOutputTypeCountCreditsArgs;
    invoices?: boolean | CustomerCountOutputTypeCountInvoicesArgs;
};
export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomerCountOutputTypeCountSalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
};
export type CustomerCountOutputTypeCountCreditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditWhereInput;
};
export type CustomerCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type CustomerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    name?: boolean;
    phone?: boolean;
    type?: boolean;
    address?: boolean;
    isVip?: boolean;
    totalBought?: boolean;
    creditBalance?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    sales?: boolean | Prisma.Customer$salesArgs<ExtArgs>;
    credits?: boolean | Prisma.Customer$creditsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Customer$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    name?: boolean;
    phone?: boolean;
    type?: boolean;
    address?: boolean;
    isVip?: boolean;
    totalBought?: boolean;
    creditBalance?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    name?: boolean;
    phone?: boolean;
    type?: boolean;
    address?: boolean;
    isVip?: boolean;
    totalBought?: boolean;
    creditBalance?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectScalar = {
    id?: boolean;
    shopId?: boolean;
    name?: boolean;
    phone?: boolean;
    type?: boolean;
    address?: boolean;
    isVip?: boolean;
    totalBought?: boolean;
    creditBalance?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CustomerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shopId" | "name" | "phone" | "type" | "address" | "isVip" | "totalBought" | "creditBalance" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>;
export type CustomerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    sales?: boolean | Prisma.Customer$salesArgs<ExtArgs>;
    credits?: boolean | Prisma.Customer$creditsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Customer$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CustomerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
};
export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
};
export type $CustomerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Customer";
    objects: {
        shop: Prisma.$ShopPayload<ExtArgs>;
        sales: Prisma.$SalePayload<ExtArgs>[];
        credits: Prisma.$CreditPayload<ExtArgs>[];
        invoices: Prisma.$InvoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shopId: number;
        name: string;
        phone: string | null;
        type: $Enums.CustomerType;
        address: string | null;
        isVip: boolean;
        totalBought: runtime.Decimal;
        creditBalance: runtime.Decimal;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["customer"]>;
    composites: {};
};
export type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerPayload, S>;
export type CustomerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerCountAggregateInputType | true;
};
export interface CustomerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Customer'];
        meta: {
            name: 'Customer';
        };
    };
    findUnique<T extends CustomerFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerCreateArgs>(args: Prisma.SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerDeleteArgs>(args: Prisma.SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerUpdateArgs>(args: Prisma.SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerUpsertArgs>(args: Prisma.SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerCountArgs>(args?: Prisma.Subset<T, CustomerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerCountAggregateOutputType> : number>;
    aggregate<T extends CustomerAggregateArgs>(args: Prisma.Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;
    groupBy<T extends CustomerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerFieldRefs;
}
export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shop<T extends Prisma.ShopDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopClient<runtime.Types.Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sales<T extends Prisma.Customer$salesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$salesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    credits<T extends Prisma.Customer$creditsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$creditsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.Customer$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerFieldRefs {
    readonly id: Prisma.FieldRef<"Customer", 'Int'>;
    readonly shopId: Prisma.FieldRef<"Customer", 'Int'>;
    readonly name: Prisma.FieldRef<"Customer", 'String'>;
    readonly phone: Prisma.FieldRef<"Customer", 'String'>;
    readonly type: Prisma.FieldRef<"Customer", 'CustomerType'>;
    readonly address: Prisma.FieldRef<"Customer", 'String'>;
    readonly isVip: Prisma.FieldRef<"Customer", 'Boolean'>;
    readonly totalBought: Prisma.FieldRef<"Customer", 'Decimal'>;
    readonly creditBalance: Prisma.FieldRef<"Customer", 'Decimal'>;
    readonly deletedAt: Prisma.FieldRef<"Customer", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Customer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Customer", 'DateTime'>;
}
export type CustomerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
};
export type CustomerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type CustomerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
    include?: Prisma.CustomerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
};
export type CustomerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type Customer$salesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Customer$creditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Customer$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CustomerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
};
