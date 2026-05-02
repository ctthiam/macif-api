/**
 * Seed de données de démonstration — Quincaillerie MACIF
 * Lance avec : npx ts-node prisma/seed-demo.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const SHOP_ID = 1;
const USER_ID = 1;

function daysAgo(n: number, hour = 10, minute = 0): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(hour, minute, 0, 0);
  return d;
}

function dateOnly(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let saleCounter = 1;
function saleRef(date: Date) {
  return `VTE-${date.getFullYear()}-${String(saleCounter++).padStart(5, "0")}`;
}

let purchaseCounter = 1;
function purchaseRef(date: Date) {
  return `ACH-${date.getFullYear()}-${String(purchaseCounter++).padStart(5, "0")}`;
}

async function main() {
  console.log("🌱 Seeding demo data...\n");

  // ── PRODUITS ────────────────────────────────────────────────────────────────
  console.log("📦 Creating products...");

  const cats = await prisma.category.findMany({ where: { shopId: SHOP_ID } });
  const catId = (name: string) => cats.find((c) => c.name === name)?.id ?? cats[7].id;

  const productsData = [
    // idx 0-1: Ciment
    { name: "Ciment CEM II 32.5 (sac 50kg)", unit: "sac",     buy: 4200,  sell: 4800,  stock: 120, alert: 20, cat: "Ciment" },
    { name: "Ciment CEM I 42.5 (sac 50kg)",  unit: "sac",     buy: 5500,  sell: 6200,  stock: 60,  alert: 15, cat: "Ciment" },
    // idx 2-6: Fer
    { name: "Fer à béton ø6mm (barre 12m)",  unit: "barre",   buy: 1800,  sell: 2200,  stock: 200, alert: 30, cat: "Fer" },
    { name: "Fer à béton ø8mm (barre 12m)",  unit: "barre",   buy: 2800,  sell: 3400,  stock: 180, alert: 30, cat: "Fer" },
    { name: "Fer à béton ø10mm (barre 12m)", unit: "barre",   buy: 4200,  sell: 5000,  stock: 150, alert: 25, cat: "Fer" },
    { name: "Fer à béton ø12mm (barre 12m)", unit: "barre",   buy: 6100,  sell: 7200,  stock: 100, alert: 20, cat: "Fer" },
    { name: "Fil de fer recuit (bobine 5kg)","unit": "bobine", buy: 3500,  sell: 4200,  stock: 40,  alert: 8,  cat: "Fer" },
    // idx 7-10: Peinture
    { name: "Peinture laque blanche 4L",     unit: "pot",     buy: 7500,  sell: 9500,  stock: 35,  alert: 8,  cat: "Peinture" },
    { name: "Peinture laque blanche 20L",    unit: "pot",     buy: 32000, sell: 39000, stock: 18,  alert: 4,  cat: "Peinture" },
    { name: "Sous-couche universelle 4L",    unit: "pot",     buy: 5500,  sell: 7000,  stock: 25,  alert: 6,  cat: "Peinture" },
    { name: "Peinture façade beige 4L",      unit: "pot",     buy: 8000,  sell: 10500, stock: 20,  alert: 5,  cat: "Peinture" },
    // idx 11-14: Plomberie
    { name: "Tuyau PVC ø50mm (tube 3m)",     unit: "tube",    buy: 3200,  sell: 4000,  stock: 55,  alert: 10, cat: "Plomberie" },
    { name: "Tuyau PVC ø100mm (tube 3m)",    unit: "tube",    buy: 6800,  sell: 8500,  stock: 30,  alert: 8,  cat: "Plomberie" },
    { name: "Coude PVC ø50mm",               unit: "pièce",   buy: 350,   sell: 500,   stock: 80,  alert: 20, cat: "Plomberie" },
    { name: "Robinet mitigeur lavabo",        unit: "pièce",   buy: 8500,  sell: 12000, stock: 15,  alert: 4,  cat: "Plomberie" },
    // idx 15-19: Électricité
    { name: "Câble 2.5mm² (rouleau 100m)",   unit: "rouleau", buy: 28000, sell: 35000, stock: 12,  alert: 3,  cat: "Électricité" },
    { name: "Câble 1.5mm² (rouleau 100m)",   unit: "rouleau", buy: 18000, sell: 23000, stock: 15,  alert: 3,  cat: "Électricité" },
    { name: "Interrupteur va-et-vient",       unit: "pièce",   buy: 800,   sell: 1200,  stock: 60,  alert: 15, cat: "Électricité" },
    { name: "Prise murale 2P+T",             unit: "pièce",   buy: 700,   sell: 1100,  stock: 70,  alert: 15, cat: "Électricité" },
    { name: "Disjoncteur 16A",               unit: "pièce",   buy: 3200,  sell: 4500,  stock: 25,  alert: 6,  cat: "Électricité" },
    // idx 20-24: Quincaillerie
    { name: "Clous ronds 60mm (kg)",          unit: "kg",      buy: 700,   sell: 1000,  stock: 80,  alert: 15, cat: "Quincaillerie" },
    { name: "Vis à bois 4x40mm (boîte 200)", unit: "boîte",   buy: 1200,  sell: 1800,  stock: 50,  alert: 10, cat: "Quincaillerie" },
    { name: "Charnière paumelle 100mm",       unit: "paire",   buy: 600,   sell: 900,   stock: 45,  alert: 10, cat: "Quincaillerie" },
    { name: "Serrure tripoint",               unit: "pièce",   buy: 15000, sell: 20000, stock: 10,  alert: 3,  cat: "Quincaillerie" },
    { name: "Cadenas 40mm",                   unit: "pièce",   buy: 1500,  sell: 2500,  stock: 30,  alert: 8,  cat: "Quincaillerie" },
    // idx 25-27: Maçonnerie
    { name: "Sable grossier (sac 40kg)",      unit: "sac",     buy: 1200,  sell: 1600,  stock: 90,  alert: 20, cat: "Maçonnerie" },
    { name: "Gravier 15/25 (sac 40kg)",       unit: "sac",     buy: 1500,  sell: 2000,  stock: 75,  alert: 15, cat: "Maçonnerie" },
    { name: "Carrelage 60x60 beige (m²)",     unit: "m²",      buy: 5500,  sell: 7500,  stock: 200, alert: 30, cat: "Maçonnerie" },
  ];

  const products = await Promise.all(
    productsData.map((p) =>
      prisma.product.create({
        data: {
          name: p.name,
          unit: p.unit,
          buyPrice: p.buy,
          sellPrice: p.sell,
          stockQty: p.stock,
          stockAlert: p.alert,
          categoryId: catId(p.cat),
          shopId: SHOP_ID,
        },
      })
    )
  );
  console.log(`  ✓ ${products.length} products`);

  // ── CLIENTS ─────────────────────────────────────────────────────────────────
  console.log("👥 Creating customers...");

  const customersData = [
    { name: "Mamadou Diop",                  phone: "776543210", type: "individual"   as const, address: "HLM Grand Yoff, Dakar" },
    { name: "Fatou Sall",                    phone: "775432109", type: "individual"   as const, address: "Médina, Dakar" },
    { name: "Ibrahima Guèye",               phone: "774321098", type: "individual"   as const, address: "Parcelles Assainies, Dakar" },
    { name: "Moussa Ba",                     phone: "773210987", type: "individual"   as const, address: "Pikine Est" },
    { name: "Aminata Fall",                  phone: "771987654", type: "individual"   as const, address: "Guédiawaye" },
    { name: "Cheikh Mbaye",                  phone: "779876543", type: "individual"   as const, address: "Cambérène, Dakar" },
    { name: "Oumar Ndiaye",                  phone: "778654321", type: "individual"   as const, address: "Thiaroye" },
    { name: "Entreprise BTP Sérigne & Fils", phone: "772109876", type: "btp"          as const, address: "Zone Industrielle Dakar" },
    { name: "SARL Construction Sénégal",     phone: "778765432", type: "professional" as const, address: "Plateau, Dakar" },
    { name: "Aissatou Diallo",               phone: "770123456", type: "individual"   as const, address: "Sicap Liberté 5" },
  ];

  const customers = await Promise.all(
    customersData.map((c) =>
      prisma.customer.create({ data: { ...c, shopId: SHOP_ID } })
    )
  );
  console.log(`  ✓ ${customers.length} customers`);

  // ── FOURNISSEURS ─────────────────────────────────────────────────────────────
  console.log("🚛 Creating suppliers...");

  const suppliers = await Promise.all([
    prisma.supplier.create({ data: { name: "SOCOCIM Industries",    phone: "338423000", address: "Rufisque, Dakar",    shopId: SHOP_ID } }),
    prisma.supplier.create({ data: { name: "SOMETA SA",             phone: "338640000", address: "Zone Ind. Dakar",    shopId: SHOP_ID } }),
    prisma.supplier.create({ data: { name: "SENEPAINT Distribution",phone: "776112233", address: "Colobane, Dakar",    shopId: SHOP_ID } }),
    prisma.supplier.create({ data: { name: "Elec Afrique SARL",     phone: "775998877", address: "Liberté 6, Dakar",   shopId: SHOP_ID } }),
    prisma.supplier.create({ data: { name: "Diallo Matériaux",      phone: "772445566", address: "Parcelles, Dakar",   shopId: SHOP_ID } }),
  ]);
  console.log(`  ✓ ${suppliers.length} suppliers`);

  // ── ACHATS ───────────────────────────────────────────────────────────────────
  console.log("🛒 Creating purchases...");

  type PM = "cash" | "wave" | "orange_money" | "credit" | "mixed";
  interface PurchaseSpec {
    supplierId: number;
    date: Date;
    pm: PM;
    items: { pidx: number; qty: number; unitPrice: number }[];
  }

  const purchaseSpecs: PurchaseSpec[] = [
    {
      supplierId: suppliers[0].id, date: daysAgo(28, 8, 30), pm: "cash",
      items: [
        { pidx: 0, qty: 50, unitPrice: 4200 },
        { pidx: 1, qty: 30, unitPrice: 5500 },
      ],
    },
    {
      supplierId: suppliers[1].id, date: daysAgo(21, 9, 0), pm: "credit",
      items: [
        { pidx: 2, qty: 100, unitPrice: 1800 },
        { pidx: 3, qty: 80,  unitPrice: 2800 },
        { pidx: 4, qty: 60,  unitPrice: 4200 },
        { pidx: 5, qty: 40,  unitPrice: 6100 },
      ],
    },
    {
      supplierId: suppliers[2].id, date: daysAgo(14, 10, 0), pm: "wave",
      items: [
        { pidx: 7,  qty: 20, unitPrice: 7500  },
        { pidx: 8,  qty: 10, unitPrice: 32000 },
        { pidx: 9,  qty: 15, unitPrice: 5500  },
        { pidx: 10, qty: 12, unitPrice: 8000  },
      ],
    },
    {
      supplierId: suppliers[3].id, date: daysAgo(7, 8, 0), pm: "cash",
      items: [
        { pidx: 15, qty: 8,  unitPrice: 28000 },
        { pidx: 16, qty: 8,  unitPrice: 18000 },
        { pidx: 19, qty: 15, unitPrice: 3200  },
      ],
    },
    {
      supplierId: suppliers[4].id, date: daysAgo(3, 9, 30), pm: "mixed",
      items: [
        { pidx: 25, qty: 40, unitPrice: 1200 },
        { pidx: 26, qty: 40, unitPrice: 1500 },
        { pidx: 27, qty: 50, unitPrice: 5500 },
      ],
    },
  ];

  for (const spec of purchaseSpecs) {
    const total = spec.items.reduce((s, i) => s + i.qty * i.unitPrice, 0);
    const paid = spec.pm === "credit" ? 0 : total;
    const ref = purchaseRef(spec.date);

    const purchase = await prisma.purchase.create({
      data: {
        reference: ref,
        totalAmount: total,
        paidAmount: paid,
        paymentMethod: spec.pm,
        supplierId: spec.supplierId,
        shopId: SHOP_ID,
        userId: USER_ID,
        createdAt: spec.date,
        items: {
          create: spec.items.map((i) => ({
            productId: products[i.pidx].id,
            quantity: i.qty,
            unitPrice: i.unitPrice,
            totalPrice: i.qty * i.unitPrice,
          })),
        },
      },
    });

    // Stock movements + update
    for (const item of spec.items) {
      const prod = products[item.pidx];
      await prisma.stockMovement.create({
        data: {
          type: "purchase",
          quantity: item.qty,
          unitPrice: item.unitPrice,
          referenceType: "purchase",
          referenceId: purchase.id,
          productId: prod.id,
          shopId: SHOP_ID,
          userId: USER_ID,
          createdAt: spec.date,
        },
      });
      await prisma.product.update({
        where: { id: prod.id },
        data: { stockQty: { increment: item.qty } },
      });
    }

    // Supplier debt
    if (spec.pm === "credit") {
      await prisma.supplier.update({
        where: { id: spec.supplierId },
        data: { debtBalance: { increment: total } },
      });
    }
  }
  console.log(`  ✓ ${purchaseSpecs.length} purchases`);

  // ── VENTES ───────────────────────────────────────────────────────────────────
  console.log("🛍️  Creating sales...");

  interface SaleSpec {
    db: number; hour: number; min?: number;
    cIdx?: number;
    items: { pidx: number; qty: number }[];
    pm: PM;
    discount?: number;
    credit?: true;
  }

  const salesSpecs: SaleSpec[] = [
    // 30 jours
    { db: 30, hour: 9,  cIdx: 7, items: [{ pidx: 0, qty: 10 }, { pidx: 25, qty: 20 }], pm: "cash" },
    // 28 jours
    { db: 28, hour: 10, items: [{ pidx: 2, qty: 5 }], pm: "wave" },
    { db: 28, hour: 14, cIdx: 0, items: [{ pidx: 7, qty: 2 }, { pidx: 9, qty: 1 }], pm: "cash" },
    // 25 jours
    { db: 25, hour: 11, items: [{ pidx: 15, qty: 1 }, { pidx: 17, qty: 4 }, { pidx: 18, qty: 4 }], pm: "orange_money" },
    { db: 25, hour: 15, cIdx: 8, items: [{ pidx: 0, qty: 20 }, { pidx: 2, qty: 10 }, { pidx: 26, qty: 10 }], pm: "credit", credit: true },
    // 22 jours
    { db: 22, hour: 9,  items: [{ pidx: 12, qty: 5 }, { pidx: 13, qty: 10 }], pm: "cash" },
    { db: 22, hour: 16, cIdx: 1, items: [{ pidx: 22, qty: 4 }, { pidx: 21, qty: 2 }], pm: "wave" },
    // 20 jours
    { db: 20, hour: 10, cIdx: 7, items: [{ pidx: 3, qty: 20 }, { pidx: 4, qty: 10 }], pm: "cash", discount: 15000 },
    { db: 20, hour: 14, items: [{ pidx: 8, qty: 1 }], pm: "orange_money" },
    // 17 jours
    { db: 17, hour: 9,  items: [{ pidx: 0, qty: 5 }], pm: "cash" },
    { db: 17, hour: 11, cIdx: 2, items: [{ pidx: 14, qty: 1 }, { pidx: 11, qty: 3 }], pm: "wave" },
    { db: 17, hour: 15, items: [{ pidx: 23, qty: 1 }], pm: "cash" },
    // 14 jours
    { db: 14, hour: 9,  cIdx: 8, items: [{ pidx: 27, qty: 20 }, { pidx: 25, qty: 20 }], pm: "credit", credit: true },
    { db: 14, hour: 13, items: [{ pidx: 7, qty: 3 }, { pidx: 10, qty: 2 }], pm: "cash" },
    { db: 14, hour: 16, cIdx: 3, items: [{ pidx: 6, qty: 2 }, { pidx: 20, qty: 3 }], pm: "wave" },
    // 10 jours
    { db: 10, hour: 8,  items: [{ pidx: 1, qty: 10 }], pm: "cash" },
    { db: 10, hour: 10, items: [{ pidx: 16, qty: 1 }, { pidx: 19, qty: 2 }], pm: "orange_money" },
    { db: 10, hour: 14, cIdx: 7, items: [{ pidx: 0, qty: 15 }, { pidx: 26, qty: 15 }], pm: "mixed", credit: true },
    // 7 jours
    { db: 7, hour: 9,  items: [{ pidx: 2, qty: 8 }, { pidx: 3, qty: 5 }], pm: "cash" },
    { db: 7, hour: 11, cIdx: 4, items: [{ pidx: 24, qty: 2 }, { pidx: 22, qty: 3 }], pm: "wave" },
    { db: 7, hour: 15, items: [{ pidx: 8, qty: 1 }, { pidx: 9, qty: 2 }], pm: "cash", discount: 5000 },
    // 5 jours
    { db: 5, hour: 9,  items: [{ pidx: 11, qty: 4 }, { pidx: 13, qty: 8 }], pm: "cash" },
    { db: 5, hour: 12, cIdx: 0, items: [{ pidx: 7, qty: 4 }, { pidx: 10, qty: 3 }], pm: "orange_money" },
    { db: 5, hour: 15, cIdx: 1, items: [{ pidx: 4, qty: 5 }, { pidx: 5, qty: 3 }], pm: "credit", credit: true },
    // 3 jours
    { db: 3, hour: 8,  items: [{ pidx: 0, qty: 8 }], pm: "cash" },
    { db: 3, hour: 10, items: [{ pidx: 17, qty: 5 }, { pidx: 18, qty: 5 }], pm: "wave" },
    { db: 3, hour: 14, cIdx: 6, items: [{ pidx: 27, qty: 10 }, { pidx: 26, qty: 10 }], pm: "cash" },
    // 1 jour
    { db: 1, hour: 9,  items: [{ pidx: 2, qty: 3 }], pm: "cash" },
    { db: 1, hour: 11, cIdx: 5, items: [{ pidx: 20, qty: 2 }, { pidx: 21, qty: 1 }], pm: "wave" },
    { db: 1, hour: 14, items: [{ pidx: 14, qty: 1 }], pm: "orange_money" },
    // Aujourd'hui
    { db: 0, hour: 8, min: 30, items: [{ pidx: 0, qty: 5 }, { pidx: 25, qty: 10 }], pm: "cash" },
    { db: 0, hour: 9, min: 45, cIdx: 9, items: [{ pidx: 7, qty: 2 }], pm: "wave" },
    { db: 0, hour: 11, cIdx: 7, items: [{ pidx: 3, qty: 10 }, { pidx: 4, qty: 5 }], pm: "cash", discount: 10000 },
    { db: 0, hour: 13, items: [{ pidx: 15, qty: 1 }, { pidx: 19, qty: 3 }], pm: "orange_money" },
    { db: 0, hour: 14, min: 30, cIdx: 2, items: [{ pidx: 23, qty: 1 }], pm: "credit", credit: true },
  ];

  for (const spec of salesSpecs) {
    const date = daysAgo(spec.db, spec.hour, spec.min ?? 0);

    let total = 0;
    const lineItems = spec.items.map((i) => {
      const p = products[i.pidx];
      const unitPrice = Number(p.sellPrice);
      const lineTotal = i.qty * unitPrice;
      total += lineTotal;
      return { product: p, qty: i.qty, unitPrice, lineTotal };
    });

    const discount = spec.discount ?? 0;
    const net = total - discount;
    const creditAmount = spec.credit ? net : 0;
    const paidAmount = spec.pm === "cash"
      ? (Math.ceil(net / 500) * 500)
      : net - creditAmount;

    const ref = saleRef(date);
    const customerId = spec.cIdx !== undefined ? customers[spec.cIdx].id : null;

    const sale = await prisma.sale.create({
      data: {
        reference: ref,
        totalAmount: total,
        discount,
        netAmount: net,
        paymentMethod: spec.pm,
        paidAmount,
        creditAmount,
        customerId,
        shopId: SHOP_ID,
        userId: USER_ID,
        createdAt: date,
        items: {
          create: lineItems.map((li) => ({
            productId: li.product.id,
            quantity: li.qty,
            unitPrice: li.unitPrice,
            totalPrice: li.lineTotal,
          })),
        },
      },
    });

    // Stock movements
    for (const li of lineItems) {
      await prisma.stockMovement.create({
        data: {
          type: "sale",
          quantity: -li.qty,
          unitPrice: li.unitPrice,
          referenceType: "sale",
          referenceId: sale.id,
          productId: li.product.id,
          shopId: SHOP_ID,
          userId: USER_ID,
          createdAt: date,
        },
      });
      await prisma.product.update({
        where: { id: li.product.id },
        data: { stockQty: { decrement: li.qty } },
      });
    }

    // Customer total
    if (customerId) {
      await prisma.customer.update({
        where: { id: customerId },
        data: { totalBought: { increment: net } },
      });
    }

    // Crédit client
    if (creditAmount > 0 && customerId) {
      const due = new Date(date);
      due.setDate(due.getDate() + 30);
      await prisma.credit.create({
        data: {
          amountTotal: creditAmount,
          amountPaid: 0,
          amountRemaining: creditAmount,
          status: "open",
          dueDate: due,
          saleId: sale.id,
          customerId,
          shopId: SHOP_ID,
          createdAt: date,
          updatedAt: date,
        },
      });
      await prisma.customer.update({
        where: { id: customerId },
        data: { creditBalance: { increment: creditAmount } },
      });
    }
  }

  // Paiement partiel sur le crédit d'Ibrahima (40%)
  const ibrahimaCredit = await prisma.credit.findFirst({
    where: { customerId: customers[2].id, status: "open" },
  });
  if (ibrahimaCredit) {
    const partial = Math.round(Number(ibrahimaCredit.amountTotal) * 0.4);
    await prisma.credit.update({
      where: { id: ibrahimaCredit.id },
      data: {
        amountPaid: partial,
        amountRemaining: Number(ibrahimaCredit.amountTotal) - partial,
        status: "partial",
      },
    });
    await prisma.customer.update({
      where: { id: customers[2].id },
      data: { creditBalance: { decrement: partial } },
    });
  }

  console.log(`  ✓ ${salesSpecs.length} sales`);

  // ── CAISSES ──────────────────────────────────────────────────────────────────
  console.log("💰 Creating cash registers...");

  const cashDays = [
    { db: 7, open: 50000, close: 312000 },
    { db: 6, open: 50000, close: 285000 },
    { db: 5, open: 50000, close: 198000 },
    { db: 4, open: 50000, close: 420000 },
    { db: 3, open: 50000, close: 175000 },
    { db: 2, open: 50000, close: 310000 },
    { db: 1, open: 50000, close: 240000 },
  ];

  for (const ce of cashDays) {
    await prisma.cashRegister.create({
      data: {
        date: dateOnly(ce.db),
        openingAmount: ce.open,
        closingAmount: ce.close,
        theoreticalAmount: ce.close + randInt(-5000, 5000),
        difference: randInt(-2000, 2000),
        status: "closed",
        shopId: SHOP_ID,
        userId: USER_ID,
        createdAt: daysAgo(ce.db, 7, 30),
        updatedAt: daysAgo(ce.db, 18, 0),
      },
    });
  }

  // Caisse ouverte aujourd'hui
  await prisma.cashRegister.create({
    data: {
      date: dateOnly(0),
      openingAmount: 50000,
      status: "open",
      shopId: SHOP_ID,
      userId: USER_ID,
      createdAt: daysAgo(0, 7, 30),
      updatedAt: daysAgo(0, 7, 30),
    },
  });
  console.log(`  ✓ ${cashDays.length + 1} cash register sessions`);

  // ── DÉPENSES ─────────────────────────────────────────────────────────────────
  console.log("📝 Creating expenses...");

  // ExpenseCategory enum: rent | electricity | water | salary | transport | supplier | other
  const expensesData = [
    { cat: "transport"   as const, amount: 15000, desc: "Livraison ciment chez client BTP",        db: 29 },
    { cat: "electricity" as const, amount: 28500, desc: "Facture SENELEC du mois",                  db: 25 },
    { cat: "other"       as const, amount: 5000,  desc: "Papier d'emballage et sacs plastique",     db: 23 },
    { cat: "salary"      as const, amount: 75000, desc: "Salaire gardien Aliou — Avril",             db: 20 },
    { cat: "transport"   as const, amount: 8000,  desc: "Transport marchandises SOMETA",            db: 18 },
    { cat: "other"       as const, amount: 12000, desc: "Réparation étagère de stockage",           db: 15 },
    { cat: "other"       as const, amount: 3500,  desc: "Fournitures bureau (stylos, cahiers)",     db: 12 },
    { cat: "water"       as const, amount: 9200,  desc: "Facture SDE du mois",                      db: 10 },
    { cat: "salary"      as const, amount: 45000, desc: "Salaire vendeur — Mi-mai",                 db: 8  },
    { cat: "transport"   as const, amount: 6000,  desc: "Carburant livraison Parcelles",            db: 6  },
    { cat: "other"       as const, amount: 4500,  desc: "Déjeuner équipe vendredi",                  db: 4  },
    { cat: "rent"        as const, amount: 150000,desc: "Loyer boutique — Mai 2026",                 db: 2  },
    { cat: "other"       as const, amount: 2500,  desc: "Nettoyage boutique",                       db: 1  },
    { cat: "transport"   as const, amount: 7500,  desc: "Livraison carrelage client Cambérène",     db: 0  },
  ];

  for (const e of expensesData) {
    const date = dateOnly(e.db);
    await prisma.expense.create({
      data: {
        category: e.cat,
        amount: e.amount,
        description: e.desc,
        date,
        shopId: SHOP_ID,
        userId: USER_ID,
        createdAt: daysAgo(e.db, randInt(8, 16), randInt(0, 59)),
      },
    });
  }
  console.log(`  ✓ ${expensesData.length} expenses`);

  // ── Summary ──────────────────────────────────────────────────────────────────
  console.log("\n✅ Seeding done!");
  console.log(`   Products: ${productsData.length} | Customers: ${customersData.length} | Sales: ${salesSpecs.length}`);
  console.log(`   Suppliers: 5 | Purchases: ${purchaseSpecs.length} | Expenses: ${expensesData.length}`);
  console.log("   Login: 771234567 (mot de passe inchangé)");
}

main()
  .catch((e) => { console.error("❌", e.message); process.exit(1); })
  .finally(() => prisma.$disconnect());
