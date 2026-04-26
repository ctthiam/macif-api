import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoicePayload>;
export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type InvoiceAvgAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    saleId: number | null;
    amountHt: runtime.Decimal | null;
    tvaRate: runtime.Decimal | null;
    amountTtc: runtime.Decimal | null;
};
export type InvoiceSumAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    saleId: number | null;
    amountHt: runtime.Decimal | null;
    tvaRate: runtime.Decimal | null;
    amountTtc: runtime.Decimal | null;
};
export type InvoiceMinAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    saleId: number | null;
    reference: string | null;
    type: $Enums.InvoiceType | null;
    status: $Enums.InvoiceStatus | null;
    amountHt: runtime.Decimal | null;
    tvaRate: runtime.Decimal | null;
    amountTtc: runtime.Decimal | null;
    pdfUrl: string | null;
    sentAt: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InvoiceMaxAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    saleId: number | null;
    reference: string | null;
    type: $Enums.InvoiceType | null;
    status: $Enums.InvoiceStatus | null;
    amountHt: runtime.Decimal | null;
    tvaRate: runtime.Decimal | null;
    amountTtc: runtime.Decimal | null;
    pdfUrl: string | null;
    sentAt: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InvoiceCountAggregateOutputType = {
    id: number;
    shopId: number;
    customerId: number;
    saleId: number;
    reference: number;
    type: number;
    status: number;
    amountHt: number;
    tvaRate: number;
    amountTtc: number;
    pdfUrl: number;
    sentAt: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type InvoiceAvgAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    amountHt?: true;
    tvaRate?: true;
    amountTtc?: true;
};
export type InvoiceSumAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    amountHt?: true;
    tvaRate?: true;
    amountTtc?: true;
};
export type InvoiceMinAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    reference?: true;
    type?: true;
    status?: true;
    amountHt?: true;
    tvaRate?: true;
    amountTtc?: true;
    pdfUrl?: true;
    sentAt?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InvoiceMaxAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    reference?: true;
    type?: true;
    status?: true;
    amountHt?: true;
    tvaRate?: true;
    amountTtc?: true;
    pdfUrl?: true;
    sentAt?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InvoiceCountAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    saleId?: true;
    reference?: true;
    type?: true;
    status?: true;
    amountHt?: true;
    tvaRate?: true;
    amountTtc?: true;
    pdfUrl?: true;
    sentAt?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type InvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvoiceCountAggregateInputType;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoice[P]> : Prisma.GetScalarType<T[P], AggregateInvoice[P]>;
};
export type InvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithAggregationInput | Prisma.InvoiceOrderByWithAggregationInput[];
    by: Prisma.InvoiceScalarFieldEnum[] | Prisma.InvoiceScalarFieldEnum;
    having?: Prisma.InvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type InvoiceGroupByOutputType = {
    id: number;
    shopId: number;
    customerId: number | null;
    saleId: number | null;
    reference: string;
    type: $Enums.InvoiceType;
    status: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal;
    tvaRate: runtime.Decimal;
    amountTtc: runtime.Decimal;
    pdfUrl: string | null;
    sentAt: Date | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
}>>;
export type InvoiceWhereInput = {
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    id?: Prisma.IntFilter<"Invoice"> | number;
    shopId?: Prisma.IntFilter<"Invoice"> | number;
    customerId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    saleId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    reference?: Prisma.StringFilter<"Invoice"> | string;
    type?: Prisma.EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    sale?: Prisma.XOR<Prisma.SaleNullableScalarRelationFilter, Prisma.SaleWhereInput> | null;
};
export type InvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    saleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountHt?: Prisma.SortOrder;
    tvaRate?: Prisma.SortOrder;
    amountTtc?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    shop?: Prisma.ShopOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    sale?: Prisma.SaleOrderByWithRelationInput;
};
export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    reference?: string;
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    shopId?: Prisma.IntFilter<"Invoice"> | number;
    customerId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    saleId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    type?: Prisma.EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    sale?: Prisma.XOR<Prisma.SaleNullableScalarRelationFilter, Prisma.SaleWhereInput> | null;
}, "id" | "reference">;
export type InvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    saleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountHt?: Prisma.SortOrder;
    tvaRate?: Prisma.SortOrder;
    amountTtc?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InvoiceCountOrderByAggregateInput;
    _avg?: Prisma.InvoiceAvgOrderByAggregateInput;
    _max?: Prisma.InvoiceMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceMinOrderByAggregateInput;
    _sum?: Prisma.InvoiceSumOrderByAggregateInput;
};
export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Invoice"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"Invoice"> | number;
    customerId?: Prisma.IntNullableWithAggregatesFilter<"Invoice"> | number | null;
    saleId?: Prisma.IntNullableWithAggregatesFilter<"Invoice"> | number | null;
    reference?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    type?: Prisma.EnumInvoiceTypeWithAggregatesFilter<"Invoice"> | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    sentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateInput = {
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutInvoicesInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutInvoicesInput;
    sale?: Prisma.SaleCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    saleId?: number | null;
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutInvoicesNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutInvoicesNestedInput;
    sale?: Prisma.SaleUpdateOneWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    saleId?: number | null;
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateManyMutationInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceListRelationFilter = {
    every?: Prisma.InvoiceWhereInput;
    some?: Prisma.InvoiceWhereInput;
    none?: Prisma.InvoiceWhereInput;
};
export type InvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountHt?: Prisma.SortOrder;
    tvaRate?: Prisma.SortOrder;
    amountTtc?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    amountHt?: Prisma.SortOrder;
    tvaRate?: Prisma.SortOrder;
    amountTtc?: Prisma.SortOrder;
};
export type InvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountHt?: Prisma.SortOrder;
    tvaRate?: Prisma.SortOrder;
    amountTtc?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountHt?: Prisma.SortOrder;
    tvaRate?: Prisma.SortOrder;
    amountTtc?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    amountHt?: Prisma.SortOrder;
    tvaRate?: Prisma.SortOrder;
    amountTtc?: Prisma.SortOrder;
};
export type InvoiceCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutShopInput, Prisma.InvoiceUncheckedCreateWithoutShopInput> | Prisma.InvoiceCreateWithoutShopInput[] | Prisma.InvoiceUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutShopInput | Prisma.InvoiceCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.InvoiceCreateManyShopInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutShopInput, Prisma.InvoiceUncheckedCreateWithoutShopInput> | Prisma.InvoiceCreateWithoutShopInput[] | Prisma.InvoiceUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutShopInput | Prisma.InvoiceCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.InvoiceCreateManyShopInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutShopInput, Prisma.InvoiceUncheckedCreateWithoutShopInput> | Prisma.InvoiceCreateWithoutShopInput[] | Prisma.InvoiceUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutShopInput | Prisma.InvoiceCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutShopInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.InvoiceCreateManyShopInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutShopInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutShopInput | Prisma.InvoiceUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutShopInput, Prisma.InvoiceUncheckedCreateWithoutShopInput> | Prisma.InvoiceCreateWithoutShopInput[] | Prisma.InvoiceUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutShopInput | Prisma.InvoiceCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutShopInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.InvoiceCreateManyShopInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutShopInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutShopInput | Prisma.InvoiceUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput> | Prisma.InvoiceCreateWithoutCustomerInput[] | Prisma.InvoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutCustomerInput | Prisma.InvoiceCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.InvoiceCreateManyCustomerInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput> | Prisma.InvoiceCreateWithoutCustomerInput[] | Prisma.InvoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutCustomerInput | Prisma.InvoiceCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.InvoiceCreateManyCustomerInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput> | Prisma.InvoiceCreateWithoutCustomerInput[] | Prisma.InvoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutCustomerInput | Prisma.InvoiceCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutCustomerInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.InvoiceCreateManyCustomerInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutCustomerInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutCustomerInput | Prisma.InvoiceUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput> | Prisma.InvoiceCreateWithoutCustomerInput[] | Prisma.InvoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutCustomerInput | Prisma.InvoiceCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutCustomerInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.InvoiceCreateManyCustomerInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutCustomerInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutCustomerInput | Prisma.InvoiceUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutSaleInput, Prisma.InvoiceUncheckedCreateWithoutSaleInput> | Prisma.InvoiceCreateWithoutSaleInput[] | Prisma.InvoiceUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutSaleInput | Prisma.InvoiceCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.InvoiceCreateManySaleInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutSaleInput, Prisma.InvoiceUncheckedCreateWithoutSaleInput> | Prisma.InvoiceCreateWithoutSaleInput[] | Prisma.InvoiceUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutSaleInput | Prisma.InvoiceCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.InvoiceCreateManySaleInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutSaleInput, Prisma.InvoiceUncheckedCreateWithoutSaleInput> | Prisma.InvoiceCreateWithoutSaleInput[] | Prisma.InvoiceUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutSaleInput | Prisma.InvoiceCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutSaleInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.InvoiceCreateManySaleInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutSaleInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutSaleInput | Prisma.InvoiceUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutSaleInput, Prisma.InvoiceUncheckedCreateWithoutSaleInput> | Prisma.InvoiceCreateWithoutSaleInput[] | Prisma.InvoiceUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutSaleInput | Prisma.InvoiceCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutSaleInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.InvoiceCreateManySaleInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutSaleInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutSaleInput | Prisma.InvoiceUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type EnumInvoiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceType;
};
export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus;
};
export type InvoiceCreateWithoutShopInput = {
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutInvoicesInput;
    sale?: Prisma.SaleCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateWithoutShopInput = {
    id?: number;
    customerId?: number | null;
    saleId?: number | null;
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutShopInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutShopInput, Prisma.InvoiceUncheckedCreateWithoutShopInput>;
};
export type InvoiceCreateManyShopInputEnvelope = {
    data: Prisma.InvoiceCreateManyShopInput | Prisma.InvoiceCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutShopInput, Prisma.InvoiceUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutShopInput, Prisma.InvoiceUncheckedCreateWithoutShopInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutShopInput, Prisma.InvoiceUncheckedUpdateWithoutShopInput>;
};
export type InvoiceUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutShopInput>;
};
export type InvoiceScalarWhereInput = {
    AND?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    OR?: Prisma.InvoiceScalarWhereInput[];
    NOT?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    id?: Prisma.IntFilter<"Invoice"> | number;
    shopId?: Prisma.IntFilter<"Invoice"> | number;
    customerId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    saleId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    reference?: Prisma.StringFilter<"Invoice"> | string;
    type?: Prisma.EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateWithoutCustomerInput = {
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutInvoicesInput;
    sale?: Prisma.SaleCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateWithoutCustomerInput = {
    id?: number;
    shopId: number;
    saleId?: number | null;
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput>;
};
export type InvoiceCreateManyCustomerInputEnvelope = {
    data: Prisma.InvoiceCreateManyCustomerInput | Prisma.InvoiceCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutCustomerInput, Prisma.InvoiceUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutCustomerInput, Prisma.InvoiceUncheckedUpdateWithoutCustomerInput>;
};
export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutCustomerInput>;
};
export type InvoiceCreateWithoutSaleInput = {
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutInvoicesInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateWithoutSaleInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutSaleInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutSaleInput, Prisma.InvoiceUncheckedCreateWithoutSaleInput>;
};
export type InvoiceCreateManySaleInputEnvelope = {
    data: Prisma.InvoiceCreateManySaleInput | Prisma.InvoiceCreateManySaleInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutSaleInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutSaleInput, Prisma.InvoiceUncheckedUpdateWithoutSaleInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutSaleInput, Prisma.InvoiceUncheckedCreateWithoutSaleInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutSaleInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutSaleInput, Prisma.InvoiceUncheckedUpdateWithoutSaleInput>;
};
export type InvoiceUpdateManyWithWhereWithoutSaleInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutSaleInput>;
};
export type InvoiceCreateManyShopInput = {
    id?: number;
    customerId?: number | null;
    saleId?: number | null;
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateWithoutShopInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutInvoicesNestedInput;
    sale?: Prisma.SaleUpdateOneWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyCustomerInput = {
    id?: number;
    shopId: number;
    saleId?: number | null;
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateWithoutCustomerInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutInvoicesNestedInput;
    sale?: Prisma.SaleUpdateOneWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManySaleInput = {
    id?: number;
    shopId: number;
    customerId?: number | null;
    reference: string;
    type?: $Enums.InvoiceType;
    status?: $Enums.InvoiceStatus;
    amountHt: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: string | null;
    sentAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateWithoutSaleInput = {
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutInvoicesNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateWithoutSaleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyWithoutSaleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amountHt?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tvaRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountTtc?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    saleId?: boolean;
    reference?: boolean;
    type?: boolean;
    status?: boolean;
    amountHt?: boolean;
    tvaRate?: boolean;
    amountTtc?: boolean;
    pdfUrl?: boolean;
    sentAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Invoice$customerArgs<ExtArgs>;
    sale?: boolean | Prisma.Invoice$saleArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    saleId?: boolean;
    reference?: boolean;
    type?: boolean;
    status?: boolean;
    amountHt?: boolean;
    tvaRate?: boolean;
    amountTtc?: boolean;
    pdfUrl?: boolean;
    sentAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Invoice$customerArgs<ExtArgs>;
    sale?: boolean | Prisma.Invoice$saleArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    saleId?: boolean;
    reference?: boolean;
    type?: boolean;
    status?: boolean;
    amountHt?: boolean;
    tvaRate?: boolean;
    amountTtc?: boolean;
    pdfUrl?: boolean;
    sentAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Invoice$customerArgs<ExtArgs>;
    sale?: boolean | Prisma.Invoice$saleArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectScalar = {
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    saleId?: boolean;
    reference?: boolean;
    type?: boolean;
    status?: boolean;
    amountHt?: boolean;
    tvaRate?: boolean;
    amountTtc?: boolean;
    pdfUrl?: boolean;
    sentAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type InvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shopId" | "customerId" | "saleId" | "reference" | "type" | "status" | "amountHt" | "tvaRate" | "amountTtc" | "pdfUrl" | "sentAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>;
export type InvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Invoice$customerArgs<ExtArgs>;
    sale?: boolean | Prisma.Invoice$saleArgs<ExtArgs>;
};
export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Invoice$customerArgs<ExtArgs>;
    sale?: boolean | Prisma.Invoice$saleArgs<ExtArgs>;
};
export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Invoice$customerArgs<ExtArgs>;
    sale?: boolean | Prisma.Invoice$saleArgs<ExtArgs>;
};
export type $InvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invoice";
    objects: {
        shop: Prisma.$ShopPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
        sale: Prisma.$SalePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shopId: number;
        customerId: number | null;
        saleId: number | null;
        reference: string;
        type: $Enums.InvoiceType;
        status: $Enums.InvoiceStatus;
        amountHt: runtime.Decimal;
        tvaRate: runtime.Decimal;
        amountTtc: runtime.Decimal;
        pdfUrl: string | null;
        sentAt: Date | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["invoice"]>;
    composites: {};
};
export type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoicePayload, S>;
export type InvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceCountAggregateInputType | true;
};
export interface InvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invoice'];
        meta: {
            name: 'Invoice';
        };
    };
    findUnique<T extends InvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvoiceCreateArgs>(args: Prisma.SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvoiceDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvoiceUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvoiceUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvoiceCountArgs>(args?: Prisma.Subset<T, InvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceCountAggregateOutputType> : number>;
    aggregate<T extends InvoiceAggregateArgs>(args: Prisma.Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;
    groupBy<T extends InvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvoiceFieldRefs;
}
export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shop<T extends Prisma.ShopDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopClient<runtime.Types.Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.Invoice$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sale<T extends Prisma.Invoice$saleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$saleArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly shopId: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly customerId: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly saleId: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly reference: Prisma.FieldRef<"Invoice", 'String'>;
    readonly type: Prisma.FieldRef<"Invoice", 'InvoiceType'>;
    readonly status: Prisma.FieldRef<"Invoice", 'InvoiceStatus'>;
    readonly amountHt: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly tvaRate: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly amountTtc: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly pdfUrl: Prisma.FieldRef<"Invoice", 'String'>;
    readonly sentAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"Invoice", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
}
export type InvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
};
export type InvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
    include?: Prisma.InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
};
export type InvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type Invoice$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type Invoice$saleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where?: Prisma.SaleWhereInput;
};
export type InvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
};
