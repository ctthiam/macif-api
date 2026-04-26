import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PurchaseItemModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchaseItemPayload>;
export type AggregatePurchaseItem = {
    _count: PurchaseItemCountAggregateOutputType | null;
    _avg: PurchaseItemAvgAggregateOutputType | null;
    _sum: PurchaseItemSumAggregateOutputType | null;
    _min: PurchaseItemMinAggregateOutputType | null;
    _max: PurchaseItemMaxAggregateOutputType | null;
};
export type PurchaseItemAvgAggregateOutputType = {
    id: number | null;
    purchaseId: number | null;
    productId: number | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type PurchaseItemSumAggregateOutputType = {
    id: number | null;
    purchaseId: number | null;
    productId: number | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type PurchaseItemMinAggregateOutputType = {
    id: number | null;
    purchaseId: number | null;
    productId: number | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type PurchaseItemMaxAggregateOutputType = {
    id: number | null;
    purchaseId: number | null;
    productId: number | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type PurchaseItemCountAggregateOutputType = {
    id: number;
    purchaseId: number;
    productId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    _all: number;
};
export type PurchaseItemAvgAggregateInputType = {
    id?: true;
    purchaseId?: true;
    productId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type PurchaseItemSumAggregateInputType = {
    id?: true;
    purchaseId?: true;
    productId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type PurchaseItemMinAggregateInputType = {
    id?: true;
    purchaseId?: true;
    productId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type PurchaseItemMaxAggregateInputType = {
    id?: true;
    purchaseId?: true;
    productId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type PurchaseItemCountAggregateInputType = {
    id?: true;
    purchaseId?: true;
    productId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    _all?: true;
};
export type PurchaseItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseItemWhereInput;
    orderBy?: Prisma.PurchaseItemOrderByWithRelationInput | Prisma.PurchaseItemOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurchaseItemCountAggregateInputType;
    _avg?: PurchaseItemAvgAggregateInputType;
    _sum?: PurchaseItemSumAggregateInputType;
    _min?: PurchaseItemMinAggregateInputType;
    _max?: PurchaseItemMaxAggregateInputType;
};
export type GetPurchaseItemAggregateType<T extends PurchaseItemAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchaseItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchaseItem[P]> : Prisma.GetScalarType<T[P], AggregatePurchaseItem[P]>;
};
export type PurchaseItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseItemWhereInput;
    orderBy?: Prisma.PurchaseItemOrderByWithAggregationInput | Prisma.PurchaseItemOrderByWithAggregationInput[];
    by: Prisma.PurchaseItemScalarFieldEnum[] | Prisma.PurchaseItemScalarFieldEnum;
    having?: Prisma.PurchaseItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseItemCountAggregateInputType | true;
    _avg?: PurchaseItemAvgAggregateInputType;
    _sum?: PurchaseItemSumAggregateInputType;
    _min?: PurchaseItemMinAggregateInputType;
    _max?: PurchaseItemMaxAggregateInputType;
};
export type PurchaseItemGroupByOutputType = {
    id: number;
    purchaseId: number;
    productId: number;
    quantity: runtime.Decimal;
    unitPrice: runtime.Decimal;
    totalPrice: runtime.Decimal;
    _count: PurchaseItemCountAggregateOutputType | null;
    _avg: PurchaseItemAvgAggregateOutputType | null;
    _sum: PurchaseItemSumAggregateOutputType | null;
    _min: PurchaseItemMinAggregateOutputType | null;
    _max: PurchaseItemMaxAggregateOutputType | null;
};
export type GetPurchaseItemGroupByPayload<T extends PurchaseItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchaseItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchaseItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchaseItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchaseItemGroupByOutputType[P]>;
}>>;
export type PurchaseItemWhereInput = {
    AND?: Prisma.PurchaseItemWhereInput | Prisma.PurchaseItemWhereInput[];
    OR?: Prisma.PurchaseItemWhereInput[];
    NOT?: Prisma.PurchaseItemWhereInput | Prisma.PurchaseItemWhereInput[];
    id?: Prisma.IntFilter<"PurchaseItem"> | number;
    purchaseId?: Prisma.IntFilter<"PurchaseItem"> | number;
    productId?: Prisma.IntFilter<"PurchaseItem"> | number;
    quantity?: Prisma.DecimalFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase?: Prisma.XOR<Prisma.PurchaseScalarRelationFilter, Prisma.PurchaseWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type PurchaseItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    purchase?: Prisma.PurchaseOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type PurchaseItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PurchaseItemWhereInput | Prisma.PurchaseItemWhereInput[];
    OR?: Prisma.PurchaseItemWhereInput[];
    NOT?: Prisma.PurchaseItemWhereInput | Prisma.PurchaseItemWhereInput[];
    purchaseId?: Prisma.IntFilter<"PurchaseItem"> | number;
    productId?: Prisma.IntFilter<"PurchaseItem"> | number;
    quantity?: Prisma.DecimalFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase?: Prisma.XOR<Prisma.PurchaseScalarRelationFilter, Prisma.PurchaseWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id">;
export type PurchaseItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    _count?: Prisma.PurchaseItemCountOrderByAggregateInput;
    _avg?: Prisma.PurchaseItemAvgOrderByAggregateInput;
    _max?: Prisma.PurchaseItemMaxOrderByAggregateInput;
    _min?: Prisma.PurchaseItemMinOrderByAggregateInput;
    _sum?: Prisma.PurchaseItemSumOrderByAggregateInput;
};
export type PurchaseItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchaseItemScalarWhereWithAggregatesInput | Prisma.PurchaseItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchaseItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchaseItemScalarWhereWithAggregatesInput | Prisma.PurchaseItemScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PurchaseItem"> | number;
    purchaseId?: Prisma.IntWithAggregatesFilter<"PurchaseItem"> | number;
    productId?: Prisma.IntWithAggregatesFilter<"PurchaseItem"> | number;
    quantity?: Prisma.DecimalWithAggregatesFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalWithAggregatesFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemCreateInput = {
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase: Prisma.PurchaseCreateNestedOneWithoutItemsInput;
    product: Prisma.ProductCreateNestedOneWithoutPurchaseItemsInput;
};
export type PurchaseItemUncheckedCreateInput = {
    id?: number;
    purchaseId: number;
    productId: number;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemUpdateInput = {
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase?: Prisma.PurchaseUpdateOneRequiredWithoutItemsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchaseItemsNestedInput;
};
export type PurchaseItemUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemCreateManyInput = {
    id?: number;
    purchaseId: number;
    productId: number;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemUpdateManyMutationInput = {
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemListRelationFilter = {
    every?: Prisma.PurchaseItemWhereInput;
    some?: Prisma.PurchaseItemWhereInput;
    none?: Prisma.PurchaseItemWhereInput;
};
export type PurchaseItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchaseItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type PurchaseItemAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type PurchaseItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type PurchaseItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type PurchaseItemSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type PurchaseItemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchaseItemCreateWithoutProductInput, Prisma.PurchaseItemUncheckedCreateWithoutProductInput> | Prisma.PurchaseItemCreateWithoutProductInput[] | Prisma.PurchaseItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseItemCreateOrConnectWithoutProductInput | Prisma.PurchaseItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchaseItemCreateManyProductInputEnvelope;
    connect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
};
export type PurchaseItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchaseItemCreateWithoutProductInput, Prisma.PurchaseItemUncheckedCreateWithoutProductInput> | Prisma.PurchaseItemCreateWithoutProductInput[] | Prisma.PurchaseItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseItemCreateOrConnectWithoutProductInput | Prisma.PurchaseItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchaseItemCreateManyProductInputEnvelope;
    connect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
};
export type PurchaseItemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseItemCreateWithoutProductInput, Prisma.PurchaseItemUncheckedCreateWithoutProductInput> | Prisma.PurchaseItemCreateWithoutProductInput[] | Prisma.PurchaseItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseItemCreateOrConnectWithoutProductInput | Prisma.PurchaseItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchaseItemUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchaseItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchaseItemCreateManyProductInputEnvelope;
    set?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    disconnect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    delete?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    connect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    update?: Prisma.PurchaseItemUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchaseItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchaseItemUpdateManyWithWhereWithoutProductInput | Prisma.PurchaseItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchaseItemScalarWhereInput | Prisma.PurchaseItemScalarWhereInput[];
};
export type PurchaseItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseItemCreateWithoutProductInput, Prisma.PurchaseItemUncheckedCreateWithoutProductInput> | Prisma.PurchaseItemCreateWithoutProductInput[] | Prisma.PurchaseItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseItemCreateOrConnectWithoutProductInput | Prisma.PurchaseItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchaseItemUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchaseItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchaseItemCreateManyProductInputEnvelope;
    set?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    disconnect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    delete?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    connect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    update?: Prisma.PurchaseItemUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchaseItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchaseItemUpdateManyWithWhereWithoutProductInput | Prisma.PurchaseItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchaseItemScalarWhereInput | Prisma.PurchaseItemScalarWhereInput[];
};
export type PurchaseItemCreateNestedManyWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.PurchaseItemCreateWithoutPurchaseInput, Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput> | Prisma.PurchaseItemCreateWithoutPurchaseInput[] | Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.PurchaseItemCreateOrConnectWithoutPurchaseInput | Prisma.PurchaseItemCreateOrConnectWithoutPurchaseInput[];
    createMany?: Prisma.PurchaseItemCreateManyPurchaseInputEnvelope;
    connect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
};
export type PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.PurchaseItemCreateWithoutPurchaseInput, Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput> | Prisma.PurchaseItemCreateWithoutPurchaseInput[] | Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.PurchaseItemCreateOrConnectWithoutPurchaseInput | Prisma.PurchaseItemCreateOrConnectWithoutPurchaseInput[];
    createMany?: Prisma.PurchaseItemCreateManyPurchaseInputEnvelope;
    connect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
};
export type PurchaseItemUpdateManyWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseItemCreateWithoutPurchaseInput, Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput> | Prisma.PurchaseItemCreateWithoutPurchaseInput[] | Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.PurchaseItemCreateOrConnectWithoutPurchaseInput | Prisma.PurchaseItemCreateOrConnectWithoutPurchaseInput[];
    upsert?: Prisma.PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | Prisma.PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[];
    createMany?: Prisma.PurchaseItemCreateManyPurchaseInputEnvelope;
    set?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    disconnect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    delete?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    connect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    update?: Prisma.PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | Prisma.PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[];
    updateMany?: Prisma.PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | Prisma.PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[];
    deleteMany?: Prisma.PurchaseItemScalarWhereInput | Prisma.PurchaseItemScalarWhereInput[];
};
export type PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseItemCreateWithoutPurchaseInput, Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput> | Prisma.PurchaseItemCreateWithoutPurchaseInput[] | Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.PurchaseItemCreateOrConnectWithoutPurchaseInput | Prisma.PurchaseItemCreateOrConnectWithoutPurchaseInput[];
    upsert?: Prisma.PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | Prisma.PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[];
    createMany?: Prisma.PurchaseItemCreateManyPurchaseInputEnvelope;
    set?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    disconnect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    delete?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    connect?: Prisma.PurchaseItemWhereUniqueInput | Prisma.PurchaseItemWhereUniqueInput[];
    update?: Prisma.PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | Prisma.PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[];
    updateMany?: Prisma.PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | Prisma.PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[];
    deleteMany?: Prisma.PurchaseItemScalarWhereInput | Prisma.PurchaseItemScalarWhereInput[];
};
export type PurchaseItemCreateWithoutProductInput = {
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase: Prisma.PurchaseCreateNestedOneWithoutItemsInput;
};
export type PurchaseItemUncheckedCreateWithoutProductInput = {
    id?: number;
    purchaseId: number;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemCreateOrConnectWithoutProductInput = {
    where: Prisma.PurchaseItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseItemCreateWithoutProductInput, Prisma.PurchaseItemUncheckedCreateWithoutProductInput>;
};
export type PurchaseItemCreateManyProductInputEnvelope = {
    data: Prisma.PurchaseItemCreateManyProductInput | Prisma.PurchaseItemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type PurchaseItemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchaseItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseItemUpdateWithoutProductInput, Prisma.PurchaseItemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.PurchaseItemCreateWithoutProductInput, Prisma.PurchaseItemUncheckedCreateWithoutProductInput>;
};
export type PurchaseItemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchaseItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseItemUpdateWithoutProductInput, Prisma.PurchaseItemUncheckedUpdateWithoutProductInput>;
};
export type PurchaseItemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.PurchaseItemScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseItemUpdateManyMutationInput, Prisma.PurchaseItemUncheckedUpdateManyWithoutProductInput>;
};
export type PurchaseItemScalarWhereInput = {
    AND?: Prisma.PurchaseItemScalarWhereInput | Prisma.PurchaseItemScalarWhereInput[];
    OR?: Prisma.PurchaseItemScalarWhereInput[];
    NOT?: Prisma.PurchaseItemScalarWhereInput | Prisma.PurchaseItemScalarWhereInput[];
    id?: Prisma.IntFilter<"PurchaseItem"> | number;
    purchaseId?: Prisma.IntFilter<"PurchaseItem"> | number;
    productId?: Prisma.IntFilter<"PurchaseItem"> | number;
    quantity?: Prisma.DecimalFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"PurchaseItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemCreateWithoutPurchaseInput = {
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    product: Prisma.ProductCreateNestedOneWithoutPurchaseItemsInput;
};
export type PurchaseItemUncheckedCreateWithoutPurchaseInput = {
    id?: number;
    productId: number;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemCreateOrConnectWithoutPurchaseInput = {
    where: Prisma.PurchaseItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseItemCreateWithoutPurchaseInput, Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput>;
};
export type PurchaseItemCreateManyPurchaseInputEnvelope = {
    data: Prisma.PurchaseItemCreateManyPurchaseInput | Prisma.PurchaseItemCreateManyPurchaseInput[];
    skipDuplicates?: boolean;
};
export type PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: Prisma.PurchaseItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseItemUpdateWithoutPurchaseInput, Prisma.PurchaseItemUncheckedUpdateWithoutPurchaseInput>;
    create: Prisma.XOR<Prisma.PurchaseItemCreateWithoutPurchaseInput, Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput>;
};
export type PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: Prisma.PurchaseItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseItemUpdateWithoutPurchaseInput, Prisma.PurchaseItemUncheckedUpdateWithoutPurchaseInput>;
};
export type PurchaseItemUpdateManyWithWhereWithoutPurchaseInput = {
    where: Prisma.PurchaseItemScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseItemUpdateManyMutationInput, Prisma.PurchaseItemUncheckedUpdateManyWithoutPurchaseInput>;
};
export type PurchaseItemCreateManyProductInput = {
    id?: number;
    purchaseId: number;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemUpdateWithoutProductInput = {
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase?: Prisma.PurchaseUpdateOneRequiredWithoutItemsNestedInput;
};
export type PurchaseItemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemCreateManyPurchaseInput = {
    id?: number;
    productId: number;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemUpdateWithoutPurchaseInput = {
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchaseItemsNestedInput;
};
export type PurchaseItemUncheckedUpdateWithoutPurchaseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemUncheckedUpdateManyWithoutPurchaseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PurchaseItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    purchase?: boolean | Prisma.PurchaseDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseItem"]>;
export type PurchaseItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    purchase?: boolean | Prisma.PurchaseDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseItem"]>;
export type PurchaseItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    purchase?: boolean | Prisma.PurchaseDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseItem"]>;
export type PurchaseItemSelectScalar = {
    id?: boolean;
    purchaseId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
};
export type PurchaseItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "purchaseId" | "productId" | "quantity" | "unitPrice" | "totalPrice", ExtArgs["result"]["purchaseItem"]>;
export type PurchaseItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase?: boolean | Prisma.PurchaseDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type PurchaseItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase?: boolean | Prisma.PurchaseDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type PurchaseItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase?: boolean | Prisma.PurchaseDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $PurchaseItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PurchaseItem";
    objects: {
        purchase: Prisma.$PurchasePayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        purchaseId: number;
        productId: number;
        quantity: runtime.Decimal;
        unitPrice: runtime.Decimal;
        totalPrice: runtime.Decimal;
    }, ExtArgs["result"]["purchaseItem"]>;
    composites: {};
};
export type PurchaseItemGetPayload<S extends boolean | null | undefined | PurchaseItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload, S>;
export type PurchaseItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchaseItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseItemCountAggregateInputType | true;
};
export interface PurchaseItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PurchaseItem'];
        meta: {
            name: 'PurchaseItem';
        };
    };
    findUnique<T extends PurchaseItemFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurchaseItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurchaseItemFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurchaseItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurchaseItemFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurchaseItemCreateArgs>(args: Prisma.SelectSubset<T, PurchaseItemCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurchaseItemCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurchaseItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurchaseItemDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseItemDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurchaseItemUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseItemUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurchaseItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurchaseItemUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurchaseItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurchaseItemUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseItemUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurchaseItemCountArgs>(args?: Prisma.Subset<T, PurchaseItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchaseItemCountAggregateOutputType> : number>;
    aggregate<T extends PurchaseItemAggregateArgs>(args: Prisma.Subset<T, PurchaseItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseItemAggregateType<T>>;
    groupBy<T extends PurchaseItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchaseItemGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchaseItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchaseItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurchaseItemFieldRefs;
}
export interface Prisma__PurchaseItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchase<T extends Prisma.PurchaseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseDefaultArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurchaseItemFieldRefs {
    readonly id: Prisma.FieldRef<"PurchaseItem", 'Int'>;
    readonly purchaseId: Prisma.FieldRef<"PurchaseItem", 'Int'>;
    readonly productId: Prisma.FieldRef<"PurchaseItem", 'Int'>;
    readonly quantity: Prisma.FieldRef<"PurchaseItem", 'Decimal'>;
    readonly unitPrice: Prisma.FieldRef<"PurchaseItem", 'Decimal'>;
    readonly totalPrice: Prisma.FieldRef<"PurchaseItem", 'Decimal'>;
}
export type PurchaseItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    where: Prisma.PurchaseItemWhereUniqueInput;
};
export type PurchaseItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    where: Prisma.PurchaseItemWhereUniqueInput;
};
export type PurchaseItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    where?: Prisma.PurchaseItemWhereInput;
    orderBy?: Prisma.PurchaseItemOrderByWithRelationInput | Prisma.PurchaseItemOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseItemScalarFieldEnum | Prisma.PurchaseItemScalarFieldEnum[];
};
export type PurchaseItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    where?: Prisma.PurchaseItemWhereInput;
    orderBy?: Prisma.PurchaseItemOrderByWithRelationInput | Prisma.PurchaseItemOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseItemScalarFieldEnum | Prisma.PurchaseItemScalarFieldEnum[];
};
export type PurchaseItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    where?: Prisma.PurchaseItemWhereInput;
    orderBy?: Prisma.PurchaseItemOrderByWithRelationInput | Prisma.PurchaseItemOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseItemScalarFieldEnum | Prisma.PurchaseItemScalarFieldEnum[];
};
export type PurchaseItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseItemCreateInput, Prisma.PurchaseItemUncheckedCreateInput>;
};
export type PurchaseItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurchaseItemCreateManyInput | Prisma.PurchaseItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    data: Prisma.PurchaseItemCreateManyInput | Prisma.PurchaseItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PurchaseItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PurchaseItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseItemUpdateInput, Prisma.PurchaseItemUncheckedUpdateInput>;
    where: Prisma.PurchaseItemWhereUniqueInput;
};
export type PurchaseItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurchaseItemUpdateManyMutationInput, Prisma.PurchaseItemUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseItemWhereInput;
    limit?: number;
};
export type PurchaseItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseItemUpdateManyMutationInput, Prisma.PurchaseItemUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseItemWhereInput;
    limit?: number;
    include?: Prisma.PurchaseItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PurchaseItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    where: Prisma.PurchaseItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseItemCreateInput, Prisma.PurchaseItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurchaseItemUpdateInput, Prisma.PurchaseItemUncheckedUpdateInput>;
};
export type PurchaseItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    where: Prisma.PurchaseItemWhereUniqueInput;
};
export type PurchaseItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseItemWhereInput;
    limit?: number;
};
export type PurchaseItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
};
