export interface SolutionDetail {
  slug: string;
  name: string;
  tagline: string;
  stat: string;
  statLabel: string;
  description: string;
  iconName: string;
  targetAudience: string;
  challenges: string[];
  features: {
    title: string;
    description: string;
  }[];
  caseStudy: {
    title: string;
    challenge: string;
    result: string;
    metric: string;
    metricLabel: string;
  };
  stack: {
    title: string;
    desc: string;
    iconName: string;
  }[];
}

export const solutionsData: Record<string, SolutionDetail> = {
  schools: {
    slug: "schools",
    name: "Individual K-12 Schools ERP",
    tagline: "Unify daily operations under a single school management system.",
    stat: "All-In-One",
    statLabel: "Single Campus Administration",
    description: "Designed for stand-alone school systems requiring an intuitive, powerful platform. Connect admissions, academics, fee collections, transport, and custom parent portals with a cloud-ready system.",
    iconName: "School",
    targetAudience: "Private, public, and charter K-12 single-campus schools.",
    challenges: [
      "Fragmented, disconnected software suites resulting in double-entry errors.",
      "High administrative time spent reconciling bank books and fee accounts.",
      "Lack of parent engagement due to poor communication portals."
    ],
    features: [
      { title: "Complete Student Lifecycle", description: "From initial lead capturing and online admission logs to report card configuration and graduation promotion." },
      { title: "Parent & Teacher Trust", description: "A single mobile experience keeping families synced on homework, RFID attendance alerts, and exam card releases." },
      { title: "Seamless Accounting Desk", description: "Collect card payments online and let ClassNex auto-generate fee receipts and ledger reports." }
    ],
    caseStudy: {
      title: "Pinecrest Academy Migration",
      challenge: "Managing admissions and fee reconciliations using fragmented excel worksheets and paper forms.",
      result: "Deployed ClassNex's complete cloud package, digitizing parent admissions files and launching automated online card checkouts.",
      metric: "70%",
      metricLabel: "Reduction in Administrative Hours"
    },
    stack: [
      { title: "Student Database", desc: "Permanent digital files and portfolios.", iconName: "Users" },
      { title: "Academics", desc: "Integrated timetables and assignments.", iconName: "GraduationCap" },
      { title: "Finance Portal", desc: "Cashless gateway payments and auto-invoices.", iconName: "Wallet" }
    ]
  },
  "school-groups": {
    slug: "school-groups",
    name: "Multi-Campus School Groups",
    tagline: "Consolidate operations across multiple campuses from one dashboard.",
    stat: "Central Control",
    statLabel: "Consolidated Group Analytics",
    description: "Tailored for school networks, trusts, and administrative groups. Compare fee metrics, audit employee attendance, push policy standards, and manage centralized admissions across all your locations.",
    iconName: "Layers",
    targetAudience: "Multi-branch educational groups, franchises, and regional boards.",
    challenges: [
      "Inconsistent data reporting making consolidated financial audits complex.",
      "Difficulties tracking staff transfers, attendance, and branch payrolls.",
      "Lack of global administrative control over regional branch configurations."
    ],
    features: [
      { title: "Global Central Dashboard", description: "Audit real-time admissions, active collections, and student registers across all group locations." },
      { title: "Consolidated Billing Ledgers", description: "Compare fee collection ratios between branches and coordinate central purchase approvals." },
      { title: "Cross-Campus Staff Rosters", description: "Transfer teacher data, coordinate joint exams, and run central corporate payroll files." }
    ],
    caseStudy: {
      title: "Apex Group of Schools (12 Campuses)",
      challenge: "No central control over school fee policies and inconsistent branch progress report card templates.",
      result: "Launched the ClassNex corporate group desk, allowing executive directors to check live collections and push uniform exam scales.",
      metric: "12/12",
      metricLabel: "Campuses Consolidated on One Database"
    },
    stack: [
      { title: "Corporate Panel", desc: "Global audits, settings, and multi-campus comparison data.", iconName: "Layers" },
      { title: "Central HR & Payroll", desc: "Manage rosters and disbursements across all locations.", iconName: "Users" },
      { title: "Consolidated Accounting", desc: "Cross-branch ledgers, receipts, and cashflow charts.", iconName: "Wallet" }
    ]
  },
  international: {
    slug: "international",
    name: "International Schools ERP",
    tagline: "Multi-currency, bilingual configurations for global education.",
    stat: "Bilingual (AR/EN)",
    statLabel: "Multi-Currency & International Grading",
    description: "Designed for premium campuses catering to international students. Offers full RTL/Arabic layout configurations, support for international curricular formats (IB, GCSE, Cambridge), and flexible currency checkouts.",
    iconName: "Globe",
    targetAudience: "International K-12, bilingual academies, and British/American standard schools.",
    challenges: [
      "Rigid local gradebook formats that fail to align with IB or Cambridge scale tags.",
      "Inability to handle multiple currencies or custom taxation/VAT tags dynamically.",
      "Poor support for Arabic/RTL text interfaces on administrative systems."
    ],
    features: [
      { title: "Bilingual Interface Layouts", description: "Instant toggle between English LTR and Arabic RTL configurations across parent and staff apps." },
      { title: "International Syllabus Ready", description: "Gradebooks custom-fitted to IB (1-7 scale) and letter grading (A*-G) configurations." },
      { title: "Multi-Currency Checkout", description: "Enable parents to pay fees in local currencies while administrators track financial analytics." }
    ],
    caseStudy: {
      title: "Gulf British School Doha",
      challenge: "System lacked Arabic RTL inputs, making communication and letters to local parents extremely complex.",
      result: "Integrated ClassNex bilingual portals, deploying Arabic-to-English dashboard templates for administrators and parents.",
      metric: "95%",
      metricLabel: "Parent Portal Mobile Adoption Rate"
    },
    stack: [
      { title: "Bilingual Portal", desc: "RTL layouts matching localized parent letters.", iconName: "Globe" },
      { title: "IB/Cambridge Grader", desc: "Flexible grade scales, marks, and GPA tags.", iconName: "Award" },
      { title: "Multi-Tax / VAT", desc: "Flexible invoicing configured for regional VAT rules.", iconName: "Wallet" }
    ]
  }
};
