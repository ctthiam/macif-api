import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExpenseModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpensePayload>;
export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
};
export type ExpenseAvgAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    amount: runtime.Decimal | null;
    recurDay: number | null;
};
export type ExpenseSumAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    amount: runtime.Decimal | null;
    recurDay: number | null;
};
export type ExpenseMinAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    category: $Enums.ExpenseCategory | null;
    amount: runtime.Decimal | null;
    description: string | null;
    date: Date | null;
    isRecurring: boolean | null;
    recurDay: number | null;
    createdAt: Date | null;
};
export type ExpenseMaxAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    userId: number | null;
    category: $Enums.ExpenseCategory | null;
    amount: runtime.Decimal | null;
    description: string | null;
    date: Date | null;
    isRecurring: boolean | null;
    recurDay: number | null;
    createdAt: Date | null;
};
export type ExpenseCountAggregateOutputType = {
    id: number;
    shopId: number;
    userId: number;
    category: number;
    amount: number;
    description: number;
    date: number;
    isRecurring: number;
    recurDay: number;
    createdAt: number;
    _all: number;
};
export type ExpenseAvgAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    amount?: true;
    recurDay?: true;
};
export type ExpenseSumAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    amount?: true;
    recurDay?: true;
};
export type ExpenseMinAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    category?: true;
    amount?: true;
    description?: true;
    date?: true;
    isRecurring?: true;
    recurDay?: true;
    createdAt?: true;
};
export type ExpenseMaxAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    category?: true;
    amount?: true;
    description?: true;
    date?: true;
    isRecurring?: true;
    recurDay?: true;
    createdAt?: true;
};
export type ExpenseCountAggregateInputType = {
    id?: true;
    shopId?: true;
    userId?: true;
    category?: true;
    amount?: true;
    description?: true;
    date?: true;
    isRecurring?: true;
    recurDay?: true;
    createdAt?: true;
    _all?: true;
};
export type ExpenseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExpenseCountAggregateInputType;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
};
export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
    [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpense[P]> : Prisma.GetScalarType<T[P], AggregateExpense[P]>;
};
export type ExpenseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithAggregationInput | Prisma.ExpenseOrderByWithAggregationInput[];
    by: Prisma.ExpenseScalarFieldEnum[] | Prisma.ExpenseScalarFieldEnum;
    having?: Prisma.ExpenseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseCountAggregateInputType | true;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
};
export type ExpenseGroupByOutputType = {
    id: number;
    shopId: number;
    userId: number;
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal;
    description: string | null;
    date: Date;
    isRecurring: boolean;
    recurDay: number | null;
    createdAt: Date;
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
};
export type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpenseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpenseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpenseGroupByOutputType[P]>;
}>>;
export type ExpenseWhereInput = {
    AND?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    OR?: Prisma.ExpenseWhereInput[];
    NOT?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    id?: Prisma.IntFilter<"Expense"> | number;
    shopId?: Prisma.IntFilter<"Expense"> | number;
    userId?: Prisma.IntFilter<"Expense"> | number;
    category?: Prisma.EnumExpenseCategoryFilter<"Expense"> | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFilter<"Expense"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"Expense"> | string | null;
    date?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    isRecurring?: Prisma.BoolFilter<"Expense"> | boolean;
    recurDay?: Prisma.IntNullableFilter<"Expense"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ExpenseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    recurDay?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shop?: Prisma.ShopOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    OR?: Prisma.ExpenseWhereInput[];
    NOT?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    shopId?: Prisma.IntFilter<"Expense"> | number;
    userId?: Prisma.IntFilter<"Expense"> | number;
    category?: Prisma.EnumExpenseCategoryFilter<"Expense"> | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFilter<"Expense"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"Expense"> | string | null;
    date?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    isRecurring?: Prisma.BoolFilter<"Expense"> | boolean;
    recurDay?: Prisma.IntNullableFilter<"Expense"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    shop?: Prisma.XOR<Prisma.ShopScalarRelationFilter, Prisma.ShopWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ExpenseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    recurDay?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ExpenseCountOrderByAggregateInput;
    _avg?: Prisma.ExpenseAvgOrderByAggregateInput;
    _max?: Prisma.ExpenseMaxOrderByAggregateInput;
    _min?: Prisma.ExpenseMinOrderByAggregateInput;
    _sum?: Prisma.ExpenseSumOrderByAggregateInput;
};
export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpenseScalarWhereWithAggregatesInput | Prisma.ExpenseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpenseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpenseScalarWhereWithAggregatesInput | Prisma.ExpenseScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Expense"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"Expense"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Expense"> | number;
    category?: Prisma.EnumExpenseCategoryWithAggregatesFilter<"Expense"> | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalWithAggregatesFilter<"Expense"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Expense"> | string | null;
    date?: Prisma.DateTimeWithAggregatesFilter<"Expense"> | Date | string;
    isRecurring?: Prisma.BoolWithAggregatesFilter<"Expense"> | boolean;
    recurDay?: Prisma.IntNullableWithAggregatesFilter<"Expense"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Expense"> | Date | string;
};
export type ExpenseCreateInput = {
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    date: Date | string;
    isRecurring?: boolean;
    recurDay?: number | null;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutExpensesInput;
    user: Prisma.UserCreateNestedOneWithoutExpensesInput;
};
export type ExpenseUncheckedCreateInput = {
    id?: number;
    shopId: number;
    userId: number;
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    date: Date | string;
    isRecurring?: boolean;
    recurDay?: number | null;
    createdAt?: Date | string;
};
export type ExpenseUpdateInput = {
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutExpensesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpenseUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCreateManyInput = {
    id?: number;
    shopId: number;
    userId: number;
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    date: Date | string;
    isRecurring?: boolean;
    recurDay?: number | null;
    createdAt?: Date | string;
};
export type ExpenseUpdateManyMutationInput = {
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseListRelationFilter = {
    every?: Prisma.ExpenseWhereInput;
    some?: Prisma.ExpenseWhereInput;
    none?: Prisma.ExpenseWhereInput;
};
export type ExpenseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpenseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    recurDay?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExpenseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    recurDay?: Prisma.SortOrder;
};
export type ExpenseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    recurDay?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExpenseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    recurDay?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExpenseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    recurDay?: Prisma.SortOrder;
};
export type ExpenseCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutUserInput, Prisma.ExpenseUncheckedCreateWithoutUserInput> | Prisma.ExpenseCreateWithoutUserInput[] | Prisma.ExpenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutUserInput | Prisma.ExpenseCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExpenseCreateManyUserInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutUserInput, Prisma.ExpenseUncheckedCreateWithoutUserInput> | Prisma.ExpenseCreateWithoutUserInput[] | Prisma.ExpenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutUserInput | Prisma.ExpenseCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExpenseCreateManyUserInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutUserInput, Prisma.ExpenseUncheckedCreateWithoutUserInput> | Prisma.ExpenseCreateWithoutUserInput[] | Prisma.ExpenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutUserInput | Prisma.ExpenseCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutUserInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExpenseCreateManyUserInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutUserInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutUserInput | Prisma.ExpenseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutUserInput, Prisma.ExpenseUncheckedCreateWithoutUserInput> | Prisma.ExpenseCreateWithoutUserInput[] | Prisma.ExpenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutUserInput | Prisma.ExpenseCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutUserInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExpenseCreateManyUserInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutUserInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutUserInput | Prisma.ExpenseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutShopInput, Prisma.ExpenseUncheckedCreateWithoutShopInput> | Prisma.ExpenseCreateWithoutShopInput[] | Prisma.ExpenseUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutShopInput | Prisma.ExpenseCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.ExpenseCreateManyShopInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutShopInput, Prisma.ExpenseUncheckedCreateWithoutShopInput> | Prisma.ExpenseCreateWithoutShopInput[] | Prisma.ExpenseUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutShopInput | Prisma.ExpenseCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.ExpenseCreateManyShopInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutShopInput, Prisma.ExpenseUncheckedCreateWithoutShopInput> | Prisma.ExpenseCreateWithoutShopInput[] | Prisma.ExpenseUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutShopInput | Prisma.ExpenseCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutShopInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.ExpenseCreateManyShopInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutShopInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutShopInput | Prisma.ExpenseUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutShopInput, Prisma.ExpenseUncheckedCreateWithoutShopInput> | Prisma.ExpenseCreateWithoutShopInput[] | Prisma.ExpenseUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutShopInput | Prisma.ExpenseCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutShopInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.ExpenseCreateManyShopInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutShopInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutShopInput | Prisma.ExpenseUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type EnumExpenseCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseCategory;
};
export type ExpenseCreateWithoutUserInput = {
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    date: Date | string;
    isRecurring?: boolean;
    recurDay?: number | null;
    createdAt?: Date | string;
    shop: Prisma.ShopCreateNestedOneWithoutExpensesInput;
};
export type ExpenseUncheckedCreateWithoutUserInput = {
    id?: number;
    shopId: number;
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    date: Date | string;
    isRecurring?: boolean;
    recurDay?: number | null;
    createdAt?: Date | string;
};
export type ExpenseCreateOrConnectWithoutUserInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutUserInput, Prisma.ExpenseUncheckedCreateWithoutUserInput>;
};
export type ExpenseCreateManyUserInputEnvelope = {
    data: Prisma.ExpenseCreateManyUserInput | Prisma.ExpenseCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseUpdateWithoutUserInput, Prisma.ExpenseUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutUserInput, Prisma.ExpenseUncheckedCreateWithoutUserInput>;
};
export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateWithoutUserInput, Prisma.ExpenseUncheckedUpdateWithoutUserInput>;
};
export type ExpenseUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ExpenseScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyWithoutUserInput>;
};
export type ExpenseScalarWhereInput = {
    AND?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
    OR?: Prisma.ExpenseScalarWhereInput[];
    NOT?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
    id?: Prisma.IntFilter<"Expense"> | number;
    shopId?: Prisma.IntFilter<"Expense"> | number;
    userId?: Prisma.IntFilter<"Expense"> | number;
    category?: Prisma.EnumExpenseCategoryFilter<"Expense"> | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFilter<"Expense"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"Expense"> | string | null;
    date?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    isRecurring?: Prisma.BoolFilter<"Expense"> | boolean;
    recurDay?: Prisma.IntNullableFilter<"Expense"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Expense"> | Date | string;
};
export type ExpenseCreateWithoutShopInput = {
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    date: Date | string;
    isRecurring?: boolean;
    recurDay?: number | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutExpensesInput;
};
export type ExpenseUncheckedCreateWithoutShopInput = {
    id?: number;
    userId: number;
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    date: Date | string;
    isRecurring?: boolean;
    recurDay?: number | null;
    createdAt?: Date | string;
};
export type ExpenseCreateOrConnectWithoutShopInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutShopInput, Prisma.ExpenseUncheckedCreateWithoutShopInput>;
};
export type ExpenseCreateManyShopInputEnvelope = {
    data: Prisma.ExpenseCreateManyShopInput | Prisma.ExpenseCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type ExpenseUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseUpdateWithoutShopInput, Prisma.ExpenseUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutShopInput, Prisma.ExpenseUncheckedCreateWithoutShopInput>;
};
export type ExpenseUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateWithoutShopInput, Prisma.ExpenseUncheckedUpdateWithoutShopInput>;
};
export type ExpenseUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.ExpenseScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyWithoutShopInput>;
};
export type ExpenseCreateManyUserInput = {
    id?: number;
    shopId: number;
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    date: Date | string;
    isRecurring?: boolean;
    recurDay?: number | null;
    createdAt?: Date | string;
};
export type ExpenseUpdateWithoutUserInput = {
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.ShopUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpenseUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCreateManyShopInput = {
    id?: number;
    userId: number;
    category: $Enums.ExpenseCategory;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    date: Date | string;
    isRecurring?: boolean;
    recurDay?: number | null;
    createdAt?: Date | string;
};
export type ExpenseUpdateWithoutShopInput = {
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutExpensesNestedInput;
};
export type ExpenseUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    recurDay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    category?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    isRecurring?: boolean;
    recurDay?: boolean;
    createdAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expense"]>;
export type ExpenseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    category?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    isRecurring?: boolean;
    recurDay?: boolean;
    createdAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expense"]>;
export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    category?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    isRecurring?: boolean;
    recurDay?: boolean;
    createdAt?: boolean;
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expense"]>;
export type ExpenseSelectScalar = {
    id?: boolean;
    shopId?: boolean;
    userId?: boolean;
    category?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    isRecurring?: boolean;
    recurDay?: boolean;
    createdAt?: boolean;
};
export type ExpenseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shopId" | "userId" | "category" | "amount" | "description" | "date" | "isRecurring" | "recurDay" | "createdAt", ExtArgs["result"]["expense"]>;
export type ExpenseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.ShopDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ExpensePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Expense";
    objects: {
        shop: Prisma.$ShopPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shopId: number;
        userId: number;
        category: $Enums.ExpenseCategory;
        amount: runtime.Decimal;
        description: string | null;
        date: Date;
        isRecurring: boolean;
        recurDay: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["expense"]>;
    composites: {};
};
export type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpensePayload, S>;
export type ExpenseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseCountAggregateInputType | true;
};
export interface ExpenseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Expense'];
        meta: {
            name: 'Expense';
        };
    };
    findUnique<T extends ExpenseFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExpenseFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExpenseFindManyArgs>(args?: Prisma.SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExpenseCreateArgs>(args: Prisma.SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExpenseCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExpenseDeleteArgs>(args: Prisma.SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExpenseUpdateArgs>(args: Prisma.SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExpenseUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExpenseUpsertArgs>(args: Prisma.SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExpenseCountArgs>(args?: Prisma.Subset<T, ExpenseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpenseCountAggregateOutputType> : number>;
    aggregate<T extends ExpenseAggregateArgs>(args: Prisma.Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>;
    groupBy<T extends ExpenseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpenseGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpenseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExpenseFieldRefs;
}
export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shop<T extends Prisma.ShopDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopClient<runtime.Types.Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExpenseFieldRefs {
    readonly id: Prisma.FieldRef<"Expense", 'Int'>;
    readonly shopId: Prisma.FieldRef<"Expense", 'Int'>;
    readonly userId: Prisma.FieldRef<"Expense", 'Int'>;
    readonly category: Prisma.FieldRef<"Expense", 'ExpenseCategory'>;
    readonly amount: Prisma.FieldRef<"Expense", 'Decimal'>;
    readonly description: Prisma.FieldRef<"Expense", 'String'>;
    readonly date: Prisma.FieldRef<"Expense", 'DateTime'>;
    readonly isRecurring: Prisma.FieldRef<"Expense", 'Boolean'>;
    readonly recurDay: Prisma.FieldRef<"Expense", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Expense", 'DateTime'>;
}
export type ExpenseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseCreateInput, Prisma.ExpenseUncheckedCreateInput>;
};
export type ExpenseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExpenseCreateManyInput | Prisma.ExpenseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExpenseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    data: Prisma.ExpenseCreateManyInput | Prisma.ExpenseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExpenseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExpenseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseUpdateInput, Prisma.ExpenseUncheckedUpdateInput>;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseWhereInput;
    limit?: number;
};
export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseWhereInput;
    limit?: number;
    include?: Prisma.ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExpenseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateInput, Prisma.ExpenseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExpenseUpdateInput, Prisma.ExpenseUncheckedUpdateInput>;
};
export type ExpenseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
    limit?: number;
};
export type ExpenseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
};
