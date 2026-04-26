import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CreditPaymentModel = runtime.Types.Result.DefaultSelection<Prisma.$CreditPaymentPayload>;
export type AggregateCreditPayment = {
    _count: CreditPaymentCountAggregateOutputType | null;
    _avg: CreditPaymentAvgAggregateOutputType | null;
    _sum: CreditPaymentSumAggregateOutputType | null;
    _min: CreditPaymentMinAggregateOutputType | null;
    _max: CreditPaymentMaxAggregateOutputType | null;
};
export type CreditPaymentAvgAggregateOutputType = {
    id: number | null;
    creditId: number | null;
    amount: runtime.Decimal | null;
    userId: number | null;
};
export type CreditPaymentSumAggregateOutputType = {
    id: number | null;
    creditId: number | null;
    amount: runtime.Decimal | null;
    userId: number | null;
};
export type CreditPaymentMinAggregateOutputType = {
    id: number | null;
    creditId: number | null;
    amount: runtime.Decimal | null;
    paymentMethod: $Enums.PaymentMethod | null;
    userId: number | null;
    note: string | null;
    createdAt: Date | null;
};
export type CreditPaymentMaxAggregateOutputType = {
    id: number | null;
    creditId: number | null;
    amount: runtime.Decimal | null;
    paymentMethod: $Enums.PaymentMethod | null;
    userId: number | null;
    note: string | null;
    createdAt: Date | null;
};
export type CreditPaymentCountAggregateOutputType = {
    id: number;
    creditId: number;
    amount: number;
    paymentMethod: number;
    userId: number;
    note: number;
    createdAt: number;
    _all: number;
};
export type CreditPaymentAvgAggregateInputType = {
    id?: true;
    creditId?: true;
    amount?: true;
    userId?: true;
};
export type CreditPaymentSumAggregateInputType = {
    id?: true;
    creditId?: true;
    amount?: true;
    userId?: true;
};
export type CreditPaymentMinAggregateInputType = {
    id?: true;
    creditId?: true;
    amount?: true;
    paymentMethod?: true;
    userId?: true;
    note?: true;
    createdAt?: true;
};
export type CreditPaymentMaxAggregateInputType = {
    id?: true;
    creditId?: true;
    amount?: true;
    paymentMethod?: true;
    userId?: true;
    note?: true;
    createdAt?: true;
};
export type CreditPaymentCountAggregateInputType = {
    id?: true;
    creditId?: true;
    amount?: true;
    paymentMethod?: true;
    userId?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
};
export type CreditPaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditPaymentWhereInput;
    orderBy?: Prisma.CreditPaymentOrderByWithRelationInput | Prisma.CreditPaymentOrderByWithRelationInput[];
    cursor?: Prisma.CreditPaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CreditPaymentCountAggregateInputType;
    _avg?: CreditPaymentAvgAggregateInputType;
    _sum?: CreditPaymentSumAggregateInputType;
    _min?: CreditPaymentMinAggregateInputType;
    _max?: CreditPaymentMaxAggregateInputType;
};
export type GetCreditPaymentAggregateType<T extends CreditPaymentAggregateArgs> = {
    [P in keyof T & keyof AggregateCreditPayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCreditPayment[P]> : Prisma.GetScalarType<T[P], AggregateCreditPayment[P]>;
};
export type CreditPaymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditPaymentWhereInput;
    orderBy?: Prisma.CreditPaymentOrderByWithAggregationInput | Prisma.CreditPaymentOrderByWithAggregationInput[];
    by: Prisma.CreditPaymentScalarFieldEnum[] | Prisma.CreditPaymentScalarFieldEnum;
    having?: Prisma.CreditPaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CreditPaymentCountAggregateInputType | true;
    _avg?: CreditPaymentAvgAggregateInputType;
    _sum?: CreditPaymentSumAggregateInputType;
    _min?: CreditPaymentMinAggregateInputType;
    _max?: CreditPaymentMaxAggregateInputType;
};
export type CreditPaymentGroupByOutputType = {
    id: number;
    creditId: number;
    amount: runtime.Decimal;
    paymentMethod: $Enums.PaymentMethod;
    userId: number;
    note: string | null;
    createdAt: Date;
    _count: CreditPaymentCountAggregateOutputType | null;
    _avg: CreditPaymentAvgAggregateOutputType | null;
    _sum: CreditPaymentSumAggregateOutputType | null;
    _min: CreditPaymentMinAggregateOutputType | null;
    _max: CreditPaymentMaxAggregateOutputType | null;
};
export type GetCreditPaymentGroupByPayload<T extends CreditPaymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CreditPaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CreditPaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CreditPaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CreditPaymentGroupByOutputType[P]>;
}>>;
export type CreditPaymentWhereInput = {
    AND?: Prisma.CreditPaymentWhereInput | Prisma.CreditPaymentWhereInput[];
    OR?: Prisma.CreditPaymentWhereInput[];
    NOT?: Prisma.CreditPaymentWhereInput | Prisma.CreditPaymentWhereInput[];
    id?: Prisma.IntFilter<"CreditPayment"> | number;
    creditId?: Prisma.IntFilter<"CreditPayment"> | number;
    amount?: Prisma.DecimalFilter<"CreditPayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"CreditPayment"> | $Enums.PaymentMethod;
    userId?: Prisma.IntFilter<"CreditPayment"> | number;
    note?: Prisma.StringNullableFilter<"CreditPayment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CreditPayment"> | Date | string;
    credit?: Prisma.XOR<Prisma.CreditScalarRelationFilter, Prisma.CreditWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CreditPaymentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    creditId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    credit?: Prisma.CreditOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CreditPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CreditPaymentWhereInput | Prisma.CreditPaymentWhereInput[];
    OR?: Prisma.CreditPaymentWhereInput[];
    NOT?: Prisma.CreditPaymentWhereInput | Prisma.CreditPaymentWhereInput[];
    creditId?: Prisma.IntFilter<"CreditPayment"> | number;
    amount?: Prisma.DecimalFilter<"CreditPayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"CreditPayment"> | $Enums.PaymentMethod;
    userId?: Prisma.IntFilter<"CreditPayment"> | number;
    note?: Prisma.StringNullableFilter<"CreditPayment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CreditPayment"> | Date | string;
    credit?: Prisma.XOR<Prisma.CreditScalarRelationFilter, Prisma.CreditWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type CreditPaymentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    creditId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CreditPaymentCountOrderByAggregateInput;
    _avg?: Prisma.CreditPaymentAvgOrderByAggregateInput;
    _max?: Prisma.CreditPaymentMaxOrderByAggregateInput;
    _min?: Prisma.CreditPaymentMinOrderByAggregateInput;
    _sum?: Prisma.CreditPaymentSumOrderByAggregateInput;
};
export type CreditPaymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.CreditPaymentScalarWhereWithAggregatesInput | Prisma.CreditPaymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.CreditPaymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CreditPaymentScalarWhereWithAggregatesInput | Prisma.CreditPaymentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CreditPayment"> | number;
    creditId?: Prisma.IntWithAggregatesFilter<"CreditPayment"> | number;
    amount?: Prisma.DecimalWithAggregatesFilter<"CreditPayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodWithAggregatesFilter<"CreditPayment"> | $Enums.PaymentMethod;
    userId?: Prisma.IntWithAggregatesFilter<"CreditPayment"> | number;
    note?: Prisma.StringNullableWithAggregatesFilter<"CreditPayment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CreditPayment"> | Date | string;
};
export type CreditPaymentCreateInput = {
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    note?: string | null;
    createdAt?: Date | string;
    credit: Prisma.CreditCreateNestedOneWithoutPaymentsInput;
    user: Prisma.UserCreateNestedOneWithoutCreditPaymentsInput;
};
export type CreditPaymentUncheckedCreateInput = {
    id?: number;
    creditId: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    userId: number;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditPaymentUpdateInput = {
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    credit?: Prisma.CreditUpdateOneRequiredWithoutPaymentsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCreditPaymentsNestedInput;
};
export type CreditPaymentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    creditId?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditPaymentCreateManyInput = {
    id?: number;
    creditId: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    userId: number;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditPaymentUpdateManyMutationInput = {
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditPaymentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    creditId?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditPaymentListRelationFilter = {
    every?: Prisma.CreditPaymentWhereInput;
    some?: Prisma.CreditPaymentWhereInput;
    none?: Prisma.CreditPaymentWhereInput;
};
export type CreditPaymentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CreditPaymentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creditId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CreditPaymentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creditId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CreditPaymentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creditId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CreditPaymentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creditId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CreditPaymentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creditId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CreditPaymentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CreditPaymentCreateWithoutUserInput, Prisma.CreditPaymentUncheckedCreateWithoutUserInput> | Prisma.CreditPaymentCreateWithoutUserInput[] | Prisma.CreditPaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CreditPaymentCreateOrConnectWithoutUserInput | Prisma.CreditPaymentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CreditPaymentCreateManyUserInputEnvelope;
    connect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
};
export type CreditPaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CreditPaymentCreateWithoutUserInput, Prisma.CreditPaymentUncheckedCreateWithoutUserInput> | Prisma.CreditPaymentCreateWithoutUserInput[] | Prisma.CreditPaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CreditPaymentCreateOrConnectWithoutUserInput | Prisma.CreditPaymentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CreditPaymentCreateManyUserInputEnvelope;
    connect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
};
export type CreditPaymentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CreditPaymentCreateWithoutUserInput, Prisma.CreditPaymentUncheckedCreateWithoutUserInput> | Prisma.CreditPaymentCreateWithoutUserInput[] | Prisma.CreditPaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CreditPaymentCreateOrConnectWithoutUserInput | Prisma.CreditPaymentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CreditPaymentUpsertWithWhereUniqueWithoutUserInput | Prisma.CreditPaymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CreditPaymentCreateManyUserInputEnvelope;
    set?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    disconnect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    delete?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    connect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    update?: Prisma.CreditPaymentUpdateWithWhereUniqueWithoutUserInput | Prisma.CreditPaymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CreditPaymentUpdateManyWithWhereWithoutUserInput | Prisma.CreditPaymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CreditPaymentScalarWhereInput | Prisma.CreditPaymentScalarWhereInput[];
};
export type CreditPaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CreditPaymentCreateWithoutUserInput, Prisma.CreditPaymentUncheckedCreateWithoutUserInput> | Prisma.CreditPaymentCreateWithoutUserInput[] | Prisma.CreditPaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CreditPaymentCreateOrConnectWithoutUserInput | Prisma.CreditPaymentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CreditPaymentUpsertWithWhereUniqueWithoutUserInput | Prisma.CreditPaymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CreditPaymentCreateManyUserInputEnvelope;
    set?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    disconnect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    delete?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    connect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    update?: Prisma.CreditPaymentUpdateWithWhereUniqueWithoutUserInput | Prisma.CreditPaymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CreditPaymentUpdateManyWithWhereWithoutUserInput | Prisma.CreditPaymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CreditPaymentScalarWhereInput | Prisma.CreditPaymentScalarWhereInput[];
};
export type CreditPaymentCreateNestedManyWithoutCreditInput = {
    create?: Prisma.XOR<Prisma.CreditPaymentCreateWithoutCreditInput, Prisma.CreditPaymentUncheckedCreateWithoutCreditInput> | Prisma.CreditPaymentCreateWithoutCreditInput[] | Prisma.CreditPaymentUncheckedCreateWithoutCreditInput[];
    connectOrCreate?: Prisma.CreditPaymentCreateOrConnectWithoutCreditInput | Prisma.CreditPaymentCreateOrConnectWithoutCreditInput[];
    createMany?: Prisma.CreditPaymentCreateManyCreditInputEnvelope;
    connect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
};
export type CreditPaymentUncheckedCreateNestedManyWithoutCreditInput = {
    create?: Prisma.XOR<Prisma.CreditPaymentCreateWithoutCreditInput, Prisma.CreditPaymentUncheckedCreateWithoutCreditInput> | Prisma.CreditPaymentCreateWithoutCreditInput[] | Prisma.CreditPaymentUncheckedCreateWithoutCreditInput[];
    connectOrCreate?: Prisma.CreditPaymentCreateOrConnectWithoutCreditInput | Prisma.CreditPaymentCreateOrConnectWithoutCreditInput[];
    createMany?: Prisma.CreditPaymentCreateManyCreditInputEnvelope;
    connect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
};
export type CreditPaymentUpdateManyWithoutCreditNestedInput = {
    create?: Prisma.XOR<Prisma.CreditPaymentCreateWithoutCreditInput, Prisma.CreditPaymentUncheckedCreateWithoutCreditInput> | Prisma.CreditPaymentCreateWithoutCreditInput[] | Prisma.CreditPaymentUncheckedCreateWithoutCreditInput[];
    connectOrCreate?: Prisma.CreditPaymentCreateOrConnectWithoutCreditInput | Prisma.CreditPaymentCreateOrConnectWithoutCreditInput[];
    upsert?: Prisma.CreditPaymentUpsertWithWhereUniqueWithoutCreditInput | Prisma.CreditPaymentUpsertWithWhereUniqueWithoutCreditInput[];
    createMany?: Prisma.CreditPaymentCreateManyCreditInputEnvelope;
    set?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    disconnect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    delete?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    connect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    update?: Prisma.CreditPaymentUpdateWithWhereUniqueWithoutCreditInput | Prisma.CreditPaymentUpdateWithWhereUniqueWithoutCreditInput[];
    updateMany?: Prisma.CreditPaymentUpdateManyWithWhereWithoutCreditInput | Prisma.CreditPaymentUpdateManyWithWhereWithoutCreditInput[];
    deleteMany?: Prisma.CreditPaymentScalarWhereInput | Prisma.CreditPaymentScalarWhereInput[];
};
export type CreditPaymentUncheckedUpdateManyWithoutCreditNestedInput = {
    create?: Prisma.XOR<Prisma.CreditPaymentCreateWithoutCreditInput, Prisma.CreditPaymentUncheckedCreateWithoutCreditInput> | Prisma.CreditPaymentCreateWithoutCreditInput[] | Prisma.CreditPaymentUncheckedCreateWithoutCreditInput[];
    connectOrCreate?: Prisma.CreditPaymentCreateOrConnectWithoutCreditInput | Prisma.CreditPaymentCreateOrConnectWithoutCreditInput[];
    upsert?: Prisma.CreditPaymentUpsertWithWhereUniqueWithoutCreditInput | Prisma.CreditPaymentUpsertWithWhereUniqueWithoutCreditInput[];
    createMany?: Prisma.CreditPaymentCreateManyCreditInputEnvelope;
    set?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    disconnect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    delete?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    connect?: Prisma.CreditPaymentWhereUniqueInput | Prisma.CreditPaymentWhereUniqueInput[];
    update?: Prisma.CreditPaymentUpdateWithWhereUniqueWithoutCreditInput | Prisma.CreditPaymentUpdateWithWhereUniqueWithoutCreditInput[];
    updateMany?: Prisma.CreditPaymentUpdateManyWithWhereWithoutCreditInput | Prisma.CreditPaymentUpdateManyWithWhereWithoutCreditInput[];
    deleteMany?: Prisma.CreditPaymentScalarWhereInput | Prisma.CreditPaymentScalarWhereInput[];
};
export type CreditPaymentCreateWithoutUserInput = {
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    note?: string | null;
    createdAt?: Date | string;
    credit: Prisma.CreditCreateNestedOneWithoutPaymentsInput;
};
export type CreditPaymentUncheckedCreateWithoutUserInput = {
    id?: number;
    creditId: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditPaymentCreateOrConnectWithoutUserInput = {
    where: Prisma.CreditPaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditPaymentCreateWithoutUserInput, Prisma.CreditPaymentUncheckedCreateWithoutUserInput>;
};
export type CreditPaymentCreateManyUserInputEnvelope = {
    data: Prisma.CreditPaymentCreateManyUserInput | Prisma.CreditPaymentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CreditPaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CreditPaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreditPaymentUpdateWithoutUserInput, Prisma.CreditPaymentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CreditPaymentCreateWithoutUserInput, Prisma.CreditPaymentUncheckedCreateWithoutUserInput>;
};
export type CreditPaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CreditPaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreditPaymentUpdateWithoutUserInput, Prisma.CreditPaymentUncheckedUpdateWithoutUserInput>;
};
export type CreditPaymentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CreditPaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.CreditPaymentUpdateManyMutationInput, Prisma.CreditPaymentUncheckedUpdateManyWithoutUserInput>;
};
export type CreditPaymentScalarWhereInput = {
    AND?: Prisma.CreditPaymentScalarWhereInput | Prisma.CreditPaymentScalarWhereInput[];
    OR?: Prisma.CreditPaymentScalarWhereInput[];
    NOT?: Prisma.CreditPaymentScalarWhereInput | Prisma.CreditPaymentScalarWhereInput[];
    id?: Prisma.IntFilter<"CreditPayment"> | number;
    creditId?: Prisma.IntFilter<"CreditPayment"> | number;
    amount?: Prisma.DecimalFilter<"CreditPayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"CreditPayment"> | $Enums.PaymentMethod;
    userId?: Prisma.IntFilter<"CreditPayment"> | number;
    note?: Prisma.StringNullableFilter<"CreditPayment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CreditPayment"> | Date | string;
};
export type CreditPaymentCreateWithoutCreditInput = {
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    note?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCreditPaymentsInput;
};
export type CreditPaymentUncheckedCreateWithoutCreditInput = {
    id?: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    userId: number;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditPaymentCreateOrConnectWithoutCreditInput = {
    where: Prisma.CreditPaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditPaymentCreateWithoutCreditInput, Prisma.CreditPaymentUncheckedCreateWithoutCreditInput>;
};
export type CreditPaymentCreateManyCreditInputEnvelope = {
    data: Prisma.CreditPaymentCreateManyCreditInput | Prisma.CreditPaymentCreateManyCreditInput[];
    skipDuplicates?: boolean;
};
export type CreditPaymentUpsertWithWhereUniqueWithoutCreditInput = {
    where: Prisma.CreditPaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreditPaymentUpdateWithoutCreditInput, Prisma.CreditPaymentUncheckedUpdateWithoutCreditInput>;
    create: Prisma.XOR<Prisma.CreditPaymentCreateWithoutCreditInput, Prisma.CreditPaymentUncheckedCreateWithoutCreditInput>;
};
export type CreditPaymentUpdateWithWhereUniqueWithoutCreditInput = {
    where: Prisma.CreditPaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreditPaymentUpdateWithoutCreditInput, Prisma.CreditPaymentUncheckedUpdateWithoutCreditInput>;
};
export type CreditPaymentUpdateManyWithWhereWithoutCreditInput = {
    where: Prisma.CreditPaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.CreditPaymentUpdateManyMutationInput, Prisma.CreditPaymentUncheckedUpdateManyWithoutCreditInput>;
};
export type CreditPaymentCreateManyUserInput = {
    id?: number;
    creditId: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditPaymentUpdateWithoutUserInput = {
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    credit?: Prisma.CreditUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type CreditPaymentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    creditId?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditPaymentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    creditId?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditPaymentCreateManyCreditInput = {
    id?: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod: $Enums.PaymentMethod;
    userId: number;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditPaymentUpdateWithoutCreditInput = {
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCreditPaymentsNestedInput;
};
export type CreditPaymentUncheckedUpdateWithoutCreditInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditPaymentUncheckedUpdateManyWithoutCreditInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditPaymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    creditId?: boolean;
    amount?: boolean;
    paymentMethod?: boolean;
    userId?: boolean;
    note?: boolean;
    createdAt?: boolean;
    credit?: boolean | Prisma.CreditDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creditPayment"]>;
export type CreditPaymentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    creditId?: boolean;
    amount?: boolean;
    paymentMethod?: boolean;
    userId?: boolean;
    note?: boolean;
    createdAt?: boolean;
    credit?: boolean | Prisma.CreditDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creditPayment"]>;
export type CreditPaymentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    creditId?: boolean;
    amount?: boolean;
    paymentMethod?: boolean;
    userId?: boolean;
    note?: boolean;
    createdAt?: boolean;
    credit?: boolean | Prisma.CreditDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creditPayment"]>;
export type CreditPaymentSelectScalar = {
    id?: boolean;
    creditId?: boolean;
    amount?: boolean;
    paymentMethod?: boolean;
    userId?: boolean;
    note?: boolean;
    createdAt?: boolean;
};
export type CreditPaymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "creditId" | "amount" | "paymentMethod" | "userId" | "note" | "createdAt", ExtArgs["result"]["creditPayment"]>;
export type CreditPaymentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    credit?: boolean | Prisma.CreditDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CreditPaymentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    credit?: boolean | Prisma.CreditDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CreditPaymentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    credit?: boolean | Prisma.CreditDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CreditPaymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CreditPayment";
    objects: {
        credit: Prisma.$CreditPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        creditId: number;
        amount: runtime.Decimal;
        paymentMethod: $Enums.PaymentMethod;
        userId: number;
        note: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["creditPayment"]>;
    composites: {};
};
export type CreditPaymentGetPayload<S extends boolean | null | undefined | CreditPaymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload, S>;
export type CreditPaymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CreditPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CreditPaymentCountAggregateInputType | true;
};
export interface CreditPaymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CreditPayment'];
        meta: {
            name: 'CreditPayment';
        };
    };
    findUnique<T extends CreditPaymentFindUniqueArgs>(args: Prisma.SelectSubset<T, CreditPaymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CreditPaymentClient<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CreditPaymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CreditPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreditPaymentClient<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CreditPaymentFindFirstArgs>(args?: Prisma.SelectSubset<T, CreditPaymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__CreditPaymentClient<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CreditPaymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CreditPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreditPaymentClient<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CreditPaymentFindManyArgs>(args?: Prisma.SelectSubset<T, CreditPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CreditPaymentCreateArgs>(args: Prisma.SelectSubset<T, CreditPaymentCreateArgs<ExtArgs>>): Prisma.Prisma__CreditPaymentClient<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CreditPaymentCreateManyArgs>(args?: Prisma.SelectSubset<T, CreditPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CreditPaymentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CreditPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CreditPaymentDeleteArgs>(args: Prisma.SelectSubset<T, CreditPaymentDeleteArgs<ExtArgs>>): Prisma.Prisma__CreditPaymentClient<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CreditPaymentUpdateArgs>(args: Prisma.SelectSubset<T, CreditPaymentUpdateArgs<ExtArgs>>): Prisma.Prisma__CreditPaymentClient<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CreditPaymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, CreditPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CreditPaymentUpdateManyArgs>(args: Prisma.SelectSubset<T, CreditPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CreditPaymentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CreditPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CreditPaymentUpsertArgs>(args: Prisma.SelectSubset<T, CreditPaymentUpsertArgs<ExtArgs>>): Prisma.Prisma__CreditPaymentClient<runtime.Types.Result.GetResult<Prisma.$CreditPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CreditPaymentCountArgs>(args?: Prisma.Subset<T, CreditPaymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CreditPaymentCountAggregateOutputType> : number>;
    aggregate<T extends CreditPaymentAggregateArgs>(args: Prisma.Subset<T, CreditPaymentAggregateArgs>): Prisma.PrismaPromise<GetCreditPaymentAggregateType<T>>;
    groupBy<T extends CreditPaymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CreditPaymentGroupByArgs['orderBy'];
    } : {
        orderBy?: CreditPaymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CreditPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CreditPaymentFieldRefs;
}
export interface Prisma__CreditPaymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    credit<T extends Prisma.CreditDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CreditDefaultArgs<ExtArgs>>): Prisma.Prisma__CreditClient<runtime.Types.Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CreditPaymentFieldRefs {
    readonly id: Prisma.FieldRef<"CreditPayment", 'Int'>;
    readonly creditId: Prisma.FieldRef<"CreditPayment", 'Int'>;
    readonly amount: Prisma.FieldRef<"CreditPayment", 'Decimal'>;
    readonly paymentMethod: Prisma.FieldRef<"CreditPayment", 'PaymentMethod'>;
    readonly userId: Prisma.FieldRef<"CreditPayment", 'Int'>;
    readonly note: Prisma.FieldRef<"CreditPayment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CreditPayment", 'DateTime'>;
}
export type CreditPaymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelect<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    include?: Prisma.CreditPaymentInclude<ExtArgs> | null;
    where: Prisma.CreditPaymentWhereUniqueInput;
};
export type CreditPaymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelect<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    include?: Prisma.CreditPaymentInclude<ExtArgs> | null;
    where: Prisma.CreditPaymentWhereUniqueInput;
};
export type CreditPaymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreditPaymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreditPaymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreditPaymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelect<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    include?: Prisma.CreditPaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreditPaymentCreateInput, Prisma.CreditPaymentUncheckedCreateInput>;
};
export type CreditPaymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CreditPaymentCreateManyInput | Prisma.CreditPaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CreditPaymentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    data: Prisma.CreditPaymentCreateManyInput | Prisma.CreditPaymentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CreditPaymentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CreditPaymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelect<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    include?: Prisma.CreditPaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreditPaymentUpdateInput, Prisma.CreditPaymentUncheckedUpdateInput>;
    where: Prisma.CreditPaymentWhereUniqueInput;
};
export type CreditPaymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CreditPaymentUpdateManyMutationInput, Prisma.CreditPaymentUncheckedUpdateManyInput>;
    where?: Prisma.CreditPaymentWhereInput;
    limit?: number;
};
export type CreditPaymentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreditPaymentUpdateManyMutationInput, Prisma.CreditPaymentUncheckedUpdateManyInput>;
    where?: Prisma.CreditPaymentWhereInput;
    limit?: number;
    include?: Prisma.CreditPaymentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CreditPaymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelect<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    include?: Prisma.CreditPaymentInclude<ExtArgs> | null;
    where: Prisma.CreditPaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditPaymentCreateInput, Prisma.CreditPaymentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CreditPaymentUpdateInput, Prisma.CreditPaymentUncheckedUpdateInput>;
};
export type CreditPaymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelect<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    include?: Prisma.CreditPaymentInclude<ExtArgs> | null;
    where: Prisma.CreditPaymentWhereUniqueInput;
};
export type CreditPaymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditPaymentWhereInput;
    limit?: number;
};
export type CreditPaymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditPaymentSelect<ExtArgs> | null;
    omit?: Prisma.CreditPaymentOmit<ExtArgs> | null;
    include?: Prisma.CreditPaymentInclude<ExtArgs> | null;
};
