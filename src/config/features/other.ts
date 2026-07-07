export const otherFeatures = {
  payroll: {
    slug: "payroll",
    name: "HR, Staff Roster & Payroll",
    tagline: "Track teacher logs, leave balances, and salary plans.",
    stat: "Zero Errors",
    statLabel: "Payroll Disbursements & Pay Slips",
    description: "Streamline employee directory registries. Set up work rosters, compute overtime, automate deduction tags, balance leaves, and export payroll listings seamlessly.",
    iconName: "Users",
    benefits: [
      "Process monthly salary payroll files in under 10 minutes",
      "Ensure accurate attendance-based pay calculations",
      "Empower staff with self-service payslip downloads"
    ],
    subFeatures: [
      { title: "Employee Database", description: "Secure registry storing qualifications, performance logs, and contract milestones." },
      { title: "Leave Planner", description: "Configure vacation policies, manage applications, and audit employee leaves." },
      { title: "Payroll disbursements", description: "Compute base salary packages, allowances, tax brackets, and generate bank files." },
      { title: "Roster Management", description: "Schedule working hours, exam invigilator assignments, and campus supervision duties." }
    ],
    workflow: [
      { step: "01", title: "Roster Plan", description: "Configure duty schedules, school calendar, and leave brackets." },
      { step: "02", title: "Attendance log", description: "Teacher check-ins automatically sync to calculate salary deductions." },
      { step: "03", title: "Payroll Compile", description: "Calculate allowances, taxes, and compile pay register spreadsheets." },
      { step: "04", title: "Bank Release", description: "Export formatted bank disbursement logs for automatic transfers." }
    ],
    faqs: [
      { question: "Can we run monthly allowances dynamically?", answer: "Yes, you can configure salary rules for bonuses, medical leaves, and overtime hours." },
      { question: "Is there an employee self-service hub?", answer: "Yes, employees can log in to view rosters, submit leave requests, and download payslips." }
    ]
  },
  attendance: {
    slug: "attendance",
    name: "Attendance Tracking & Sensors",
    tagline: "RFID smart cards and instant SMS notifications.",
    stat: "Automated SMS",
    statLabel: "Instant Parent Notification System",
    description: "Log daily campus check-ins using RFID gates, barcode scanners, or manual class rosters. Keep parents informed the instant their child enters or leaves school.",
    iconName: "CheckSquare",
    benefits: [
      "Prevent attendance recording errors and fraud",
      "Automated alerts sent directly to parent phone apps",
      "Detailed dashboards for identifying chronic absences"
    ],
    subFeatures: [
      { title: "RFID Gate Integration", description: "Plug-and-play setup for school gates, capturing check-ins seamlessly as students pass." },
      { title: "Teacher Mobile Override", description: "Let teachers adjust rosters manually using their dedicated ClassNex mobile application." },
      { title: "Instant Notification Logs", description: "Dispatch SMS alerts or app notifications to parents at school start time." },
      { title: "Attendance Analytics", description: "View monthly ratios, class comparison charts, and flag warning thresholds." }
    ],
    workflow: [
      { step: "01", title: "Device Setup", description: "Connect RFID gate reader hardware to the campus network hubs." },
      { step: "02", title: "Card Issue", description: "Print custom RFID student cards mapped to database registry logs." },
      { step: "03", title: "Daily Scan", description: "Students swipe cards at entrance points to trigger timestamps." },
      { step: "04", title: "Parent Alert", description: "Absent logs trigger automatic SMS/push notifications to parent phones." }
    ],
    faqs: [
      { question: "What RFID hardware is compatible?", answer: "We support standard UHF RFID gate readers and wall-mounted scanners. Our tech team assists with setup." },
      { question: "Can parents turn off SMS notifications?", answer: "Yes, notification templates (SMS, WhatsApp, App Push) can be configured by administrators or toggled by parents." }
    ]
  },
  transportation: {
    slug: "transportation",
    name: "Transport & Fleet Logistics",
    tagline: "Map bus routes, track GPS positions, and assign riders.",
    stat: "GPS Tracking",
    statLabel: "Live School Bus Navigation Log",
    description: "Manage your school transport fleet. Define vehicle routes, assign students to buses, keep maintenance logs, and support live GPS notifications.",
    iconName: "BusFront",
    benefits: [
      "Assure parents of child safety via real-time bus locations",
      "Optimize route paths to save fuel costs and transit times",
      "Auto-calculate transport fees based on zones and distances"
    ],
    subFeatures: [
      { title: "Fleet Management", description: "Keep records of vehicle paperwork, inspections, driver credentials, and fuel metrics." },
      { title: "Route Mapping", description: "Design bus routes, link individual stops, and assign students to optimal seats." },
      { title: "Live GPS Feeds", description: "Enable live bus updates on parent apps so they know when to wait at the curb." },
      { title: "Driver Portals", description: "Simplified mobile view for drivers containing passenger lists and navigation aids." }
    ],
    workflow: [
      { step: "01", title: "Route Design", description: "Map locations, bus numbers, stop-off points, and assign seats." },
      { step: "02", title: "Driver Check", description: "Drivers sign-in on custom screens to download transit rider sheets." },
      { step: "03", title: "Live Navigation", description: "GPS coordinates update ClassNex server databases in real-time." },
      { step: "04", title: "ETA Alert", description: "Parent apps show real-time bus locations as it approaches the stop." }
    ],
    faqs: [
      { question: "How accurate is the GPS tracker?", answer: "The tracker syncs locations every 5 seconds, providing parents with accurate ETA alerts." },
      { question: "Can students ride multiple buses?", answer: "Yes, you can allocate morning and evening routes separately or register temporary transit swaps." }
    ]
  },
  communication: {
    slug: "communication",
    name: "Communication & Smart Portals",
    tagline: "Bridge the gap between home, classroom, and admin.",
    stat: "10x Engagement",
    statLabel: "Push notifications and announcements",
    description: "Send newsletters, emergency alerts, class progress notes, and feedback surveys. Elevate parental engagement through customizable messaging groups.",
    iconName: "MessageSquare",
    benefits: [
      "Replace expensive SMS messaging packages with app notifications",
      "Maintain professional communication history logs",
      "Increase parent meeting attendances and event sign-ups"
    ],
    subFeatures: [
      { title: "Announcements Portal", description: "Broadcast rich media notifications, PDF circulars, and event listings to the community." },
      { title: "Teacher-Parent Messaging", description: "Safe, moderated messaging channels to discuss student milestones and actions." },
      { title: "Calendar Sync", description: "Synchronize holidays, exam periods, school events, and project dates." },
      { title: "Surveys & Approvals", description: "Acquire digital consent for excursions and gather feedback using school surveys." }
    ],
    workflow: [
      { step: "01", title: "Audience Select", description: "Select single classes, grade groups, teachers, or the entire school registry." },
      { step: "02", title: "Compose Message", description: "Write messages, upload image templates, files, or feedback forms." },
      { step: "03", title: "Instant Release", description: "Deliver items instantly or schedule automated delivery times." },
      { step: "04", title: "Audit Returns", description: "Check read metrics, parent replies, and feedback survey reports." }
    ],
    faqs: [
      { question: "Is there a limit on push notifications?", answer: "No, all app push notifications are completely free and unlimited for all school tiers." },
      { question: "Are teacher-parent chats moderated?", answer: "Yes, chats are restricted to school hours and administrators can review message logs at any time." }
    ]
  }
};
