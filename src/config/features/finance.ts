export const financeFeature = {
  slug: "finance",
  name: "Finance, Fees & Payment Gateways",
  tagline: "Automated invoice collection pipelines and online portals.",
  stat: "Cashless Campus",
  statLabel: "Automated Reconciliation & Invoicing",
  description: "Power your campus billing system. Auto-generate fee invoices, run scholarship concessions, reconcile payments via bank integration, and enable campus wallet spends.",
  iconName: "Wallet",
  benefits: [
    "Achieve 98% on-time fee collection collections",
    "Reconcile bank accounts and payment entries automatically",
    "Support flexible installment schedules and family discounts"
  ],
  subFeatures: [
    { title: "Fee Invoice Engine", description: "Create customized billing templates based on grade, bus routes, or custom lab categories." },
    { title: "Online Payment Gateways", description: "Secure checkouts supporting credit cards, bank transfers, and local payment methods." },
    { title: "Student Campus Wallet", description: "RFID smart cards allowing kids to safely buy meals or library items under parent limits." },
    { title: "Profit & Loss Ledger", description: "Robust audit logs covering collections, concessions, pending fees, and refund reports." }
  ],
  workflow: [
    { step: "01", title: "Fee Structure", description: "Define tuition fees, bus charges, and discount brackets in the settings desk." },
    { step: "02", title: "Invoice Release", description: "ClassNex auto-compiles and despatches term invoices to parental mailboxes." },
    { step: "03", title: "Online Checkouts", description: "Parents settle bills via card checkouts or set up monthly installment plans." },
    { step: "04", title: "Auto Reconcile", description: "Receipts are generated instantly and matching ledger details updated." }
  ],
  faqs: [
    { question: "What payment gateways are supported?", answer: "We integrate with leading regional gateways including Stripe, PayTabs, Apple Pay, and direct local bank APIs." },
    { question: "How does reconciliation work?", answer: "Transactions are matched against pending invoices instantly. Failed payments or refunds are flagged automatically on the ledgers." }
  ]
};
